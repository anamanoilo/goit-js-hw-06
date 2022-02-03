const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("All the fields must be filled");
    return;
  }
  const loginObj = {
    email: email.value,
    password: password.value,
  };
  console.log(loginObj);
  event.currentTarget.reset();
}
