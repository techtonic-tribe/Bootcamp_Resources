import React, { useState } from 'react';

function FormHandler() {
  const [form, setForm] = useState({ name: '', email: '', gender: '' });

  const handleChange = t => {
    setForm(prev => ({ ...prev, [t.target.name]: t.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" /><br />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br />
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default FormHandler;
