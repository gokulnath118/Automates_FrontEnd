import { Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import UserManagement from './UserManagement';
import VehicleOversight from './VehicleOversight';
import Analytics from './Analytics';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="vehicles" element={<VehicleOversight />} />
      <Route path="analytics" element={<Analytics />} />
    </Routes>
  );
}

export default AdminRoutes;
