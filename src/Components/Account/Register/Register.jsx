/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [strongPass, setStrongPass] = useState('');
    const [matchPass, setMatchPass] = useState('');

    const passStrong = () => {
        const password = document.getElementById('password').value;
        const passwordStyle = document.getElementById('password');
        if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}/.test(password)) {
            setStrongPass('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long');
            passwordStyle.style.border = '2px solid #fb001c';
        } else {
            setStrongPass('');
            passwordStyle.style.border = '1px solid #00000039';
        }
    }
    const passwordMatch = () => {
        const password = document.getElementById('password').value;
        const confrimPassword = document.getElementById('confirmPassword').value;
        const confrimPasswordStyle = document.getElementById('confirmPassword');
        const submit = document.getElementById('submit');

        if (password != confrimPassword) {
            setMatchPass('Password Not Match');
            confrimPasswordStyle.style.border = '2px solid #fb001c';
            submit.setAttribute('disabled', true);
        } else {
            setMatchPass('');
            confrimPasswordStyle.style.border = '1px solid #00000039';
            submit.removeAttribute('disabled');

        }
    }
    const registerAccount = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.firstName.value + ' ' + form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;

        console.log(name, email, password, phone);
    }

    return (
        <div className="register py-5">
            <div className='container py-5'>
                <div className="box px-4 pb-4 pt-3 bg-white bg-opacity-75 rounded-3 shadow border border-dark width-70-responsive mx-auto mt-5">
                    <h3 className='text-center pb-4 text-body-emphasis'>Create Your New Account</h3>
                    <form className="row g-3" onSubmit={registerAccount}>
                        <div className="col-12 col-md-6">
                            <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                            <input type="text" name='firstName' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="firstName" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                            <input type="text" name='lastName' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="lastName" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                            <input type="email" name='email' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="email" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                            <input type="number" name='phone' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="phone" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" onKeyUpCapture={passStrong} name='password' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="password" />
                            <small className='text-danger fw-semibold'>{strongPass}</small>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                            <input type="password" name='confirmPassword' onKeyUp={passwordMatch} required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="confirmPassword" />
                            <small className='text-danger fw-semibold'>{matchPass}</small>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label fw-semibold">Address</label>
                            <input type="text" className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="inputAddress" />
                        </div>
                        <Link to='/login' className='text-decoration-none text-primary fw-semibold'>Already Have Account ?</Link>
                        <div className="col-12 text-center">
                            <button type="submit" disabled='true' id='submit' className="btn btn-dark btn-200px rounded-0">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;