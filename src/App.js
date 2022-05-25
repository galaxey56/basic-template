import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  return (
    <div>
    {!isLogin && !isSignin &&
      <div> 
      <Header signin={setIsSignin}/>
      <Banner />
      <Feed />
      </div>
    }
      {isSignin && <SignUp signin={setIsSignin} login={setIsLogin} />}
      {isLogin && <Login signin={setIsSignin} login={setIsLogin} />}
    </div>
  );
}

export default App;
