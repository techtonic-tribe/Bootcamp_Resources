// PaginatedList.jsx
import { useState } from 'react';

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const ITEMS_PER_PAGE = 5;

export default function PaginatedList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Paginated List</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
