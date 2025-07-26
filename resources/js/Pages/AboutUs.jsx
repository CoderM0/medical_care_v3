import { Link } from "@inertiajs/react";

export default function AboutUs() {
    return (
        <div className="font-amiribold text-right text-gray-800 bg-gray-50 min-h-screen flex flex-col justify-between">
            <nav className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
                <div className="text-xl font-bold">عن المنصة</div>
                <ul className="flex gap-4 items-center">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-yellow-300 transition duration-300"
                        >
                            عودة للصفحة الرئيسية
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="p-10">
                <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
                    مرحبًا بك في منصتنا الطبية
                </h1>
                <p className="text-lg max-w-3xl mx-auto text-center mb-10 text-gray-700 leading-relaxed">
                    نسعى إلى تقديم تجربة صحية رقمية متكاملة، حيث يمكن للمستخدمين
                    الوصول إلى خدمات مخبرية متقدمة، ومتابعة حالتهم الصحية،
                    والتواصل مع أفضل الأطباء في مختلف التخصصات. المنصة مصممة
                    لتكون سهلة الاستخدام، وآمنة، وتقدم حلولًا مبتكرة تلائم
                    احتياجات المريض والطبيب.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
                        <div className="text-5xl mb-4">🔬</div>
                        <h3 className="text-xl font-semibold mb-2">
                            أدوات تشخيص دقيقة
                        </h3>
                        <p>
                            استخدام أحدث الأجهزة المخبرية لضمان أعلى درجات الدقة
                            في التحاليل.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
                        <div className="text-5xl mb-4">💡</div>
                        <h3 className="text-xl font-semibold mb-2">
                            حلول ذكية
                        </h3>
                        <p>
                            نظام حجز وإدارة مواعيد يسهّل تجربة المرضى ويوفر
                            الوقت والجهد.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
                        <div className="text-5xl mb-4">🛡️</div>
                        <h3 className="text-xl font-semibold mb-2">
                            أمان المعلومات
                        </h3>
                        <p>
                            نحمي بيانات المرضى باستخدام بروتوكولات تشفير متقدمة.
                        </p>
                    </div>
                </div>
            </main>

            <footer className="bg-blue-800 text-white text-center p-6 mt-8">
                © 2025 Med Care - جميع الحقوق محفوظة.
            </footer>
        </div>
    );
}
