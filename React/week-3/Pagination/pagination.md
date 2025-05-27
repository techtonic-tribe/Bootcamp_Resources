
---

## 📘 **Pagination (UI + Logic)**

> 🎯 Goal: Learn to implement both client-side and server-side pagination, including infinite scroll patterns and managing paginated state.

---

### 🔢 1. Why Pagination?

Pagination improves performance and UX by splitting large data sets into smaller, manageable chunks. It avoids overloading the UI with too much content at once.

---

### 🖥️ 2. Client-Side Pagination

> Load all data at once and paginate it in memory.

#### Example:

```jsx
// PaginatedList.jsx
import { useState } from 'react';

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function PaginatedList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <ul>
        {currentItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
```

---

### 🌐 3. Server-Side Pagination

> Fetch data based on the page number from a server/API.

#### Example:

```jsx
// ServerPaginatedList.jsx
import { useEffect, useState } from 'react';

export default function ServerPaginatedList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.example.com/items?page=${page}`)
      .then(res => res.json())
      .then(data => setData(data.items));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}
```

---

### 🔁 4. Infinite Scroll (Alternative)

> Fetch more data as user scrolls down — used in social feeds.

**Tools**: `react-infinite-scroll-component`, IntersectionObserver, or manual scroll event detection.

---

### 🔎 5. Page State in URL

> Add `?page=2` to URL and sync it with pagination state.

#### Example using `useSearchParams`:

```jsx
import { useSearchParams } from 'react-router-dom';

function PaginatedComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || 1);

  function goToPage(p) {
    setSearchParams({ page: p });
  }

  return (
    <div>
      <p>Current page: {page}</p>
      <button onClick={() => goToPage(page - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => goToPage(page + 1)}>Next</button>
    </div>
  );
}
```

---

### ⚙️ 6. Tools and Libraries

| Tool              | Use Case                            |
| ----------------- | ----------------------------------- |
| `react-paginate`  | Prebuilt pagination components      |
| `react-query`     | Caching and fetching paginated data |
| `SWR`             | Lightweight data fetching           |
| `useSearchParams` | Sync pagination with URL            |

---

### ✅ Summary

| Concept                | Description                            |
| ---------------------- | -------------------------------------- |
| Client-side pagination | Slice loaded data locally              |
| Server-side pagination | Fetch data per page from backend       |
| Infinite scroll        | Load more on scroll                    |
| URL pagination         | Use `?page=2` in the URL               |
| Tools                  | `react-query`, `SWR`, `react-paginate` |

---
