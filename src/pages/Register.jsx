import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: "", email: "", username: "", password: "", confirmPassword: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email").required("Email is required"),
      username: Yup.string().matches(/^\S*$/, "Username cannot contain spaces").required("Username is required"),
      password: Yup.string().min(8, "Use at least 8 characters").matches(/[A-Z]/, "Include one uppercase letter").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm your password"),
    }),
    onSubmit: (values) => { console.log(values); navigate("/"); },
  });
  const inputClass = (field) => `w-full rounded-xl border bg-[#fcfbf8] px-4 py-3 text-sm text-[#27332a] outline-none transition placeholder:text-[#a0a9a0] ${formik.touched[field] && formik.errors[field] ? "border-red-300 focus:border-red-400" : "border-[#e2ded6] focus:border-[#78966d] focus:bg-white focus:ring-4 focus:ring-[#e7eee4]"}`;

  return (
    <div className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div className="absolute -right-12 top-8 h-64 w-64 rounded-full border-[22px] border-[#e7eee4]" />
      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6f8f67]">Become part of nest</span>
          <h1 className="mt-3 font-['Playfair_Display'] text-4xl font-semibold leading-tight text-[#27332a] sm:text-5xl">Save the things that feel like you.</h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#667085]">Create your personal space to keep track of your favourite finds and make shopping feel a little more considered.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#45603e]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7eee4]">01</span> Curated, always.</div>
        </div>

        <div className="rounded-[1.5rem] border border-[#e7e3dc] bg-white p-5 shadow-[0_18px_35px_rgba(38,51,39,0.08)] sm:p-8">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <FormField name="name" placeholder="Full name" formik={formik} className={inputClass("name")} />
            <FormField name="email" placeholder="Email address" formik={formik} className={inputClass("email")} />
            <FormField name="username" placeholder="Choose a username" formik={formik} className={inputClass("username")} />
            <div className="my-1 border-t border-[#eeeae4]" />
            <FormField name="password" type="password" placeholder="Create a password" formik={formik} className={inputClass("password")} />
            <FormField name="confirmPassword" type="password" placeholder="Confirm password" formik={formik} className={inputClass("confirmPassword")} />
            <p className="-mt-1 text-xs leading-5 text-[#98a395]">Use at least 8 characters and include one uppercase letter.</p>
            <button type="submit" className="mt-1 rounded-full bg-[#27332a] py-3.5 text-sm font-semibold text-white transition hover:bg-[#45603e] shadow-[0_8px_18px_rgba(38,51,39,0.18)]">Create your account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormField({ name, type = "text", placeholder, formik, className }) { return <div><input type={type} name={name} value={formik.values[name]} placeholder={placeholder} onChange={formik.handleChange} onBlur={formik.handleBlur} className={className} />{formik.touched[name] && formik.errors[name] && <p className="mt-1 text-xs text-red-500">{formik.errors[name]}</p>}</div>; }

export default Register;
