import React from 'react'
import "../styles.css";
const Stepper = ({stepsConfig =[]}) => {
  return (
    <>
        <div className='stepper'>
            {
                stepsConfig.map((step, index) => {
                    return (
                        <div key={step.name} className='step' >
                            <div className='step-number'>{index+1}</div>
                            <div className='step-name'>{step.name}</div>
                        </div>
                    );
                })
            }
        </div>
    </>
  );
};

export default Stepper;     