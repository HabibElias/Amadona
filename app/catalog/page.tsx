"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"


interface Gemstone {
  id: number
  name: string
  type: string
  color: string
  size: string
  price: number
  origin: string
  image: string
  description: string
  certification: string
}

const gemstones: Gemstone[] = [
  {
    id: 1,
    name: "Colombian Emerald",
    type: "Emerald",
    color: "Green",
    size: "2.5 carats",
    price: 15000,
    origin: "Colombia",
    image: "/images/colombian-emerald.jpg",
    description:
      "This exquisite Colombian emerald boasts a vibrant green hue and exceptional clarity. Its origin in the renowned mines of Colombia ensures premium quality and value.",
    certification: "GIA Certified",
  },
  {
    id: 2,
    name: "Burmese Ruby",
    type: "Ruby",
    color: "Red",
    size: "1.8 carats",
    price: 22000,
    origin: "Myanmar",
    image: "/images/burmese-ruby.jpg",
    description:
      "This stunning Burmese ruby exhibits a deep red color known as 'pigeon's blood'. Its origin in the famed mines of Myanmar guarantees exceptional quality and rarity.",
    certification: "AGL Certified",
  },
  {
    id: 3,
    name: "Ceylon Sapphire",
    type: "Sapphire",
    color: "Blue",
    size: "3.2 carats",
    price: 18000,
    origin: "Sri Lanka",
    image: "/images/ceylon-sapphire.jpg",
    description:
      "This magnificent Ceylon sapphire showcases a rich blue hue reminiscent of the deep ocean. Its Sri Lankan origin ensures superior quality and a unique character.",
    certification: "Gubelin Certified",
  },
  {
    id: 4,
    name: "Paraiba Tourmaline",
    type: "Tourmaline",
    color: "Neon Blue",
    size: "1.5 carats",
    price: 30000,
    origin: "Brazil",
    image: "/images/paraiba-tourmaline.jpg",
    description:
      "This rare Paraiba tourmaline features an electric blue color that's highly sought after. Its Brazilian origin and unique neon hue make it a true collector's item.",
    certification: "GRS Certified",
  },
  {
    id: 5,
    name: "Tanzanite",
    type: "Zoisite",
    color: "Blue-Violet",
    size: "4.0 carats",
    price: 12000,
    origin: "Tanzania",
    image: "/images/tanzanite.jpg",
    description:
      "This captivating tanzanite displays a mesmerizing blue-violet color. Its Tanzanian origin and trichroic nature make it a unique and valuable gemstone.",
    certification: "AGTA Certified",
  },
  {
    id: 6,
    name: "Pink Diamond",
    type: "Diamond",
    color: "Pink",
    size: "0.8 carats",
    price: 200000,
    origin: "Australia",
    image: "/images/pink-diamond.jpg",
    description:
      "This rare pink diamond exhibits a soft, romantic hue. Its Australian origin and natural pink color make it an extraordinary and highly valuable gem.",
    certification: "GIA Certified",
  },
]

const collections = [
  {
    name: "Rare Finds",
    description: "Discover our collection of exceptionally rare and unique gemstones.",
    image: "/images/rare-finds.jpg",
  },
  {
    name: "Investment-Grade Gemstones",
    description: "Explore premium gemstones perfect for long-term investment.",
    image: "/images/investment-grade.jpg",
  },
  {
    name: "Birthstone Collection",
    description: "Find the perfect gemstone to celebrate your birth month.",
    image: "/images/birthstone-collection.jpg",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "The quality and beauty of the emerald I purchased exceeded my expectations. Exceptional service!",
    image: "/images/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    location: "Hong Kong",
    quote: "As a collector, I'm impressed by the rare gemstones and expert knowledge this company offers.",
    image: "/images/michael-chen.jpg",
  },
  {
    name: "Emma Rodriguez",
    location: "London, UK",
    quote: "The gemstone education resources helped me make an informed decision. I'm thrilled with my purchase!",
    image: "/images/emma-rodriguez.jpg",
  },
]

