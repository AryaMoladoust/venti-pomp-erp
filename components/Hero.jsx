export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#020b22] text-white">

            {/* Background Glow */}
            <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* Main Hero */}
            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

                <div className="grid min-h-[650px] items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">

                    {/* Right Side - Image */}
                    <div className="order-1 flex items-center justify-center lg:order-2">

                        <div className="relative flex h-[350px] w-full max-w-[600px] items-center justify-center sm:h-[430px]">

                            {/* Blue Platform */}
                            <div className="absolute bottom-5 h-8 w-[80%] rounded-[50%] bg-blue-500/30 blur-xl" />

                            <div className="absolute bottom-8 h-5 w-[78%] rounded-[50%] border border-blue-400/60 bg-blue-500/20 shadow-[0_0_50px_rgba(0,130,255,0.6)]" />

                            {/* Pump Placeholder */}
                            <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-5">

                                {/* Pump 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="h-28 w-16 rounded-t-xl bg-gradient-to-b from-blue-400 via-blue-800 to-slate-950 shadow-[0_0_30px_rgba(0,120,255,0.4)] sm:h-36 sm:w-20" />

                                    <div className="h-16 w-12 rounded-b-lg bg-gradient-to-b from-slate-400 to-slate-900 sm:h-20 sm:w-16" />

                                    <div className="h-5 w-20 rounded-full bg-slate-500 sm:w-24" />
                                </div>

                                {/* Pump 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="h-36 w-20 rounded-t-xl bg-gradient-to-b from-blue-400 via-blue-800 to-slate-950 shadow-[0_0_40px_rgba(0,120,255,0.5)] sm:h-48 sm:w-24" />

                                    <div className="h-20 w-14 rounded-b-lg bg-gradient-to-b from-slate-400 to-slate-900 sm:h-28 sm:w-20" />

                                    <div className="h-6 w-24 rounded-full bg-slate-500 sm:w-28" />
                                </div>

                                {/* Pump 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="h-24 w-14 rounded-t-xl bg-gradient-to-b from-blue-400 via-blue-800 to-slate-950 shadow-[0_0_25px_rgba(0,120,255,0.4)] sm:h-32 sm:w-18" />

                                    <div className="h-14 w-11 rounded-b-lg bg-gradient-to-b from-slate-400 to-slate-900 sm:h-18 sm:w-14" />

                                    <div className="h-4 w-16 rounded-full bg-slate-500 sm:w-20" />
                                </div>

                            </div>

                            {/* Decorative Ring */}
                            <div className="absolute bottom-4 h-[130px] w-[90%] rounded-[50%] border border-blue-400/60 shadow-[0_0_30px_rgba(0,120,255,0.3)] sm:h-[160px]" />

                            {/* Decorative Logo Shape */}
                            <div className="absolute right-[8%] top-[5%] hidden text-[110px] font-black italic text-blue-500/20 sm:block">
                                VP
                            </div>

                        </div>
                    </div>


                    {/* Left Side - Content */}
                    <div className="order-2 text-center lg:order-1 lg:text-right">

                        {/* Search */}
                        <div className="mx-auto mb-10 flex h-12 max-w-[520px] items-center rounded-full border border-white/15 bg-white/10 px-4 backdrop-blur-md lg:mx-0">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                                stroke="currentColor"
                                className="h-5 w-5 shrink-0 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="جستجوی محصول، برند یا کالا..."
                                className="w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-gray-400"
                            />

                            <span className="hidden text-xs text-gray-400 sm:block">
                                همه دسته‌ها
                            </span>

                        </div>


                        {/* Small Heading */}
                        <p className="mb-3 text-lg font-medium text-gray-200">
                            راهکارهای حرفه‌ای
                        </p>


                        {/* Main Heading */}
                        <h1 className="text-4xl font-black leading-[1.5] sm:text-5xl lg:text-[54px]">

                            تأمین تجهیزات صنعتی

                            <br />

                            <span className="text-blue-500">
                                و الکتروپمپ
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 lg:mx-0">
                            ارائه تجهیزات با کیفیت، قیمت مناسب و خدمات مطمئن
                            <br className="hidden sm:block" />
                            برای صنایع و پروژه‌های بزرگ
                        </p>


                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

                            <button
                                type="button"
                                className="h-12 rounded-lg border border-white/50 px-8 text-sm font-semibold transition hover:border-blue-400 hover:bg-white/10"
                            >
                                دریافت پیش‌فاکتور
                            </button>

                            <button
                                type="button"
                                className="h-12 rounded-lg bg-white px-8 text-sm font-semibold text-[#071431] transition hover:bg-blue-500 hover:text-white"
                            >
                                مشاهده محصولات
                            </button>

                        </div>

                    </div>

                </div>


                {/* Features */}
                <div className="grid grid-cols-2 border-t border-white/10 py-7 sm:grid-cols-4">

                    <Feature
                        title="تضمین کیفیت"
                        description="تضمین اصالت کالا"
                        icon="shield"
                    />

                    <Feature
                        title="ارسال سریع"
                        description="به سراسر کشور"
                        icon="truck"
                    />

                    <Feature
                        title="پشتیبانی تخصصی"
                        description="مشاوره فنی رایگان"
                        icon="support"
                    />

                    <Feature
                        title="تامین پایدار"
                        description="موجودی دائمی"
                        icon="box"
                    />

                </div>

            </div>
        </section>
    );
}


function Feature({ title, description, icon }) {
    return (
        <div className="flex items-center justify-center gap-3 border-white/10 px-3 py-4 text-center sm:border-l last:border-l-0">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">

                {icon === "shield" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3 4.5 6v5.25c0 4.5 3.15 7.95 7.5 9.75 4.35-1.8 7.5-5.25 7.5-9.75V6L12 3Z"
                        />
                    </svg>
                )}

                {icon === "truck" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7.5h11.25v9H3v-9Zm11.25 3h3l3 3v3h-6v-6Zm-8.25 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                    </svg>
                )}

                {icon === "support" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12a7.5 7.5 0 0 1 15 0v4.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v-4.5h3M4.5 13.5h3V18H6a1.5 1.5 0 0 1-1.5-1.5V12Zm7.5 7.5h3"
                        />
                    </svg>
                )}

                {icon === "box" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12 3 8.25 4.5v9L12 21l-8.25-4.5v-9L12 3Zm0 0v9m8.25-4.5L12 12 3.75 7.5"
                        />
                    </svg>
                )}

            </div>

            <div className="text-right">
                <h3 className="text-sm font-bold">
                    {title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                    {description}
                </p>
            </div>

        </div>
    );
}