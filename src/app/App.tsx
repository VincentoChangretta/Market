import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./provider/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { classNames } from "shared/lib/helpers/classNames/classNames";



export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
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
