import React, { useState, useEffect } from 'react';

const OfflineWarning = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
console.log(isOnline,'isOline?');
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <div className="offline-warning">
          <p>You are currently offline. Please check your internet connection.</p>
        </div>
      )}
    </div>
  );
};

export default OfflineWarning;
