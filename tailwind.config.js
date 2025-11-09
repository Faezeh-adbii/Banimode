/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./node-modules/flowbit/**/*.js"],
    theme: {
        screens: {
            sm: "570px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px"
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                roboto: "Open Sans, sans-serif",
            },
            flex: {
                2: "2 2 0",
            },
            spacing: {
                111: "444px",
                119: "476px",
                135: "540"

            },
            gridTemplateColumns: {
                moarefi: "repeat(auto-fit , minmax(120px , 1fr))",
                shegeftangiz: "repeat(auto-fit , minmax(130px , 1fr))",
            },

            fontSize: {
                "fluid-base": "clamp(1rem, 2vw, 1.5rem)", // برای متن معمولی
                "fluid-lg": "clamp(1.5rem, 4vw, 2.5rem)", // برای عنوان‌ها
                "fluid-lg1": "clamp(1.3rem, 4vw, 2.2rem)", // برای عنوان‌ها
                "fluid-lg2": "clamp(1.1rem, 4vw, 2rem)", // برای عنوان‌ها
                "fluid-sm": "clamp(0.875rem, 1.5vw, 1rem)", // برای متن کوچک
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};