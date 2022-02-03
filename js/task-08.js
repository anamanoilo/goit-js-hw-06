const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (!elements.email.value || !elements.password.value) {
    alert("All the fields must be filled");
    return;
  }
  const loginObj = {
    [elements[0].name]: elements[0].value,
    [elements[1].name]: elements[1].value,
  };

  console.log(loginObj);
  event.currentTarget.reset();
}
