import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  // const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid , setFormIsValid] = useState(false); 

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name Input is Valid!");
  //   }
  // }, [enteredNameIsValid]);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if(enteredNameIsValid ){
     formIsValid =true;
    }

  // we can remove this with let formIsValid because it introduce extra cycles of evaluation.

  // useEffect(() =>{
  //     if(enteredNameIsValid ){
  //       setFormIsValid(true);
  //     }else{
  //       setFormIsValid(false);
  //     }
  // },[enteredNameIsValid]);


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value=''; // => not ideal dont manipulate the dom.
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // Ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty . </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