export default function CatalogPage() {
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null)
  const [filters, setFilters] = useState({
    type: "",
    color: "",
    size: "",
    price: "",
    origin: "",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredGemstones, setFilteredGemstones] = useState(gemstones)

  useEffect(() => {
    const filtered = gemstones.filter((gemstone) => {
      const matchesSearch =
        gemstone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gemstone.type.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filters.type === "" || gemstone.type === filters.type
      const matchesColor = filters.color === "" || gemstone.color === filters.color
      const matchesSize = filters.size === "" || gemstone.size === filters.size
      const matchesPrice =
        filters.price === "" ||
        (filters.price === "0-5000" && gemstone.price <= 5000) ||
        (filters.price === "5000-10000" && gemstone.price > 5000 && gemstone.price <= 10000) ||
        (filters.price === "10000+" && gemstone.price > 10000)
      const matchesOrigin = filters.origin === "" || gemstone.origin === filters.origin

      return matchesSearch && matchesType && matchesColor && matchesSize && matchesPrice && matchesOrigin
    })

    setFilteredGemstones(filtered)
  }, [filters, searchTerm])

  return (
    <div className="bg-gray-50">
      {/* Search and Filter Bar */}
      <section className="bg-white shadow-md py-6 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex-grow max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gemstones..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="">All Types</option>
                <option value="Emerald">Emerald</option>
                <option value="Ruby">Ruby</option>
                <option value="Sapphire">Sapphire</option>
                <option value="Diamond">Diamond</option>
                <option value="Tourmaline">Tourmaline</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={filters.color}
                onChange={(e) => setFilters({ ...filters, color: e.target.value })}
              >
                <option value="">All Colors</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Pink">Pink</option>
                <option value="Neon Blue">Neon Blue</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
              >
                <option value="">All Prices</option>
                <option value="0-5000">$0 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={filters.origin}
                onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
              >
                <option value="">All Origins</option>
                <option value="Colombia">Colombia</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Brazil">Brazil</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstone Gallery */}
      <section id="gemstone-gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Exquisite Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGemstones.map((gemstone) => (
              <motion.div
                key={gemstone.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64">
                  <Image
                    src={gemstone.image || "/placeholder.svg"}
                    alt={gemstone.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{gemstone.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {gemstone.size} | {gemstone.origin}
                  </p>
                  <p className="text-2xl font-bold text-emerald-600 mb-4">${gemstone.price.toLocaleString()}</p>
                  <button
                    onClick={() => setSelectedGemstone(gemstone)}
                    className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-serif font-bold mb-4">{collection.name}</h3>
                  <p className="text-center mb-6">{collection.description}</p>
                  <Link
                    href="#"
                    className="bg-gold text-gray-900 px-6 py-2 rounded-full hover:bg-gold/90 transition-colors"
                  >
                    Explore Collection
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Gemstone Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-emerald-100 rounded-full p-6 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Types of Gemstones</h3>
              <p className="text-gray-600">
                Learn about different gemstone varieties and their unique characteristics.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-emerald-100 rounded-full p-6 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Choosing the Right Gemstone</h3>
              <p className="text-gray-600">
                Tips for selecting the perfect gemstone for jewelry, investment, or gifts.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-emerald-100 rounded-full p-6 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Gemstone Care</h3>
              <p className="text-gray-600">Learn how to properly care for and maintain your precious gemstones.</p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link href="#" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
              Read More Gemstone Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-serif font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Detail Modal */}
      <AnimatePresence>
        {selectedGemstone && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold">{selectedGemstone.name}</h3>
                <button onClick={() => setSelectedGemstone(null)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={selectedGemstone.image || "/placeholder.svg"}
                    alt={selectedGemstone.name}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Type: {selectedGemstone.type}</p>
                  <p className="text-gray-600 mb-2">Color: {selectedGemstone.color}</p>
                  <p className="text-gray-600 mb-2">Size: {selectedGemstone.size}</p>
                  <p className="text-gray-600 mb-2">Origin: {selectedGemstone.origin}</p>
                  <p className="text-2xl font-bold text-emerald-600 mb-4">${selectedGemstone.price.toLocaleString()}</p>
                  <p className="text-gray-700 mb-4">{selectedGemstone.description}</p>
                  <p className="text-gray-600 mb-4">Certification: {selectedGemstone.certification}</p>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

