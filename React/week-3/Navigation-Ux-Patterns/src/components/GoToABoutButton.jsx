// components/GoToAboutButton.jsx
import { useNavigate } from 'react-router-dom';

export default function GoToAboutButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return <button onClick={handleClick}>Go to About Page</button>;
}
