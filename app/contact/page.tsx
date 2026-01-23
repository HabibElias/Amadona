"use client";

import { Suspense, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Contact() {
    return (
        <Suspense fallback={<div className="container mx-auto px-4 py-16">Loading contact...</div>}>
            <ContactContent />
        </Suspense>
    );
}

function ContactContent() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "error">(
        "idle",
    );
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        const subject = searchParams.get("subject") ?? "";
        const message = searchParams.get("message") ?? "";

        if (subject || message) {
            setFormData((prev) => ({
                ...prev,
                subject: subject || prev.subject,
                message: message || prev.message,
            }));
        }
    }, [searchParams]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const nextErrors = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };

        if (formData.name.trim().length < 2) {
            nextErrors.name = "Please enter your full name.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email.trim())) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (formData.subject.trim().length < 3) {
            nextErrors.subject = "Subject should be at least 3 characters.";
        }

        if (formData.message.trim().length < 10) {
            nextErrors.message = "Message should be at least 10 characters.";
        }

        setErrors(nextErrors);
        return Object.values(nextErrors).every((msg) => msg === "");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setSubmitError("");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus("error");
            setSubmitError("Email service is not configured. Please email amadona@gmail.com directly.");
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    publicKey,
                },
            );

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
            setSubmitError("Unable to send message right now. Please try again or email amadona@gmail.com.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-app text-app">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center text-white">
                <Image
                    src="/contact.jpg"
                    alt="Contact Us"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 hero-overlay" />
                <motion.h1
                    className="relative z-10 text-5xl md:text-6xl font-bold text-center"
                    {...fadeIn}
                >
                    Contact Us
                </motion.h1>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-card p-8 rounded-2xl shadow-elevated border border-subtle"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            Send Us a Message
                        </h2>
                        {status === "success" && (
                            <p className="mb-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                                Thanks for reaching out. We&apos;ll reply from amadona@gmail.com soon.
                            </p>
                        )}
                        {status === "error" && Object.values(errors).some(Boolean) && (
                            <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                                Please fix the highlighted fields.
                            </p>
                        )}
                        {status === "error" && submitError && (
                            <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                                {submitError}
                            </p>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 font-semibold"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.name)}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    className="w-full px-4 py-2 border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 bg-surface text-app"
                                />
                                {errors.name && (
                                    <p id="name-error" className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-semibold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className="w-full px-4 py-2 border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 bg-surface text-app"
                                />
                                {errors.email && (
                                    <p id="email-error" className="mt-1 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 font-semibold"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.subject)}
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                    className="w-full px-4 py-2 border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 bg-surface text-app"
                                />
                                {errors.subject && (
                                    <p id="subject-error" className="mt-1 text-sm text-red-600">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 font-semibold"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 bg-surface text-app"
                                ></textarea>
                                {errors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-red-600">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-purple-800 text-white px-6 py-3 rounded-md hover:bg-purple-900 transition-colors transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information and Map */}
                    <div className="space-y-8">
                        <motion.div
                            className="bg-card p-8 rounded-2xl shadow-elevated border border-subtle"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-purple-800" />
                                    <span>0991065599</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-purple-800" />
                                    <span>amadona@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin className="text-purple-800" />
                                    <span>Bole, Addis Ababa, Ethiopia</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-card p-8 rounded-2xl shadow-elevated border border-subtle"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">
                                Our Location
                            </h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps?q=Bole%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="rounded-md"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
