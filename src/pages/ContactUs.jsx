import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactUs() {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "", phone: "", message: "" },
    validationSchema: Yup.object({
      email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email").required("Email is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string(),
      message: Yup.string().min(10, "Write at least 10 characters").max(500, "Maximum 500 characters").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => { console.log(values); setSuccess(true); resetForm(); },
  });

  const inputClass = (field) => `w-full rounded-xl border bg-[#fcfbf8] px-4 py-3 text-sm text-[#27332a] outline-none transition placeholder:text-[#a0a9a0] ${formik.touched[field] && formik.errors[field] ? "border-red-300 focus:border-red-400" : "border-[#e2ded6] focus:border-[#78966d] focus:bg-white focus:ring-4 focus:ring-[#e7eee4]"}`;

  return (
    <div className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div className="absolute -left-16 top-12 h-48 w-48 rounded-full border-[18px] border-[#e7eee4]" />
      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="pt-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6f8f67]">Say hello</span>
          <h1 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#27332a] sm:text-5xl">Let’s make your next find feel right.</h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#667085]">A question, a thought, or something you are looking for? Leave us a note and we’ll get back to you soon.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#45603e]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7eee4]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v14H4zM4 7l8 6 8-6" /></svg></span> hello@nest.store</div>
        </div>

        <div className="rounded-[1.5rem] border border-[#e7e3dc] bg-white p-5 shadow-[0_18px_35px_rgba(38,51,39,0.08)] sm:p-8">
          {success && <div className="mb-6 rounded-xl border border-[#cfe0ca] bg-[#eef5eb] px-4 py-3 text-sm font-medium text-[#45603e]">Your note is on its way. We’ll be in touch soon.</div>}
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="firstName" placeholder="First name" formik={formik} className={inputClass("firstName")} />
              <Field name="lastName" placeholder="Last name" formik={formik} className={inputClass("lastName")} />
            </div>
            <Field name="email" placeholder="Email address" formik={formik} className={inputClass("email")} />
            <Field name="phone" placeholder="Phone number (optional)" formik={formik} className={inputClass("phone")} />
            <div>
              <textarea name="message" value={formik.values.message} placeholder="What’s on your mind?" rows={5} onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${inputClass("message")} resize-none`} />
              <div className="mt-1 flex justify-between text-xs"><Error name="message" formik={formik} /><span className="text-[#98a395]">{formik.values.message.length}/500</span></div>
            </div>
            <button type="submit" className="mt-1 rounded-full bg-[#27332a] py-3.5 text-sm font-semibold text-white transition hover:bg-[#45603e] shadow-[0_8px_18px_rgba(38,51,39,0.18)]">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Error({ name, formik }) { return formik.touched[name] && formik.errors[name] ? <span className="text-red-500">{formik.errors[name]}</span> : <span />; }
function Field({ name, placeholder, formik, className }) { return <div><input name={name} value={formik.values[name]} placeholder={placeholder} onChange={formik.handleChange} onBlur={formik.handleBlur} className={className} /><div className="mt-1 text-xs"><Error name={name} formik={formik} /></div></div>; }

export default ContactUs;
