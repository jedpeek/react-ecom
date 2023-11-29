import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";
import "../../components/button/button.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formFields;

    try {
      const repsonse = await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      alert("LOGIN SUCCESFUL");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password and Email do not match");
          break;
        case "auth/invalid-credential":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          className="form-input"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          minLength={6}
          maxLength={20}
          className="form-input"
        />
        <div className="buttons-container">
          <Button buttonType="" onClick={handleSubmit}>
            SIGN IN
          </Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
