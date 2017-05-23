import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'
import cookies from 'js-cookie'

const API = 'https://etherstats-server.now.sh'
// const API = 'http://localhost:5000'
const FIFTEEN_MINUTES = 900000

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

		this.fetchStats = this.fetchStats.bind(this)
		this.fetchStatsInterval = null
	}

	componentDidMount() {
		const wallet = cookies.get('w__public') || ''
		const match = isAddressLength(wallet)

		this.setState({ walletInput: wallet })

		if (match) {
			this.fetchStats(wallet)
		} else {
			this.setState({ loading: false })
		}
	}

	componentWillUnmount() {
		this.fetchStatsInterval = null
	}

	_handleSubmit(e) {
		e.preventDefault()
		const { walletInput } = this.state
		const match = isAddressLength(walletInput)

		if (match) {
			cookies.set('w__public', walletInput)
			this.setState({
				loading: true,
				error: { input: null },
				wallet: walletInput
			})
			this.fetchStats(walletInput)
		} else {
			this.setState({ error: { input: 'Enter a valid wallet' } })
		}
	}

	fetchStats(wallet) {
		axios
			.get(`${API}/${wallet}`)
			.then(({ data }) => {
				console.log('dat', data)
				this.setState({
					wallet,
					hasMinerStats: true,
					minerStats: data,
					loading: false
				})

				if (!this.fetchStatsInterval) {
					this.continueToFetchStats(wallet)
				}
			})
			.catch(err => {
				console.error(err)
				this.setState({ loading: false })
			})
	}

	continueToFetchStats(wallet) {
		this.fetchStatsInterval = setInterval(
			() => this.fetchStats(wallet),
			FIFTEEN_MINUTES
		)
	}

	render() {
		const {
			loading,
			error,
			hasMinerStats,
			wallet,
			walletInput,
			minerStats: {
				hashRate,
				ethPerMin,
				usdPerMin,
				unpaid,
				reportedHashRate,
				avgHashrate
			}
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
					<h1 className="title">Ethermine stats</h1>
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
								onClick={this._handleSubmit.bind(this)}
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
								<div className="seven columns unpaid">
									{unpaidEth} eth unpaid
								</div>
								<div className="five columns hash-rates-container">
									<div>
										<span className="hash-rate">
											{hashRate}
										</span> actual
									</div>
									<div>
										<span className="hash-rate">
											{reportedHashRate}
										</span> reported
									</div>
									<div>
										<span className="hash-rate">
											{avgHashrate}
										</span> 24 hour average
									</div>
								</div>
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

						.hash-rates-container {
							text-align: left;
						}

						@media (max-width: 550px) {
							.get-stats-submit {
								width: 100%;
							}
						}

						.unpaid {
							font-size: 2.5em;
						}

						.error-text {
							color: red;
						}

						.stats {
							font-size: 1.2em;
							padding-top: 30px;
						}

						.stats div {
							padding-top: 10px;
						}

						.hash-rate {
							font-size: 2em;
						}
          `}
				</style>
			</div>
		)
	}
}

export default App
