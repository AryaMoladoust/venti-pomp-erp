const benefits = [
    {
        number: "01",
        title: "تضمین کیفیت",
        description:
            "تمامی محصولات از برندها و تأمین‌کنندگان معتبر انتخاب و با دقت بررسی می‌شوند.",
        icon: "✓",
    },
    {
        number: "02",
        title: "تأمین پایدار",
        description:
            "تلاش می‌کنیم محصولات موردنیاز پروژه‌ها را با موجودی و تأمین مطمئن ارائه کنیم.",
        icon: "◈",
    },
    {
        number: "03",
        title: "مشاوره تخصصی",
        description:
            "قبل از خرید می‌توانید برای انتخاب محصول مناسب با کارشناسان ما مشورت کنید.",
        icon: "⚙",
    },
    {
        number: "04",
        title: "ارسال سریع",
        description:
            "سفارش‌ها در سریع‌ترین زمان ممکن آماده و به مقصد موردنظر شما ارسال می‌شوند.",
        icon: "➜",
    },
];

export default function WhyVenti() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-10 text-center">
                    <span className="text-sm font-bold text-blue-600">
                        چرا ونتی؟
                    </span>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#071431] sm:text-3xl">
                        انتخاب مطمئن برای تجهیزات صنعتی
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                        ما در ونتی تلاش می‌کنیم تجربه‌ای ساده، مطمئن و حرفه‌ای
                        برای تأمین تجهیزات صنعتی و الکتروپمپ ایجاد کنیم.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((item) => (
                        <div
                            key={item.number}
                            className="group rounded-2xl border border-gray-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                                    {item.icon}
                                </div>

                                <span className="text-3xl font-black text-gray-100 transition group-hover:text-blue-100">
                                    {item.number}
                                </span>
                            </div>

                            <h3 className="mt-6 text-lg font-extrabold text-[#071431]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}