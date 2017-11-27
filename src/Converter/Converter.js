// react imports
import React, { Component } from "react"

// functions
import { convert } from "./functions"

class Converter extends Component {
  // setup the constructor
  constructor() {
    super()

    this.state = {
      textArea: "",
    }

    this._onTextChange = this._onTextChange.bind(this)
    this._onConvert = this._onConvert.bind(this)
  }

  _onTextChange(event) {
    this.setState({ textArea: event.target.value })
  }

  _onConvert() {
    const { textArea } = this.state
    this.props.onConvert(convert(textArea))
  }

  render() {
    const { textArea } = this.state

    return (
      <div className="converter">
        <label className="header">
          Text To Convert
          <span className="button" onClick={this._onConvert}>
            Convert
          </span>
        </label>
        <textarea
          placeholder="Text To Convert"
          value={textArea}
          onChange={this._onTextChange.bind(this)}
        />
      </div>
    )
  }
}

export default Converter
