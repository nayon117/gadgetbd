import ContactForm from "@/components/form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page of GadgetBd Store",
};
const page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};
export default page;
