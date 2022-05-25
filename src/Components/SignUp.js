import React from "react";
import styles from "./Signup.module.css";

const SignUp = (props) => {

  const signInHandler = () => {
    props.signin(prevState => !prevState)
  }
  const loginHandler = () => {
    signInHandler();
    props.login(prevState => !prevState);
  }
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={`${styles.width}`}>
          <button className={styles.close} onClick={signInHandler}>X</button>
          <p className="text-center" style={{ color: "darkgreen" }}>
            Let's learn, share and inspire each other with our passion for
            computer engineering. Sign up now
          </p>
          <div className={styles.header}>
            <h4>Create Account</h4>
            <h6>
              Already have an account? <a href="/#" onClick={loginHandler}>Sign In</a>{" "}
            </h6>
          </div>
          <div className={`row ${styles.res}`}>
            <div className={`${styles.names} col`}>
              <input type="text" placeholder="FirstName"></input>
              <input type="text" placeholder="LastName"></input> <br />
              <input type="text" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
              <button className="btn btn-primary">Create Account</button>
              <div className={styles.social}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                Sign in with facebook
              </div>
              <div className={`${styles.social}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Sign in with Google
              </div>
              <br />
              <br />
              <div className={`text-center ${styles.a}`}>Forgot password?</div>
            </div>
            <div className={`col`}>
              <img
                className={styles.img}
                src="https://onlineacademiccommunity.uvic.ca/callmebog/wp-content/uploads/sites/219/2017/05/ComputerLanguages.jpg"
                alt="cartoon"
              ></img>
              <br />
              <br />
              <p style={{ fontSize: "0.8rem" }}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
