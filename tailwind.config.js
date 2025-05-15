import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                amirirg: ["amiri-reg"],
                amiribold: ["amiri-bold"],
            },
            backgroundImage: {
                imm: "url('../../public/images/hospitalthree.jpg')",
                safe: "url('../../public/images/safe.png')",
            },
        },
    },

    plugins: [forms],
};
