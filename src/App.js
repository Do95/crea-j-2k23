import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lose from "./lose";
import Questions from "./questions";
import Welcome from "./welcome";
import Win from "./win";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/win" element={<Win />} />
          <Route path="/lose" element={<Lose />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
