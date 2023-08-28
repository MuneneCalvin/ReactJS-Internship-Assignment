import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import noAvatar from '../../assets/noavatar.png';
import './home.css';

function App() {
  const navigate = useNavigate();
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

  const handleDetails = (userId) => {
    navigate(`/editUser/${userId}`);
  }

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    toast.success(' User Deleted Successfully..!!!!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />

        {/* Toast Container */}
        <ToastContainer />

        {/* Search Bar */}
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

        {/* User Cards */}
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
                
                <div className="card-btns">
                {/* <button className='edit-btn' onClick={() => handleDetails(user.id)}>Edit info</button> */}
                {/* <button className='delete-btn' onClick={() => handleDelete(user.id)}>Delete</button> */}

                <button class="button">Update</button>
                <button className="del-button">
                      <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

export default App;
