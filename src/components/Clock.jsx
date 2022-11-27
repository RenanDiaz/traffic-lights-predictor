import React, { useEffect, useState } from 'react';

const clockTile = {
  color: 'white',
  textAlign: 'left',
};

const clockSpan = {
  padding: '4px',
};

let runner;

export function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-UK', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );

  useEffect(() => {
    runner = setInterval(() => {
      const newTime = new Date().toLocaleTimeString('en-UK', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(newTime);
    }, 500);
    return () => {
      if (runner) {
        clearInterval(runner);
      }
    };
  }, []);

  return (
    <div style={clockTile}>
      <span style={clockSpan}>{time}</span>
    </div>
  );
}
