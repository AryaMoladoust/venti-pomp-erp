import Link from "next/link";
import { categories } from "../data/products";

export default function Categories() {
    return (
        <section
            id="categories"
            className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-[1400px]">

                {/* Main Box */}
                <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

                    {/* Header */}
                    <div className="mb-5 flex items-center justify-between">

                        <h2 className="text-lg font-extrabold text-[#071431] sm:text-xl">
                            دسته‌بندی محصولات
                        </h2>

                        <Link
                            href="/products"
                            className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                            مشاهده همه دسته‌بندی‌ها
                        </Link>

                    </div>


                    {/* Categories */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">

                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}


function CategoryCard({ category }) {
    return (
        <Link
            href={`/products?category=${category.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:p-4"
        >

            {/* Image */}
            <div className="flex h-[120px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:h-[135px]">

                {/* فعلاً placeholder */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 transition-transform duration-300 group-hover:scale-110">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-10 w-10 text-blue-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v18m-7.5-9H19.5M5 7.5h14M5 16.5h14"
                        />
                    </svg>

                </div>

            </div>


            {/* Title */}
            <h3 className="mt-3 min-h-[44px] text-center text-sm font-bold leading-6 text-gray-800">
                {category.title}
            </h3>


            {/* Bottom Button */}
            <div className="mt-3 flex items-center justify-center gap-1 rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-600 transition group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600">

                مشاهده محصولات

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-3.5 w-3.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 18 6-6-6-6"
                    />
                </svg>

            </div>

        </Link>
    );
}