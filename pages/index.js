import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://ether-stats-server-xjsvfatawq.now.sh'
// const API = 'http://localhost:5000'
const WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      data: {}
    }
  }
  componentDidMount() {
    axios.get(`${API}/${WALLET}`)
      .then(({ data }) => {
        this.setState({ data, loading: false })
      })
      .catch((err) => console.log('err', err))
  }

  render() {
    console.log('render', this.state);
    const { loading, data: { hashRate, ethPerMin, usdPerMin, unpaid } } = this.state

    // not sure why they give us unpaid in this format
    const unpaidEth = unpaid / 1000000000000000000

    return (
      <div>
        <h1>Ethminer stats for {WALLET}</h1>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div>
            <div>Hash rate: {hashRate}</div>
            <div>eth/min: {ethPerMin} eth</div>
            <div>$/min: ${usdPerMin}</div>
            <div>unpaid: {unpaid / 1000000000000000000} eth</div>
          </div>
        )}
      </div>
    )
  }
}

export default App
