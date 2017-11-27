import React, { Component } from "react"

import Converter from "../Converter/Converter"
import Display from "../Display/Display"

class App extends Component {
  // setup the constructor
  constructor(props) {
    // declares this the constructor
    super(props)

    this.state = {
      convertedVerses: "",
      verses: "",
    }
  }

  onConvert({ converted, verses }) {
    this.setState({
      converted: converted,
      verses: verses,
    })
  }

  render() {
    return (
      <div className="base">
        <header> Bible Verse Converter </header>
        <div className="card">
          <Converter onConvert={this.onConvert.bind(this)} />
          <Display
            converted={this.state.converted}
            verses={this.state.verses}
          />
        </div>
      </div>
    )
  }
}

export default App
