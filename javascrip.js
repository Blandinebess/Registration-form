document.getElementById("registerForm").onsubmit = function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const birthdate = document.getElementById("birthdate").value;
  const interests = Array.from(
    document.querySelectorAll('input[name="interests"]:checked')
  ).map((checkbox) => checkbox.value);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Birthdate:</strong> ${birthdate}</p>
    <p><strong>Interests:</strong> ${interests.join(", ")}</p>
  `;
};
