"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
    const {
        cart,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <main className="min-h-screen bg-[#f7f8fa]">

            {/* Header */}
            <div className="bg-[#020b22] px-4 py-8 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1200px]">
                    <Link
                        href="/"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        ← بازگشت به فروشگاه
                    </Link>

                    <h1 className="mt-5 text-3xl font-black">
                        سبد خرید
                    </h1>
                </div>
            </div>


            <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">

                {cart.length === 0 ? (

                    /* Empty Cart */
                    <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-10 w-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.5 6.75m0 0h14.25l-1.5 8.25H7.25L5.5 6.75Zm1.75 11.25h10.5"
                                />
                            </svg>
                        </div>

                        <h2 className="mt-6 text-xl font-bold text-gray-900">
                            سبد خرید شما خالی است
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            هنوز محصولی به سبد خرید اضافه نکرده‌اید.
                        </p>

                        <Link
                            href="/products"
                            className="mt-7 inline-flex h-11 items-center rounded-lg bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            مشاهده محصولات
                        </Link>

                    </div>

                ) : (

                    <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

                        {/* Products */}
                        <div className="space-y-4">

                            {cart.map((item) => (

                                <div
                                    key={item.id}
                                    className="rounded-2xl bg-white p-4 shadow-sm sm:p-5"
                                >

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                        {/* Image */}
                                        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 sm:w-28">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-contain p-3"
                                                />
                                            ) : (
                                                <span className="text-4xl">
                                                    ⚙️
                                                </span>
                                            )}
                                        </div>


                                        {/* Info */}
                                        <div className="min-w-0 flex-1">

                                            <h2 className="text-base font-bold leading-7 text-gray-900">
                                                {item.name}
                                            </h2>

                                            <p className="mt-1 text-xs text-gray-500">
                                                {item.power} • {item.badge}
                                            </p>

                                            <p className="mt-3 text-base font-black text-blue-600">
                                                {item.price.toLocaleString("fa-IR")}
                                                <span className="mr-1 text-xs font-normal text-gray-500">
                                                    تومان
                                                </span>
                                            </p>

                                        </div>


                                        {/* Quantity */}
                                        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                                            <div className="flex h-10 items-center rounded-lg border border-gray-200">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-10 items-center justify-center text-lg text-gray-600 hover:bg-gray-50"
                                                >
                                                    −
                                                </button>

                                                <span className="flex h-full min-w-10 items-center justify-center border-x border-gray-200 text-sm font-bold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-10 items-center justify-center text-lg text-gray-600 hover:bg-gray-50"
                                                >
                                                    +
                                                </button>

                                            </div>


                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="text-xs font-medium text-red-500 transition hover:text-red-700"
                                            >
                                                حذف محصول
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Summary */}
                        <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm lg:sticky lg:top-6">

                            <h2 className="text-lg font-black text-gray-900">
                                خلاصه سفارش
                            </h2>

                            <div className="mt-5 space-y-4 border-b border-gray-100 pb-5">

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                        تعداد کالا
                                    </span>

                                    <span className="font-bold text-gray-900">
                                        {cart.reduce(
                                            (total, item) =>
                                                total + item.quantity,
                                            0
                                        )}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">
                                        هزینه ارسال
                                    </span>

                                    <span className="font-bold text-green-600">
                                        رایگان
                                    </span>
                                </div>

                            </div>

                            <div className="flex items-center justify-between py-5">

                                <span className="font-bold text-gray-900">
                                    مبلغ نهایی
                                </span>

                                <div className="text-left">
                                    <span className="text-xl font-black text-blue-600">
                                        {cartTotal.toLocaleString("fa-IR")}
                                    </span>

                                    <span className="mr-1 text-xs text-gray-500">
                                        تومان
                                    </span>
                                </div>

                            </div>


                            {/* Demo Checkout */}
                            <button
                                type="button"
                                onClick={() =>
                                    alert(
                                        "این بخش در نسخه Demo فعال نیست."
                                    )
                                }
                                className="h-12 w-full rounded-lg bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700"
                            >
                                ادامه و ثبت سفارش
                            </button>

                            <p className="mt-3 text-center text-[11px] leading-5 text-gray-400">
                                پرداخت و ثبت سفارش در نسخه نهایی به
                                درگاه متصل خواهد شد.
                            </p>

                        </aside>

                    </div>

                )}

            </div>
        </main>
    );
}