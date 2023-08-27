import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../Components/Navbar/navbar';
import './addUser.css';

function addUser() {
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            city: '',
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            console.log('New User added:', response.data);
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 13,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("address")) {
            // Handle nested address field
            const addressField = name.split('.')[1];
            setUserData((prevData) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    [addressField]: value,
                },
            }));
        } else if (name.startsWith("company")) {
            // Handle nested company field
            const companyField = name.split('.')[1];
            setUserData((prevData) => ({
                ...prevData,
                company: {
                    ...prevData.company,
                    [companyField]: value,
                },
            }));
        } else {
            // Update other top-level fields
            setUserData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    

    return (
        <>
        {/* Navbar */}
        <Navbar />

        {/* Add User */}
        <section id="addUser" className="addUser">
            <div className="add-container">
                <div className="section-title">
                    <h2>Add New User</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInputChange} />
                    <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                    <input type="text" name="address.street" placeholder="Street" value={userData.address.street} onChange={handleInputChange} />
                    <input type="text" name="address.city" placeholder="City" value={userData.address.city} onChange={handleInputChange} />
                    <input type="text" name="phone" placeholder="Phone" value={userData.phone} onChange={handleInputChange} />
                    <input type="text" name="website" placeholder="Website" value={userData.website} onChange={handleInputChange} />
                    <input type="text" name="company.name" placeholder="Company Name" value={userData.company.name} onChange={handleInputChange} />
                    <input type="text" name="company.catchPhrase" placeholder="Catch Phrase" value={userData.company.catchPhrase} onChange={handleInputChange} />
                    <input type="text" name="company.bs" placeholder="BS" value={userData.company.bs} onChange={handleInputChange} />

                    <div className="button">
                        <button type="submit" className="add-btn">Add User</button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default addUser;