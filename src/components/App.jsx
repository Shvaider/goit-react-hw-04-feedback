import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    switch(e) {
     case 'good':
       setGood(prevState => prevState + 1);
       break;
     case 'neutral':
       setNeutral(prevState => prevState + 1);
       break;
     case 'bad':
       setBad(prevState => prevState + 1);
       break;
   
       default:
         break;
       }
   };

  function countTotalFeedback() {
    return good + neutral + bad;
  };

  function countPositionFeedbackPercentage( total, good ) {
    if(!total) {
      return;
    }
    const percentage = Math.round((good / total) * 100);
		return percentage;
  };

    const options = [ 'good', 'neutral', 'bad' ];
    const total = countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositionFeedbackPercentage( total, good )}
            />
          </Section>
        )}
      </>
    );
  }
