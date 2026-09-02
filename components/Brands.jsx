const brands = [
    "GRUNDFOS",
    "LOWARA",
    "EBARA",
    "CALPEDA",
    "PEDROLLO",
    "WILO",
];

export default function Brands() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-8 text-center">
                    <span className="text-sm font-bold text-blue-600">
                        برندهای معتبر
                    </span>

                    <h2 className="mt-2 text-2xl font-extrabold text-[#071431]">
                        همکاری با برندهای شناخته‌شده
                    </h2>
                </div>

                <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 sm:grid-cols-3 lg:grid-cols-6">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="flex h-24 items-center justify-center border-b border-l border-gray-200 bg-white px-4 text-center text-sm font-black tracking-wide text-gray-400 transition hover:bg-gray-50 hover:text-[#071431] sm:h-28"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}