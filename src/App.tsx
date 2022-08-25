import { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import GlobalStyle from './components/themes/GlobalStyle';
import Theme from './components/themes/Theme';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import ProtectedRoute from './components/ProtectedRoute';
import ReviewPage from './pages/ReviewPage';
import LoadingSpinner from './components/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { Container } from './components/shared/Container';

function App() {
  const navigate = useNavigate();

  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              navigate('/');
            }}
          >
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path='/quiz' element={<QuizPage />} />
                <Route path='/result' element={<ResultPage />} />
                <Route path='/review' element={<ReviewPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Container>
    </Theme>
  );
}

export default App;
