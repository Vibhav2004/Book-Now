const username = document.querySelector("#username");
const email = localStorage.getItem("emailvalues");

if (email) {
    alert("Welcome")
  console.log("Logged in user email:", email);
  // You can now fetch user data using this email
} else {
  console.log("No email found — user might not be logged in");
  // Optionally redirect to login page
}


  fetch(`https://script.google.com/macros/s/AKfycbxi8Y9N77yQIxjBsVUFVdklDf8kaIHrLPbZWVl20uno37pxWh8aSWRlL6k5hB70QtMFCA/exec?email=${email}`)
    .then(response => response.json())
    .then(result => {
      const data = result.data;
      username.innerText=data[0].username
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });

