import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className="user-table-container">
      <div className="user-table-header">
        <Link to="/add" className="add-user-btn">
          Add User
        </Link>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Ankit Kumar</td>
            <td>ankit@gmail.com</td>
            <td>
              <button className="action-btn delete-btn">Delete</button>
              <Link to="/" className="action-btn edit-btn">
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
