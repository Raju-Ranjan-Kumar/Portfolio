import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SectionEyebrow } from "./ui/Chrome";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // await axios.post("https://getform.io/f/raeqjora", data);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
    >
      <SectionEyebrow file="contact.js">let's talk</SectionEyebrow>

      <div className="rounded-lg border border-line bg-surface p-8 text-center md:p-14">
        <h1 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
          Building something great?
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          I'm open to new frontend roles and freelance work. Reach out and
          I'll get back to you within a day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:rajuranjansimari110@gmail.com"
            className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            rajuranjansimari110@gmail.com
          </a>
          <a
            href="tel:+916202975094"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ivory transition-colors hover:border-mint hover:text-mint"
          >
            +91 62029 75094
          </a>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-lg border border-line bg-surface p-6 md:p-8"
        >
          <h2 className="mb-4 font-display text-xl font-semibold text-ivory">
            Send a message
          </h2>
          <div className="mb-4 flex flex-col gap-1">
            <label className="font-mono text-xs text-muted">FullName</label>
            <input
              {...register("name", { required: true })}
              className="rounded-md border border-line bg-surface2 px-3 py-2 text-sm text-ivory placeholder:text-muted focus:border-mint focus:outline-none"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span className="error text-xs">This field is required</span>}
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <label className="font-mono text-xs text-muted">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="rounded-md border border-line bg-surface2 px-3 py-2 text-sm text-ivory placeholder:text-muted focus:border-mint focus:outline-none"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error text-xs">This field is required</span>}
          </div>
          <div className="mb-5 flex flex-col gap-1">
            <label className="font-mono text-xs text-muted">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="rounded-md border border-line bg-surface2 px-3 py-2 text-sm text-ivory placeholder:text-muted focus:border-mint focus:outline-none"
              rows={4}
              placeholder="Enter your query"
            />
            {errors.message && <span className="error text-xs">This field is required</span>}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-amber px-4 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
