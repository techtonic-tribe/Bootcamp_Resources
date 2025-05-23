
import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); 
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        console.log('Fetching user:', userId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted (component unmounted)');
        } else {
          console.error('Fetch failed:', error);
        }
      }
    };

    fetchUser();

    return () => {
      // This runs on UNMOUNT or before next fetch if userId changes
      controller.abort(); // Cancel the fetch request
      console.log('Cleanup — user fetch canceled');
    };
  }, [userId]); // Runs again if userId changes

  if (!user) return <p>Loading user data...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}
export default UserProfile;