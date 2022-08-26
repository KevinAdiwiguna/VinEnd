import MainPage from "./Page/main/MainPage";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <MainPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
