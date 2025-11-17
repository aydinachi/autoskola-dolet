'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';
import { testFolders, TestFolder, Question } from './constants';

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

const FoldersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const FolderCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid rgba(139, 0, 0, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(139, 0, 0, 0.4);
    border-color: var(--light-bordo);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(165, 42, 42, 0.05) 100%);
    border-radius: 1rem;
    pointer-events: none;
  }
`;

const FolderIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--bordo) 0%, var(--light-bordo) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
  position: relative;
  z-index: 1;
`;

const FolderTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
  position: relative;
  z-index: 1;
`;

const FolderDescription = styled.p`
  color: var(--link-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const FolderStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--light-bordo);
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const StartTestButton = styled.button`
  background: linear-gradient(135deg, var(--bordo) 0%, var(--light-bordo) 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139, 0, 0, 0.4);
  }
`;


export default function OnlineUcenje() {
  const [currentFolder, setCurrentFolder] = useState<TestFolder | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleFolderSelect = (folder: TestFolder) => {
    setCurrentFolder(folder);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const handleBackToFolders = () => {
    setCurrentFolder(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults || !currentFolder) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!currentFolder) return;
    
    if (currentQuestion < currentFolder.questions.length - 1) {
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
    if (!currentFolder) return;
    
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    if (!currentFolder) return 0;
    
    let correct = 0;
    currentFolder.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const isCorrect = (questionIndex: number, answerIndex: number) => {
    if (!currentFolder) return false;
    return currentFolder.questions[questionIndex].correctAnswer === answerIndex;
  };

  const isSelected = (answerIndex: number) => {
    return selectedAnswers[currentQuestion] === answerIndex;
  };

  if (showResults && currentFolder) {
    const score = calculateScore();
    const percentage = Math.round((score / currentFolder.questions.length) * 100);
    
    return (
      <QuizContainer>
        <QuizHeader>
          <BackButton onClick={handleBackToFolders}>
            ← Povratak na foldere
          </BackButton>
          <h1>Rezultat kviza - {currentFolder.name}</h1>
        </QuizHeader>
        
        <ScoreCard>
          <h2>Rezultat kviza</h2>
          <p>Osvojili ste {score} od {currentFolder.questions.length} tačnih odgovora</p>
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

  if (currentFolder) {
    return (
      <QuizContainer>
        <QuizHeader>
          <BackButton onClick={handleBackToFolders}>
            ← Povratak na foldere
          </BackButton>
          <h1>{currentFolder.name}</h1>
          <p>{currentFolder.description}</p>
        </QuizHeader>

        <QuestionCard>
          <QuestionText>
            Pitanje {currentQuestion + 1} od {currentFolder.questions.length}: {currentFolder.questions[currentQuestion].question}
          </QuestionText>
          
          <OptionsContainer>
            {currentFolder.questions[currentQuestion].options.map((option, index) => (
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
              <p><strong>Objašnjenje:</strong> {currentFolder.questions[currentQuestion].explanation}</p>
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
              {currentQuestion === currentFolder.questions.length - 1 ? 'Završi kviz' : 'Sljedeće'}
            </NavButton>
          )}
        </NavigationButtons>
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <QuizHeader>
        <BackButton href="/">
          ← Povratak na početnu
        </BackButton>
        <h1>Online učenje - B kategorija</h1>
        <p>Odaberite test kategoriju i testirajte svoje znanje sa našim kviz pitanjima</p>
      </QuizHeader>

      <FoldersContainer>
        {testFolders.map((folder) => (
          <FolderCard key={folder.id} onClick={() => handleFolderSelect(folder)}>
            <FolderIcon>📁</FolderIcon>
            <FolderTitle>{folder.name}</FolderTitle>
            <FolderDescription>{folder.description}</FolderDescription>
            <FolderStats>
              <span>{folder.questions.length} pitanja</span>
              <StartTestButton>Započni test</StartTestButton>
            </FolderStats>
          </FolderCard>
        ))}
      </FoldersContainer>
    </QuizContainer>
  );
}