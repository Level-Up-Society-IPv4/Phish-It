import './App.css';
import { useState } from 'react';

const segments = [
  {
    text: 'From:',
    options: [
      {
        text: 'support@facedook.com',
        points: 100,
        description: 'facedook.com looks a lot like facebook.com, '
          + 'so it might fool Betsy into thinking you are Facebook.'
      },
      {
        text: 'badperson@badperson.com',
        points: 0,
        description: 'Your email says you are a bad person! Now nobody will trust you.'
      }
    ]
  },
  {
    text: 'Subject:',
    options: [
      {
        text: 'URGENT: Your account was hacked',
        points: 100,
        description: 'Urgent emails are great for grabbing attention!'
      },
      {
        text: 'Helo from you friends at Facebook',
        points: 50,
        description: 'Typos scare away savvy users, which can be good or bad. '
          + 'You do not want to waste time on users who are too cautious for your scams, '
          + 'but you do not want to deter all potential targets.'
      },
      {
        text: 'Hi! We want to get to know you',
        points: 0,
        description: 'This subject is relaxing and calm, and calm users are harder to scam.'
      }
    ]
  }
]

function App() {
  const [previousSelections, setPreviousSelections] = useState([]);
  const [selection, setSelection] = useState(null);
  const [points, setPoints] = useState(0);

  const currentSegmentIndex = previousSelections.length;
  const currentSegment = currentSegmentIndex < segments.length ? segments[currentSegmentIndex] : null;
  const selectedOption = selection === null ? null : currentSegment.options[selection];

  const select = (optionIndex) => {
    setSelection(optionIndex);
    const option = currentSegment.options[optionIndex];
    setPoints((points) => points + option.points);
  };
  const proceed = () => {
    setSelection(null);
    setPreviousSelections(selectedOptions => selectedOptions.concat(selection));
  };

  return (
    <div className="App">
      <h1>Phish Betsy</h1>
      {
        previousSelections.map((optionIndex, segmentIndex) => {
          const segment = segments[segmentIndex];
          const option = segment.options[optionIndex];
          return <p>{segment.text} {option.text}</p>;
        })
      }
      {
        currentSegment ? (
          <>
            <p>
              {
                currentSegment.text
              }
              {
                selectedOption === null ? '' : ` ${selectedOption.text}`
              }
            </p>
            {
              selectedOption === null ? currentSegment.options.map((option, optionIndex) => (
                <button
                  className="option"
                  onClick={() => select(optionIndex)}
                >
                  {option.text}
                </button>
              )) : (
                <>
                  <p>{selectedOption.description}</p>
                  <button
                    className="option"
                    onClick={proceed}
                  >
                    {
                      currentSegmentIndex === segments.length - 1 ? 'Finish' : 'Next'
                    }
                  </button>
                </>
              )
            }
          </>
        ) : (
          <p>Score: {points}</p>
        )
      }
    </div>
  );
}

export default App;
