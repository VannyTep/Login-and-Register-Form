function RegisterValidation(values) {
  let errors = {};
  const email_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$/;

  return errors;
}

export default RegisterValidation;
