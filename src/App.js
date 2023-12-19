
import './App.css';
import AppRouters from './AppRouters';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

    <AppRouters/>
       </BrowserRouter>
    </div>
  );
}

export default App;
