importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AlzaSyDnIdricKo_t7ZJtXpQrVH79Ztw3jpDvCl",
  authDomain: "brasylia-a7dd8.firebaseapp.com",
  projectId: "brasylia-a7dd8",
  storageBucket: "brasylia-a7dd8.appspot.com",
  messagingSenderId: "765568911436",
  appId: "1:765568911436:web:64000d2d621492d25d4ce9"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Mensagem em segundo plano recebida:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
