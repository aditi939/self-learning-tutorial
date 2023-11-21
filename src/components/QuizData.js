// QuizData.js
const quizData = {
    React: [
      {
        id: 1,
        question: "What command is used to start the React local development server?",
        options: ["npm start", "npm build", "npm run dev", "npm serve"],
        correctAnswer: "npm start",
      },
      {
        id: 2,
        question: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JQuery Syntax XML'],
        correctAnswer: 'JavaScript XML',
      },
      {
        id: 3,
        question: "What is the default local host port that a React development server uses?",
        options:[3500, 8080, 5000, 3000],
        correctAnswer: 3000,
    },
    {
        id: 4,
        question: "Which keyword creates a constant in JavaScript?",
        options: ["let", "const", "constant", "var"],
        correctAnswer: "const",
    },
  ],
  
    Angular: [
      {
        id: 1,
        question: 'AngularJS is a ____',
        options: ['Java Framework', 'JavaScript framework', 'HTML framework', 'SQL framework'],
        correctAnswer: 'JavaScript framework',
      },
      {
        id: 2,
        question: 'AngularJS is perfect for?',
        options: ['MPAs', 'DPAs', 'CPAs', 'SPAs'],
        correctAnswer: 'SPAs',
      },
      {
        id: 3,
        question: 'State whether true or false:  AngularJS provides reusable components',
        options: ['True', 'False'],
        correctAnswer: 'True',
      },
    ],
    Python: [
        {
          id: 1,
          question: "Who developed Python Programming Language?",
          options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
          correctAnswer: " Guido van Rossum",
        },
        {
          id: 2,
          question: 'Which type of Programming does Python support?',
          options: ['object-oriented programming', 'structured programming','functional programming','all of the mentioned'],
          correctAnswer: 'all of the mentioned',
        },
        {
          id: 3,
          question: "Is Python code compiled or interpreted?",
          options:['Python code is both compiled and interpreted','Python code is neither compiled nor interpreted','Python code is only compiled','Python code is only interpreted' ],
          correctAnswer: 'Python code is both compiled and interpreted',
      },

    ],
    Javascript: [
        {
          id: 1,
          question: "Arrays in JavaScript are defined by which of the following statements?",
          options: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
          correctAnswer: "It is an ordered list of values",
        },
        {
          id: 2,
          question: 'Which of the following is not javascript data types?',
          options: ['Null type', 'Undefined type', 'Number type', ' All of the mentioned'],
          correctAnswer: 'All of the mentioned',
        },
       {
          id: 3,
          question: "What is the default local host port that a React development server uses?",
          options:[3500, 8080, 5000, 3000],
          correctAnswer: 3000,
      },
      {
          id: 4,
          question: "Which of the following can be used to call a JavaScript Code Snippet?",
          options: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
          correctAnswer: "const",
      }, 
    ],
    Typescript: [
        {
          id: 1,
          question: "When was typeScript made public?",
          options: [41548, 41183, 41609, 41244],
          correctAnswer: 41244,
        },
        {
          id: 2,
          question: 'What is needed to debug a TypeScript file?',
          options: ['.tt source map file', '.tsx source map file', '.jsx source map file', '.js source map file'],
          correctAnswer: '.tsx source map file',
        },
        {
          id: 3,
          question: "What is the default local host port that a React development server uses?",
          options:[3500, 8080, 5000, 3000],
          correctAnswer: 3000,
      },
      {
          id: 4,
          question: "Which keyword creates a constant in JavaScript?",
          options: ["let", "const", "constant", "var"],
          correctAnswer: "const",
      },
    ],
    Java: [
        {
          id: 1,
          question: "Who invented Java Programming?",
          options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
          correctAnswer: "James Gosling",
        },
        {
          id: 2,
          question: 'Which of these cannot be used for a variable name in Java?',
          options: ['identifier & keyword', 'identifier', 'keyword', 'none of the mentioned'],
          correctAnswer: 'keyword',
        },
        {
          id: 3,
          question: "What is the default local host port that a React development server uses?",
          options:["MAVEN_Path","JavaPATH","JAVA","JAVA_HOME"],
          correctAnswer: "JAVA_HOME",
      },
      {
          id: 4,
          question: "Which exception is thrown when java is out of memory?",
          options: ["MemoryError", "OutOfMemoryError", "MemoryOutOfBoundsException", "MemoryFullException"],
          correctAnswer: "OutOfMemoryError",
      },
    ],
    HTML: [
        {
          id: 1,
          question: "Who is the father of HTML?",
          options: ["Rasmus Lerdorf", "Tim Berners-Lee", " Brendan Eich", "Sergey Brin"],
          correctAnswer: "Tim Berners-Lee",
        },
        {
          id: 2,
          question: 'Which of the following is used to read an HTML page and render it?',
          options: ['Web server', 'Web network', 'Web browser','Web matrix'],
          correctAnswer: 'Web browser',
        },
        {
          id: 3,
          question: "What is the default local host port that a React development server uses?",
          options:[3500, 8080, 5000, 3000],
          correctAnswer: 3000,
      },
      {
          id: 4,
          question: " In which part of the HTML metadata is contained?",
          options: ["head tag", "title tag", "html tag", "body tag"],
          correctAnswer: "head tag",
      },
    ],
    CSS: [
        {
          id: 1,
          question: "What command is used to start the React local development server?",
          options: ["npm start", "npm build", "npm run dev", "npm serve"],
          correctAnswer: "npm start",
        },
        {
          id: 2,
          question: 'What is JSX?',
          options: ['JavaScript XML', 'Java Syntax Extension', 'JQuery Syntax XML'],
          correctAnswer: 'JavaScript XML',
        },
        {
          id: 3,
          question: "What is the default local host port that a React development server uses?",
          options:[3500, 8080, 5000, 3000],
          correctAnswer: 3000,
      },
      {
          id: 4,
          question: "Which keyword creates a constant in JavaScript?",
          options: ["let", "const", "constant", "var"],
          correctAnswer: "const",
      },
    ],
    AI: [
        {
            id: 1,
            question: "What is the goal of Artificial Intelligence?",
            options: [" To solve artificial problems", "To extract scientific causes", "To explain various sorts of intelligence", "To solve real-world problems"],
            correctAnswer: "npm start",
          },
          {
            id: 2,
            question: 'Who is the inventor of Artificial Intelligence?',
            options: ['Geoffrey Hinton', 'Andrew Ng', 'John McCarthy', 'Jürgen Schmidhuber'],
            correctAnswer: 'John McCarthy',
          },
    ],
    ML: [
        {
          id: 1,
          question: "What command is used to start the React local development server?",
          options: ["npm start", "npm build", "npm run dev", "npm serve"],
          correctAnswer: "npm start",
        },
        {
          id: 2,
          question: 'Who is the inventor of Artificial Intelligence?',
          options: ['Geoffrey Hinton', 'Andrew Ng', 'John McCarthy', 'Jürgen Schmidhuber'],
          correctAnswer: 'John McCarthy',
        },
    ],
  };
  
  export default quizData;
  