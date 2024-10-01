import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import './Add.css';
import toast from 'react-hot-toast';

const Add = () => {

    const initialUserState = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    };

    const [user, setUser] = useState(initialUserState);
    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/create", user)
            .then((response) => {
                const successMessage = response.data.msg || "User added successfully!";
                toast.success(successMessage, { position: "top-center" });  // Fallback message
                
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to add user", { position: "top-center" });
            });
    };

    return (
        <div className='addUser'>
            <Link to={'/'}>Back</Link>
            <h3>Add New User</h3>
            <form onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        value={user.fname}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter your first name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input
                        type='text'
                        id='lname'
                        name='lname'
                        value={user.lname}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter your last name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={user.password}
                        onChange={inputHandler}
                        autoComplete='off'
                        placeholder='Enter your password'
                    />
                </div>
                <div className='inputGroup'>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </div>
    );
};

export default Add;


