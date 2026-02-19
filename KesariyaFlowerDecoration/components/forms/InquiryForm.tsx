"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendInquiryEmail } from "@/lib/email";
import { InquiryFormData } from "@/types";

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>();

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using EmailJS
      const success = await sendInquiryEmail(data);

      if (success) {
        setSubmitStatus("success");
        reset();

        // Show success message for 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Thank you for your inquiry!</p>
          <p className="text-sm">We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Something went wrong.</p>
          <p className="text-sm">Please try again or contact us directly.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number *
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="9876543210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email Address *
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="johndoe@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Date */}
        <div>
          <label
            htmlFor="eventDate"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Event Date *
          </label>
          <input
            {...register("eventDate", { required: "Event date is required" })}
            type="date"
            id="eventDate"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.eventDate.message}
            </p>
          )}
        </div>

        {/* Guest Count */}
        <div>
          <label
            htmlFor="guestCount"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Number of Guests *
          </label>
          <input
            {...register("guestCount", {
              required: "Guest count is required",
              min: { value: 1, message: "Please enter a valid number" },
            })}
            type="number"
            id="guestCount"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="200"
          />
          {errors.guestCount && (
            <p className="mt-1 text-sm text-red-600">
              {errors.guestCount.message}
            </p>
          )}
        </div>
      </div>

      {/* Interested Facility */}
      <div>
        <label
          htmlFor="interestedFacility"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Interested Service *
        </label>
        <select
          {...register("interestedFacility", {
            required: "Please select a service",
          })}
          id="interestedFacility"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="Wedding Venue">Wedding Venue</option>
          <option value="Mandap Decoration">Mandap Decoration</option>
          <option value="Stage Decoration">Stage Decoration</option>
          <option value="Flower Decoration">Flower Decoration</option>
          <option value="Catering">Catering Services</option>
          <option value="Photography">Photography & Video</option>
          <option value="Music & DJ">Music & DJ</option>
          <option value="Lighting">Lighting & Effects</option>
          <option value="Complete Package">Complete Wedding Package</option>
        </select>
        {errors.interestedFacility && (
          <p className="mt-1 text-sm text-red-600">
            {errors.interestedFacility.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Additional Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="text-sm text-gray-600 text-center">
        We'll respond to your inquiry within 24 hours
      </p>
    </form>
  );
}
