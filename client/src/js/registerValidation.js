function RegisterValidation(values) {
  let errors = {};
  const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$/;

  if (values.username === "") {
    errors.username = "Shouldn't be empty";
  } else {
    errors.username = "";
  }

  if (values.email === "") {
    errors.email = "Shouldn't be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Shouldn't be empty";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password didn't match";
  } else {
    errors.password = "";
  }

  if (values.confirmed_password === "") {
    errors.confirmed_password = "Shouldn't be empty";
  } else if (!values.confirmed_password === values.password) {
    errors.confirmed_password = "Didn't match";
  } else {
    errors.confirmed_password = "";
  }

  return errors;
}

export default RegisterValidation;
