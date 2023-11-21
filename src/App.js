import React from "react";
// import React, { useState } from 'react';
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import TutorialPage from "./components/TutorialPage";
import QuizPage from "./components/QuizPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import subjectsData from "./components/SubjectData";
import SubjectList from "./components/SubjectList";
// import ParentComponent from "./components/ParentComponent";

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSelectSubject = (subjectId) => {
    setSelectedSubject(subjectId);
  };
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/tutorialpage" element={<TutorialPage />} />
        </Routes>
        <SubjectList onSelectSubject={handleSelectSubject} selectedSubject={selectedSubject} />
      {selectedSubject && <TutorialPage selectedSubject={selectedSubject} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
