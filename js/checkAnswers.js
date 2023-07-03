/*This function is used to check the answers of the auto-evaluation, it CANNOT be used by different evaluation forms with the same question format
To use it for other answers, send an argument of the id of the correct answer then replace the if statements with that argument.
*/

function checkAnswers() {
  // Remove the text-success and text-danger classes from all labels
  const labels = document.getElementsByTagName('label');
  
  
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.remove('text-success', 'text-danger');
  }

  let score = 0; // Initialize the score
  // Get all the radio buttons by name
  const radios = document.getElementsByName('exampleForm');
  const checklists = document.getElementsByName('exampleForm2');
  const checklist = checklists[0];
  // Loop through all the radio buttons
  for (let i = 0; i < radios.length; i++) {
    const radio = radios[i];

    // Check if the radio button is checked
    if (radio.checked) {
      // Check if the ID of the selected radio button is equal to the correct answer
      if (radio.id === 'q1a3') {
        // If it's correct, highlight the label green and display a message
        // If it was prev incorrect, then we remove the text danger label and background
        score++;
        radio.parentElement.querySelector('label').classList.remove('text-danger'); 
        document.getElementById('result').classList.remove("bg-danger");
        
        radio.parentElement.querySelector('label').classList.add('text-success');
        document.getElementById('result').innerHTML = "¡Correcto!";
        document.getElementById('result').setAttribute('tabindex', '0');
        document.getElementById('result').classList.add("bg-success");
        

      } else {
        // If it's incorrect, highlight the label red and display a message
        radio.parentElement.querySelector('label').classList.add('text-danger');
        document.getElementById('result').setAttribute('tabindex', '0');
        document.getElementById('result').innerHTML = "Incorrecto.";
        
        document.getElementById('result').classList.add("bg-danger");
      }

      // Exit the loop since we have found the selected radio button
      break;
    }
  }
//Loop through all checklist buttons
  let correctAnswers = ["radio2Example1", "radio2Example2", "radio2Example5"];
  let selectedAnswers = [];

  // Traverse through the checkboxes and get the selected answers
  let checkboxes = document.getElementsByName("exampleForm2");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedAnswers.push(checkboxes[i].id);
    }
  }

  // Check if correct answers and selected answers are equal
  let isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every((value, index) => value === correctAnswers[index]);

  // Display a message to the user based on the result
  if (isCorrect) {
        // If it's correct, highlight the label green and display a message
        // If it was prev incorrect, then we remove the text danger label and background
        score++;
        checklist.parentElement.querySelector('label').classList.remove('text-danger'); 
        document.getElementById('result2').classList.remove("bg-danger");
        document.getElementById('result2').innerHTML = "¡Correcto!";
        document.getElementById('result2').setAttribute('tabindex', '0');
        document.getElementById('result2').classList.add("bg-success");

      } 
      else {
        // If it's incorrect, highlight the label red and display a message
        
        document.getElementById('result2').innerHTML = "Incorrecto.";
        document.getElementById('result2').setAttribute('tabindex', '0');
        document.getElementById('result2').classList.add("bg-danger");
      }
      
      // Check if short answer question is correct
      const userAnswer = document.getElementById("form4Example3").value.toLowerCase();
  
 
      if (userAnswer === "fopen"||userAnswer === "fopen()") {
        score++;
        console.log("Correct answer!");
        checklist.parentElement.querySelector('label').classList.remove('text-danger'); 
        document.getElementById('result3').classList.remove("bg-danger");
        document.getElementById('result3').innerHTML = "¡Correcto, muy bien!";
        document.getElementById('result3').classList.add("bg-success");
        document.getElementById('result3').setAttribute('tabindex', '0');
      }
      else {
        console.log("Incorrect answer!");
        document.getElementById('result3').innerHTML = "Incorrecto.";
        document.getElementById('result3').classList.add("bg-danger");
        document.getElementById('result3').setAttribute('tabindex', '0');

      }
      const reviewSession = document.getElementById('reviewSession');
      reviewSession.innerHTML = `<strong>Nota: ${score}/3</strong>`;
    
      if (score === 3) {
        reviewSession.innerHTML += "<br>¡Felicidades! Respondiste todas las preguntas correctamente.";
      } else {
        reviewSession.innerHTML += "<br>Revise sus preguntas y vuelva a intentarlo.";
      }
}