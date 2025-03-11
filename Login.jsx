import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState({username: '',age: '',number: '',gender: '',disease: ''});
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className='container'>
            <h2>Hospital Management System</h2>
            <p>Patient Appointment Details</p>

            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} required />
            <br />
            <label>Age</label>
            <input type="number" name="age" value={user.age} onChange={handleChange} required />
            <br />
            <label>Contact No</label>
            <input type="tel" name="number" value={user.number} onChange={handleChange} required />
            <br />
            <label>Gender</label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            <br />
            <label>Disease</label>
            <input type="text" name="disease" value={user.disease} onChange={handleChange} required />
            <br />

            <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Login;
