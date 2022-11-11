import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickCounterButton = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <p className="counter-number">Count {count}</p>
          <h1 className="heading"> Count is Even </h1>
          <button
            type="button"
            className="counter-button"
            onClick={this.onClickCounterButton}
          >
            Increment
          </button>
          <p className="desc">Increase by Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
