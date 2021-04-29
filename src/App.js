import React from 'react';
import { getData } from './service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    getData().then(res => {
      return res.data
    }).then(data => {
      this.setState({
        response: data
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        {this.state.response === null ?
          <div>Loading</div> :
          <table>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price($USD)</th>
            </tr>
            {this.state.response.map((currency) => {
              return (
                <tr>
                  <td>{currency.name}</td>
                  <td>{currency.symbol}</td>
                  <td>{currency.quote.USD.price}</td>
                </tr>
              )
            })}
          </table>
        }
      </>
    )
  }
}
export default App;