// src/components/RelaxationTechniques.js
import React from 'react';

const RelaxationTechniques = () => {
    const techniques = [
        {
            name: 'Deep Breathing',
            description: 'Focus on taking slow, deep breaths to calm your mind.',
        },
        {
            name: 'Meditation',
            description: 'Spend a few minutes in quiet meditation to center yourself.',
        },
        {
            name: 'Progressive Muscle Relaxation',
            description: 'Tense and then relax each muscle group to reduce stress.',
        },
        {
            name: 'Guided Imagery',
            description: 'Visualize a peaceful scene to help relax your mind.',
        },
        // Add more techniques as desired
    ];

    return (
        <div>
            <h2>Relaxation Techniques</h2>
            <ul>
                {techniques.map((tech, index) => (
                    <li key={index}>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelaxationTechniques;
