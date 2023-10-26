import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ErrorBoundary } from './components/error-boundary';
import Spinner from './shared/spinner/spinner';
import { getTabs } from './api/requests';

const MainPage = lazy(() => import('./pages/main/main.page'));

function App() {
  const [tabs, setTabs] = useState([]);

  const fetchTabs = async () => {
    const responsTabs = await getTabs();

    if (!responsTabs?.error) {
      const sortedResponsTabs = responsTabs.data?.sort((firstTab, secondTab) => firstTab.order - secondTab.order)
      setTabs(sortedResponsTabs);
    }
  }

  useEffect(() => {
    fetchTabs();
  }, [])

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={"/:tabId?"} element={<MainPage tabsData={tabs} />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
