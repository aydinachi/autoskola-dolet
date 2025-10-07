'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

const QuizContainer = styled.div`
  min-height: 100vh;
  background: var(--Background);
  color: var(--white);
  padding: 2rem;
`;

const QuizHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--light-bordo);
  }
  
  p {
    font-size: 1.2rem;
    color: var(--link-color);
    margin-bottom: 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bordo);
  color: var(--white);
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: var(--light-bordo);
  }
`;

const QuestionCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #333;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--white);
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button<{ selected: boolean; correct?: boolean; wrong?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => 
    props.correct ? '#4CAF50' : 
    props.wrong ? '#f44336' : 
    props.selected ? 'var(--light-bordo)' : '#333'
  };
  background: ${props => 
    props.correct ? '#4CAF50' : 
    props.wrong ? '#f44336' : 
    props.selected ? 'var(--light-bordo)' : 'transparent'
  };
  color: var(--white);
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--light-bordo);
    background: ${props => props.correct || props.wrong ? 'inherit' : 'var(--light-bordo)'};
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  gap: 1rem;
`;

const NavButton = styled.button<{ disabled?: boolean }>`
  padding: 1rem 2rem;
  background: ${props => props.disabled ? '#333' : 'var(--bordo)'};
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 1rem;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? '#333' : 'var(--light-bordo)'};
  }
`;

const ScoreCard = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 1rem;
  padding: 3rem;
  border: 1px solid #333;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--light-bordo);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--link-color);
  }
`;

const RestartButton = styled.button`
  padding: 1rem 2rem;
  background: var(--bordo);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
  
  &:hover {
    background: var(--light-bordo);
  }
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--light-bordo);
  color: var(--white);
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  
  &:hover {
    background: var(--bordo);
  }
`;

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Koja je maksimalna brzina u naselju?",
    options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Maksimalna brzina u naselju je 50 km/h, osim ako nije drugačije označeno."
  },
  {
    id: 2,
    question: "Kada je obavezno koristiti sigurnosni pojas?",
    options: ["Samo na autoputu", "Samo u gradu", "Uvijek kada se vozi", "Samo na brzini preko 50 km/h"],
    correctAnswer: 2,
    explanation: "Sigurnosni pojas je obavezan uvijek kada se vozi, bez obzira na brzinu ili tip ceste."
  },
  {
    id: 3,
    question: "Koja je minimalna udaljenost za preticanje?",
    options: ["50 metara", "100 metara", "150 metara", "200 metara"],
    correctAnswer: 2,
    explanation: "Minimalna udaljenost za preticanje je 150 metara, osim ako nije drugačije označeno."
  },
  {
    id: 4,
    question: "Kada je zabranjeno preticanje?",
    options: ["Na pješačkom prelazu", "U krivini", "Na željezničkom prelazu", "Sve navedeno"],
    correctAnswer: 3,
    explanation: "Preticanje je zabranjeno na pješačkom prelazu, u krivini i na željezničkom prelazu."
  },
  {
    id: 5,
    question: "Koja je maksimalna brzina na autoputu?",
    options: ["100 km/h", "120 km/h", "130 km/h", "140 km/h"],
    correctAnswer: 2,
    explanation: "Maksimalna brzina na autoputu je 130 km/h, osim ako nije drugačije označeno."
  }
];

export default function OnlineUcenje() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const isCorrect = (questionIndex: number, answerIndex: number) => {
    return questions[questionIndex].correctAnswer === answerIndex;
  };

  const isSelected = (answerIndex: number) => {
    return selectedAnswers[currentQuestion] === answerIndex;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <QuizContainer>
        <QuizHeader>
          <h1>Online učenje - AutoŠkola Dolet</h1>
        </QuizHeader>
        
        <ScoreCard>
          <h2>Rezultat kviza</h2>
          <p>Osvojili ste {score} od {questions.length} tačnih odgovora</p>
          <p>Procenat: {percentage}%</p>
          <p>
            {percentage >= 80 ? 'Odličan rezultat! 🎉' : 
             percentage >= 60 ? 'Dobar rezultat! 👍' : 
             'Treba još malo vježbe! 💪'}
          </p>
          <div>
            <RestartButton onClick={handleRestart}>
              Pokušaj ponovo
            </RestartButton>
            <HomeButton href="/">
              Povratak na početnu
            </HomeButton>
          </div>
        </ScoreCard>
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <QuizHeader>
        <BackButton href="/">
          ← Povratak na početnu
        </BackButton>
        <h1>Online učenje - AutoŠkola Dolet</h1>
        <p>Testirajte svoje znanje sa našim kviz pitanjima</p>
      </QuizHeader>

      <QuestionCard>
        <QuestionText>
          Pitanje {currentQuestion + 1} od {questions.length}: {questions[currentQuestion].question}
        </QuestionText>
        
        <OptionsContainer>
          {questions[currentQuestion].options.map((option, index) => (
            <OptionButton
              key={index}
              selected={isSelected(index)}
              correct={showExplanation && isCorrect(currentQuestion, index)}
              wrong={showExplanation && isSelected(index) && !isCorrect(currentQuestion, index)}
              onClick={() => handleAnswerSelect(index)}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>

        {showExplanation && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#2a2a2a', borderRadius: '0.5rem' }}>
            <p><strong>Objašnjenje:</strong> {questions[currentQuestion].explanation}</p>
          </div>
        )}
      </QuestionCard>

      <NavigationButtons>
        <NavButton 
          onClick={handlePrevious} 
          disabled={currentQuestion === 0}
        >
          Prethodno
        </NavButton>
        
        {!showExplanation ? (
          <NavButton 
            onClick={handleShowExplanation}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            Pokaži objašnjenje
          </NavButton>
        ) : (
          <NavButton onClick={handleNext}>
            {currentQuestion === questions.length - 1 ? 'Završi kviz' : 'Sljedeće'}
          </NavButton>
        )}
      </NavigationButtons>
    </QuizContainer>
  );
}