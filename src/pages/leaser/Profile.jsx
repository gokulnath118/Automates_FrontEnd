import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Leaser.css';

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Kavin Sagar',
    email: 'kavin@example.com',
    phone: '9876543210',
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    pincode: '641001',
    gender: 'Male',
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic') {
      setProfile(prev => ({ ...prev, profilePic: URL.createObjectURL(files[0]) }));
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEditToggle = () => setIsEditing(prev => !prev);
  const handleLogout = () => navigate('/');

  return (
    <div className="leaser-dashboard">
      <header className="leaser-header">
        <h1 className="logo">AutoMates</h1>
        <nav className="leaser-nav">
          <Link to="/leaser/dashboard">Home</Link>
          <Link to="/leaser/vehicles">Search & Booking</Link>
          <Link to="/leaser/bookings">Bookings</Link>
          <Link to="/leaser/profile">Profile</Link>
        </nav>
      </header>

      <main className="leaser-content">
        <div className="profile-container">
          <h2>Your Profile</h2>

          <div className="profile-pic">
            {profile.profilePic ? (
              <img src={profile.profilePic} alt="Profile" />
            ) : (
              <div className="placeholder-pic">No Photo</div>
            )}
            {isEditing && (
              <input
                className="file-input"
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="profile-info">
            <div>
            <label>Name:</label>
            {isEditing ? (
              <input type="text" name="name" value={profile.name} onChange={handleChange} />
            ) : <p>{profile.name}</p>}
            </div>
            <div>
            <label>Email:</label>
            {isEditing ? (
              <input type="email" name="email" value={profile.email} onChange={handleChange} />
            ) : <p>{profile.email}</p>}</div>
            <div>
            <label>Mobile:</label>
            {isEditing ? (
              <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
            ) : <p>{profile.phone}</p>}
            </div>
            <div>
            <label>Country:</label>
            {isEditing ? (
              <input type="text" name="country" value={profile.country} onChange={handleChange} />
            ) : <p>{profile.country}</p>}
            </div>
            
            <div>
            <label>State:</label>
            {isEditing ? (
              <input type="text" name="state" value={profile.state} onChange={handleChange} />
            ) : <p>{profile.state}</p>}
            </div>

            <div>
            <label>District:</label>
            {isEditing ? (
              <input type="text" name="district" value={profile.district} onChange={handleChange} />
            ) : <p>{profile.district}</p>}
            </div>
            
            <div>
            <label>Pin Code:</label>
            {isEditing ? (
              <input type="text" name="pincode" value={profile.pincode} onChange={handleChange} />
            ) : <p>{profile.pincode}</p>}
            </div>

            <div>
            <label>Gender:</label>
            {isEditing ? (
              <select className="gender-select" name="gender" value={profile.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : <p>{profile.gender}</p>}
            </div>
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <>
                <button onClick={handleEditToggle}>Save</button>
                <button onClick={() => setIsEditing(false)}>Back</button>
              </>
            ) : (
              <>
                <button onClick={handleEditToggle}>Edit</button>
                <button className="Logout-btn" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="leaser-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
