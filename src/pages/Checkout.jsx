import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
  const { total, reset } = useCart();

  function placeOrder(e) {
    e.preventDefault();
    alert("Order placed! (demo)");
    reset();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Secure Checkout
      </h1>

      {/* Glassmorphism Checkout Form */}
      <form
        onSubmit={placeOrder}
        className="backdrop-blur-lg bg-white/40 shadow-xl rounded-2xl p-6 sm:p-8 border border-white/30"
      >
        {/* Customer Info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Full name"
            required
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email"
            type="email"
            required
          />
        </div>

        <input
          className="mt-4 rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
          placeholder="Address"
          required
        />

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="City"
            required
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="State"
            required
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="ZIP"
            required
          />
        </div>

        {/* Payment Info */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Card number"
            required
          />
          <input
            className="rounded-xl px-4 py-3 bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="MM/YY"
            required
          />
        </div>

        {/* Pay Button */}
        <button
          className="w-full mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 font-semibold text-lg shadow-lg hover:scale-[1.02] transform transition duration-200"
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}
