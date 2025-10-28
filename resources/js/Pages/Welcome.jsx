import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";

const doctors1 = [
    {
        id: 1,
        employee: {
            name: "د. أحمد علي",
            specialty: {
                title: "أمراض القلب",
            },
            avatar: null,
            license: "جامعة دمشق",
        },
    },
    {
        id: 2,
        employee: {
            name: "د. حسام الشيخ",
            specialty: {
                title: "أمراض الاطفال",
            },
            avatar: null,
            license: "جامعة طرطوس",
        },
    },
    {
        id: 3,
        employee: {
            name: "د. سارة نعيم",
            specialty: {
                title: "أمراض الجهاز العصبي",
            },
            avatar: null,
            license: "جامعة اللاذقية",
        },
    },
];
const aboutCards = [
    {
        icon: "🔧",
        title: "تقنيات متطورة",
        desc: "نستخدم أحدث الأجهزة الطبية والتقنيات التشخيصية لتقديم نتائج دقيقة وسريعة.",
    },
    {
        icon: "🩺",
        title: "رعاية شاملة",
        desc: "برامج علاجية وتشخيصية متكاملة تلبي جميع احتياجات المرضى من الفحص إلى المتابعة.",
    },
];

const whyUsCards = [
    {
        icon: "🏥",
        title: "بنية تحتية متكاملة",
        desc: "مبانٍ مجهزة بأحدث الأنظمة الطبية، وغرف عمليات ذكية، وأجنحة مريحة وآمنة.",
    },
    {
        icon: "🚑",
        title: "خدمة إسعاف على مدار الساعة",
        desc: "أسطول إسعاف مجهز بالكامل مع فرق استجابة سريعة.",
    },
];

