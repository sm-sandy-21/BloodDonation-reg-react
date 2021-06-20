import { BrowserRouter, Route } from "react-router-dom";
import Wellcome from "./Wellcome";
import Signup1 from './Signup/Signup1';
import Signup2 from './Signup/Signup2';
import Signup3 from './Signup/Signup3';
import Signup4 from './Signup/Signup4';
import Signup5 from './Signup/Signup5';
import Signup6 from './Signup/Signup6';
import Signup7 from "./Signup/Signup7";
import Signup8 from './Signup/Signup8';
import Signin from "./Signin";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Wellcome></Wellcome>
        </Route>
        <Route exact path="/signin">
          <Signin></Signin>
        </Route>
        <Route exact path="/signup-1">
          <Signup1></Signup1>
        </Route>
        <Route exact path="/signup-2">
          <Signup2></Signup2>
        </Route>
        <Route exact path="/signup-3">
          <Signup3></Signup3>
          </Route>
          <Route exact path="/signup-4">
          <Signup4></Signup4>
          </Route>
          <Route exact path="/signup-5">
          <Signup5></Signup5>
          </Route>
          <Route exact path="/signup-6">
          <Signup6></Signup6>
          </Route>
          <Route exact path="/signup-7">
          <Signup7></Signup7>
          </Route>
          <Route exact path="/signup-8">
          <Signup8></Signup8>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
