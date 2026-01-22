"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, Leaf, Diamond, Award } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function AboutUs() {
    return (
        <div className="bg-app text-app">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-white">
                <Image
                    src="/about.jpg"
                    alt="Gemstone mine"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
                        {...fadeIn}
                    >
                        About Amadoniyas Gem and Mineral World
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl mb-8"
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        Showcasing Ethiopia&apos;s and Africa&apos;s Gemstones,
                        Minerals, and Energy Resources
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

            {/* About Us Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-8">
                            Amadoniyas Gem and Mineral World
                        </h2>
                        <p className="text-lg text-app mb-4 text-center">
                            <strong>Founder & CEO:</strong> Eyosafit
                        </p>
                        <p className="text-lg text-muted mb-8">
                            Welcome to Amadoniyas Gem and Mineral World, a
                            visionary platform dedicated to showcasing the
                            unparalleled beauty and richness of Ethiopia&apos;s
                            and Africa&apos;s gemstones, minerals, and energy
                            resources to the global market. Founded by Eyosafit,
                            our mission is to bridge the gap between
                            Africa&apos;s hidden treasures and the world, while
                            empowering communities and fostering sustainable
                            development across the continent.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Emergence Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                            Our Emergence
                        </h2>
                        <p className="text-lg text-muted mb-6">
                            Africa is a land of immense natural wealth, yet its
                            gemstones, minerals, and energy resources have often
                            remained underappreciated and underexplored.
                            Amadoniyas Gem and Mineral World emerged from a deep
                            passion for Africa&apos;s geological wonders and a
                            commitment to unlocking their potential. Ethiopia,
                            with its world-class opals, emeralds, sapphires,
                            gold, and untapped energy minerals, became the
                            cornerstone of this journey.
                        </p>
                        <p className="text-lg text-muted mb-6">
                            From the vibrant play-of-color in Welo opals to the
                            rich gold deposits of Lega Dembi and the vast energy
                            potential of the Danakil Depression, we recognized
                            an opportunity to bring Africa&apos;s treasures to
                            the forefront of the global stage.
                        </p>
                        <p className="text-lg text-muted">
                            Amadoniyas Gem and Mineral World was born out of a
                            profound understanding of Ethiopia&apos;s
                            unbelievable natural wealth—its breathtaking
                            gemstones, vast mineral deposits, and untapped
                            energy resources. From the vibrant play-of-color in
                            Welo opals to the rich gold deposits of Lega Dembi,
                            and the geothermal and potash potential of the
                            Danakil Depression, Ethiopia&apos;s geological
                            treasures inspired a deep vision: to transform these
                            resources into a source of hope and prosperity for
                            Africa.
                        </p>
                        <p className="text-lg text-muted mt-6">
                            We recognized that Africa&apos;s gemstones,
                            minerals, and energy resources are not just
                            materials—they are opportunities to uplift
                            communities, drive economic growth, and showcase the
                            continent&apos;s potential to the world. This vision
                            became the foundation of Amadoniyas Gem and Mineral
                            World, a platform that celebrates Africa&apos;s
                            richness while creating a sustainable future for its
                            people.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mineral Portfolio Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Ethiopia&apos;s Mineral Portfolio
                        </h2>
                        <p className="text-lg text-muted mb-8">
                            Ethiopia combines world-class gemstones with strategic industrial and energy minerals. Key highlights:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-muted">
                            <div className="space-y-4">
                                <p><strong>Metallic minerals:</strong> High-grade gold (Lega Dembi, Tulu Kapi) plus copper and iron ore with room to scale.</p>
                                <p><strong>Industrial minerals:</strong> Abundant limestone, gypsum, potash, and marble; Danakil potash ranks among the largest globally.</p>
                                <p><strong>Gemstones:</strong> Globally prized Welo opals, emeralds, sapphires, and tourmalines with vibrant play-of-color and clarity.</p>
                                <p><strong>Energy minerals:</strong> Coal plus underexplored oil and gas reserves that strengthen regional energy security.</p>
                            </div>
                            <div className="space-y-4">
                                <p><strong>Construction minerals:</strong> Sand, gravel, clay, basalt, and granite power local infrastructure and export quality stone.</p>
                                <p><strong>Fertilizer minerals:</strong> Massive potash and phosphate reserves in Danakil position Ethiopia as a future supplier.</p>
                                <p><strong>Rare earth & battery metals:</strong> Emerging tantalum, niobium, and lithium prospects support high-tech and energy transition demand.</p>
                                <p className="italic">Overall: high quality, plentiful, and still largely untapped—placing Ethiopia as a rising African mining leader.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Globe className="w-16 h-16 text-gray-700 mb-6" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Our Vision
                        </h2>
                        <p className="text-lg text-muted">
                            We envision a world where Africa&apos;s gemstones,
                            minerals, and energy resources are celebrated not
                            only for their beauty and utility but also for their
                            role in transforming lives and economies. Amadoniyas
                            Gem and Mineral World aims to be a symbol of hope,
                            showcasing Africa&apos;s potential to the world
                            while creating sustainable opportunities for local
                            communities. We believe that Africa&apos;s natural
                            resources are not just commodities but catalysts for
                            growth, innovation, and unity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Goal Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Our Goal
                        </h2>
                        <p className="text-lg text-muted mb-6">
                            Our goal is to establish Amadoniyas Gem and Mineral
                            World as the premier destination for ethically
                            sourced, high-quality gemstones, minerals, and
                            energy resources from Ethiopia and across Africa. We
                            are committed to:
                        </p>
                        <ul className="space-y-4 text-lg text-muted list-disc list-inside">
                            <li>
                                <strong>
                                    Promoting Africa&apos;s Richness:
                                </strong>{" "}
                                Highlighting the diversity and uniqueness of
                                African gemstones, minerals, and energy
                                resources to the international market.
                            </li>
                            <li>
                                <strong>Empowering Communities:</strong>{" "}
                                Creating fair-trade opportunities that support
                                local miners, artisans, and their families.
                            </li>
                            <li>
                                <strong>Sustainability:</strong> Ensuring
                                responsible mining and energy extraction
                                practices that protect the environment and
                                preserve Africa&apos;s natural heritage for
                                future generations.
                            </li>
                            <li>
                                <strong>Global Connection:</strong> Building a
                                bridge between Africa and the world, fostering
                                cultural exchange and economic growth.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Us?
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Authenticity",
                                description:
                                    "Every gemstone, mineral, and energy resource we offer is sourced directly from Africa, ensuring authenticity and traceability.",
                                icon: Diamond,
                            },
                            {
                                title: "Quality",
                                description:
                                    "We pride ourselves on delivering only the finest quality, handpicked by experts.",
                                icon: Award,
                            },
                            {
                                title: "Ethics",
                                description:
                                    "Our commitment to fair trade and sustainability is at the heart of everything we do.",
                                icon: Leaf,
                            },
                            {
                                title: "Hope",
                                description:
                                    "By supporting Amadoniyas Gem and Mineral World, you are contributing to a brighter future for Africa and its people.",
                                icon: Users,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <item.icon className="w-16 h-16 mx-auto mb-4 text-gray-700" />
                                <h3 className="text-xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Energy Minerals Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Energy Minerals: Powering Africa&apos;s Future
                        </h2>
                        <p className="text-lg text-muted">
                            Africa&apos;s energy minerals, including coal, oil,
                            natural gas, and rare earth elements, hold the key
                            to the continent&apos;s sustainable development.
                            Ethiopia&apos;s Danakil Depression, for instance, is
                            home to vast potash reserves and geothermal energy
                            potential, while other regions offer untapped oil
                            and gas resources. At Amadoniyas Gem and Mineral
                            World, we are committed to promoting these energy
                            resources responsibly, ensuring they contribute to
                            Africa&apos;s energy security and economic growth
                            while minimizing environmental impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto bg-accent-foreground p-8 md:p-12 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            A Message from the Founder
                        </h2>
                        <blockquote className="text-lg text-muted italic mb-4">
                            &quot;The journey of Amadoniyas Gem and Mineral
                            World began with a simple yet profound realization:
                            Ethiopia and Africa are home to some of the most
                            unbelievable natural resources on Earth. From the
                            dazzling opals of Welo to the golden riches of Lega
                            Dembi and the energy potential of the Danakil
                            Depression, I saw not just materials but a vision of
                            hope for Africa.
                        </blockquote>
                        <blockquote className="text-lg text-muted italic mb-6">
                            At Amadoniyas Gem and Mineral World, we are not just
                            selling stones or energy; we are sharing a piece of
                            Africa&apos;s soul with the world. Together, we can
                            unlock the continent&apos;s potential and create a
                            legacy of prosperity for generations to come.&quot;
                        </blockquote>
                        <p className="text-lg font-bold text-app">
                            – Eyosafit, Founder & CEO
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="relative py-20 text-white">
                <Image
                    src="/contact.jpg"
                    alt="Gemstones"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4"
                        {...fadeIn}
                    >
                        Join Us on This Journey
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        Explore our collection, learn about Africa&apos;s
                        geological and energy wonders, and become part of a
                        movement that celebrates beauty, sustainability, and
                        hope. Amadoniyas Gem and Mineral World is more than a
                        business—it&apos;s a vision for a brighter Africa and a
                        connected world.
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                        {...fadeIn}
                        transition={{ delay: 0.3 }}
                    >
                        Welcome to the world of Amadoniyas, where every stone
                        tells a story, every resource powers progress, and every
                        purchase makes a difference.
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
                            Explore Our Collection
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
    );
}
