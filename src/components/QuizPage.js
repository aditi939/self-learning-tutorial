// QuizPage.js
import React, { useState, useEffect } from 'react';
import quizData from './QuizData';
import './QuizPage.css'; // Import your CSS file for styling

const QuizPage = ({ selectedSubject }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch questions based on the selected subject from quizData
    const fetchQuestions = () => {
      const selectedSubjectQuestions = quizData[selectedSubject] || [];
      setQuestions(selectedSubjectQuestions);
      setUserAnswers({});
      setShowResults(false);
      setScore(0);
    };

    fetchQuestions();
  }, [selectedSubject]);

  const handleAnswer = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    // Calculate the score based on correct answers
    const newScore = questions.reduce((totalScore, question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    setScore(newScore);
    setShowResults(true);
  };

  return (
    <div className="quiz-container">
      <h2>Quiz for {selectedSubject}</h2>
      {questions.length > 0 ? (
        <div>
          {questions.map((question) => (
            <div key={question.id} className="quiz-question">
              <p>{question.question}</p>
              <div className="quiz-options">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`button-style ${showResults && question.correctAnswer === option ? 'correct' : ''}`}
                    onClick={() => handleAnswer(question.id, option)}
                    disabled={showResults}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {!showResults && (
            <button className="submit-button-style" onClick={handleSubmit}>
              Submit Answers
            </button>
          )}
          {showResults && (
            <div className="results">
              <h3>Results:</h3>
              <p>Total Marks: {score}</p>
              {questions.map((question) => (
                <p key={question.id}>
                  Question {question.id}: {userAnswers[question.id] === question.correctAnswer ? 'Correct' : 'Incorrect'}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>No quiz questions available for {selectedSubject}.</p>
      )}
    </div>
  );
};

export default QuizPage;
