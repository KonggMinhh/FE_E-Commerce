import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Public } from "./pages/public";
import path from "./ultils/path";

function App() {
    return (
        <Routes>
            <Route path={path.PUBLIC} element={<Public />}>
                <Route path={path.HOME} element={<Home />} />
                <Route path={path.LOGIN} element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
