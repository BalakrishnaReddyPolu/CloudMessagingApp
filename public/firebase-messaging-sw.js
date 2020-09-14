importScripts("https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBUL7G_ZxfgX5i6dG2lXfCTvgKUHHAv4lQ",
  authDomain: "fir-cloud-messaging-3b92a.firebaseapp.com",
  databaseURL: "https://fir-cloud-messaging-3b92a.firebaseio.com",
  projectId: "fir-cloud-messaging-3b92a",
  storageBucket: "fir-cloud-messaging-3b92a.appspot.com",
  messagingSenderId: "761401962339",
  appId: "1:761401962339:web:3f45b6d67f7fa92ce72d56",
});

const initMessage = firebase.messaging();

//   const messaging = firebase.messaging();
//   messaging.setBackgroundMessageHandler(function(payload) {
//    console.log('[firebase-messaging-sw.js] Received background message ', payload);
//    const notificationTitle = 'Background Message from html';
//     const notificationOptions = {
//      body: 'Background Message body.',
//      icon: '/firebase-logo.png'
//    };

//     return self.registration.showNotification(notificationTitle,
//        notificationOptions);
//   });
