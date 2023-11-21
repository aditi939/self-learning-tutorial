// TutorialPage.js
import React from 'react';
import SubjectVideo from './SubjectVideo';
import Article from './Article';
import QuizPage from './QuizPage';

const TutorialPage = ({ selectedSubject }) => {
  return (
    <div>
      <h2>Tutorial for {selectedSubject}</h2>
      <div>
         <SubjectVideo selectedSubject={selectedSubject} />
         <Article selectedSubject={selectedSubject} />
         <QuizPage selectedSubject={selectedSubject}/>
      </div>
    </div>
  );
};

export default TutorialPage;
