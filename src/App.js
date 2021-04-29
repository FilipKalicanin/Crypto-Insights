import React from 'react';
import { getData } from './service';
import Error from './Error';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestState: 'loading',
      data: null
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    getData().then(res => {
      return res.data
    }).then(newData => {
      this.setState({
        requestState: 'finishedLoading',
        data: newData
      })
    }).catch(() => {
      this.setState({
        requestState: 'error'
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    if (this.state.requestState === 'loading') {
      return <Loading />
    }

    if (this.state.requestState === 'error') {
      return <Error />
    }
    else {
      return (
        <table>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price($USD)</th>
          </tr>
          {!this.state.data ? '' : this.state.data.map((currency) => {
            return (
              <tr>
                <td>{currency.name}</td>
                <td>{currency.symbol}</td>
                <td>{currency.quote.USD.price}</td>
              </tr>
            )
          })}
        </table>
      )
    }
  }
}
export default App;