import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Layout from 'components/Layout';
import AnimatedSVG from 'components/loading/animatedSvg';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState('home')
  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  // useEffect(() => {
  //   const handleOnline = () => {
  //     setIsOnline(true);
  //   };

  //   const handleOffline = () => {
  //     setIsOnline(false);
  //   };

  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('Online status:', isOnline ? 'Online' : 'Offline');
  // }, [isOnline]);

  useEffect(() => {
    hideSpinner(); // Hide the spinner when loading is complete
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        showSpinner();
      }, 500);
    }, 2000);

    return () => {clearTimeout(timeout)};
  }, []);

  // Function to hide the spinner by manipulating the DOM
  const hideSpinner = () => {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  };

  const showSpinner = () => {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
      spinner.style.display = 'block'; // Show the spinner
    }
  };

  return (
    <div>
      {isLoading ? (
        <div
          className="h-screen w-screen bg-bg1 flex items-center justify-center"
         
        >
        <AnimatedSVG isLoading={isLoading}/>
          
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout selectedSection={selectedSection} />}>
            <Route path="/" element={<Home setSelectedSection={setSelectedSection}/>} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
