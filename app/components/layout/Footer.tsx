import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
];

const productCategories = [
  { href: "/products/computers", label: "Computers" },
  { href: "/products/smartphones", label: "Smartphones" },
  { href: "/products/audio", label: "Audio" },
  { href: "/products/wearables", label: "Wearables" },
  { href: "/products/gaming", label: "Gaming" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/10 py-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary">TechNova</h3>
          <p className="text-primary/70 mb-4">
            Delivering cutting-edge technology to innovators and tech
            enthusiasts worldwide.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">
            Categories
          </h4>
          <ul className="space-y-2">
            {productCategories.map((category) => (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className="text-primary/70 hover:text-primary transition-colors"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-primary">
            Stay Updated
          </h4>
          <p className="text-primary/70 mb-4">
            Subscribe to our newsletter for latest tech trends and exclusive
            offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-background text-primary border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 pt-4 border-t border-primary/10 text-center">
        <p className="text-primary/70">
          © {new Date().getFullYear()} TechNova. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
