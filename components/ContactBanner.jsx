import Link from "next/link";

export default function ContactBanner() {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-[#020b22]">
                <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
                    <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-right">
                        <div className="max-w-2xl">
                            <span className="text-sm font-bold text-blue-400">
                                نیاز به مشاوره دارید؟
                            </span>

                            <h2 className="mt-3 text-2xl font-extrabold leading-10 text-white sm:text-3xl">
                                برای انتخاب بهترین تجهیزات
                                <br className="hidden sm:block" />
                                همراه شما هستیم
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                                مشخصات پروژه خود را برای ما ارسال کنید تا
                                کارشناسان ونتی مناسب‌ترین راهکار را به شما
                                پیشنهاد دهند.
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link
                                href="/products"
                                className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                            >
                                مشاهده محصولات
                            </Link>

                            <Link
                                href="#contact"
                                className="rounded-xl border border-white/30 bg-white px-7 py-3.5 text-sm font-bold text-[#020b22] transition hover:bg-gray-100"
                            >
                                تماس با ما
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}