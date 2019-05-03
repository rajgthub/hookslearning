import React from 'react';
import AppHooks from "./AppHooks"
class App extends React.Component {
  state = {
    count: this.props.count,
    title: this.props.title
  }
  formHandler = (e) => {
    e.preventDefault()
  }
  titleHander = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  submitHander = () => {
    // this.setState({
    //   title: 
    // })
  }
  render() {
    return (
      <div className="App" style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexFlow: "column" }}>
        <h1>{this.state.title}</h1>
        <h2>count: {this.state.count}</h2>
        <form onSubmit={this.formHandler}>
          <input value={this.state.title} onChange={this.titleHander} />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
App.defaultProps = {
  count: 10,
  title: "Hello hooks!"
}
// export default App;
export default AppHooks;