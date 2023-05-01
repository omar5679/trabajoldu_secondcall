function checkAnswers() {
  console.log('checkAnswers function was triggered');
  const correctAnswers = ['15'];
  const userAnswers = [
    document.querySelector('input[name="q1a1"]:checked').value,
    document.querySelector('input[name="q1a2"]:checked').value,
    document.querySelector('input[name="q1a3"]:checked').value,
    document.querySelector('input[name="q1a4"]:checked').value,
    document.querySelector('input[name="q1a5"]:checked').value,
  ];
  for (let i = 0; i < userAnswers.length; i++) {
    const answer = userAnswers[i];
    const questionEl = document.getElementById(`question${i+1}`);
    if (answer === correctAnswers[i]) {
      questionEl.classList.add('correct');
    } else {
      questionEl.classList.add('incorrect');
      const incorrectInput = questionEl.querySelector(`input[value="${answer}"]`);
      if (incorrectInput) {
        incorrectInput.parentNode.style.backgroundColor = 'red';
      }
      const correctInput = questionEl.querySelector(`input[value="${correctAnswers[i]}"]`);
      if (correctInput) {
        correctInput.parentNode.style.backgroundColor = 'green';
      }
    }
  }
}
