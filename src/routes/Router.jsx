import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import Comment from "../pages/Comment";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { ContextGlobal } from "../components/global/contextGlobal";

function Router() {

    const context = useContext(ContextGlobal)

    function ProtectedRoute({ children, redirectTo }) {
        const loged = context.isLogged
        return (loged) ? children : <Navigate to={redirectTo} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path={"/post"} element={<Post />}
                />
                <Route path={"/comments/:postId"} element={
                     
                        <Comment />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router