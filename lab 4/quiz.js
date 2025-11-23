// Quiz questions array
const quizQuestions = [
  { question: "What is the largest mammal in the world?", answer: "blue whale" },
  { question: "Which element has the atomic number 1?", answer: "hydrogen" },
  { question: "Who painted the Mona Lisa?", answer: "leonardo da vinci" },
  { question: "What is the currency of Japan?", answer: "yen" },
  { question: "What is the hardest natural substance on Earth?", answer: "diamond" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    // Prompt for user input
    const userAnswer = prompt(quizQuestions[i].question);

    // Normalize the input (case-insensitive and trimmed)
    if (
      userAnswer &&
      userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
    ) {
      alert("Correct!");
      score++;
    } else {
      alert(
        "Wrong! The correct answer is: " +
          quizQuestions[i].answer
      );
    }
  }

  // Show final score
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// Run the Quiz
runQuiz();
