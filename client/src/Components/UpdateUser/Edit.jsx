import React from 'react'
import {Link} from 'react-router-dom';
import './Edit.css';

const Edit = () => {
  return (
    <div className='editUser'>
        <Link to={'/'}>Back</Link>
        <h3>Update User</h3>
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
                <button type='submit'>Update User</button>
                
            </div>
        </form>

    </div>
  )
}

export default Edit