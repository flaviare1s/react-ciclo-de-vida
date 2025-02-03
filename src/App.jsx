import React from "react"
import "./App.css"
import { Counter } from "./components/Counter/Counter"

export class App extends React.Component {
  constructor() {
    super()
    this.state = { showCounter: false }
  }
  render() {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>
        <button onClick={() => {
          this.setState({ showCounter: !this.state.showCounter })
        }}>
          {this.state.showCounter ? "Remover Contador" : "Mostrar Contador"}
        </button>
        {this.state.showCounter && <Counter />}
      </div>
    )
  }
}
