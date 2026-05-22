import { useEffect, useState } from 'react';
import {
  requestNotificationPermission,
  setupMessageListener,
  saveFCMTokenToBackend,
  removeFCMTokenFromBackend
} from '../config/firebase';

export const useNotifications = (authToken) => {
  const [fcmToken, setFcmToken] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  // Initialize notifications on mount
  useEffect(() => {
    if (!authToken) return;

    const initializeNotifications = async () => {
      try {
        // Register service worker
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/firebase-messaging-sw.js')
            .then((registration) => {
              console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
              console.error('Service Worker registration failed:', error);
            });
        }

        // Request notification permission
        const token = await requestNotificationPermission();
        
        if (token) {
          setFcmToken(token);
          setIsPermissionGranted(true);

          // Save token to backend
          await saveFCMTokenToBackend(token, authToken);

          // Setup message listener
          setupMessageListener((notification) => {
            console.log('New notification received:', notification);
            setNotifications((prev) => [notification, ...prev]);

            // Show toast or alert
            if (notification.data?.type === 'booking_accepted') {
              showNotificationAlert(
                'Booking Accepted',
                notification.body,
                'success'
              );
            } else if (notification.data?.type === 'booking_declined') {
              showNotificationAlert(
                'Booking Declined',
                notification.body,
                'error'
              );
            }
          });
        } else {
          setIsPermissionGranted(false);
        }
      } catch (error) {
        console.error('Error initializing notifications:', error);
      }
    };

    initializeNotifications();

    // Cleanup on unmount
    return () => {
      if (fcmToken && authToken) {
        removeFCMTokenFromBackend(fcmToken, authToken);
      }
    };
  }, [authToken]);

  return {
    fcmToken,
    notifications,
    isPermissionGranted,
    setNotifications
  };
};

// Helper function to show notification alert
const showNotificationAlert = (title, message, type = 'info') => {
  // You can use your toast library here (e.g., react-toastify, react-hot-toast)
  console.log(`[${type.toUpperCase()}] ${title}: ${message}`);
  
  // Example with browser alert (replace with your toast library)
  // alert(`${title}\n${message}`);
};

export default useNotifications;
