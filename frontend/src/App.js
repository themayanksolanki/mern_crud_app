import { useEffect, useState } from 'react';
import { getUsers } from './services/userService';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">MERN CRUD App</h1>
      <UserForm onUserAdded={fetchUsers} />
      <UserList
        users={users}
        onUserDeleted={fetchUsers}
        onUserUpdated={fetchUsers}
      />
    </div>
  );
}

export default App;
