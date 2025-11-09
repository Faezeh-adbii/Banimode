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
                porfrosh: "repeat(auto-fit , minmax(130px , 1fr))",
            },

            fontSize: {
                'fluid-xs': 'clamp(0.75rem, 1.5vw + 0.5rem, 0.875rem)',
                'fluid-sm': 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)',
                'fluid-base': 'clamp(1rem, 2vw + 0.5rem, 1.5rem)',
                'fluid-md': 'clamp(1.125rem, 2.5vw + 0.5rem, 1.75rem)',
                'fluid-lg2': 'clamp(1.1rem, 3vw + 0.5rem, 2rem)',
                'fluid-lg1': 'clamp(1.3rem, 3.5vw + 0.5rem, 2.2rem)',
                'fluid-lg': 'clamp(1.5rem, 4vw + 0.5rem, 2.5rem)',
                'fluid-xl': 'clamp(1.75rem, 5vw + 0.5rem, 3rem)',
                'fluid-2xl': 'clamp(2rem, 6vw + 0.5rem, 4rem)',
                'fluid-3xl': 'clamp(2.5rem, 7vw + 0.5rem, 5rem)',
                'fluid-4xl': 'clamp(3rem, 8vw + 0.5rem, 6rem)',
                'fluid-5xl': 'clamp(3.5rem, 9vw + 0.5rem, 7rem)',

            },
        },
    },
    plugins: [require("flowbite/plugin")],
};