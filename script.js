// Carousel functionality
let currentImage = 1;
function nextImage() {
  currentImage++;
  if (currentImage > 3) currentImage = 1;
  document.getElementById("carouselImage").src = `https://via.placeholder.com/400x200?text=Image+${currentImage}`;
}

// Quiz functionality
function checkAnswer(answer) {
  const result = document.getElementById("quizResult");
  if (answer === "Delhi") {
    result.textContent = "Correct! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong Answer. Try again.";
    result.style.color = "red";
  }
}

// Fetch Joke from Public API
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
    });
}
