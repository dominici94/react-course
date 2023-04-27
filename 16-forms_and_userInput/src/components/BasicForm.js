import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastnameInput,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (nameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !lastnameIsValid || !emailIsValid) {
      return;
    }

    console.log(nameInput);
    console.log(lastnameInput);
    console.log(emailInput);

    nameReset();
    lastnameReset();
    emailReset();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameInput}
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty!</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={lastnameInput}
          />
          {lastnameHasError && (
            <p className="error-text">Lastname must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailHasError && (
          <p className="error-text">Email must be a valid address!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
