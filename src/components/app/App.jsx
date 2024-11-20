import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Description from '../description/Description';
import Options from '../options/Options';
import Feedback from '../feedback/Feedback';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem('Feedback'));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });
  function updateFeedback(feedbackType) {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  }
  useEffect(() => {
    window.localStorage.setItem('Feedback', JSON.stringify(feedback));
  }, [feedback]);
  function resetFeedback() {
    window.localStorage.clear();
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );
  const positiveFeedback = totalFeedback
    ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    : 0;
  return (
    <>
      <Description />
      <Options
        buttons={feedback}
        handleClick={updateFeedback}
        showReset={totalFeedback > 0}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback names={feedback} positiveFeedback={positiveFeedback} />
      ) : (
        <p className="no-feedback">No feedback yet</p>
      )}
    </>
  );
}

export default App;