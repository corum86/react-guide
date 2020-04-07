import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 28},
            {name: "Ser", age: 33},
            {name: "Anna", age: 32},
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Sergkei", age: 33},
                {name: "Anna-Maria", age: 32},
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: event.target.value, age: 33},
                {name: "Anna-Maria", age: 32},
            ]
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '1em',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a react App!</h1>
                <button style={style}
                    onClick={() => this.switchNameHandler("Maxi")}>Switch Names</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler}
                    changed={this.nameChangedHandler}>My hobbies are:
                    Gaming</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
