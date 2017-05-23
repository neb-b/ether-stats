import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import cookies from 'js-cookie'

const API = 'https://etherstats-server.now.sh'
const isAddressLength = str => {
	const regex = /^[a-zA-Z0-9]{40}$/
	return regex.test(str)
}

class App extends Component {
	constructor() {
		super()

		this.state = {
			loading: true,
			error: {
				input: null,
				dataFetching: null
			},
			walletInput: '',
			wallet: '',
			hasMinerStats: false,
			minerStats: {}
		}
	}

	componentDidMount() {
		const wallet = cookies.get('w__public') || ''
		const match = isAddressLength(wallet)

		this.setState({ walletInput: wallet })

		if (match) {
			this.fetch
			axios
				.get(`${API}/${wallet}`)
				.then(({ data }) => {
					this.setState({
						wallet,
						hasMinerStats: true,
						minerStats: data,
						loading: false
					})
				})
				.catch(err => {
					console.log('err', err)
					this.setState({ loading: false })
				})
		} else {
			this.setState({ loading: false })
		}
	}

	_handleChange() {
		const { walletInput } = this.state
		const match = isAddressLength(walletInput)

		if (match) {
			this.setState({
				loading: true,
				error: { input: null },
				wallet: walletInput
			})

			axios
				.get(`${API}/${walletInput}`)
				.then(({ data }) => {
					console.log('data', data)
					this.setState({
						hasMinerStats: true,
						minerStats: data,
						loading: false
					})
					cookies.set('w__public', walletInput)
				})
				.catch(err => {
					console.log('err', err)
					this.setState({ loading: false, error: err })
				})
		} else {
			this.setState({ error: { input: 'Enter a valid wallet' } })
		}
	}

	_handleSubmit(e) {
		e.preventDefault()
	}

	render() {
		const {
			loading,
			error,
			hasMinerStats,
			wallet,
			walletInput,
			minerStats: { hashRate, ethPerMin, usdPerMin, unpaid }
		} = this.state

		// not sure why they give us unpaid in this format
		const unpaidEth = (unpaid / 1000000000000000000).toFixed(6)
		const minutesForOneEther = 1 / ethPerMin
		const hoursForOneEther = minutesForOneEther / 60
		const daysForOneEther = (hoursForOneEther / 24).toFixed(0)

		return (
			<div>
				<Head>
					<title>Etherminer.org stats</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
				</Head>
				<div className="header">
					<h1 className="title">Ethminer stats</h1>
				</div>
				<div className="container">
					<form className="stats-form" onSubmit={this._handleSubmit.bind(this)}>
						{walletInput && error.input && error.input
							? <label className="error-text" htmlFor="wallet-input">
									{error.input}
								</label>
							: <label htmlFor="wallet-input">Your wallet</label>}
						<div className="row">
							<input
								className="eight columns"
								id="wallet-input"
								placeholder="be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F"
								value={walletInput}
								onChange={e => this.setState({ walletInput: e.target.value })}
							/>
							<button
								className="button-primary four columns"
								type="submit"
								disabled={this.state.loading}
								onClick={this._handleChange.bind(this)}
							>
								Get stats
							</button>
						</div>
					</form>

					{loading && <p>Loading...</p>}

					{!loading &&
						hasMinerStats &&
						<div>
							<div className="row">
								<h2 className="six columns hash-rate">{hashRate}</h2>
								<h3 className="six colums unpaid">{unpaidEth} eth unpaid</h3>
							</div>
							<div className="stats">
								<div>
									Currently mining <strong>{ethPerMin}</strong> eth / minute
								</div>
								<div>
									At the current rate, it will take
									{' '}
									<strong>{daysForOneEther} days</strong>
									{' '}
									to mine
									{' '}
									<strong>1 eth</strong>
								</div>
								<div>Currently mining ${usdPerMin} / min</div>
							</div>
						</div>}
				</div>
				<style global jsx>
					{`
						body, h1 {
							padding: 0;
							margin: 0;
						}

						input {
							height: 38px;
					    padding: 6px 10px;
					    background-color: #fff;
					    border: 1px solid #D1D1D1;
					    border-radius: 4px;
					    box-shadow: none;
					    box-sizing: border-box;
							font-size: 2rem;
						}

						.header {
							width: 100%;
							height: 4em;
							color: white;
							background-color: #663f91;
							padding: 10px;
						}

						.stats-form {
							padding-top: 20px;
						}

						.unpaid {
							text-align: right;
						}

						@media (max-width: 550px) {
							.get-stats-submit {
								width: 100%;
							}

							.unpaid {
								text-align: left;
							}
						}

						.error-text {
							color: red;
						}

						.stats {
							font-size: 1.2em;
						}
          `}
				</style>
			</div>
		)
	}
}

export default App
