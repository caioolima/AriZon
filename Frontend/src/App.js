import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Rota usando o nome do evento */}
        <Route path="/event/:eventName" element={<EventDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
