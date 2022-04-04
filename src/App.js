import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./components/pages/HomePage/HomePage";
import ReviewsPage from "./components/pages/ReviewsPage/ReviewsPage";
import DashBoardPage from "./components/pages/DashboardPage/DashBoardPage";
import BlogsPage from "./components/pages/BlogsPage/BlogsPage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="reviews" element={<ReviewsPage />}></Route>
                <Route path="dashboard" element={<DashBoardPage />}></Route>
                <Route path="blogs" element={<BlogsPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
