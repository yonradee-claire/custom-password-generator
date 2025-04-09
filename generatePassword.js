function generatePassword() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let letterCount = parseInt(document.getElementById('letters').value) || 0;
  let numberCount = parseInt(document.getElementById('numbers').value) || 0;
  let symbolCount = parseInt(document.getElementById('symbols').value) || 0;

  let allChars = [];

  for (let i = 0; i < letterCount; i++) {
    allChars.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  for (let i = 0; i < numberCount; i++) {
    allChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  for (let i = 0; i < symbolCount; i++) {
    allChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  // Shuffle the result
  allChars = allChars.sort(() => Math.random() - 0.5);

  document.getElementById('result').innerText = allChars.join('');

  // Show the copy button only after password is generated
  document.getElementById('copyBtn').style.display = 'block';
}

function copyPassword() {
  const password = document.getElementById('result').innerText; // Get the password from the result
  console.log(password); // Check if password is retrieved correctly
  if (password) {
    navigator.clipboard.writeText(password) // Copy the password to clipboard
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy password: ' + err);
      });
  } else {
    alert('No password to copy!');
  }
}

// Optional: support "Enter" key
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent page reload if inside a form
      generatePassword();
    }
  });
});