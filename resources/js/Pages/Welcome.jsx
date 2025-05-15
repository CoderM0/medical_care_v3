import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <header className="bg-white py-6 shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                        <ApplicationLogo />
                    </h1>
                    <nav>
                        <ul className="flex space-x-6 gap-5">
                            {/* <li>
                                <a href="#" className="hover:text-blue-500">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Contact
                                </a>
                            </li> */}
                            <li className="bg-cyan-700 text-white p-2 rounded-md">
                                <Link href={route("login")} className="">
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li className="bg-cyan-700 text-white p-2 rounded-md">
                                <Link href={route("register")} className="">
                                    إنشاء حساب
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="bg-blue-500 py-20 bg-imm bg-cover h-[600px]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4"></h2>
                    <p className="text-lg text-white mb-8"></p>
                    <Link
                        href={route("patient.dashboard")}
                        className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 mt-96 border border-blue-500"
                    >
                        ابدأ الان
                    </Link>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                العمليات
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam et.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                عدد الزوار
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam et.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                خبرات عالمية
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam et.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-4 text-center text-white">
                    <p>&copy; جميع الحقوق محفوظة 2025.</p>
                </div>
            </footer>
        </>
    );
}
