const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const email = value => emailRegExp.test(value);

export const validators = values => {
  const errors = {};
  const validEmail = email(values.email);

  if(!values.email) {
    errors.email = "Email is required";
  }
  if(values.email && !validEmail) {
    errors.email = "Wrong Email Format";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};