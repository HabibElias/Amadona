export type Testimonial = {
  name: string
  quote: string
  location?: string
  role?: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    role: "Jewelry Designer",
    quote:
      "The quality and beauty of the emerald I purchased exceeded my expectations. Exceptional service!",
    image: "/avatar2.png",
  },
  {
    name: "Michael Chen",
    location: "Hong Kong",
    role: "Collector",
    quote:
      "As a collector, I'm impressed by the rare gemstones and expert knowledge this company offers.",
    image: "/avatar1.png",
  },
]
