// Your Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAReSJycYUkdyo1h4cLjMYPP7PDaQgqnSM",
    authDomain: "agrovoltaics-dashboard.firebaseapp.com",
    databaseURL: "https://agrovoltaics-dashboard-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "agrovoltaics-dashboard",
    storageBucket: "agrovoltaics-dashboard.appspot.com",
    messagingSenderId: "995470038751",
    appId: "1:995470038751:web:7764884301d48ea42cfb6a",
    measurementId: "G-74PCF59CEX"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Reference to Firebase data
const dataRef = ref(database, "/sensorData");
const ledStatusRef = ref(database, "/Led1Status");

// Get DOM elements
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const ledStatusElement = document.getElementById("ledStatus");

// Listen for changes in data
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        temperatureElement.textContent = data.temperature + " °C";
        humidityElement.textContent = data.humidity + " %";
    } else {
        temperatureElement.textContent = "No data";
        humidityElement.textContent = "No data";
    }
});

// Listen for changes in LED status
onValue(ledStatusRef, (snapshot) => {
    const ledStatus = snapshot.val();
    if (ledStatus === "1") {
        ledStatusElement.textContent = "ON";
    } else if (ledStatus === "0") {
        ledStatusElement.textContent = "OFF";
    } else {
        ledStatusElement.textContent = "Unknown";
    }
});
