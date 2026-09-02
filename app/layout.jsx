import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
    title: "Venti Pump | تجهیزات صنعتی و الکتروپمپ",
    description: "تأمین تجهیزات صنعتی و الکتروپمپ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}