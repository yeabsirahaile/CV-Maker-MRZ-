import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContainer from "./AppContainer";
import AddClient from "./Components/AddClient/AddClient";
import AllClient from "./Components/AllClient/AllClient";
import PreviewPage from "./Components/Preview/PreviewPage";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="createcv" element={<AddClient />} />
          <Route path="allcv" element={<AllClient />} />
          <Route path="preview" element={<PreviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
