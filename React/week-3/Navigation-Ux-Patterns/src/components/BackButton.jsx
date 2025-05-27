// components/BackButton.jsx
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Go Back</button>;
}
