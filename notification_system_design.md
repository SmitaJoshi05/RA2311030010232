# Stage 1 & 2 Design

## Architecture
Frontend (React) → Backend (Node.js) → External API

## Features
- Fetch notifications
- Priority sorting (Placement > Result > Event)
- Pagination support
- Filtering by type
- Responsive UI

## Logging
- Custom logging middleware used
- Logs API calls, errors, and operations

## Performance
- Sorting: O(n log n)
- Pagination reduces load
- Can be optimized using heap

## Error Handling
- API failures logged
- Graceful fallback in UI