import React, { useRef } from "react";

import UserFormGroup from "./UserFormGroup";
import Button from "../../../utils/Button";

import {
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  ROLE,
  PASSWORD,
  CONFIRMPASSWORD,
} from "./userFormTemplate";

const UserData = ({ userData, onSubmit, disabled }) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const role = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  // forwarding ref as a props to the child element
  FIRSTNAME.ref = firstName;
  LASTNAME.ref = lastName;
  EMAIL.ref = email;
  ROLE.ref = role;
  PASSWORD.ref = password;
  CONFIRMPASSWORD.ref = confirmPassword;

  // seting up initial values for user Form
  FIRSTNAME.defaultValue = userData.firstName || "";
  LASTNAME.defaultValue = userData.lastName || "";
  EMAIL.defaultValue = userData.email || "";
  ROLE.defaultValue = userData.role || "tailor";

  const onsubmitHandler = (event) => {
    event.preventDefault();

    // build a new user data based on Ref
    const newUserData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      role: role.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    onSubmit(newUserData);

    // build a new user data based on meta data set on each element
    // let newUserData = {};
    // [...event.target].forEach((element) => {
    //   obj[element.name] = element.value;
    // });
  };

  return (
    <>
      <form className="new-user" onSubmit={onsubmitHandler}>
        {/* create a user input form row */}
        <UserFormGroup
          data={[FIRSTNAME, LASTNAME]}
          disabled={disabled || false}
        />
        <UserFormGroup data={[EMAIL, ROLE]} disabled={disabled || false} />
        <UserFormGroup data={[PASSWORD, CONFIRMPASSWORD]} disabled={false} />
        <Button className="btn btn-primary">Submit</Button>
      </form>
    </>
  );
};

export default UserData;
