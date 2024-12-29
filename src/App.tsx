import { Link, Route, Routes } from "react-router-dom";
import "./App.scss"
import { MainPage } from "./pages/MainPage/MainPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";


export const App = () => {
    return (
        <div className={`app`}>
            <div>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    );
}
