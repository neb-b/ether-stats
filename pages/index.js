import React, { Component } from 'react'
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

		console.log('set state')

		this.setState({ walletInput: wallet })

		console.log('after')

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
		console.log('match?', match)

		if (match) {
			this.setState({
				loading: true,
				error: { input: null },
				wallet: walletInput
			})

			axios
				.get(`${API}/${walletInput}`)
				.then(({ data }) => {
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

	render() {
		console.log('render', this.state)
		const {
			loading,
			error,
			hasMinerStats,
			wallet,
			walletInput,
			minerStats: { hashRate, ethPerMin, usdPerMin, unpaid }
		} = this.state

		// not sure why they give us unpaid in this format
		const unpaidEth = unpaid / 1000000000000000000
		const minutesForOneEther = 1 / ethPerMin
		const hoursForOneEther = minutesForOneEther / 60
		const daysForOneEther = (hoursForOneEther / 24).toFixed(0)

		return (
			<div className="container">
				<div className="header">
					<h1 className="title">Ethminer stats</h1>
				</div>
				<div className="content">
					<h2>Enter your miner wallet</h2>
					<div>
						<div className="input-container">
							<div className="form-control">
								<input
									className="wallet-input"
									placeholder="be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F"
									value={walletInput}
									onChange={e => this.setState({ walletInput: e.target.value })}
								/>
								<button
									className="get-stats-btn"
									disabled={this.state.loading}
									onClick={this._handleChange.bind(this)}
								>
									Get stats
								</button>
							</div>
							<div className="error-text">
								{walletInput && error.input && error.input}
							</div>
						</div>
					</div>

					{loading && <p>Loading...</p>}
					{wallet &&
						<div>
							<h2>Wallet: {wallet}</h2>
						</div>}
					{!loading &&
						hasMinerStats &&
						<div className="stats">
							<div className="hash-rate">{hashRate}</div>
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

							<div className="unpaid">
								Unpaid balance: <strong>{unpaidEth}</strong> eth
							</div>
						</div>}
				</div>
				<style global jsx>
					{`
						body, h1 {
							padding: 0;
							margin: 0;
						}

						.header {
							width: 100%;
							height: 4em;
							color: white;
							background-color: #315c39;
							padding: 10px;
						}

						.title {
							font-weight: 400;
							font-size: 2em;
							padding-top: 10px;
						}

						.container {
							margin: 0;
							padding: 0;
							font-family: Helvetica, sans-serif;
						}


            .content {
              padding: 10px;
            }

						.form-control {
							display: flex;
							flex-direction: row;
						}

						.error-text {
							color: red;
							height: 1.5rem;
							padding-top: 5px;
							font-size: .9em;
						}

						.wallet-input {
							padding: 6px;
							width: 600px;
							font-size: 1em;
						}

						.get-stats-btn {
							margin-left: 10px;
							padding: 10px;
							width: 100px;
							border: none;
							cursor: pointer;
						}

            .stats div {
              padding: 20px 0;
            }

            h1 {
              font-size: 1.3em;
            }

            h2 {
              font-size: 1em;
            }

            .hash-rate {
              font-size: 2em;
              font-weight: 600;
            }

            .unpaid {
              font-size: 1.5em;
            }
          `}
				</style>
			</div>
		)
	}
}

export default App
