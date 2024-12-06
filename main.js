function calculateBMI() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = parseInt(document.getElementById('ageInput').value);
  const weight = parseFloat(document.getElementById('weightInput').value);
  const height = parseFloat(document.getElementById('heightInput').value) / 100; // Convert cm to meters

  if (!gender || !age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = `
          <div class="alert alert-danger">Please fill all fields correctly.</div>`;
      return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obese';

  document.getElementById('result').innerHTML = `
      <div class="alert alert-success">
          <h4>Your BMI: ${bmi}</h4>
          <p>Category: ${category}</p>
          <p>Gender: ${gender.value}</p>
      </div>`;
}