import AnnouncementBar from "@/app/components/AnnouncementBar";
import Navbar from "@/app/components/Navbar";
import HeroBanner from "@/app/components/HeroBanner";
import CollectionCategories from "@/app/components/CollectionCategories";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import PromoBanners from "@/app/components/PromoBanners";
import ReviewsSection from "@/app/components/ReviewsSection";
import CustomerSpotlight from "@/app/components/CustomerSpotlight";
import TrustBadges from "@/app/components/TrustBadges";
import NewsletterSection from "@/app/components/NewsletterSection";
import Footer from "@/app/components/Footer";

// ─── Product Data ────────────────────────────────────────────────────────────
const eidProducts = [
  {
    name: "Shabnam - 3Pc",
    price: "PKR 9,950",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    href: "#shabnam",
  },
  {
    name: "Mahru - 3Pc",
    price: "PKR 9,200",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "#mahru",
  },
  {
    name: "Afshan - 3Pc",
    price: "PKR 9,800",
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=600&q=80",
    href: "#afshan",
    badge: "New",
  },
  {
    name: "Dilara - 3Pc",
    price: "PKR 9,050",
    image: "https://images.unsplash.com/photo-1615346959423-e6e0d74fad91?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "#dilara",
  },
  {
    name: "Naazish - 3Pc",
    price: "PKR 9,500",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    href: "#naazish",
  },
  {
    name: "Lamiya - 3Pc",
    price: "PKR 9,200",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    href: "#lamiya",
  },
  {
    name: "Nuriya - 3Pc",
    price: "PKR 9,200",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80",
    href: "#nuriya",
  },
  {
    name: "Mahpara - 3Pc",
    price: "PKR 9,950",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1603184017584-d84f0c8e9a87?w=600&q=80",
    href: "#mahpara",
    badge: "New",
  },
];

const chandniProducts = [
  {
    name: "Moonlit Grace - 3Pc",
    price: "PKR 8,500",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "#moonlit",
    badge: "New",
  },
  {
    name: "Sitara - 3Pc",
    price: "PKR 8,200",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    href: "#sitara",
  },
  {
    name: "Roshni - 2Pc",
    price: "PKR 7,800",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    href: "#roshni",
  },
  {
    name: "Chaand - 3Pc",
    price: "PKR 9,100",
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=600&q=80",
    href: "#chaand",
  },
];

const bestSellerProducts = [
  {
    name: "Meena 3 PC",
    price: "PKR 5,999",
    originalPrice: "PKR 7,900",
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
    href: "#meena",
    badge: "Sale",
  },
  {
    name: "Zeenia - 3 pc",
    price: "PKR 5,800",
    originalPrice: "PKR 10,500",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "#zeenia",
    badge: "Sale",
  },
  {
    name: "Sia - 3PC",
    price: "PKR 6,550",
    originalPrice: "PKR 8,150",
    image: "https://images.unsplash.com/photo-1615346959423-e6e0d74fad91?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    href: "#sia",
    badge: "Sale",
  },
  {
    name: "Mehnaaz - 3Pc",
    price: "PKR 6,200",
    originalPrice: "PKR 7,999",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80",
    hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    href: "#mehnaaz",
    badge: "Sale",
  },
  {
    name: "Aarzoo - 2pc",
    price: "PKR 6,000",
    originalPrice: "PKR 7,500",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
    href: "#aarzoo",
    badge: "Sale",
  },
  {
    name: "Chandni (Frock & Dupatta)",
    price: "PKR 3,150",
    originalPrice: "PKR 7,900",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80",
    href: "#chandni",
    badge: "Sale",
  },
  {
    name: "Zimal (3 Pc)",
    price: "PKR 7,900",
    image: "https://images.unsplash.com/photo-1603184017584-d84f0c8e9a87?w=600&q=80",
    href: "#zimal",
  },
  {
    name: "Mehrbano (Frock & Dupatta)",
    price: "PKR 4,499",
    originalPrice: "PKR 8,999",
    image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&q=80",
    href: "#mehrbano",
    badge: "Sale",
  },
];

const festiveProducts = [
  {
    name: "Nishat - 3Pc",
    price: "PKR 9,200",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "#nishat",
  },
  {
    name: "Kohra (3pc)",
    price: "PKR 8,500",
    image: "https://images.unsplash.com/photo-1615346959423-e6e0d74fad91?w=600&q=80",
    href: "#kohra",
  },
  {
    name: "Raqs-e-Mughal 3Pc",
    price: "PKR 10,200",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80",
    href: "#raqs",
    badge: "New",
  },
  {
    name: "Dameen 3pc",
    price: "PKR 9,800",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    href: "#dameen",
    badge: "New",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="pb-14 md:pb-0">
        <HeroBanner />
        <CollectionCategories />

        {/* Eid Edit Section */}
        <section id="eid" className="bg-[#f8f4ef]">
          <FeaturedProducts
            title="Eid Edit '26"
            subtitle="Beautiful and affordable Eid Edit for our lovely customers"
            tabs={[
              { id: "eid-edit", label: "Eid Edit '26", products: eidProducts },
              { id: "chandni", label: "Chandni Raat", products: chandniProducts },
              {
                id: "sardiyon",
                label: "Sardiyon ki Shaam",
                products: eidProducts.slice(4),
              },
              {
                id: "paranda",
                label: "Paranda",
                products: chandniProducts,
              },
            ]}
            viewAllHref="#eid"
          />
        </section>

        <TrustBadges />

        {/* Best Sellers Section */}
        <section id="bestsellers">
          <FeaturedProducts
            title="Best Sellers"
            subtitle="With impeccable artistry and authentic designs, ClothEra has something for everyone"
            tabs={[
              { id: "all", label: "Best Sellers", products: bestSellerProducts },
              { id: "festive", label: "Festive", products: festiveProducts },
              { id: "lawn", label: "Lawn", products: eidProducts.slice(0, 4) },
              { id: "saree", label: "Saree", products: chandniProducts },
              { id: "velvet", label: "Velvet", products: eidProducts.slice(2, 6) },
            ]}
            viewAllHref="#bestsellers"
          />
        </section>

        <PromoBanners />

        <ReviewsSection />

        <CustomerSpotlight />

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
