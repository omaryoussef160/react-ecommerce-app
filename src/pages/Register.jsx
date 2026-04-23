import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),

      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
        .required("Email is required"),

      username: Yup.string()
        .matches(/^\S*$/, "Username must not contain spaces")
        .required("Username is required"),

      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain uppercase letter")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password")
    }),

    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    }
  });

  const inputClass = (field) =>
    `w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition
     bg-white text-gray-800 placeholder-gray-400
     ${formik.touched[field] && formik.errors[field]
       ? "border-red-300 focus:border-red-400"
       : "border-gray-200 focus:border-violet-400"
     }`;

  return (
    <div className="max-w-md mx-auto px-4 py-12">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900">
          Create account
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Fill in the details below to get started
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

        {/* Name */}
        <div>
          <input
            name="name"
            placeholder="Full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={inputClass("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={inputClass("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Username */}
        <div>
          <input
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={inputClass("username")}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.username}</p>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-1" />

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={inputClass("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={inputClass("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.confirmPassword}</p>
          )}
        </div>

        {/* Password hint */}
        <p className="text-xs text-gray-400 -mt-2">
          Min 8 characters, must include an uppercase letter
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-violet-800 text-violet-100 py-2.5
                     rounded-lg text-sm font-medium
                     hover:bg-violet-900 transition mt-1"
        >
          Create account
        </button>

      </form>
    </div>
  );
}

export default Register;