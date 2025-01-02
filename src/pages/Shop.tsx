import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "T-shirt Crypto", category: "Vêtements", price: 10000, image: "/teeshirt1.jpg" },
  { id: 2, name: "Pull Crypto", category: "Vêtements", price: 18000, image: "/pull.png" },
  { id: 3, name: "Casquette Crypto", category: "Accessoires", price: 10000, image: "/casquette.png" },
  { id: 4, name: "Clé Ledger Nano S Plus", category: "Sécurité", price: 185000, image: "/ledger.jpg" },
  { id: 5, name: "Livre Crypto", category: "Livres", price: 15000, image: "/livre1.jpg" },
  { id: 6, name: "USDT", category: "Crypto", price: 790, image: "/usdt.jpg" },
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const categories = ["Tous", "Vêtements", "Accessoires", "Sécurité", "Crypto"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });

    // Show mini cart
    setShowMiniCart(true);
    setTimeout(() => setShowMiniCart(false), 3000);
  };

  const generateWhatsAppMessage = () => {
    const message = cart
      .map(
        (item) =>
          `- ${item.product.name} (x${item.quantity}) : ${(item.product.price * item.quantity).toLocaleString()} FCFA`
      )
      .join("\n");
    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return `Bonjour, je souhaite acheter :\n${message}\n\nTotal : ${total.toLocaleString()} FCFA`;
  };

  const handlePurchase = () => {
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappURL = `https://wa.me/24160422342?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative">
      {/* Mini Cart Notification */}
      {showMiniCart && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={() => setShowMiniCart(false)} // Close popup on background click
  >
    <div
      className="bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-11/12 sm:w-1/3 relative"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition"
        onClick={() => setShowMiniCart(false)}
      >
        &times;
      </button>
      
      <h4 className="text-lg font-semibold text-center">Produit ajouté au panier !</h4>
      <ul className="mt-2 text-gray-700 text-center">
        {cart.slice(-3).map((item, index) => (
          <li key={index}>
            {item.product.name} (x{item.quantity})
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-[#fd5f05] text-white px-6 py-2 rounded-lg shadow hover:bg-[#e54d00] transition w-full"
        onClick={handlePurchase}
      >
        Passer à l'achat
      </button>
    </div>
  </div>
)}



      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd5f05] to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Boutique Crypto Élite</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez des articles uniques pour les passionnés de cryptomonnaies.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Recherchez un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#fd5f05]"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#fd5f05]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-[#fd5f05] font-semibold">{product.price.toLocaleString()} FCFA</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-[#fd5f05] text-white px-4 py-2 rounded-lg shadow hover:bg-[#e54d00] transition w-full"
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
          
          ))}
        </div>
      </section>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-300 p-4 flex justify-between items-center">
          <div>
            <p className="text-gray-800 font-semibold">
              {cart.length} articles dans votre panier
            </p>
          </div>
          <button
            onClick={handlePurchase}
            className="bg-[#fd5f05] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#e54d00] transition flex items-center"
          >
            <span className="mr-2">Passer à l'achat</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11m0 0l-4 4m4-4l-4-4M21 12h-4m4 0l-4 4m4-4l-4-4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}



