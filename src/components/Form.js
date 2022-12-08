import React, { useState } from "react";
import styled from 'styled-components';

const Form = (props) => {
    const handleChange = evt => {
        const { name } = evt.target;
        const { value } = evt.target;
        props.update(name, value);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return( 
        <form onSubmit={onSubmit}>
            <label>
                Name
                <input 
                    type='text'
                    name='name'
                    placeholder="Type Your Full Name"
                    value={props.value}
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                Email
                <input 
                    type='email'
                    name='email'
                    placeholder="Type Your Email"
                    value={props.value}
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                Role
                <select value={props.value} name="role" onChange={event => handleChange(event)}>
                    <option value="">Select a Role</option>
                    <option value="Front-End Engineer">Front-End Engineer</option>
                    <option value="Back-End Engineer">Back-end Engineer</option>
                    <option value="Designer">Designer</option>
                </select>
            </label>
            <div>
                <button>submit</button>
            </div>
        </form> 
    );
}

export default Form;