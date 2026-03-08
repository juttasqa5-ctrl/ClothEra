import { Truck, RefreshCw, Wallet, Headphones } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders above PKR 12,000",
  },
  {
    icon: RefreshCw,
    title: "2 Days Exchange Policy",
    description: "Easy exchange within 2 days",
  },
  {
    icon: Wallet,
    title: "Cash on Delivery",
    description: "Order from anywhere and pay at your doorstep",
  },
  {
    icon: Headphones,
    title: "Customer Centric Support",
    description: "Customer care with satisfaction on priority",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-10 md:py-14 bg-[#fdfaf7] border-y border-[#e8d5c4]">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex flex-col items-center text-center gap-3 px-2">
                <div className="w-12 h-12 border border-[#b8935a] flex items-center justify-center">
                  <Icon size={20} className="text-[#b8935a]" />
                </div>
                <div>
                  <h4 className="font-sans text-[12px] tracking-widest uppercase font-medium text-[#2c1a0e] mb-1">
                    {badge.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#6b5744] leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
