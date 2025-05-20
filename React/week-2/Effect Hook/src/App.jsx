


import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [showProfile, setShowProfile] = useState(true);
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <button onClick={() => setShowProfile(prev => !prev)}>
        {showProfile ? 'Hide' : 'Show'} Profile
      </button>

      <button onClick={() => setUserId(id => id + 1)}>
        Next User
      </button>

      {showProfile && <UserProfile userId={userId} />}

    </div>
  );
}

export default App;