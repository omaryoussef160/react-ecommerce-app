import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactUs() {

  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
        .required("Email is required"),

      firstName: Yup.string()
        .required("First name is required"),

      lastName: Yup.string()
        .required("Last name is required"),

      phone: Yup.string(),

      message: Yup.string()
        .min(10, "Minimum 10 characters")
        .max(500, "Maximum 500 characters")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSuccess(true);
      resetForm();
    },
  });

  const inputClass = (field) =>
    `w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition
     bg-white text-gray-800 placeholder-gray-400
     ${formik.touched[field] && formik.errors[field]
       ? "border-red-300 focus:border-red-400"
       : "border-gray-200 focus:border-violet-400"
     }`;

  return (
    <div className="max-w-lg mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900">
          Contact us
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          We'll get back to you as soon as possible
        </p>
      </div>

      {/* Success */}
      {success && (
        <div className="mb-6 px-4 py-3 bg-green-50 border border-green-100 
                        rounded-lg text-sm text-green-700">
          Message sent! We'll be in touch soon.
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

        {/* Name Row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              name="firstName"
              value={formik.values.firstName}
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputClass("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-400 text-xs mt-1">
                {formik.errors.firstName}
              </p>
            )}
          </div>

          <div>
            <input
              name="lastName"
              value={formik.values.lastName}
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputClass("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-400 text-xs mt-1">
                {formik.errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            value={formik.values.email}
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <input
          name="phone"
          value={formik.values.phone}
          placeholder="Phone number (optional)"
          onChange={formik.handleChange}
          className={inputClass("phone")}
        />

        {/* Message */}
        <div>
          <textarea
            name="message"
            value={formik.values.message}
            placeholder="Your message..."
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${inputClass("message")} resize-none`}
          />
          <div className="flex justify-between items-center mt-1">
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-400 text-xs">
                {formik.errors.message}
              </p>
            ) : (
              <span />
            )}
            <span className="text-xs text-gray-400 ml-auto">
              {formik.values.message.length}/500
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-violet-800 text-violet-100 py-2.5 
                     rounded-lg text-sm font-medium 
                     hover:bg-violet-900 transition mt-1"
        >
          Send message
        </button>

      </form>
    </div>
  );
}

export default ContactUs;