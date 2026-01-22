import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("Construindo a classe Counter...");
  }

  componentDidMount() {
    console.log("O componente foi montado! ✅");
    document.addEventListener('scroll', this.consoleScroll)
  }

  consoleScroll() {
    console.log('Scrolling...')
  }

  //Método chamado sempre que uma prop ou estado for alterado
  shouldComponentUpdate() {
    console.log("Verificando se o componente deve ser atualizado...");
    return true;
  }

  componentDidUpdate() {
    console.log("O componente foi atualizado! 👍");
  }

  componentWillUnmount() {
    console.log("O componente será desmontado! 🚫");
    document.removeEventListener('scroll', this.consoleScroll)
  }

  render() {
    console.log("Renderizando o componente Counter...");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>-</button>
        <button onClick={() => {this.setState({ count: this.state.count + 1 })}}>+</button>
      </div>
    );
  }
}
