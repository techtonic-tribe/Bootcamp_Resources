// pages/Home.jsx
import { useRef } from 'react';
import GoToAboutButton from '../components/GoToABoutButton';
export default function Home() {
  const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={scrollToSection}>Scroll to Info Section</button>

      <br /><br />
        <GoToAboutButton />
      <div style={{ height: '100vh' }}></div>
      <div ref={sectionRef} style={{ padding: '2rem', backgroundColor: '#ccc' }}>
        <h2>Info Section</h2>
        <p>This is the section we scrolled to.</p>
      </div>
    </div>
  );
}
