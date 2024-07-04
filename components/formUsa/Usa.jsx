// import { useState } from "react";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import Modal from "react-modal";
// import emailjs from "emailjs-com";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// // Import data lists
// import {
//   eyeColor,
//   countryList,
//   employmentStatus,
//   historyCountryList,
//   enrollmentCenters,
// } from "@/data/usaGlobalForm";

// export default function FormUsa() {
//   const router = useRouter();

//   // Validation schema
//   const schema = yup.object().shape({
//     email: yup.string().email().required("Email is required!"),
//     firstName: yup.string().required("First name is required!"),
//     lastName: yup.string().required("Last name is required!"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       birthDate: null,
//     },
//   });

//   const [showReviewModal, setShowReviewModal] = useState(false);

//   const onSubmit = (data) => {
//     console.log("Submitted data:", data); // Debugging line
//     setShowReviewModal(true);
//   };

//   const handleConfirm = async () => {
//     const data = watch(); // Capture the current form data
//     console.log("Form data to be confirmed:", data); // Debugging line
//     try {
//       const docRef = await addDoc(collection(db, "entries"), data);
//       console.log("Document written with ID: ", docRef.id);

//       // Send email using EmailJS
//       emailjs
//         .send(
//           "service_jpc7te9",
//           "template_7f9xugr",
//           {
//             to_email: data.email, // Use the correct variable name as per your EmailJS template
//             to_name: `${data.firstName} ${data.lastName}`, // Concatenate first and last name
//             db_id: docRef.id, // Database document ID
//             message: "Success",
//           },
//           "ryt4AJZWi64Vq3UbD"
//         )
//         .then((response) => {
//           console.log(
//             "Email sent successfully!",
//             response.status,
//             response.text
//           );
//         })
//         .catch((error) => {
//           console.error("Error sending email:", error);
//         });

//       reset();
//       setShowReviewModal(false);
//       router.push("https://www.paypal.com/ncp/payment/3677M53HRBNKJ");
//     } catch (e) {
//       console.error("Error adding document:", e);
//     }
//   };

//   return (
//     <div className="max-w-screen-2xl mx-auto">
//       <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
//         <div className="formSection">
//           <div className="inputsGrid">
//             <div className="mb-4">
//               <label htmlFor="email" className="label">
//                 Email<span className="star">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 {...register("email")}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//                   errors.email ? "border-red-500" : ""
//                 }`}
//               />
//               <p className="text-red-500">{errors.email?.message}</p>
//             </div>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="firstName" className="label">
//             Your First Name <span className="star">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder=""
//             id="firstName"
//             {...register("firstName")}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.firstName ? "border-red-500" : ""
//             }`}
//           />
//           <p className="text-red-500">{errors.firstName?.message}</p>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="lastName" className="label">
//             Your Last Name <span className="star">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder=""
//             id="lastName"
//             {...register("lastName")}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.lastName ? "border-red-500" : ""
//             }`}
//           />
//           <p className="text-red-500">{errors.lastName?.message}</p>
//         </div>
//         <input
//           value="Preview"
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white w-32 ml-48 cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         />
//         <Modal
//           isOpen={showReviewModal}
//           onRequestClose={() => setShowReviewModal(false)}
//           contentLabel="Form Review"
//           className="modalContent"
//           overlayClassName="modalOverlay"
//         >
//           <h2 className="text-xl font-semibold mb-4">
//             Review Your Information
//           </h2>
//           <p>
//             Email address: <b>{watch("email")}</b>
//           </p>
//           <div className="mt-6">
//             <button
//               className="rounded-md bg-blue-300 mr-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               onClick={() => setShowReviewModal(false)}
//             >
//               Edit
//             </button>
//             <button
//               className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               onClick={handleConfirm}
//             >
//               Confirm
//             </button>
//           </div>
//         </Modal>
//       </form>
//     </div>
//   );
// }

//-=> NEW WORKING CODE <=-

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Modal from "react-modal";
import emailjs from "emailjs-com";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Import data lists
import {
  eyeColor,
  countryList,
  employmentStatus,
  historyCountryList,
  enrollmentCenters,
} from "@/data/usaGlobalForm";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
});

export default function FormUsa() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      birthDate: null,
    },
  });

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setShowReviewModal(true);
  };

  const handleConfirm = async () => {
    const data = watch(); // Capture the current form data
    console.log("Form data to be confirmed:", data); // Debugging line
    setIsSubmitting(true); // Disable the confirm button while submitting

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "entries"), data);
      console.log("Document written with ID: ", docRef.id);

      // Send email using EmailJS
      try {
        const response = await emailjs.send(
          "service_jpc7te9",
          "template_7f9xugr",
          {
            to_email: data.email,
            to_name: `${data.firstName} ${data.lastName}`,
            db_id: docRef.id,
            message: "Success",
          },
          "ryt4AJZWi64Vq3UbD"
        );
        console.log("Email sent successfully!", response.status, response.text);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        alert("There was an issue sending the confirmation email. Please try again.");
      }

      reset();
      setShowReviewModal(false);
      router.push("https://www.paypal.com/ncp/payment/3677M53HRBNKJ");
    } catch (e) {
      console.error("Error adding document:", e);
      alert("There was an issue submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the confirm button
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <div className="formSection">
          <div className="inputsGrid">
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email<span className="star">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="label">
            Your First Name <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder=""
            id="firstName"
            {...register("firstName")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          <p className="text-red-500">{errors.firstName?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="label">
            Your Last Name <span className="star">*</span>
          </label>
          <input
            type="text"
            placeholder=""
            id="lastName"
            {...register("lastName")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          <p className="text-red-500">{errors.lastName?.message}</p>
        </div>
        <input
          value="Preview"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white w-32 ml-48 cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
        <Modal
          isOpen={showReviewModal}
          onRequestClose={() => setShowReviewModal(false)}
          contentLabel="Form Review"
          className="modalContent"
          overlayClassName="modalOverlay"
        >
          <h2 className="text-xl font-semibold mb-4">
            Review Your Information
          </h2>
          <p>
            Email address: <b>{watch("email")}</b>
          </p>
          <div className="mt-6">
            <button
              className="rounded-md bg-blue-300 mr-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setShowReviewModal(false)}
            >
              Edit
            </button>
            <button
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleConfirm}
              disabled={isSubmitting} // Disable button while submitting
            >
              Confirm
            </button>
          </div>
        </Modal>
      </form>
    </div>
  );
}
