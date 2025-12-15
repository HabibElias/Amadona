"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Users, Leaf } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface HistoryEventProps {
  year: number;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const HistoryEvent: React.FC<HistoryEventProps> = ({ year, title, description, image, isReversed }) => (
  <motion.div
    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-16`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg shadow-md w-full"
      />
    </div>
    <div className={`w-full md:w-1/2 ${isReversed ? "md:pr-12" : "md:pl-12"}`}>
      <h3 className="text-3xl font-serif font-bold mb-2">{year}</h3>
      <h4 className="text-2xl font-serif mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Image src={image || "/placeholder.svg"} alt={name} width={300} height={300} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-serif font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-sm text-gray-500">{bio}</p>
    </div>
  </motion.div>
)

export default function AboutUs() {
  const historyEvents = [
    {
      year: 1985,
      title: "Our Humble Beginnings",
      description: "Founded in a small workshop with a vision to bring ethically sourced gemstones to the world.",
      image: "/images/founding.jpg",
    },
    {
      year: 2000,
      title: "Global Expansion",
      description:
        "Expanded operations to multiple continents, establishing a global network of mines and partnerships.",
      image: "/images/global-expansion.jpg",
    },
    {
      year: 2010,
      title: "Ethical Mining Initiative",
      description: "Launched our Ethical Mining Initiative, setting new industry standards for responsible sourcing.",
      image: "/images/ethical-mining.jpg",
    },
    {
      year: 2023,
      title: "Sustainability Milestone",
      description:
        "Achieved carbon neutrality in all our mining operations, leading the industry in sustainable practices.",
      image: "/images/sustainability.jpg",
    },
  ]

  const teamMembers = [
    {
      name: "Emma Stone",
      role: "Chief Gemologist",
      image: "/images/emma-stone.jpg",
      bio: "With over 20 years of experience, Emma leads our gemstone selection and quality control processes.",
    },
    {
      name: "Michael Chang",
      role: "Mining Operations Manager",
      image: "/images/michael-chang.jpg",
      bio: "Michael ensures our mining practices are efficient, safe, and environmentally responsible.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Sustainability Director",
      image: "/images/sophia-rodriguez.jpg",
      bio: "Sophia spearheads our initiatives in ethical sourcing and community development.",
    },
    {
      name: "David Okafor",
      role: "Master Craftsman",
      image: "/images/david-okafor.jpg",
      bio: "David's expertise in gemstone cutting and polishing brings out the true beauty in every stone.",
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image src="/images/hero-mine.jpg" alt="Gemstone mine" fill style={{ objectFit: "cover" }} priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4" {...fadeIn}>
            Our Story: Crafting Beauty from the Earth
          </motion.h1>
          <motion.p className="text-lg md:text-xl lg:text-2xl mb-8" {...fadeIn} transition={{ delay: 0.2 }}>
            Discover the Passion Behind Our Gemstones
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <Link
              href="/catalog"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Explore Our Collection
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey Through Time
          </motion.h2>
          {historyEvents.map((event, index) => (
            <HistoryEvent key={event.year} {...event} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-16 h-16 text-gray-700" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to provide ethically sourced, high-quality gemstones to clients worldwide, while
                preserving the beauty of our planet.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="w-16 h-16 text-gray-700" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Our Vision</h3>
              <p className="text-lg text-gray-600">
                Our vision is to become the global leader in sustainable gemstone mining and trading, setting new
                standards for quality and ethics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet the Experts Behind the Gemstones
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Practices Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                Ethical Mining, Sustainable Future
              </h2>
              <p className="text-lg text-gray-600">
                At Gemstone Co., we are committed to ethical mining practices, sustainability, and community
                development. Our approach ensures that every gemstone we source not only meets the highest quality
                standards but also contributes positively to the communities and environments where we operate.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["No Child Labor", "Eco-Friendly Techniques", "Fair Wages", "Community Support"].map(
                  (practice, index) => (
                    <motion.div
                      key={practice}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Leaf className="text-gray-700" />
                      <span className="text-gray-600">{practice}</span>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/ethical-mining.jpg"
                alt="Ethical Mining Practices"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action (CTA) Section */}
      <section className="relative py-20 text-white">
        <Image src="/images/cta-background.jpg" alt="Gemstones" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4" {...fadeIn}>
            Join Us in Our Journey
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-8" {...fadeIn} transition={{ delay: 0.2 }}>
            Explore Our Collection or Partner with Us Today
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/catalog"
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Shop Gemstones
              <ArrowRight className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

