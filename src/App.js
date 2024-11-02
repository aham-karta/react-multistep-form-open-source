import React from 'react';
import PropTypes from 'prop-types';

const MultiStep = ({ steps, currentStep, barColor = '#4A90E2', height = '10px' }) => {
  const progressPercentage = Math.min((currentStep / (steps - 1)) * 100, 100); 

  return (
    <div style={{ width: '100%', margin: '20px 0' }}>
      <div
        style={{
          height,
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            height: '100%',
            backgroundColor: barColor,
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        {[...Array(steps)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: index <= currentStep ? barColor : '#e0e0e0',
            }}
          />
        ))}
      </div>
    </div>
  );
};

MultiStep.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  barColor: PropTypes.string,
  height: PropTypes.string,
};

export default MultiStep;
