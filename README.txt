GRACE POLYTECHNIC ONLINE LIBRARY SERVICES SYSTEM
Open index.html in a browser (needs internet for the logo and book covers).

DEMO LOGINS (password 1234): admin, acq, cat, circ, student

TURN ON CLOUD SYNC (so accounts work on any device) - free, no server code:
1. Go to https://console.firebase.google.com and create a project.
2. Build > Realtime Database > Create database > Start in TEST mode.
3. Copy the database URL (like https://your-project-default-rtdb.firebaseio.com).
4. Open app.js, find the first line:  var SYNC_URL='';
   Paste your URL between the quotes, save, and reload the site.
Every device using the same URL now shares accounts, books, loans and bookings.
Note: test mode is open to anyone with the URL. Fine for a project demo; for real use
the library needs a proper backend with secure rules.
