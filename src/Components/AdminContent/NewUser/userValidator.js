export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "tailor",
  password: "",
  confirmPassword: "",
};

export const validator = {
  firstName: ({ firstName }) => firstName !== "" && firstName.length > 2,
  lastName: ({ lastName }) => lastName !== "",
  email: ({ email }) => email.includes("@") && email !== "",
  password: ({ password }) => password !== "" && password.length > 8,
  confirmPassword: ({ confirmPassword, password }) =>
    password === confirmPassword,
};

export const errorMessages = {
  firstName: "Please Provide valid First Name",
  lastName: "Please Provide valid Last Name",
  email: "Please Provide valid email",
  password:
    "Please Provide valid password and password must have at least 9 characters",
  confirmPassword: "Password and Confirm Password Must be Same",
};
