import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Main css
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
