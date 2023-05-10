/*This function is used to check the answers of the auto-evaluation, it CANNOT be used by different evaluation forms with the same question format
To use it for other answers, send an argument of the id of the correct answer then replace the if statements with that argument.
*/

function checkAnswers() {
  // Remove the text-success and text-danger classes from all labels
  const labels = document.getElementsByTagName('label');
  const labelsq2 = document.getElementsByTagName
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.remove('text-success', 'text-danger');
  }

  // Get all the radio buttons by name
  const radios = document.getElementsByName('exampleForm');
  const checklists = document.getElementsByName('exampleForm');

  // Loop through all the radio buttons
  for (let i = 0; i < radios.length; i++) {
    const radio = radios[i];

    // Check if the radio button is checked
    if (radio.checked) {
      // Check if the ID of the selected radio button is equal to the correct answer
      if (radio.id === 'q1a3') {
        // If it's correct, highlight the label green and display a message
        // If it was prev incorrect, then we remove the text danger label and background
        radio.parentElement.querySelector('label').classList.remove('text-danger'); 
        document.getElementById('result').classList.remove("bg-danger");
        
        radio.parentElement.querySelector('label').classList.add('text-success');
        document.getElementById('result').innerHTML = "¡Correcto!";
        document.getElementById('result').classList.add("bg-success");

      } else {
        // If it's incorrect, highlight the label red and display a message
        radio.parentElement.querySelector('label').classList.add('text-danger');
        document.getElementById('result').innerHTML = "Incorrecto. La respuesta correcta es 15.";
        
        document.getElementById('result').classList.add("bg-danger");
      }

      // Exit the loop since we have found the selected radio button
      break;
    }
  }
//Loop through all checklist buttons
  for (let i = 0; i < checklists.length; i++) {
  const checklist = checklists[i];
  if (checklist.checked){
    
  }

  }
}