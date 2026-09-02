"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <header className="relative z-50 bg-[#020b22] text-white">
            {/* Main Header */}
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-[72px] items-center justify-between gap-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-2"
                    >
                        <div className="flex h-11 w-11 items-center justify-center">
                            <span className="text-3xl font-black italic text-white">
                                VP
                            </span>
                        </div>

                        <span className="hidden text-xl font-bold sm:block">
                            Venti Pump
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">

                        <Link
                            href="/"
                            className="relative py-6 text-sm font-medium text-white transition hover:text-blue-400"
                        >
                            خانه
                            <span className="absolute bottom-0 right-0 h-[2px] w-full bg-blue-500" />
                        </Link>

                        <Link
                            href="#products"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            محصولات
                        </Link>

                        <Link
                            href="#categories"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            دسته‌بندی‌ها
                        </Link>

                        <Link
                            href="#brands"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            برندها
                        </Link>

                        <Link
                            href="#services"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            خدمات
                        </Link>

                        <Link
                            href="#contact"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            تماس با ما
                        </Link>

                        <Link
                            href="#about"
                            className="py-6 text-sm font-medium text-gray-200 transition hover:text-blue-400"
                        >
                            درباره ما
                        </Link>

                    </nav>

                    {/* Left Actions */}
                    <div className="flex items-center gap-3">

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#071431] transition hover:border-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.7"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.5 6.75m0 0h14.25l-1.5 8.25H7.25L5.5 6.75Zm1.75 11.25h10.5M9 21a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                />
                            </svg>

                            {/* Cart Badge */}
                            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold">
                                {cartCount}
                            </span>
                        </Link>

                        {/* Login */}
                        <Link
                            href="/login"
                            className="hidden h-11 items-center gap-2 rounded-full border border-gray-500 px-5 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-500/10 sm:flex"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.7"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                                />
                            </svg>

                            ورود / ثبت نام
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-600 bg-[#071431] lg:hidden"
                            aria-label="باز کردن منو"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-[#06112d] lg:hidden">
                    <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4">

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            خانه
                        </Link>

                        <Link
                            href="#products"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            محصولات
                        </Link>

                        <Link
                            href="#categories"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            دسته‌بندی‌ها
                        </Link>

                        <Link
                            href="#brands"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            برندها
                        </Link>

                        <Link
                            href="#services"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            خدمات
                        </Link>

                        <Link
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="border-b border-white/10 py-4 text-sm"
                        >
                            تماس با ما
                        </Link>

                        <Link
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-sm"
                        >
                            درباره ما
                        </Link>

                        <Link
                            href="/login"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 flex h-11 items-center justify-center rounded-lg border border-blue-500 text-sm"
                        >
                            ورود / ثبت نام
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}