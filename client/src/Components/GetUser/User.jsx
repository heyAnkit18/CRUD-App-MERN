import React, { useEffect, useState } from 'react';
import axios from "axios";
import './User.css';
import { Link } from 'react-router-dom';

const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

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
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}.</td>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td>
                  <button className="action-btn delete-btn">Delete</button>
                  <Link to={`/edit/${user._id}`} className="action-btn edit-btn">
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;

