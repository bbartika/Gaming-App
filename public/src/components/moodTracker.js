// src/components/MoodTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoodTracker = () => {
    const [moods, setMoods] = useState([]);
    const [notes, setNotes] = useState('');
    const [formData, setFormData] = useState({ mood: '', notes: '' });
    const [error, setError] = useState('');

    const fetchMoods = async () => {
        try {
          const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/mood/get-mood',{ headers: { "Authorization": token } });
            setMoods(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchMoods();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/mood/add-mood', formData,{ headers: { "Authorization": token } });
            setFormData({ mood: '', notes: '' });
            fetchMoods();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add mood');
        }
    };

    const deleteMood = async (id) => {
        try {
          const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/mood/delete-mood/${id}`,{ headers: { "Authorization": token } });
            fetchMoods();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Mood Tracker</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={onSubmit}>
                <select name="mood" value={formData.mood} onChange={onChange} required>
                    <option value="">Select Mood</option>
                    <option value="Happy">😊 Happy</option>
                    <option value="Sad">😢 Sad</option>
                    <option value="Anxious">😟 Anxious</option>
                    <option value="Excited">🤩 Excited</option>
                    {/* Add more moods as desired */}
                </select>
                <input type="text" name="notes" placeholder="Notes (optional)" value={formData.notes} onChange={onChange} />
                <button type="submit">Add Mood</button>
            </form>
            <ul>
                {moods.map(mood => (
                    <li key={mood._id}>
                        <strong>{new Date(mood.date).toLocaleDateString()}:</strong> {mood.mood} {mood.notes && `- ${mood.notes}`}
                        <button onClick={() => deleteMood(mood._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoodTracker;
