import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      items: []
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  
  handleIncrement() {
    this.setState({
      counter: this.state.counter += 1
    })
  }
  
  componentDidMount() {
    fetch("https://app.clio.com/api/v4/contacts.json", {
      headers: {
        'user-key': "fX8hafyqxwOc5MhlYx4bYAeSqikmFnHMkRrFC5BH", }
    })
      .then(res => res.json())
      .then(
        (result) => {
            console.log("hi" + result.results[0].gender);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
          
          </ul>
        );
      }
    return (
      <div>
        <div>{this.state.counter}</div>
        <hr />
        <button type="button" onClick={this.handleIncrement}>+</button>

     </div>

        
     
    ) 
  }
}

export default Counter;