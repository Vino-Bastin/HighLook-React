import React from "react";
import Select from "../../../utils/Select";

const UserRoleOptions = [
  { value: "admin", name: "Admin" },
  { value: "lead-tailor", name: "Lead Tailor" },
  { value: "tailor", name: "Tailor" },
];

const UserForm = ({ value, onChange, disabled }) => {
  console.log(value);

  if (!value) return <></>;

  return (
    <>
      <div className="row">
        <div className="form-group col-sm">
          <label className="form-label">First Name</label>
          <input
            autoFocus={value.firstName === ""}
            className="form-control"
            type="text"
            disabled={disabled}
            required={true}
            value={value.firstName}
            onChange={onChange}
            name="firstName"
          />
        </div>
        <div className="form-group col-sm">
          <label className="form-label">last Name</label>
          <input
            className="form-control"
            type="text"
            required={true}
            disabled={disabled}
            value={value.lastName}
            onChange={onChange}
            name="lastName"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            required={true}
            disabled={disabled}
            value={value.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="form-group col-sm">
          <label className="form-label">Email</label>
          <Select
            disabled={disabled}
            options={UserRoleOptions}
            value={value.role}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm">
          <label className="form-label">Password</label>
          <input
            autoFocus={value.firstName !== ""}
            className="form-control"
            type="password"
            required={true}
            value={value.password || ""}
            onChange={onChange}
            name="password"
          />
        </div>
        <div className="form-group col-sm">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            required={true}
            value={value.confirmPassword || ""}
            onChange={onChange}
            name="confirmPassword"
          />
        </div>
      </div>
    </>
  );
};

export default UserForm;
