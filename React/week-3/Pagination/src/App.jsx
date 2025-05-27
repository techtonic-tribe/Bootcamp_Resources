// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginatedList from './pages/PaginatedList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginatedList />} />
      </Routes>
    </BrowserRouter>
  );
}

