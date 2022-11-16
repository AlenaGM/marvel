import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { MainPage, ComicsPage, SingleComicPage, Page404 } from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/marvel" element={<Navigate to="/" />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
