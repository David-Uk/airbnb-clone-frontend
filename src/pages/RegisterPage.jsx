import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/register', {
                name, email, password
            });
            alert('Registration successful')
        } catch (err) {
            alert('Registration failed')
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-32">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-lg mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={event => setName(event.target.value)} />
                    <input type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Have an account?
                        <Link className="underline text" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;