import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-from">
            <div>
                <h2>Register: Create Account</h2>
                <from onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter your password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </from>
                <p>Already have an Account? <Link to="/login">login</Link> </p>
                <div>----------------------or---------------------</div>
                <button className="btn-regular"> Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;