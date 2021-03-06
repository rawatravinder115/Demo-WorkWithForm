// import { useEffect, useRef, useState } from "react";

import UseInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    InputBlurHandler: nameBlurHandler,
    rest: resetNameInput,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = UseInput(value => value.includes("@"));
  // const nameInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [formIsValid , setFormIsValid] = useState(false);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name Input is Valid!");
  //   }
  // }, [enteredNameIsValid]);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // // const enteredNameIsValid = enteredName.trim() !== "";
  // // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // we can remove this with let formIsValid because it introduce extra cycles of evaluation.

  // useEffect(() =>{
  //     if(enteredNameIsValid ){
  //       setFormIsValid(true);
  //     }else{
  //       setFormIsValid(false);
  //     }
  // },[enteredNameIsValid]);

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  //   // if (enteredName.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value=''; // => not ideal dont manipulate the dom.
    resetNameInput();
    resetEmailInput();

    // setEnteredName("");
    // setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // Ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty . </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
