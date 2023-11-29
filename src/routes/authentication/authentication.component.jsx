import SignUpForm from "../../components/sign-up/sign-up.components";
import SignInForm from "../../components/sign-in/sign-in.components";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
