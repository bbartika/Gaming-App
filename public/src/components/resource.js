import React, { useState } from 'react';
import axios from 'axios';

const AddResource = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { title, description, link };
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/resource/add-resource', details, { headers: { "Authorization": token } })
      .then((res) => {
        console.log('Resource added successfully');
        setTitle('');
        setDescription('');
        setLink('');
      })
      .catch((err) => console.error('Failed to add resource', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Link:</label>
        <input type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
      </div>
      <button type="submit">Add Resource</button>
    </form>
  );
};

export default AddResource;
