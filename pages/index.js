import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://ether-stats-server-wbffcbisdb.now.sh'
const WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      error: false,
      data: {}
    }
  }
  componentDidMount() {
    axios.get(`${API}/${WALLET}`)
      .then(({ data }) => {
        this.setState({ data, loading: false })
      })
      .catch((err) => {
        console.log('err', err)
        this.setState({ loading: false, error: err })
      })
  }

  render() {
    const { loading, error, data: { hashRate, ethPerMin, usdPerMin, unpaid } } = this.state

    // not sure why they give us unpaid in this format
    const unpaidEth = unpaid / 1000000000000000000
    const minutesForOneEther = 1 / ethPerMin
    const hoursForOneEther = minutesForOneEther / 60
    const daysForOneEther = (hoursForOneEther / 24).toFixed(0)

    return (
      <div className="container">
        {error && error.message}
        <h1>Ethminer stats</h1>
        <h2>Wallet: {WALLET}</h2>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="stats">
            <div className="hash-rate">{hashRate}</div>
            <div>Currently mining <strong>{ethPerMin}</strong> eth / minute</div>
            <div>At the current rate, it will take <strong>{daysForOneEther} days</strong> to mine <strong>1 eth</strong></div>
            <div>Currently mining ${usdPerMin} / min</div>

            <div className="unpaid">Unpaid balance: <strong>{unpaidEth}</strong> eth</div>
          </div>
        )}
        <style jsx>{`
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
