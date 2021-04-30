import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import './QuizPopup.css';

type Props = {
  onComplete: () => void;
  questions: string[];
  answers: string[][];
};

const QuizPopup = ({ onComplete, questions, answers }: Props): JSX.Element => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[] | null>(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showWrong, setShowWrong] = useState(false);
  const [answersCorrect, setAnswersCorrect] = useState(0);
  const [answeredIndexes, setAnsweredIndexes] = useState<number[]>([]);
  const TOTAL_QUESIONS = 2;
  const COMPLETE_DELAY = 750;
  const WRONG_SHOW_TIME = 1000;

  const shuffleAnswers = (arr: string[]): string[] => {
    const newAnswers = [...arr];
    for (let i = newAnswers.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newAnswers[i], newAnswers[j]] = [newAnswers[j], newAnswers[i]];
    }
    return newAnswers;
  };

  const getRandomQuestionIndex = useCallback(() => {
    return Math.round(Math.random() * (questions.length - 1));
  }, [questions.length]);

  useEffect(() => {
    const randIndex = getRandomQuestionIndex();
    setQuestionIndex(randIndex);
    setShuffledAnswers(shuffleAnswers(answers[randIndex]));
  }, [answers, getRandomQuestionIndex, questions.length]);

  const onAnswerClick = (i: number) => {
    setSelectedAnswerIndex(i);
  };

  const onSubmitClick = () => {
    if (questionIndex !== null && shuffledAnswers !== null && selectedAnswerIndex !== null) {
      if (answers[questionIndex][0] === shuffledAnswers[selectedAnswerIndex]) {
        const newAnswersCorrect = answersCorrect + 1;
        setAnswersCorrect(answersCorrect + 1);
        if (newAnswersCorrect >= TOTAL_QUESIONS) {
          setTimeout(() => {
            onComplete();
          }, COMPLETE_DELAY);
        } else {
          const newAnsweredIndexes: number[] = answeredIndexes;
          newAnsweredIndexes.push(questionIndex);
          setAnsweredIndexes(newAnsweredIndexes);
          setSelectedAnswerIndex(null);
          let randIndex = getRandomQuestionIndex();
          while (newAnsweredIndexes.includes(randIndex)) {
            randIndex = getRandomQuestionIndex();
          }
          setQuestionIndex(randIndex);
          setShuffledAnswers(shuffleAnswers(answers[randIndex]));
        }
      } else {
        setShowWrong(true);
        setTimeout(() => {
          setShowWrong(false);
        }, WRONG_SHOW_TIME);
      }
    }
  };

  return (
    <div className={classNames('QuizPopup', { 'QuizPopup--fadeout': answersCorrect === TOTAL_QUESIONS })}>
      <h1 className="QuizPopup-title">Pop Quiz!</h1>
      {questionIndex !== null && <h1 className="QuizPopup-question">{questions[questionIndex]}</h1>}
      {questionIndex !== null &&
        shuffledAnswers !== null &&
        shuffledAnswers.map((answer, i) => {
          return (
            <div
              className="QuizPopup-banner"
              onClick={() => onAnswerClick(i)}
              onKeyDown={() => onAnswerClick(i)}
              role="button"
              tabIndex={i}
              key={answer}
            >
              <div
                className={classNames('QuizPopup-circle', { 'QuizPopup-circle--selected': selectedAnswerIndex === i })}
              />
              <h1 className="QuizPopup-answer">{answer}</h1>
            </div>
          );
        })}
      <button
        className={classNames('QuizPopup-submit', {
          'QuizPopup-submit--disabled': answersCorrect >= TOTAL_QUESIONS || selectedAnswerIndex === null,
        })}
        onClick={() => onSubmitClick()}
        type="button"
      >
        Submit
      </button>
      <h1 className="QuizPopup-tracker">
        {answersCorrect} / {TOTAL_QUESIONS}
      </h1>
      <div className={classNames('QuizPopup-wrong', { 'QuizPopup-wrong--enabled': showWrong })}>
        <h1 className="QuizPopup-wrong-text">Wrong</h1>
      </div>
    </div>
  );
};

export default QuizPopup;
