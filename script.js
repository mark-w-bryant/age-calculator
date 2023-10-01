// Write your code below
const form = document.querySelector('form');
const birthdateInput = document.querySelector('#birthdate');
const ageOutput = document.querySelector('#age');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const birthdateString = birthdateInput.value;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if(!dateRegex.test(birthdateString)) {
    alert('Please enter a valid birthdat in MM/DD/YYYY format.');
    return;
  }
  const birthdate = new Date(birthdateString);
  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  ageOutput.textContent = `You are ${age} years old.`;
})

form.addEventListener('reset', function() {
  ageOutput.textContent = null;
});