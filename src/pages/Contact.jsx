"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be numeric"),
      address: Yup.string().required("Address is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("/api/submit-form", values);
        console.log("response", response);
        if (response.data.data) {
          console.log("Form submitted:", response);
          toast.success("Form submitted successfully!");
          resetForm();
        } else {
          console.log("Submission failed:", response.error);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const handlePhoneChange = (value) => {
    formik.setFieldValue("phone", value); // Set the phone value to Formik
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <section className="bg-[#000] pt-28 pb-5 border-b border-[#8E7861]">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <img
              src="/h1-img-14.png"
              alt="Contact Us"
              className="w-full object-cover"
            />
          </div>
          <div className="col-span-1 flex justify-center flex-col">
            <h2 className="uppercase text-[#8E7861] text-4xl font-[600] mb-4">
              contact us
            </h2>
            <div className="pe-20">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="lg:col-span-1 col-span-2">
                    <input
                      type="text"
                      name="fullName"
                      className="w-full bg-transparent border-b py-2 focus:outline-none text-white"
                      placeholder="Full name"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.fullName}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-transparent border-b py-2 focus:outline-none text-white"
                      placeholder="E-mail"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <PhoneInput
                      country={"in"} // Default country code
                      value={formik.values.phone}
                      onChange={handlePhoneChange} // Custom handler for phone input
                      inputProps={{
                        name: "phone",
                        placeholder: "Enter phone number",
                        required: true,
                      }}
                      specialLabel={false} // Hide the label
                      countryCodeEditable={false} // Disable country code editing
                      className="w-full bg-transparent border-b py-[2px] focus:outline-none text-white"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <input
                      type="text"
                      name="address"
                      className="w-full bg-transparent border-b py-2 focus:outline-none text-white"
                      placeholder="Address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.address}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    className="w-full bg-transparent border-b py-2 focus:outline-none text-white"
                    placeholder="Message"
                    rows={3}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="border-[#8E7861] border text-white px-5 py-2 hover:bg-[#8E7861]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
