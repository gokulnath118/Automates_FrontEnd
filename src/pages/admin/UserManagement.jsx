import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css'; // Make sure to import the stylesheet

function UserManagement() {
  const navigate = useNavigate();
  const [leasers, setLeasers] = useState([]);
  const [owners, setOwners] = useState([]);
  const [selectedType, setSelectedType] = useState('all'); // Default to 'All'
  
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }

    // Mock data for leasers and owners
    setLeasers([
      { id: 1, name: 'John Doe', status: 'Active' },
      { id: 2, name: 'Jane Smith', status: 'Blocked' },
    ]);
    setOwners([
      { id: 1, name: 'Admin One', status: 'Active' },
      { id: 2, name: 'Admin Two', status: 'Blocked' },
    ]);
  }, [navigate]);

  const toggleUserStatus = (userId, type) => {
    if (type === 'leaser') {
      setLeasers((prevLeasers) =>
        prevLeasers.map((leaser) =>
          leaser.id === userId
            ? { ...leaser, status: leer.status === 'Active' ? 'Blocked' : 'Active' }
            : leaser
        )
      );
    } else if (type === 'owner') {
      setOwners((prevOwners) =>
        prevOwners.map((owner) =>
          owner.id === userId
            ? { ...owner, status: owner.status === 'Active' ? 'Blocked' : 'Active' }
            : owner
        )
      );
    }
  };

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const filteredUsers = selectedType === 'leaser' ? leasers : selectedType === 'owner' ? owners : [...leasers, ...owners];

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1 className="admin-logo">AutoMates</h1>
          <nav className="admin-nav-links">
            <button onClick={() => navigate('/admin/dashboard')}>Home</button>
            <button onClick={() => navigate('/admin/users')}>User Management</button>
            <button onClick={() => navigate('/admin/vehicles')}>Vehicle Oversight</button>
            <button onClick={() => navigate('/admin/analytics')}>Analytics</button>
            <button onClick={() => navigate('/')}>Logout</button>
          </nav>
        </div>
      </header>

      <div className="admin-user-management">
        <h3>User Management</h3>
        
        {/* Selection for Leaser, Owner, All */}
        <div className="admin-select-type">
          <label>Select User Type: </label>
          <select onChange={handleSelectChange} value={selectedType}>
            <option value="all">All</option>
            <option value="leaser">Leasers</option>
            <option value="owner">Owners</option>
          </select>
        </div>

        {/* Display Users Based on Selection */}
        <div className="admin-user-section">
          <h4>{selectedType === 'leaser' ? 'Leasers' : selectedType === 'owner' ? 'Owners' : 'All Users'}</h4>
          <div className="admin-user-list">
            {filteredUsers.map((user) => (
              <div key={user.id} className="admin-user-item">
                <p>{user.name}</p>
                <p>Status: {user.status}</p>
                <button onClick={() => toggleUserStatus(user.id, selectedType)}>
                  {user.status === 'Active' ? 'Block' : 'Unblock'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="admin-footer">
        <div className="admin-footer-content">
          <p>&copy; 2025 AutoMates. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UserManagement;
