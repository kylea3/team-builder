import React from "react";

const Form = (props) => {
console.log(props);
    const handleChange = evt => {
        const { name, value } = evt.target;
        props.update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return( 
        <form onSubmit={onSubmit}>
            <label>Name
                <input 
                    name='name'
                    placeholder="Type Your Full Name"
                    value={props.values.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input 
                    type='email'
                    name='email'
                    placeholder="Type Your Email"
                    value={props.values.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Role
                <select value={props.values.role} name="role" onChange={event => handleChange(event)}>
                    <option value="">Select a Role</option>
                    <option value="Front-End Engineer">Front-End Engineer</option>
                    <option value="Back-End Engineer">Back-end Engineer</option>
                    <option value="Designer">Designer</option>
                </select>
            </label>
            <div>
                <input type='submit' value='submit' />
            </div>
        </form> 
    )
}

export default Form;