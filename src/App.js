import React from 'react'
import axios from 'axios'
import Button from './component/Button'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      salary: '',
      hobby: '',
      gender: ''
    }
  }

  onChangeHandler = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()
    console.log(this.state)

    axios.post('https://sheet.best/api/sheets/c1714aa1-29ba-47be-9121-5503c9a906a0', this.state)
      .then(response => {
        console.log(`response  ${response}`)
      })
  }

  render() {
    const {name, age, salary, hobby} = this.state
    return (
      <div className="App">
        <h2>React Google Sheets!</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label>Name 
              <input
                type="text"
                aria-required="true"
                onChange={this.onChangeHandler}
                value={name}
                name="name"
                placeholder="Enter your name"
              />
            </label>
          </div>
  
          <div>
            <label>Age
              <input 
                type="number"
                aria-required="true"
                name="age"
                value={age}
                placeholder="Enter your age"
                onChange={this.onChangeHandler}
              />
            </label>
          </div>
  
          <div>
            <label>Salary
              <input 
                type="number"
                aria-required="true"
                name="salary"
                value={salary}
                placeholder="Enter your salary"
                onChange={this.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <label>Hobby
              <input 
                type="text"
                aria-required="true"
                name="hobby"
                value={hobby}
                placeholder="Enter your hobby"
                onChange={this.onChangeHandler}
              />
            </label>
          </div>
          <div>
            <input type="radio" name="gender" value="Male" onChange={this.onChangeHandler} /> Male
            <input type="radio" name="gender" value="Female" onChange={this.onChangeHandler} /> Female
          </div>
          <Button />
        </form>
      </div>
    );
  }
}

export default App;
