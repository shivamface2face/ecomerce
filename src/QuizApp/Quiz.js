import React, { useState, useEffect } from 'react';
import './Quiz.css';
const Quiz = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris'
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
            answer: 'Jupiter'
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
            answer: 'Jupiter'
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
            answer: 'Jupiter'
        },
        // Add more questions here
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // Time in seconds

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        setSelectedOption('');
        setCurrentQuestion(currentQuestion + 1);
    };

    useEffect(() => {
        const timer =
            timeLeft > 0 &&
            setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

        if (timeLeft === 0) {
            setShowScore(true);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>
                    <div className="options-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="button-section">
                        <button className="next-button" onClick={handleNextQuestion}>
                            Next
                        </button>
                    </div>
                </>
            )}
            <div className="timer">{timeLeft} seconds left</div>
        </div>
    );
};

export default Quiz;
