import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from "styled-components";

const StyledButton = styled.button`
            background-color: ${props => props.alter ? 'red' : 'green'};
            color: white;
            font: inherit;
            border: 1px solid blue;
            padding: 1em;
            cursor: pointer;
            
            &:hover {
                background-color: ${props => props.alter ? 'salmon' : 'lightgreen'};
                color: black;
            }`;

class App extends Component {
    state = {
        persons: [
            {id: 'qdasf', name: "Max", age: 28},
            {id: 'qwe8e', name: "Ser", age: 33},
            {id: 'geds6', name: "Anna", age: 32},
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.piid === id);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShowPersons = this.state.showPersons;
        this.setState({showPersons: !doesShowPersons})
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />)}
                </div>
            )
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
                <div className="App">
                    <h1>Hi, I'm a react App!</h1>
                    <p className={classes.join(' ')}>This is working!</p>
                    <StyledButton
                        alter={this.state.showPersons}
                        onClick={this.togglePersonsHandler}>
                        Toggle persons
                    </StyledButton>
                    {persons}
                </div>
        );
    }
}

export default App;
