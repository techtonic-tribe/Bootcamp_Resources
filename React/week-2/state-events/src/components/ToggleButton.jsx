import React, { useState } from 'react';

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>Hello, I am visible!</p>}
    </div>
  );
}
export default ToggleButton;