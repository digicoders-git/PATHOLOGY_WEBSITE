// This file is the service worker for Firebase Cloud Messaging
// Place this file in the public folder as public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: 'AIzaSyCGlmY-ior7xqv_-4PiQcs1CoePb7IDM90',
  authDomain: 'collegepanel-1027b.firebaseapp.com',
  projectId: 'collegepanel-1027b',
  storageBucket: 'collegepanel-1027b.firebasestorage.app',
  messagingSenderId: '335340683871',
  appId: '1:335340683871:web:9142931f719c20be5bd1ea',
  measurementId: 'G-ZX7PQLL6CL'
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png',
    badge: '/logo.png',
    tag: 'pathology-notification',
    requireInteraction: true,
    data: payload.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.notification);
  event.notification.close();

  // Open the app or focus existing window
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if there is already a window/tab open with the target URL
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, open a new window/tab with the target URL
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
