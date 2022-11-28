export const FIRSTNAME = {
  label: "First Name",
  type: "text",
  required: true,
  placeholder: "First Name",
  name: "firstName", // meta Data to build object based on this
};

export const LASTNAME = {
  label: "Last Name",
  type: "text",
  required: true,
  placeholder: "Last Name",
  name: "lastName", // meta Data to build object based on this
};

export const EMAIL = {
  label: "Email",
  type: "email",
  required: true,
  placeholder: "example@example.com",
  name: "email", // meta Data to build object based on this
};

export const ROLE = {
  label: "Role",
  type: "select",
  options: [
    { value: "admin", name: "Admin" },
    { value: "lead-tailor", name: "Lead Tailor" },
    { value: "tailor", name: "Tailor" },
  ],
  name: "role", // meta Data to build object based on this
};

export const PASSWORD = {
  label: "Password",
  type: "password",
  required: true,
  placeholder: "password",
  name: "password", // meta Data to build object based on this
};

export const CONFIRMPASSWORD = {
  label: "Confirm Password",
  type: "password",
  name: "confirmPassword",
  required: true,
  placeholder: "confirm password", // meta Data to build object based on this
};
