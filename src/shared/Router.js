import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
import Todos from "../pages/Todos";
import Todo from "../pages/Todo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/add" element={<AddTodo />} />
                <Route path="/works" element={<Todos />} />
                <Route path="/work/:id" element={<Todo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router