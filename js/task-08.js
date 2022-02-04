const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value.trim()) {
    alert("All the fields must be filled");
    return;
  }
  const loginObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(loginObj);
  event.currentTarget.reset();
}
