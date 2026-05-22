import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCGlmY-ior7xqv_-4PiQcs1CoePb7IDM90',
  authDomain: 'collegepanel-1027b.firebaseapp.com',
  projectId: 'collegepanel-1027b',
  storageBucket: 'collegepanel-1027b.firebasestorage.app',
  messagingSenderId: '335340683871',
  appId: '1:335340683871:web:9142931f719c20be5bd1ea',
  measurementId: 'G-ZX7PQLL6CL'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// VAPID Key
const VAPID_KEY = 'BPERg2BAS_k4Bq2pvQc4CWQq0RJNn_OSPv-qXNSkiYnqi15qWctR8Ha8cBxki22nE7NQi5J2rL1LzDNHHT8Cf3M';

// Request notification permission and get FCM token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted');
      
      // Get FCM token
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
      
      if (token) {
        console.log('FCM Token:', token);
        return token;
      } else {
        console.log('No registration token available');
        return null;
      }
    } else {
      console.log('Notification permission denied');
      return null;
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return null;
  }
};

// Listen for incoming messages
export const setupMessageListener = (callback) => {
  onMessage(messaging, (payload) => {
    console.log('Message received:', payload);
    
    // Handle notification
    if (payload.notification) {
      const notificationData = {
        title: payload.notification.title,
        body: payload.notification.body,
        data: payload.data || {}
      };
      
      // Show browser notification
      if (Notification.permission === 'granted') {
        new Notification(notificationData.title, {
          body: notificationData.body,
          icon: '/logo.png',
          badge: '/logo.png',
          tag: 'pathology-notification',
          requireInteraction: true,
          data: notificationData.data
        });
      }
      
      // Call callback with notification data
      if (callback) {
        callback(notificationData);
      }
    }
  });
};

// Save FCM token to backend
export const saveFCMTokenToBackend = async (token, authToken) => {
  try {
    const response = await fetch('/api/notifications/save-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ token })
    });
    
    const data = await response.json();
    console.log('Token saved to backend:', data);
    return data;
  } catch (error) {
    console.error('Error saving token to backend:', error);
    return null;
  }
};

// Remove FCM token from backend
export const removeFCMTokenFromBackend = async (token, authToken) => {
  try {
    const response = await fetch('/api/notifications/remove-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ token })
    });
    
    const data = await response.json();
    console.log('Token removed from backend:', data);
    return data;
  } catch (error) {
    console.error('Error removing token from backend:', error);
    return null;
  }
};

// Send test notification
export const sendTestNotification = async (authToken) => {
  try {
    const response = await fetch('/api/notifications/test-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        title: 'Test Notification',
        body: 'This is a test notification from Pathology System'
      })
    });
    
    const data = await response.json();
    console.log('Test notification sent:', data);
    return data;
  } catch (error) {
    console.error('Error sending test notification:', error);
    return null;
  }
};

export default messaging;
