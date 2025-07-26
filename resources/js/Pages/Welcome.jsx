// import ApplicationLogo from "@/Components/ApplicationLogo";
// import { Link } from "@inertiajs/react";

import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

// export default function Welcome({ auth, patient_num, doctors_num }) {
//     return (
//         <>
//             <header className="bg-white py-2 shadow-md">
//                 <div className="container mx-auto px-4 flex items-center justify-between">
//                     <h1 className="text-2xl font-bold text-gray-800">
//                         <ApplicationLogo />
//                     </h1>
//                     <nav>
//                         <ul className="flex space-x-6 gap-5">
//                             {auth.user ? (
//                                 <>
//                                     {" "}
//                                     <li className="bg-cyan-700 text-white p-2 rounded-md">
//                                         <Link
//                                             href={route("dashboard")}
//                                             className=""
//                                         >
//                                             الصفحة الرئيسية
//                                         </Link>
//                                     </li>
//                                     <li className="bg-cyan-700 text-white p-2 rounded-md">
//                                         <Link
//                                             href={route("logout")}
//                                             className=""
//                                             method="POST"
//                                         >
//                                             تسجيل الخروج
//                                         </Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <>
//                                     {" "}
//                                     <li className="bg-cyan-700 text-white p-2 rounded-md">
//                                         <Link
//                                             href={route("login")}
//                                             className=""
//                                         >
//                                             تسجيل الدخول
//                                         </Link>
//                                     </li>
//                                     <li className="bg-cyan-700 text-white p-2 rounded-md">
//                                         <Link
//                                             href={route("register")}
//                                             className=""
//                                         >
//                                             إنشاء حساب
//                                         </Link>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             <section className="bg-blue-500 py-20 bg-imm bg-cover h-[600px]"></section>

//             <section className="py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="bg-white shadow-md rounded-lg p-6">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4">
//                                 عدد الاطباء
//                             </h3>
//                             <p className="text-gray-600">{doctors_num}</p>
//                         </div>
//                         <div className="bg-white shadow-md rounded-lg p-6">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4">
//                                 عدد الزوار
//                             </h3>
//                             <p className="text-gray-600">{patient_num}</p>
//                         </div>
//                         <div className="bg-white shadow-md rounded-lg p-6">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4">
//                                 خبرات عالمية
//                             </h3>
//                             <p className="text-gray-600">
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Nullam et.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <footer className="bg-gray-800 py-6">
//                 <div className="container mx-auto px-4 text-center text-white">
//                     <p>&copy; جميع الحقوق محفوظة 2025.</p>
//                 </div>
//             </footer>
//         </>
//     );
// }

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
            className=" text-right text-gray-800 bg-gray-50 font-amirirg scroll-smooth"
        >
            <nav className="bg-blue-800 text-white p-2 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className=" font-bold">
                    {" "}
                    <ApplicationLogo className=" w-10 h-10" />
                </div>
                <ul className="flex gap-6 items-center">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            الرئيسية
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            حولنا
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            الخدمات
                        </a>
                    </li>
                    <li>
                        <a
                            href="#doctors"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            الاطباء
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            اتصل بنا
                        </a>
                    </li>
                </ul>
                <ul className="flex gap-6 items-center">
                    {auth.user ? (
                        <div className="flex items-center gap-2">
                            <li>
                                <Link
                                    href={route("dashboard")}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    الصفحة الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="POST"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
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
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("register")}
                                    className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
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
                className="relative bg-center bg-cover text-white text-center bg-imm object-top"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 p-20">
                    <h1 className="text-4xl font-bold mb-4 drop-shadow-lg animate-fade-in-down">
                        Med Care
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto animate-fade-in-up">
                        نقدم أحدث خدمات التحاليل المخبرية بدقة عالية وكفاءة
                        متناهية، باستخدام أحدث الأجهزة التقنية.
                    </p>
                    <Link
                        href={route("home.about")}
                        className="inline-block  mt-6 px-8 py-3 bg-yellow-500 text-blue-800 font-semibold rounded-full shadow hover:bg-yellow-600 transition-transform duration-300 hover:scale-105"
                    >
                        اقرأ المزيد
                    </Link>
                </div>
            </section>

            <section className="p-10 bg-white">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    خدماتنا الأساسية
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">
                            معدل ضربات القلب
                        </h3>
                        <p>
                            نظام متكامل لمراقبة معدل ضربات القلب على مدار 24
                            ساعة مع تحليل فوري للبيانات.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">
                            الفحوصات المخبرية
                        </h3>
                        <p>
                            خدمات تحاليل شاملة وسريعة النتائج بمستوى دقة عالمي،
                            مع فريق تحليل متخصص.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-10 bg-gray-50">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    خدمات متخصصة
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "أطباء متميزون",
                            desc: "فريق طبي من نخبة الأطباء الاستشاريين في مختلف التخصصات الطبية.",
                            icon: "🩺",
                        },
                        {
                            title: "خدمة 24 ساعة",
                            desc: "رعاية شاملة على مدار الساعة بأحدث تقنيات التشخيص والعلاج.",
                            icon: "⏰",
                        },
                        {
                            title: "أقسام الطوارئ",
                            desc: "استقبال الحالات الحرجة 24/7 مع فريق إسعافي محترف.",
                            icon: "🚑",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-2xl text-center transform hover:scale-105 transition duration-300"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about" className="p-10 bg-white pt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">حولنا</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {aboutCards.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 text-center"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* لماذا نختارنا */}
            <section className="p-10 bg-gray-50">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    لماذا تختارنا؟
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {whyUsCards.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition duration-300 text-center"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="services" className="p-10 bg-white pt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">الخدمات</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesCards.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 text-center"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <h3 className="text-lg font-bold mb-2">
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/*  */}
            <section id="doctors" className="p-10 bg-gray-50 pt-20">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
                    الأطباء
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
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
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                                {" "}
                                {doctor.employee.name}
                            </h3>
                            <p className="text-lg text-gray-700 font-medium">
                                {" "}
                                {doctor.employee.specialty.title}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                {doctor.employee.license}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="p-10 bg-gray-50">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    اتصل بنا
                </h2>
                <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">
                            📧 البريد الإلكتروني
                        </h3>
                        <ul className="space-y-2">
                            <li>info@hospital.com</li>
                            <li>support@hospital.com</li>
                            <li>emergency@hospital.com</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">
                            📞 أرقام الهاتف
                        </h3>
                        <ul className="space-y-2">
                            <li>+966 123 456 789</li>
                            <li>+966 987 654 321</li>
                            <li>+966 555 666 777</li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-800 text-white text-center p-4 mt-8">
                © 2025 Med Care - جميع الحقوق محفوظة.
            </footer>
        </div>
    );
}
