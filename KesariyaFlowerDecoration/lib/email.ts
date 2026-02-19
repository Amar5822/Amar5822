import emailjs from "@emailjs/browser";
import { InquiryFormData } from "@/types";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_gedrnn6";
const EMAILJS_TEMPLATE_ID = "template_1kmy20g";
const EMAILJS_PUBLIC_KEY = "toR4zVXDRV1w50vo6";

export async function sendInquiryEmail(
  formData: InquiryFormData,
): Promise<boolean> {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_date: formData.eventDate,
      guest_count: formData.guestCount,
      interested_facility: formData.interestedFacility,
      message: formData.message,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    return response.status === 200;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}
