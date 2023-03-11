/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./pages/*.js", "./Components/*.jsx"],
    theme: {
        extend: {
            colors: {
                color1: "#F6F7FB",
                color2: "#1E86FF",
                color3: "white",
                color4: "#B9BDCF", //for faded text
                color5: "#334680", //full-time color
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
