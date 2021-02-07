import "./styles.css";
import Test from "./test";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Home, About } from "./Home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/" component={Error} /> */}
      </BrowserRouter>
    </div>
  );
}
