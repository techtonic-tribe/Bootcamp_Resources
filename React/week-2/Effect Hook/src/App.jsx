import { useEffect } from 'react';

function App() {

  console.log('Rendering...');

  useEffect(() => {
    console.log('useEffect called!');
  }, );

  return <div></div>;
}

export default App
