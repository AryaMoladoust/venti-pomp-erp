import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#020b22] text-white">
            <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-black">
                                VP
                            </div>

                            <div>
                                <div className="text-lg font-black">
                                    VENTI PUMP
                                </div>

                                <div className="text-xs text-slate-400">
                                    تجهیزات صنعتی
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-8 text-slate-400">
                            تأمین‌کننده تجهیزات صنعتی، الکتروپمپ و تجهیزات
                            مرتبط با پروژه‌های ساختمانی و صنعتی.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-base font-bold">دسترسی سریع</h3>

                        <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                صفحه اصلی
                            </Link>

                            <Link
                                href="/products"
                                className="transition hover:text-white"
                            >
                                محصولات
                            </Link>

                            <Link
                                href="/#categories"
                                className="transition hover:text-white"
                            >
                                دسته‌بندی محصولات
                            </Link>

                            <Link
                                href="/#contact"
                                className="transition hover:text-white"
                            >
                                تماس با ما
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-bold">خدمات ونتی</h3>

                        <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
                            <span>مشاوره تخصصی</span>
                            <span>تأمین تجهیزات</span>
                            <span>صدور پیش‌فاکتور</span>
                            <span>ارسال به سراسر کشور</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold">ارتباط با ما</h3>

                        <div className="mt-5 flex flex-col gap-5 text-sm text-slate-400">
                            <div>
                                <span className="mb-1 block text-xs text-slate-500">
                                    تلفن
                                </span>
                                <span dir="ltr" className="font-semibold">
                                    021-00000000
                                </span>
                            </div>

                            <div>
                                <span className="mb-1 block text-xs text-slate-500">
                                    ایمیل
                                </span>
                                <span dir="ltr" className="font-semibold">
                                    info@ventipump.ir
                                </span>
                            </div>

                            <div>
                                <span className="mb-1 block text-xs text-slate-500">
                                    آدرس
                                </span>
                                <span className="leading-7">
                                    تهران، خیابان مثال، پلاک ۱۲
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-10 h-px bg-white/10" />

                <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
                    <span>
                        © 2026 Venti Pump. تمامی حقوق محفوظ است.
                    </span>

                    <span>
                        طراحی و توسعه با ❤️
                    </span>
                </div>
            </div>
        </footer>
    );
}