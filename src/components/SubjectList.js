// SubjectList.js
import React from 'react';
import './SubjectList.css';
import subjectsData from './SubjectData';

const SubjectList = ({ onSelectSubject, selectedSubject }) => {
  const handleSelectSubject = (subjectId) => {
    onSelectSubject(subjectId);
  };

  return (
    <div className="subject-list">
      <h2>Choose a Subject</h2>
      <ul>
        {subjectsData.map((subject) => (
          <li
            key={subject.id}
            onClick={() => handleSelectSubject(subject.id)}
            className={selectedSubject === subject.id ? 'selected' : ''}
          >
            {subject.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
