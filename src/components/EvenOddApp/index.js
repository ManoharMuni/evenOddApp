// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let type
    if (count % 2 === 0) {
      type = 'Even'
    } else {
      type = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="des1">Count is {type}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="des2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
