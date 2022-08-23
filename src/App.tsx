import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
