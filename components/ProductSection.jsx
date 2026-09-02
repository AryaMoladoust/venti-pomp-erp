import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    return (
        <section
            id="products"
            className="px-4 py-12 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-[1400px] rounded-2xl bg-[#020b22] p-5 sm:p-7 lg:p-8">

                {/* Header */}
                <div className="mb-7 flex items-center justify-between gap-4">

                    <h2 className="text-xl font-black text-white sm:text-2xl">
                        پرفروش‌ترین محصولات
                    </h2>

                    <Link
                        href="/products"
                        className="text-sm font-semibold text-white transition hover:text-blue-300"
                    >
                        مشاهده همه محصولات
                    </Link>

                </div>


                {/* Products */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>


                {/* Slider Dots - Demo */}
                <div className="mt-7 flex justify-center gap-2">

                    <span className="h-2 w-8 rounded-full bg-blue-500" />

                    <span className="h-2 w-2 rounded-full bg-gray-500" />

                    <span className="h-2 w-2 rounded-full bg-gray-500" />

                </div>

            </div>
        </section>
    );
}