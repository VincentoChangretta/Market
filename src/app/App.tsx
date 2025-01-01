import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { Header } from "widgets/header";
import { AppRouter } from "./provider/router";



export const App = () => {
     const { theme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Header/>
            <main>
              <AppRouter/>
            </main>
        </div>
    );
}
