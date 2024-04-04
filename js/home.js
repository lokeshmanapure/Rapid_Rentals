import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

import {getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPsksv8RAmjEZI-VScGCoZ70dnG-HtQFA",
  authDomain: "rapid-rentals-e8019.firebaseapp.com",
  databaseURL: "https://rapid-rentals-e8019-default-rtdb.firebaseio.com",
  projectId: "rapid-rentals-e8019",
  storageBucket: "rapid-rentals-e8019.appspot.com",
  messagingSenderId: "881589718188",
  appId: "1:881589718188:web:0307586e32f86d2f736309",
  measurementId: "G-PBVV4XB0P9" 
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);