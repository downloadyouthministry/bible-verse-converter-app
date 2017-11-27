// react imports
import React, { Component } from "react"

class Display extends Component {
  render() {
    const { converted, verses } = this.props

    return (
      <div className="display">
        <div className="parsed">
          <label> Conversions </label>
          <span> {converted} </span>
        </div>
        <div className="found">
          <label> What We Found </label>
          <ul> {verses.split(",").map((v, i) => <li key={i}> {v} </li>)} </ul>
        </div>
      </div>
    )
  }
}

export default Display
