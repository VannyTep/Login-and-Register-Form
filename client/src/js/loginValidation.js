function LoginValidation(values) {
  let errors = {};
  const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$/;

  if (values.email === "") {
    errors.email = "Shouldn't be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Shouldn't be empty";
  } else {
    errors.password = "";
  }

  return errors;
}

export default LoginValidation;