const servicesCards = [
    {
        icon: "🔬",
        title: "المختبرات الطبية",
        desc: "تحاليل دقيقة وسريعة (دم، بول، كيمياء حيوية، مناعة، وغيرها).",
    },
    {
        icon: "🛏️",
        title: "الرعاية المركزة",
        desc: "عناية فائقة للحالات الحرجة (ICU، CCU، NICU للأطفال).",
    },
    {
        icon: "🩺",
        title: "عيادات متخصصة",
        desc: "قلب، أعصاب، نساء وتوليد، أطفال، باطنة، عيون، وغيرها.",
    },
    {
        icon: "📅",
        title: "حجز مواعيد أونلاين",
        desc: "يختار المريض الوقت والتاريخ المناسب له حسب أوقات الطبيب.",
    },
];
export default function Welcome({ auth, doctors }) {
    if (doctors.length == 0) {
        doctors = doctors1;
    }

    return (
        <div
            id="toplevel"
            className="text-right text-gray-800 bg-white font-tajawal scroll-smooth"
        >
            <Head title="الرئيسية" />

            <nav className="bg-gradient-to-l from-blue-700 to-blue-900 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className="font-bold">
                    <ApplicationLogo className="w-12 h-12" />
                </div>

                <ul className="flex gap-8 items-center">
                    {[
                        "الرئيسية",
                        "حولنا",
                        "الخدمات",
                        "الأطباء",
                        "اتصل بنا",
                    ].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${
                                    item === "الرئيسية"
                                        ? "home"
                                        : item === "حولنا"
                                        ? "about"
                                        : item === "الخدمات"
                                        ? "services"
                                        : item === "الأطباء"
                                        ? "doctors"
                                        : "contact"
                                }`}
                                className="hover:text-blue-200 transition duration-300 font-medium py-2 px-1 border-b-2 border-transparent hover:border-blue-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="flex gap-4 items-center">
                    {auth.user ? (
                        <div className="flex items-center gap-3">
                            <li>
                                <Link
                                    href={route("dashboard")}
                                    className="bg-white text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-300 shadow"
                                >
                                    لوحة التحكم
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="POST"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
                                >
                                    تسجيل الخروج
                                </Link>
                            </li>
                        </div>
                    ) : (
                        <>
                            <li>
                                <Link
                                    href={route("login")}
                                    className="bg-white text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-300 shadow"
                                >
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("register")}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
                                >
                                    إنشاء حساب
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <section
                id="home"
                className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-32"
            >
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
                        Med Care
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
                        نقدم أحدث خدمات التحاليل المخبرية بدقة عالية وكفاءة
                        متناهية، باستخدام أحدث الأجهزة التقنية وبتقنيات طبية
                        متطورة.
                    </p>
                    <Link
                        href={route("home.about")}
                        className="inline-block mt-4 px-8 py-3 bg-white text-blue-800 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition-transform duration-300 hover:scale-105"
                    >
                        اقرأ المزيد
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        خدماتنا الأساسية
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-l-4 border-blue-500">
                            <div className="text-blue-600 text-3xl mb-4">
                                ❤️
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                معدل ضربات القلب
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                نظام متكامل لمراقبة معدل ضربات القلب على مدار 24
                                ساعة مع تحليل فوري للبيانات وتقارير طبية مفصلة.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-l-4 border-blue-500">
                            <div className="text-blue-600 text-3xl mb-4">
                                🔬
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                الفحوصات المخبرية
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                خدمات تحاليل شاملة وسريعة النتائج بمستوى دقة
                                عالمي، مع فريق تحليل متخصص وأحدث التقنيات
                                المخبرية.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        خدمات متخصصة
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "أطباء متميزون",
                                desc: "فريق طبي من نخبة الأطباء الاستشاريين في مختلف التخصصات الطبية.",
                                icon: "🩺",
                                color: "blue",
                            },
                            {
                                title: "خدمة 24 ساعة",
                                desc: "رعاية شاملة على مدار الساعة بأحدث تقنيات التشخيص والعلاج.",
                                icon: "⏰",
                                color: "blue",
                            },
                            {
                                title: "أقسام الطوارئ",
                                desc: "استقبال الحالات الحرجة 24/7 مع فريق إسعافي محترف.",
                                icon: "🚑",
                                color: "blue",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl text-center transform hover:scale-105 transition duration-300 border border-blue-100"
                            >
                                <div className="text-5xl mb-4 text-blue-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-blue-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="py-16 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        حولنا
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {aboutCards.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-center border border-blue-100"
                            >
                                <div className="text-4xl mb-4 text-blue-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        لماذا تختارنا؟
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {whyUsCards.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-center border border-blue-100"
                            >
                                <div className="text-4xl mb-4 text-blue-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="py-16 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        الخدمات
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {servicesCards.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-center border border-blue-100"
                            >
                                <div className="text-4xl mb-4 text-blue-600">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-blue-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="doctors" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        فريق الأطباء
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {doctors.map((doctor, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border border-blue-100"
                            >
                                <div className="mb-4 relative">
                                    <img
                                        src={
                                            doctor.employee.avatar
                                                ? `/storage/${doctor.employee.avatar}`
                                                : "/images/doctor1.png"
                                        }
                                        alt={doctor.employee.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 transition-all duration-300 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                    {doctor.employee.name}
                                </h3>
                                <p className="text-lg text-blue-600 font-medium">
                                    {doctor.employee.specialty.title}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {doctor.employee.license}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-16 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
                        اتصل بنا
                    </h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-blue-100">
                            <div className="text-blue-600 text-3xl mb-4">
                                📧
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                البريد الإلكتروني
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        info@hospital.com
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        support@hospital.com
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        emergency@hospital.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-blue-100">
                            <div className="text-blue-600 text-3xl mb-4">
                                📞
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-800">
                                أرقام الهاتف
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        +966 123 456 789
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        +966 987 654 321
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="ml-2">
                                        +966 555 666 777
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gradient-to-l from-blue-800  to-blue-900 text-white text-center p-6">
                <div className="container mx-auto">
                    <p className="text-lg">
                        © 2025 Med Care - جميع الحقوق محفوظة.
                    </p>
                    <p className="mt-2 text-blue-200">
                        الرعاية الصحية بمعايير عالمية
                    </p>
                </div>
            </footer>
        </div>
    );
}
