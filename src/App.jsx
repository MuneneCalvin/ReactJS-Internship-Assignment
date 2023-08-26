import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Componets/Navbar/navbar';
import noAvatar from './assets/noavatar.png';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredUsers);
  }, [searchQuery, users]);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  }

  return (
    <>
      <main>
        <Navbar />

        <div className="top-bar">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='search-btn'>Search</button>
          </div>
        </div>

        <div className="user-card">
          <div className="card-container">
            {searchResults.map(user => (
              <div key={user.id} className="card">
                <img src={noAvatar} alt="noAvatar" />
                <h2>{user.name}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <button className='delete-btn' onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

      </main>
    </>
  )
}

export default App;
