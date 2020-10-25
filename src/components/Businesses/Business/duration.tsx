import React from 'react';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import { DurationDiv } from './styles';

interface DurationProps {
  duration: number;
  uniqueId: number;
  autoStart: boolean;
  onTimerComplete: () => void;
}

const countdownRender = ({ hours, minutes, seconds }: CountdownRenderProps) => 
  <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>

const C: React.FunctionComponent<DurationProps> = ({ duration, uniqueId, autoStart, onTimerComplete }) => {
  const seconds = duration * 1000;

  return (
    <DurationDiv>
      <Countdown
        date={Date.now() + seconds}
        autoStart={autoStart}
        key={uniqueId}
        onComplete={onTimerComplete}
        renderer={countdownRender}
      />
    </DurationDiv>
  )
}

export const Duration = React.memo(C, (prevProps, nextProps) => prevProps.uniqueId === nextProps.uniqueId);
