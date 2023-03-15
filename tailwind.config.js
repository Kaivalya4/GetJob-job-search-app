/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./pages/*.js", "./Components/*.jsx", "./pages/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                color1: "#F6F7FB",
                color2: "#1E86FF",
                color3: "white",
                color4: "#B9BDCF", //for faded text
                color5: "#334680", //full-time color
                color6: "#1E86FF", //for back button
            },
            fontFamily: {
                poppins: ["Poppins"],
                roboto: ["roboto"],
            },
            screens: {
                "1sm": "510px",
            },
        },
    },
    plugins: [],
};
