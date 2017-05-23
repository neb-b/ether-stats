import React, { Component } from 'react'
import axios from 'axios'
import cookies from 'js-cookie'

const API = 'https://etherstats-server.now.sh'

class App extends Component {
	constructor() {
		super()

		this.state = {
			loading: true,
			error: false,
			walletInput: '',
			wallet: '',
			hasMinerStats: false,
			minerStats: {}
		}
	}

	componentDidMount() {
		const wallet = cookies.get('w__public') || ''

		this.setState({ walletInput: wallet })

		const regex = /(\D|\d){40}/
		const match = wallet.match(regex)

		if (match) {
			console.log('match?', match)
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
					this.setState({ loading: false, error: err })
				})
		} else {
			this.setState({ loading: false })
		}
	}

	getStats() {
		const { walletInput } = this.state
		const match = walletInput.match(/(\D|\d){40}/)
		if (match) {
			this.setState({ loading: true, wallet: walletInput })

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
		}
	}

	render() {
		console.log('render', this.state)
		const {
			loading,
			error,
			hasMinerStats,
			wallet,
			minerStats: { hashRate, ethPerMin, usdPerMin, unpaid }
		} = this.state

		// not sure why they give us unpaid in this format
		const unpaidEth = unpaid / 1000000000000000000
		const minutesForOneEther = 1 / ethPerMin
		const hoursForOneEther = minutesForOneEther / 60
		const daysForOneEther = (hoursForOneEther / 24).toFixed(0)

		return (
			<div className="container">
				{error && error.message}
				<h1>Ethminer stats</h1>
				<div>
					<label>Wallet</label>
					<input
						value={this.state.walletInput}
						onChange={e => this.setState({ walletInput: e.target.value })}
					/>
					<button onClick={this.getStats.bind(this)}>Get stats</button>
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
				<style jsx>
					{`
            .container {
              padding: 10px;
              font-family: Helvetica, sans-serif;
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
