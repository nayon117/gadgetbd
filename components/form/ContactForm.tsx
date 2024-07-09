"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

const ContactForm = () => {
  // Initial state for form data and loading state
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  // Handles changes in form input fields
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handles form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      setFormData(initialFormData);
      const { data } = await response.json();
      if (data) alert(`Email ${data.id} was successfully sent!`);
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <section className="relative mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex w-full flex-1 flex-col">
        <h1 className=" text-dark100_light900 h1-bold">Get In Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-7"
        >
          <label className="text-dark300_light700 font-semibold">
            Name
            <Input
              type="text"
              name="name"
              className="input no-focus text-dark300_light700 background-light900_dark200 border-none outline-none"
              required
              placeholder="Hasibul..."
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="text-dark300_light700 font-semibold">
            Email
            <Input
              type="email"
              name="email"
              className="input no-focus background-light900_dark200 text-dark300_light700 border-none outline-none"
              required
              placeholder="hasibul@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-dark300_light700 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={8}
              className="textarea no-focus text-dark300_light700 background-light900_dark200 border-none outline-none"
              required
              placeholder="Let me know how i can help you"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <Button
            type="submit"
            className="btn primary-gradient text-white"
            style={{ width: "fit-content" }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
      <div className="flex-1">
        <Image
          src="https://i.ibb.co/yRbWpdj/quino-al-4-SNUc-HPi-C8c-unsplash-removebg-preview.png"
          alt="contact"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ContactForm;
