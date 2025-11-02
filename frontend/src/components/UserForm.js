import { useState } from 'react';
import { createUser } from '../services/userService';

const UserForm = ({ onUserAdded }) => {
  const [form, setForm] = useState({ name: '', email: '', age: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    setForm({ name: '', email: '', age: '' });
    onUserAdded();
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">Add New User</h5>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-success">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
