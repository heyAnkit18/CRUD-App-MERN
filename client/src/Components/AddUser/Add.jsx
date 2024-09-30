import React from 'react'
import {Link} from 'react-router-dom';
import './Add.css';

const Add = () => {
  return (
    <div className='addUser'>
        <Link to={'/'}>Back</Link>
        <h3>Add New User</h3>
        <form>
            <div className='inputGroup'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' id='fname' name='fname' autoComplete='off' placeholder='Enter your first name '>
                </input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' id='lname' name='lname' autoComplete='off' placeholder='Enter your Last name '>
                </input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='fname' autoComplete='off' placeholder='Enter your Email '>
                </input>
            </div>
            <div className='inputGroup'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='fname' autoComplete='off' placeholder='Enter your Password '>
                </input>
            </div>
            <div className='inputGroup'>
                <button type='submit'>Add User</button>
                
            </div>
        </form>

    </div>
  )
}

export default Add