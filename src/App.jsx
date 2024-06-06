
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import "./App.css"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App