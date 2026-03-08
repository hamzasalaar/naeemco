"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Enter valid phone"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Call API route (to be created)
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-width flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            Get in touch for product inquiries, quotes, or partnerships.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                {...register("phone")}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-(--color-accent) text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Or reach us via WhatsApp:{" "}
            <a
              href="https://wa.me/03363334733"
              target="_blank"
              className="text-(--color-accent) font-medium"
            >
              Chat Now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
