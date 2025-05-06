import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './OwnerDashboard.css';

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: 'Gokulnath M',
    email: 'gokul@example.com',
    mobile: '9876543210',
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    pincode: '641035',
    gender: 'male'
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log('Photo URL:', url);
      setPhoto(url);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Profile updated successfully!');
    // Optional: send formData to backend
  };

  return (
    <div className="owner-dashboard">
      <header className="owner-header">
        <h1 className="logo">AutoMates</h1>
        <nav className="owner-nav">
          <Link to="/owner/dashboard">Home</Link>
          <Link to="/owner/vehicles">Vehicle Management</Link>
          <Link to="/owner/bookings">Booking Oversight</Link>
          <Link to="/owner/profile">Profile</Link>
        </nav>
      </header>

      <main className="owner-content">
        <h2>Your Profile</h2>

        {!isEditing ? (
          <div className="profile-view">
             <div className="profile-pic">
                <img
                  src={photo || '/default-profile.png'} // Make sure this default image is available in public folder
                  alt="Profile"
                />
              </div>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>State:</strong> {formData.state}</p>
            <p><strong>District:</strong> {formData.district}</p>
            <p><strong>Pin Code:</strong> {formData.pincode}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="owner-edit-btn" onClick={handleEditToggle}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <div className='center-buttons'>
            <button className="owner-edit-btn" onClick={handleEditToggle}>Edit</button>
            <button className="owner-Logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <form className="owner-profile-form" onSubmit={handleSave}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
            <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" required />
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin Code" required />
            <div className="gender-group">
              <label>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <label>Upload Photo:</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        )}
      </main>

      <footer className="owner-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
