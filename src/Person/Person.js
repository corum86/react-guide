import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
            width: 60%;
            margin: 2em auto;
            border: 1px solid #eee;
            box-shadow: 2px 2px #ccc;
            padding: 2em;
            text-align: center;
       
            @media (min-width: 599px) {
                width: 450px;
            }`;

const person = (props) => {
    return (
        // <div className={"Person"} style={style}>
        <StyledDiv>
            <p onClick={props.click}> My name is {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </StyledDiv>
    );
};

export default person;
