import React, { useEffect, useRef, useState } from 'react';
import { useRive } from '@rive-app/react-canvas';
import FallbackAnimation from './FallbackAnimation';

export default function AssistantBot({ state = 'greeting' }) {
  const [riveError, setRiveError] = useState(false);
  
  const { rive, RiveComponent } = useRive({
    src: '/ai-assistant.riv',
    autoplay: true,
    stateMachines: 'State Machine',
    onError: () => setRiveError(true)
  });

  // Create refs for state machine inputs
  const stateInput = useRef(null);

  // Set up state machine inputs when Rive is loaded
  useEffect(() => {
    if (rive) {
      try {
        stateInput.current = rive.stateMachineInputs('State Machine')?.find(
          input => input.name === 'state'
        );
        
        if (!stateInput.current) {
          console.warn('State input not found in Rive file');
          setRiveError(true);
        }
      } catch (error) {
        console.error('Error setting up Rive animation:', error);
        setRiveError(true);
      }
    }
  }, [rive]);

  // Update bot state when prop changes
  useEffect(() => {
    if (stateInput.current) {
      // Map state string to number value for Rive state machine
      const stateValue = 
        state === 'greeting' ? 0 :
        state === 'thinking' ? 1 :
        state === 'confused' ? 2 :
        state === 'celebrating' ? 3 : 0;
      
      stateInput.current.value = stateValue;
    }
  }, [state]);

  // If there's an error with the Rive animation, use the fallback
  if (riveError) {
    return <FallbackAnimation state={state} />;
  }

  return (
    <div className="w-40 h-40 relative">
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
