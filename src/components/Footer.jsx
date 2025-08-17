import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-white transition">All Products</a></li>
            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition">Categories</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Buyer Central</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Become a Supplier</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social & Logo */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-lg font-bold text-white">E-Store</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} E-Store. Designed by R.
      </div>
    </footer>
  );
}
