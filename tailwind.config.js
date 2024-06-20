/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        fontFamily: {
            main: ["Public Sans", " sans-serif"],
        },
        extend: {
            backgroundImage: {
                menu: "linear-gradient(90deg, #0E947A 8.46%, #0DA487 62.97%)",
                banner: "linear-gradient(90deg, rgba(255, 114, 114, 0.15) 0%, rgba(255, 114, 114, 0.00) 79%)",
                cta: "linear-gradient(90deg, #FF6B6B 0%, #FF4F4F 100%)",
            },

            backgroundColor: {
                primary: "#0DA487",
            },
            colors: {
                primary: "#0DA487",
                "color-text": "#222",
            },
            clipPath: {
                "custom-circle": "circle(50% at 50% 100%)",
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
