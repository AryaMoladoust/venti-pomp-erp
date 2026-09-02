"use client";

import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <article className="group rounded-xl border border-white/10 bg-[#071a3a] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_10px_40px_rgba(0,120,255,0.15)] sm:p-4">

            {/* Product Image */}
            <div className="flex h-[180px] items-center justify-center overflow-hidden rounded-lg bg-white sm:h-[200px]">

                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-50">
                        <span className="text-4xl">⚙️</span>
                    </div>
                )}

            </div>

            {/* Product Info */}
            <div className="pt-4">

                <h3 className="min-h-[52px] text-sm font-bold leading-7 text-white">
                    {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-between gap-2">

                    <span className="text-xs text-gray-400">
                        توان
                    </span>

                    <span className="text-xs font-semibold text-gray-200">
                        {product.power}
                    </span>

                </div>

                <div className="mt-1 flex items-center justify-between gap-2">

                    <span className="text-xs text-gray-400">
                        نوع برق
                    </span>

                    <span className="text-xs font-semibold text-yellow-400">
                        {product.badge}
                    </span>

                </div>

                {/* Price */}
                <div className="mt-4 border-t border-white/10 pt-3">

                    <div className="flex items-center justify-between">

                        <span className="text-xs text-gray-400">
                            قیمت
                        </span>

                        <div className="text-left">
                            <span className="text-base font-black text-white">
                                {product.price.toLocaleString("fa-IR")}
                            </span>

                            <span className="mr-1 text-[10px] text-gray-400">
                                تومان
                            </span>
                        </div>

                    </div>

                </div>

                {/* Add To Cart */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent text-xs font-bold text-white transition hover:border-blue-400 hover:bg-blue-500"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.5 6.75m0 0h14.25l-1.5 8.25H7.25L5.5 6.75Zm1.75 11.25h10.5M9 21a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1-3 0Z"
                        />
                    </svg>

                    افزودن به سبد خرید

                </button>

            </div>
        </article>
    );
}