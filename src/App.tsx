import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
