import AddPage from "./pages/AddPage/AddPage";
import EditPage from "./pages/EditPage/EditPage";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
