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
                tajawal: ["Tajawal", "sans-serif"],
            },
            backgroundImage: {
                imm: "url('../../public/images/hospitalthree.jpg')",
                safe: "url('../../public/images/safe.png')",
            },
            colors: {
                primary: "#2563EB", // الأزرق الأساسي
                secondary: "#10B981", // الأخضر الثانوي
                neutral: {
                    100: "#F9FAFB",
                    200: "#F3F4F6",
                    500: "#6B7280",
                    800: "#1F2937",
                },
            },
            borderRadius: {
                xl: "1rem",
            },
            boxShadow: {
                soft: "0 2px 10px rgba(0,0,0,0.05)",
            },
        },
    },

    plugins: [forms],
};
