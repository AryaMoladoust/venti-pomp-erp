import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import WhyVenti from "../components/WhyVenti";
import ContactBanner from "../components/ContactBanner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f7f8fa]">
            <Header />

            <Hero />

            <Categories />

            <ProductSection />

            <WhyVenti />

            <ContactBanner />

            <Brands />

            <Footer />
        </main>
    );
}