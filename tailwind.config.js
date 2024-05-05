/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        fontFamily: {
            main: ["Public Sans", " sans-serif"],
        },
        extend: {
            backgroundImage: {
               "menu":
                    "linear-gradient(90deg, #0E947A 8.46%, #0DA487 62.97%)",
            },
            backgroundColor: {
                primary: "#0DA487",
            },
            colors: {
                primary: "#0DA487",
                "color-text": "#222",
            },
        },
        screens: {
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1340px",
            "2xl": "1624px",
        },
    },
    plugins: [],
};
