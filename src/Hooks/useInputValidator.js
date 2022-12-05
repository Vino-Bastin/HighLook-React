import { useState } from "react";

const newObjectGenerator = (obj, key, value) => {
  if (key.includes(".")) {
    const keys = key.split(".");
    return {
      ...obj,
      [keys[0]]: {
        ...obj[keys[0]],
        [keys[1]]: value,
      },
    };
  } else {
    return { ...obj, [key]: value };
  }
};

const useInputValidator = (
  initialState,
  validator = {},
  errorMessages = {}
) => {
  const [userInput, setUserInput] = useState(initialState);

  const onChange = (e) => {
    setUserInput(newObjectGenerator(userInput, e.target.name, e.target.value));
  };

  const onSubmit = () => {
    let error = "";
    let isSuccess = false;

    for (let key of Object.keys(validator)) {
      if (!validator[key](userInput)) {
        error = errorMessages[key];
        break;
      }
    }

    if (!error) isSuccess = true;

    return { error, isSuccess };
  };

  return { userInput, setUserInput, onChange, onSubmit };
};

export default useInputValidator;
