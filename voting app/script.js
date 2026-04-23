function checkEligibility() {
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let country = document.getElementById("country").value;

  let result = document.getElementById("result");

  // Validation
  if (name === "" || age === 0) {
    result.innerText = "Please enter your name and age.";
    result.style.color = "orange";
    return;
  }

  // Voting logic
  if (age >= 18) {
    result.innerText = `🎉 Hello ${name}, you are eligible to vote!`;
    result.style.color = "green";
  } else {
    let yearsLeft = 18 - age;
    result.innerText = `⛔ Hello ${name}, you are not eligible to vote.\nYou have ${yearsLeft} year(s) left.`;
    result.style.color = "red";
  }
}