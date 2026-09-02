import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { products, categories } from "../../data/products";

export default function ProductsPage({ searchParams }) {
    const category = searchParams?.category;

    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <main className="min-h-screen bg-[#f7f8fa]">
            <section className="bg-[#020b22] px-4 py-12 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1400px]">
                    <Link
                        href="/"
                        className="mb-6 inline-flex text-sm text-blue-300 hover:text-white"
                    >
                        ← بازگشت به صفحه اصلی
                    </Link>

                    <h1 className="text-3xl font-extrabold sm:text-4xl">
                        محصولات
                    </h1>

                    <p className="mt-3 text-sm text-slate-300 sm:text-base">
                        تجهیزات صنعتی و الکتروپمپ‌های ونتی
                    </p>
                </div>
            </section>

            <section className="px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-8 flex flex-wrap gap-2">
                        <Link
                            href="/products"
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                                !category
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-blue-50"
                            }`}
                        >
                            همه محصولات
                        </Link>

                        {categories.map((item) => (
                            <Link
                                key={item.id}
                                href={`/products?category=${item.slug}`}
                                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                                    category === item.slug
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700 hover:bg-blue-50"
                                }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
                            <p className="text-gray-500">
                                محصولی در این دسته‌بندی پیدا نشد.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}