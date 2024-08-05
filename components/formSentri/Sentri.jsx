import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import Modal from "react-modal";
import emailjs from "emailjs-com";

import {
  eyeColor,
  countryList,
  employmentStatus,
  historyCountryList,
  enrollmentCentersSentri,
} from "@/data/usaGlobalForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { redirect } from "next/dist/server/api-utils";

export default function FormNexus() {
  const router = useRouter();

  const schema = yup.object().shape({
    // loginGovAccount: yup.string().required("Required!"),
    email: yup.string().email().required("Email is required!"),
    firstName: yup.string().required("First Name is required!"),
    lastName: yup.string().required("Last Name is required!"),
    gender: yup.string().required("Gender is required!"),
    phoneNumber: yup.string().required("Phone Number is required!"),
    height: yup.string().required("Height Number is required!"),
    eyeColour: yup.string().required("Eye Colour is required!"),
    birthDate: yup
      .string()
      .default(() => new Date())
      .required("Birth Date is required!"),
    // .nullable(),
    cityBirth: yup.string().required("City of Birth required!"),
    stateBirth: yup
      .string()
      .required("Your State / Province of Birth required!"),
    countryBirth: yup.string().required("Your Country of birth required!"),
    primaryCitizenship: yup.string().required("Your Primary Citizenship is required!"),
    primaryPassportNumber: yup.string().required("Your Primary Passport Number is required!"),
    passportExpiryDate: yup.string().required("Your Passport Expiry Date is required!"),
    passportDateOfIssue: yup.string().required("Your Passport Date of Issuee is required!"),
    exactNameOnPrimaryPassport: yup.string().required("Your Exact Name on Primary Passport is required!"),
    drivingLicenceNumber: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("Driving Licence Number is required!"),
    }),

    drivingLicenceExpiryDate: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("Driving Licence Expiry Date is required!"),
    }),
    dlProvinceOfIssue: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("DL State / Province of Issue is required!"),
    }),
    enhancedLicence: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("Is this an Enhanced Licence is required!"),
    }),
    hazardousMaterialEndorsement: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup
        .string()
        .required(
          "Has this Licence a Hazardous Material Endorsement is required!"
        ),
    }),
    commercialLicence: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("Is this a Commercial Licence"),
    }),
    exactNameOnLicence: yup.string().when("showTextInputsDriving", {
      is: true,
      then: yup.string().required("Is this a Commercial Licence"),
    }),
    startLivingHere: yup
      .string()
      .required("Current When did you start living here is required!"),
    currentAddress: yup.string().required("Current Address is required!"),
    currentCity: yup.string().required("Current City is required!"),
    currentStateProvinceRegion: yup
      .string()
      .required("Current State/Province/Region is required!"),
    currentZipPostalCode: yup
      .string()
      .required("Current Zip/Postal Code is required!"),
    currentCountry: yup.string().required("Current Country is required!"),
    additionalInformation1question: yup
      .string()
      .required("Answer is required!"),
    additionalInformation2question: yup
      .string()
      .required("Answer is required!"),
    additionalInformation3question: yup
      .string()
      .required("Answer is required!"),
    additionalInformation4question: yup
      .string()
      .required("Answer is required!"),
    agreeCertificationDisclaimer: yup.string().required("Answer is required!"),
    cardNumber: yup.string().required("Card Number is required!"),
    expiryDate: yup.string().required("Expiry Date is required!"),
    // cvv: yup.string().required("CVV is required!"),
    cardType: yup.string().required("Card Type is required!"),
    cardHoldersFirstName: yup
      .string()
      .required("Card Holders First Name is required!"),
    cardHoldersLastName: yup
      .string()
      .required("Card Holders Last Name is required!"),
    cardHoldersAddress: yup
      .string()
      .required("Card Holders Address is required!"),
    cardHoldersCity: yup.string().required("Card Holders City is required!"),
    cardHoldersStateProvinceRegion: yup
      .string()
      .required("Card Holders State/Province/Region is required!"),
    cardHoldersZipPostalCode: yup
      .string()
      .required("Card Holders Zip/Postal Code is required!"),
    cardHoldersCountry: yup
      .string()
      .required("Card Holders Country is required!"),
    enrollmentCenter: yup.string().required("Enrollment Center is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
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
          "service_2xl14jx",
          "template_ddqc96z",
          {
            to_email: data.email,
            to_name: `${data.firstName} ${data.lastName}`,
            db_id: docRef.id,
            message: "Success",
          },
           "E4baR-hUuZlZuJ5_G"
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



  const [hasLoginGovAccount, setHasLoginGovAccount] = useState("No");
  const [showTextInputs, setShowTextInputs] = useState(false);

  //  for  Birth Date
  const [startDate, setStartDate] = useState(null);

  const [hasDrivingLicence, setHasDrivingLicence] = useState("No");
  const [showTextInputsDriving, setShowTextInputsDriving] = useState(false);

  const [fiveYears, setFiveYears] = useState("Yes");
  const [showfiveYearsInput, setShowfiveYearsInput] = useState(false);

  const [employmentFor5YearsOrMore, setEmploymentFiveYears] = useState("Yes");
  const [showfiveYearsEmploymentInput, setShowfiveYearsEmploymentInput] =
    useState(false);

  // Today Date
  const [todayDate, setTodayDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    if (register.birthDate) {
      setStartDate(new Date(register.birthDate.value));
    }
  }, [register.birthDate]);

  //   for Citizenship & Nationality Passport Expiry Date
  const [passportExpiryDate, setPassportExpiryDate] = useState(null);
  useEffect(() => {
    if (register.passportExpiryDate) {
      setPassportExpiryDate(new Date(register.passportExpiryDate.value));
    }
  }, [register.passportExpiryDate]);

  //   for Citizenship & Nationality Passport Date of Issue
  const [passportDateOfIssue, setPassportDateOfIssue] = useState(null);
  useEffect(() => {
    if (register.passportDateOfIssue) {
      setPassportDateOfIssue(new Date(register.passportDateOfIssue.value));
    }
  }, [register.passportDateOfIssue]);

  //   for  Secondary Citizenship Passport Expiry Date
  const [secondaryExpiryDate, setSecondaryExpiryDate] = useState(null);
  useEffect(() => {
    if (register.secondaryExpiryDate) {
      setSecondaryExpiryDate(new Date(register.secondaryExpiryDate.value));
    }
  }, [register.secondaryExpiryDate]);

  //   for  Secondary Citizenship Passport Date of Issue
  const [secondaryDateOfIssue, setSecondaryDateOfIssue] = useState(null);
  useEffect(() => {
    if (register.secondaryDateOfIssue) {
      setSecondaryDateOfIssue(new Date(register.secondaryDateOfIssue.value));
    }
  }, [register.secondaryDateOfIssue]);

  //   for  Alternate Documents - Alternate Issue Date
  const [alternateIssueDate, setAlternateIssueDate] = useState(null);
  useEffect(() => {
    if (register.alternateIssueDate) {
      setAlternateIssueDate(new Date(register.alternateIssueDate.value));
    }
  }, [register.alternateIssueDate]);

  //   for  Canada/US Permanent Residence -PR Expiry Date
  const [pRExpiryDate, setPRExpiryDate] = useState(null);
  useEffect(() => {
    if (register.pRExpiryDate) {
      setPRExpiryDate(new Date(register.pRExpiryDate.value));
    }
  }, [register.pRExpiryDate]);

  //   for  Driving Licence - Expiry Date
  const [drivingLicenceExpiryDate, setDrivingLicenceExpiryDate] =
    useState(null);
  useEffect(() => {
    if (register.drivingLicenceExpiryDate) {
      setDrivingLicenceExpiryDate(
        new Date(register.drivingLicenceExpiryDate.value)
      );
    }
  }, [register.drivingLicenceExpiryDate]);

  //   for  Address History -start living here
  const [startLivingHere, setStartLivingHere] = useState(null);
  useEffect(() => {
    if (register.startLivingHere) {
      setStartLivingHere(new Date(register.startLivingHere.value));
    }
  }, [register.startLivingHere]);

  //  for Travel History
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCheckboxChange = (event) => {
    const country = event.target.value;
    if (event.target.checked) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    }
  };

  const groupedCountries = historyCountryList.reduce((groups, country) => {
    const letter = country.charAt(0).toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(country);
    return groups;
  }, {});

  // Today Date

  const handleTodayDateChange = (e) => {
    setTodayDate(e.target.value);
  };

  return (
    <div class="max-w-screen-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        {/* Form Type */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">SENTRI Mexico Form</h3>
          </div>
          <div>
            <select
              id="formType"
              className="hidden  shadow rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setValue("SENTRI Mexico Form", e.target.value)}
              {...register("formType")}
            >
              <option key="SENTRI Mexico Form" value="SENTRI Mexico Form">
                SENTRI Mexico Form
              </option>
            </select>
            <p className="ml-2 text-red-500">
              Fields with a red * are required.
            </p>
            <input
              className="hidden"
              type="date"
              id="todayDate"
              name="todayDate"
              value={todayDate}
              onChange={handleTodayDateChange}
              {...register("todayDate")}
            />
          </div>
        </div>
        {/* Form Type - End */}

        {/* LOGIN.GOV Account */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">LOGIN.GOV Account</h3>
          </div>
          <label className="label">
            Have you created a LOGIN.GOV Account<span className="star">*</span>
          </label>
          <div className="pb-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
                {...register("loginGovAccount")}
                className="form-radio h-5 w-5 text-blue-600"
                checked={hasLoginGovAccount === "No"}
                onChange={(e) => {
                  setHasLoginGovAccount(e.target.value);
                  setShowTextInputs(false);
                }}
              />
              <span className="ml-2 text-red-500">No</span>
            </label>
            <label className="inline-flex items-center mx-4">
              <input
                type="radio"
                value="Yes"
                {...register("loginGovAccount")}
                className="form-radio h-5 w-5 text-blue-600"
                checked={hasLoginGovAccount === "Yes"}
                onChange={(e) => {
                  setHasLoginGovAccount(e.target.value);
                  setShowTextInputs(true);
                }}
              />
              <span className="ml-2 text-red-500">Yes</span>
            </label>
          </div>
          {showTextInputs && (
            <>
              <div className="mb-4">
                <label className="label">
                  Please enter Personal Key (Should be 16 digits or 19 digits if
                  &apos;-&apos; is used)
                </label>
                <input
                  {...register("personalKey")}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="****-****-****-****"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  If so please enter email address used
                </label>
                <input
                  {...register("personalKeyEmail")}
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="label">Please enter password</label>
                <input
                  {...register("personalKeyPassword")}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </>
          )}
        </div>
        {/* LOGIN.GOV Account - End */}

        {/* Personal Details */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Personal Details</h3>
            <p class="font-normal">
              You must give EXACT details as they appear on your official
              documents
            </p>
          </div>

          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email<span className="star">*</span>
              </label>
              <input
                type="email"
                placeholder=""
                id="email"
                {...register("email")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.email?.message}</p>
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
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="middleNames" className="label">
                Middle Names
              </label>
              <input
                type="text"
                placeholder=""
                id="middleNames"
                {...register("middleNames")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="otherNames" className="label">
                Any Other Names You Have Previously Been Known By
              </label>
              <input
                type="text"
                placeholder=""
                id="otherNames"
                {...register("otherNames")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="label">
                Your Gender <span className="star">*</span>
              </label>
              <select
                id="gender"
                className="shadow  border border-red-500 rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setValue("gender", e.target.value)}
                {...register("gender")}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other gender">Other gender</option>
              </select>
              <p className="text-red-500">{errors.gender?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="label">
                Phone Number <span className="star">*</span>
              </label>
              <input
                type="tel"
                placeholder=""
                id="phoneNumber"
                {...register("phoneNumber")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.phoneNumber?.message}</p>
            </div>

            <div className="mb-4 flex">
              <div>
                <label htmlFor="height" className="label">
                  Height <span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Feet"
                  id="height"
                  {...register("height")}
                  className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.height?.message}</p>
              </div>
              <div className="ml-6">
                <label htmlFor="heightInMeters" className="label">
                  Height in centimeters
                </label>
                <input
                  type="text"
                  placeholder="Centimeters"
                  id="heightInMeters"
                  {...register("heightInMeters")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Optional</p>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="eyeColour" className="label">
                Eye Colour <span className="star">*</span>
              </label>
              <select
                id="eyeColour"
                className="shadow  border border-red-500 rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setValue("eyeColour", e.target.value)}
                {...register("eyeColour")}
              >
                {eyeColor.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.eyeColour?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="birthDate" className="label">
                Your Birth Date <span className="star">*</span>
              </label>
              <DatePicker
                selected={startDate}
                {...register("birthDate")}
                onChange={(date) => {
                  if (date) {
                    date.setHours(0, 0, 0, 0);
                    setStartDate(date);
                    setValue("birthDate", date.toLocaleDateString("en-US"), {
                      shouldValidate: true,
                    });
                  }
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.birthDate?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="cityBirth" className="label">
                Your City of Birth <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="cityBirth"
                {...register("cityBirth")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.cityBirth?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="stateBirth" className="label">
                Your State / Province of Birth <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="stateBirth"
                {...register("stateBirth")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.stateBirth?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="countryBirth" className="label">
                Your Country of Birth <span className="star">*</span>
              </label>
              <select
                id="countryBirth"
                onChange={(e) => setValue("countryBirth", e.target.value)}
                className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("countryBirth")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.countryBirth?.message}</p>
            </div>
          </div>
        </div>
        {/* Personal Details - End*/}

       {/* Citizenship & Nationality */}
   <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Citizenship & Nationality</h3>
            <p class="font-normal">
              Enter the information EXACTLY as it appears on your Passport. If
              you are required to come in for an interview, you will need to
              bring this document with you.
            </p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="primaryCitizenship" className="label">
                Primary Citizenship<span className="star">*</span>
              </label>
              <select
                id="primaryCitizenship"
                onChange={(e) => setValue("primaryCitizenship", e.target.value)}
                className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("primaryCitizenship")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.primaryCitizenship?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="primaryPassportNumber" className="label">
                Primary Passport Number<span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="primaryPassportNumber"
                {...register("primaryPassportNumber")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.primaryPassportNumber?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="passportExpiryDate" className="label">
                Passport Expiry Date<span className="star">*</span>
              </label>
              <DatePicker
                selected={passportExpiryDate}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setPassportExpiryDate(date);
                  setValue(
                    "passportExpiryDate",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
               <p className="text-red-500">{errors.passportExpiryDate?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="passportDateOfIssue" className="label">
                Passport Date of Issue<span className="star">*</span>
              </label>
              <DatePicker
                selected={passportDateOfIssue}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setPassportDateOfIssue(date);
                  setValue(
                    "passportDateOfIssue",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.passportDateOfIssue?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="exactNameOnPrimaryPassport" className="label">
                Exact Name on Primary Passport<span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnPrimaryPassport"
                {...register("exactNameOnPrimaryPassport")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
               <p className="text-red-500">{errors.exactNameOnPrimaryPassport?.message}</p>
            </div>
          </div>
        </div>
        {/* Citizenship & Nationality - End */}

        {/* Secondary Citizenship */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Secondary Citizenship</h3>
            <p class="font-normal">
              You must give EXACT details as they appear on your official
              documents
            </p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="secondaryCitizenship" className="label">
                Secondary Citizenship
              </label>
              <select
                id="secondaryCitizenship"
                onChange={(e) =>
                  setValue("secondaryCitizenship", e.target.value)
                }
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("secondaryCitizenship")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="secondaryPassportNumber" className="label">
                Secondary Passport Number
              </label>
              <input
                type="text"
                placeholder=""
                id="secondaryPassportNumber"
                {...register("secondaryPassportNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="secondaryExpiryDate" className="label">
                Secondary Expiry Date
              </label>
              <DatePicker
                selected={secondaryExpiryDate}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setSecondaryExpiryDate(date);
                  setValue(
                    "secondaryExpiryDate",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="secondaryDateOfIssue" className="label">
                Secondary Date of Issue
              </label>
              <DatePicker
                selected={secondaryDateOfIssue}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setSecondaryDateOfIssue(date);
                  setValue(
                    "secondaryDateOfIssue",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exactNameOnSecondaryPassport" className="label">
                Exact Name on Secondary Passport
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnSecondaryPassport"
                {...register("exactNameOnSecondaryPassport")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* Secondary Citizenship - End */}

        {/* Alternate Documents */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Alternate Documents</h3>
            <p class="font-normal">
              Only required when there is no valid passport
            </p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="citizenshipCertificateNumber" className="label">
                Citizenship Certificate Number
              </label>
              <input
                type="text"
                placeholder=""
                id="citizenshipCertificateNumber"
                {...register("citizenshipCertificateNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="countryOfIssue" className="label">
                Country of Issue
              </label>
              <select
                id="countryOfIssue"
                onChange={(e) => setValue("countryOfIssue", e.target.value)}
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("countryOfIssue")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exactNameOnCitizenshipCertificate"
                className="label"
              >
                Exact Name on Citizenship Certificate
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnCitizenshipCertificate"
                {...register("exactNameOnCitizenshipCertificate")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="alternateIssueDate" className="label">
                Alternate Issue Date
              </label>
              <DatePicker
                selected={alternateIssueDate}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setAlternateIssueDate(date);
                  setValue(
                    "alternateIssueDate",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="birthCertificateNumber" className="label">
                Birth Certificate Number
              </label>
              <input
                type="text"
                placeholder=""
                id="birthCertificateNumber"
                {...register("birthCertificateNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exactNameOnBirthCertificate" className="label">
                Exact Name on Birth Certificate
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnBirthCertificate"
                {...register("exactNameOnBirthCertificate")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* Alternate Documents - End */}

        {/* Canada/US Permanent Residence */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">
              Canada/US Permanent Residence
            </h3>
            <p class="font-normal">
              Details Must be added if you are not a US/Canada Citizen
            </p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="permanentResident" className="label">
                Permanent Resident
              </label>
              <select
                id="permanentResident"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("permanentResident")}
              >
                <option></option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="pRCardNumber" className="label">
                PR Card Number Should be 9 digits (USCIS Number)
              </label>
              <input
                type="text"
                placeholder=""
                maxLength="9"
                id="pRCardNumber"
                {...register("pRCardNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pRCountryOfIssue" className="label">
                PR Country of Issue
              </label>
              <select
                id="pRCountryOfIssue"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("pRCountryOfIssue")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="exactNameOnPrCard" className="label">
                Exact Name on PR Card
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnPrCard"
                {...register("exactNameOnPrCard")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="readableZone" className="label">
                Does your Permanent Resident Card have a machine readable zone ?
              </label>
              <select
                id="readableZone"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("readableZone")}
              >
                <option></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="pRExpiryDate" className="label">
                PR Expiry Date
              </label>
              <DatePicker
                selected={pRExpiryDate}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setPRExpiryDate(date);
                  setValue("pRExpiryDate", date.toLocaleDateString("en-US"), {
                    shouldValidate: true,
                  });
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* Canada/US Permanent Residence - End */}

        {/* Driving Licence */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Driving Licence </h3>
          </div>
          <label className="label">
            Do you have a driving licence <span className="star">*</span>
          </label>
          <div className="pb-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
                {...register("hasDrivingLicence")}
                className="form-radio h-5 w-5 text-blue-600"
                checked={hasDrivingLicence === "No"}
                onChange={(e) => {
                  setHasDrivingLicence(e.target.value);
                  setShowTextInputsDriving(false);
                }}
              />
              <span className="ml-2 text-red-500">No</span>
            </label>
            <label className="inline-flex items-center mx-4">
              <input
                type="radio"
                value="Yes"
                {...register("hasDrivingLicence")}
                className="form-radio h-5 w-5 text-blue-600"
                checked={hasDrivingLicence === "Yes"}
                onChange={(e) => {
                  setHasDrivingLicence(e.target.value);
                  setShowTextInputsDriving(true);
                }}
              />
              <span className="ml-2 text-red-500">Yes</span>
            </label>
          </div>
          {showTextInputsDriving && (
            <>
              <div class="title-box">
                <h3 class="text-3xl text-white pb-2">Driving Licence</h3>
                <p class="font-normal">
                  If you have a driving licence you must provide details
                </p>
              </div>

              <div className="mb-4">
                <label className="label" htmlFor="drivingLicenceNumber">
                  Driving Licence Number <span className="star">*</span>
                </label>
                <input
                  type="text"
                  id="drivingLicenceNumber"
                  {...register("drivingLicenceNumber")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.drivingLicenceNumber?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="drivingLicenceExpiryDate" className="label">
                  Driving Licence Expiry Date<span className="star">*</span>
                </label>
                <DatePicker
                  {...register("drivingLicenceExpiryDate")}
                  selected={drivingLicenceExpiryDate}
                  onChange={(date) => {
                    date.setHours(0, 0, 0, 0);
                    setDrivingLicenceExpiryDate(date);
                    setValue(
                      "drivingLicenceExpiryDate",
                      date.toLocaleDateString("en-US"),
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                  placeholderText="MM/DD/YYYY"
                  dateFormat="MM/dd/yyyy"
                  className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.drivingLicenceExpiryDate?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="dlProvinceOfIssue" className="label">
                  DL State / Province of Issue <span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="dlProvinceOfIssue"
                  {...register("dlProvinceOfIssue")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.dlProvinceOfIssue?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="dLCountry" className="label">
                  DL Country
                </label>
                <select
                  id="dLCountry"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("dLCountry")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="enhancedLicence" className="label">
                  Is this an Enhanced Licence <span className="star">*</span>
                </label>
                <select
                  id="enhancedLicence"
                  className="shadow  border border-red-500 rounded w-32 h-9 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("enhancedLicence")}
                >
                  <option></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <p className="text-red-500">
                  {errors.enhancedLicence?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="hazardousMaterialEndorsement" className="label">
                  Has this Licence a Hazardous Material Endorsement
                  <span className="star">*</span>
                </label>
                <select
                  id="hazardousMaterialEndorsement"
                  className="shadow  border border-red-500 rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("hazardousMaterialEndorsement")}
                >
                  <option></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <p className="text-red-500">
                  {errors.hazardousMaterialEndorsement?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="commercialLicence" className="label">
                  Is this a Commercial Licence <span className="star">*</span>
                </label>
                <select
                  id="commercialLicence"
                  className="shadow  border border-red-500 rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("commercialLicence")}
                >
                  <option></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <p className="text-red-500">
                  {errors.commercialLicence?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="exactNameOnLicence" className="label">
                  Exact Name on Licence <span className="star">*</span>
                </label>
                <input
                  {...register("exactNameOnLicence")}
                  type="text"
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.exactNameOnLicence?.message}
                </p>
              </div>
            </>
          )}
        </div>
        {/* Driving Licence - End */}

        {/* Address History */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Address History</h3>
            <p class="font-normal">
              Only if you have not lived at your current address for more than 5
              years. You have to provide 5 years continuous address history -
              your application cannot be processed without this
            </p>
          </div>
          <div class="inputsGrid">
            <label className="label">
              Have you lived at your Residential Address for 5 years or more?
              <span className="star">*</span>
            </label>
            <div className="pb-3">
              <label className="inline-flex items-center mx-4">
                <input
                  type="radio"
                  value="Yes"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={fiveYears === "Yes"}
                  {...register("residentialAddressFor5YearsOrMore")}
                  onChange={(e) => {
                    setFiveYears(e.target.value);
                    setShowfiveYearsInput(false);
                  }}
                />
                <span className="ml-2 text-red-500">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="No"
                  {...register("residentialAddressFor5YearsOrMore")}
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={fiveYears === "No"}
                  onChange={(e) => {
                    setFiveYears(e.target.value);
                    setShowfiveYearsInput(true);
                  }}
                />
                <span className="ml-2 text-red-500">No</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="startLivingHere" className="label">
                Current When did you start living here
                <span className="star">*</span>
              </label>
              <DatePicker
                {...register("startLivingHere")}
                selected={startLivingHere}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setStartLivingHere(date);
                  setValue(
                    "startLivingHere",
                    date.toLocaleDateString("en-US"),
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow w-32 appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.startLivingHere?.message}</p>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="currentAddress" className="label">
              Current Address <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="currentAddress"
              {...register("currentAddress")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentAddress?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentAddressLine2" className="label">
              Current Address Line 2
            </label>
            <input
              type="text"
              placeholder=""
              id="currentAddressLine2"
              {...register("currentAddressLine2")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="currentCity" className="label">
              Current City <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="currentCity"
              {...register("currentCity")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentCity?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentStateProvinceRegion" className="label">
              Current State/Province/Region <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="currentStateProvinceRegion"
              {...register("currentStateProvinceRegion")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.currentStateProvinceRegion?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentZipPostalCode" className="label">
              Current Zip/Postal Code<span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="currentZipPostalCode"
              {...register("currentZipPostalCode")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.currentZipPostalCode?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentCountry" className="label">
              Current Country <span className="star">*</span>
            </label>
            <select
              id="currentCountry"
              onChange={(e) =>
                setValue("currentCountry", e.target.value)
              }
              className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("currentCountry")}
            >
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <p className="text-red-500">{errors.currentCountry?.message}</p>
          </div>

          {/* ----- Mailing Address--------- */}
          <div className="mb-4">
            <label htmlFor="mailingAddressLine1 " className="label">
              Mailing Address
            </label>
            <input
              type="text"
              placeholder=""
              id="mailingAddressLine1"
              {...register("mailingAddressLine1")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">Address Line 1</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="mailingAddressLine2"
              {...register("mailingAddressLine2")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">Address Line 2</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="mailingAddressCity"
              {...register("mailingAddressCity")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">City</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="mailingAddressStateProvince"
              {...register("mailingAddressStateProvince")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">State/Province</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="mailingAddressZipPostal"
              {...register("mailingAddressZipPostal")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">ZIP / Postal</p>
          </div>

          <div className="mb-4">
            <select
              id="mailingAddressCountry"
              onChange={(e) =>
                setValue("mailingAddressCountry", e.target.value)
              }
              className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("mailingAddressCountry")}
            >
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <p class="text-sm pt-1">Country</p>
          </div>

          {/* ----- Mailing Address--------- */}

          {showfiveYearsInput && (
            <>
              <div class="title-box">
                <h3 class="text-3xl text-white pb-2">5 Year Address History</h3>
              </div>
              {/* Address 2 */}

              <div className="mb-4">
                <label htmlFor="address2monthYear" className="label">
                  Address 2 - when Did you start living here:{" "}
                  <span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address2monthYear"
                  {...register("address2monthYear")}
                  className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address2monthYearEndDate" className="label">
                  End Date:<span className="star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address2monthYearEndDate"
                  {...register("address2monthYearEndDate")}
                  className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address2addressLine1" className="label">
                  Five Year History Address 2
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="address2addressLine1"
                  {...register("address2addressLine1")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">
                  Address Line 1 <span className="star">*</span>
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address2addressLine2"
                  {...register("address2addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address2City"
                  {...register("address2City")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">
                  City <span className="star">*</span>
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address2StateProvince"
                  {...register("address2StateProvince")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">
                  State/Province <span className="star">*</span>
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address2ZipPostal"
                  {...register("address2ZipPostal")}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">
                  ZIP / Postal <span className="star">*</span>
                </p>
              </div>

              <div className="mb-4">
                <select
                  id="addressLine2Country"
                  className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("addressLine2Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">
                  Country <span className="star">*</span>
                </p>
              </div>
              {/* Address 2 - End*/}
              <br />
              {/* Address 3 */}
              <div className="mb-4">
                <label htmlFor="address3monthYear" className="label">
                  Address 3 - when Did you start living here:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address3monthYear"
                  {...register("address3monthYear")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address3monthYearEndDate" className="label">
                  End Date:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address3monthYearEndDate"
                  {...register("address3monthYearEndDate")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address3addressLine1" className="label">
                  Five Year History Address 3
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="address3addressLine1"
                  {...register("address3addressLine1")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 1</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address3addressLine2"
                  {...register("address3addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address3City"
                  {...register("address3City")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">City</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address3StateProvince"
                  {...register("address3StateProvince")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">State/Province</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address3ZipPostal"
                  {...register("address3ZipPostal")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">ZIP / Postal</p>
              </div>

              <div className="mb-4">
                <select
                  id="addressLine3Country"
                  className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("addressLine3Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">Country</p>
              </div>
              {/* Address 3 - End*/}

              <br />

              {/* Address 4 */}
              <div className="mb-4">
                <label htmlFor="address3monthYear" className="label">
                  Address 4 - when Did you start living here:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address4monthYear"
                  {...register("address4monthYear")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address4monthYearEndDate" className="label">
                  End Date:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="address4monthYearEndDate"
                  {...register("address4monthYearEndDate")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address4addressLine1" className="label">
                  Five Year History Address 4
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="address4addressLine1"
                  {...register("address4addressLine1")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 1</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address4addressLine2"
                  {...register("address4addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address4City"
                  {...register("address4City")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">City</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address4StateProvince"
                  {...register("address4StateProvince")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">State/Province</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="address4ZipPostal"
                  {...register("address4ZipPostal")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">ZIP / Postal</p>
              </div>

              <div className="mb-4">
                <select
                  id="addressLine4Country"
                  className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("addressLine4Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">Country</p>
              </div>
              {/* Address 4 - End*/}
            </>
          )}
        </div>
        {/* Address History - End */}

        {/* US Contact Address */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">US Contact Address</h3>
            <p class="font-normal">If your current address is not in the US</p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="uSContactAddressSinceWhen" className="label">
                Since when have you used this contact address
              </label>
              <input
                type="text"
                placeholder="MM/YYYY"
                id="uSContactAddressSinceWhen"
                {...register("uSContactAddressSinceWhen")}
                className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                US Contact Name
              </label>
              <input
                type="text"
                id="uSContactFirstName"
                {...register("uSContactFirstName")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">First Name</p>
            </div>

            <div className="mt-7">
              <input
                type="text"
                id="uSContactLastName"
                {...register("uSContactLastName")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">Last Name</p>
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                US Contact Phone Number
              </label>
              <input
                type="tel"
                id="uSContactPhoneNumber"
                {...register("uSContactPhoneNumber")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="usContactAddress" className="label">
                Contact Address
              </label>
              <input
                type="text"
                placeholder=""
                id="usContactAddressLine1"
                {...register("usContactAddressLine1")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">Address Line 1</p>
            </div>

            <div className="mt-7">
              <input
                type="text"
                placeholder=""
                id="usContactAddressLine2"
                {...register("usContactAddressLine2")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">Address Line 2</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="usContactAddressCity"
                {...register("usContactAddressCity")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">City</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="usContactAddressStateProvince"
                {...register("usContactAddressStateProvince")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">State/Province</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="usContactAddressZipPostal"
                {...register("usContactAddressZipPostal")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">ZIP / Postal</p>
            </div>

            <div className="mb-4">
              <select
                id="usContactAddressCountry"
                className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("usContactAddressCountry")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <p class="text-sm pt-1">Country</p>
            </div>
          </div>
        </div>
        {/* US Contact Address - End */}

        {/* Information About Your Current Work */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">
              Information About Your Current Work
            </h3>
            <p class="font-normal">
              You MUST provide 5 years work history. Your application can not be
              processed without it. If you are a Student, Child, Unemployed or
              Retired you only have to check box and provide dates of
              unemployment or date of Retirement. There can be no gaps or
              omissions.
            </p>
          </div>
          <div class="inputsGrid">
            <label className="label">
              Has your employment status been the same for 5 years or more
              <span className="star"> *</span>
            </label>
            <div className="pb-3">
              <label className="inline-flex items-center mx-4">
                <input
                  type="radio"
                  value="Yes"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={employmentFor5YearsOrMore === "Yes"}
                  {...register("employmentFor5YearsOrMore")}
                  onChange={(e) => {
                    setEmploymentFiveYears(e.target.value);
                    setShowfiveYearsEmploymentInput(false);
                  }}
                />
                <span className="ml-2 text-red-500">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="No"
                  {...register("employmentFor5YearsOrMore")}
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={employmentFor5YearsOrMore === "No"}
                  onChange={(e) => {
                    setEmploymentFiveYears(e.target.value);
                    setShowfiveYearsEmploymentInput(true);
                  }}
                />
                <span className="ml-2 text-red-500">No</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="employmentDate" className="label">
                From <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="MM/YYYY"
                id="employmentDate"
                {...register("employmentDate")}
                className="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="employmentStatus" className="label">
              Employment Status <span className="star">*</span>
            </label>
            <select
              id="employmentStatus"
              className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setValue("employmentStatus", e.target.value)}
              {...register("employmentStatus")}
            >
              {employmentStatus.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <p className="text-red-500">{errors.employmentStatus?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="occupation" className="label">
              Occupation
            </label>
            <input
              type="text"
              placeholder=""
              id="occupation"
              {...register("occupation")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="employerName" className="label">
              Employer Name
            </label>
            <input
              type="text"
              placeholder=""
              id="employerName"
              {...register("employerName")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="employerPhoneNumber" className="label">
              Employer Phone Number <span className="star">*</span>
            </label>
            <input
              type="tel"
              placeholder=""
              id="employerPhoneNumber"
              {...register("employerPhoneNumber")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.employerPhoneNumber?.message}
            </p>
          </div>

          {/* ----- Employer Address --------- */}
          <div className="mb-4">
            <label htmlFor="employerAddress" className="label">
              Employer Address
            </label>
            <input
              type="text"
              placeholder=""
              id="employerAddressLine1"
              {...register("employerAddressLine1")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">Address Line 1</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="employerAddressLine2"
              {...register("employerAddressLine2")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">Address Line 2</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="employerAddressCity"
              {...register("employerAddressCity")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">City</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="employerAddressStateProvince"
              {...register("employerAddressStateProvince")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">State/Province</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder=""
              id="employerAddressZipPostal"
              {...register("employerAddressZipPostal")}
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="text-sm pt-1">ZIP / Postal</p>
          </div>

          <div className="mb-4">
            <select
              id="employerAddressCountry"
              onChange={(e) =>
                setValue("employerAddressCountry", e.target.value)
              }
              className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("employerAddressCountry")}
            >
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <p class="text-sm pt-1">Country</p>
          </div>

          {/* ----- Employer Address --------- */}

          {showfiveYearsEmploymentInput && (
            <>
              <div class="title-box">
                <h3 class="text-3xl text-white pb-2">Employment Continued</h3>
              </div>
              {/* Employment Continued 2 */}

              <div className="mb-4">
                <label htmlFor="employer2monthYear" className="label">
                  Employer 2 From
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer2monthYear"
                  {...register("employer2monthYear")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer2monthYearEndDate" className="label">
                  End Date:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer2monthYearEndDate"
                  {...register("employer2monthYearEndDate")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employmentStatus2" className="label">
                  Employment Status 2
                </label>
                <select
                  id="employmentStatus2"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) =>
                    setValue("employmentStatus2", e.target.value)
                  }
                  {...register("employmentStatus2")}
                >
                  {employmentStatus.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="employer2Occupation" className="label">
                  Employer 2 Occupation
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer2Occupation"
                  {...register("employer2Occupation")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employerName2" className="label">
                  Employer 2 Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employerName2"
                  {...register("employerName2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer2PhoneNumber" className="label">
                  Employer 2 Phone Number
                </label>
                <input
                  type="tel"
                  placeholder=""
                  id="employer2PhoneNumber"
                  {...register("employer2PhoneNumber")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer2addressLine1" className="label">
                  Employer 2 Address
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer2addressLine1"
                  {...register("employer2addressLine1")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 1</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer2addressLine2"
                  {...register("employer2addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer2City"
                  {...register("employer2City")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">City</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer2StateProvince"
                  {...register("employer2StateProvince")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">State/Province</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer2ZipPostal"
                  {...register("employer2ZipPostal")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">ZIP / Postal</p>
              </div>

              <div className="mb-4">
                <select
                  id="employer2Country"
                  className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("employer2Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">Country</p>
              </div>
              {/* Employment Continued 2 - End*/}

              <br />

              {/* Employment Continued 3 */}

              <div className="mb-4">
                <label htmlFor="employer3monthYear" className="label">
                  Employer 3 From
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer3monthYear"
                  {...register("employer3monthYear")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer3monthYearEndDate" className="label">
                  End Date:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer3monthYearEndDate"
                  {...register("employer3monthYearEndDate")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employmentStatus3" className="label">
                  Employment Status 3
                </label>
                <select
                  id="employmentStatus3"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) =>
                    setValue("employmentStatus3", e.target.value)
                  }
                  {...register("employmentStatus3")}
                >
                  {employmentStatus.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="employer3Occupation" className="label">
                  Employer 3 Occupation
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer3Occupation"
                  {...register("employer3Occupation")}
                  className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employerName3" className="label">
                  Employer 3 Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employerName3"
                  {...register("employerName3")}
                  className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer3PhoneNumber" className="label">
                  Employer 3 Phone Number
                </label>
                <input
                  type="tel"
                  placeholder=""
                  id="employer3PhoneNumber"
                  {...register("employer3PhoneNumber")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer3addressLine1" className="label">
                  Employer 3 Address
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer3addressLine1"
                  {...register("employer3addressLine1")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 1</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer3addressLine2"
                  {...register("employer3addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer3City"
                  {...register("employer3City")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">City</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer3StateProvince"
                  {...register("employer3StateProvince")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">State/Province</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer3ZipPostal"
                  {...register("employer3ZipPostal")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">ZIP / Postal</p>
              </div>

              <div className="mb-4">
                <select
                  id="employer3Country"
                  className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("employer3Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">Country</p>
              </div>
              {/* Employment Continued 3 - End*/}

              <br />

              {/* Employment Continued 4 */}

              <div className="mb-4">
                <label htmlFor="employer4monthYear" className="label">
                  Employer 4 From
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer4monthYear"
                  {...register("employer4monthYear")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer4monthYearEndDate" className="label">
                  End Date:
                </label>
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  id="employer4monthYearEndDate"
                  {...register("employer4monthYearEndDate")}
                  className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employmentStatus4" className="label">
                  Employment Status 4
                </label>
                <select
                  id="employmentStatus4"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) =>
                    setValue("employmentStatus4", e.target.value)
                  }
                  {...register("employmentStatus4")}
                >
                  {employmentStatus.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="employer4Occupation" className="label">
                  Employer 4 Occupation
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer4Occupation"
                  {...register("employer4Occupation")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employerName4" className="label">
                  Employer 4 Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employerName3"
                  {...register("employerName4")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer4PhoneNumber" className="label">
                  Employer 4 Phone Number
                </label>
                <input
                  type="tel"
                  placeholder=""
                  id="employer4PhoneNumber"
                  {...register("employer4PhoneNumber")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employer4addressLine1" className="label">
                  Employer 4 Address
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="employer4addressLine1"
                  {...register("employer4addressLine1")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 1</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer4addressLine2"
                  {...register("employer4addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">Address Line 2</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer4City"
                  {...register("employer4City")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">City</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer4StateProvince"
                  {...register("employer4StateProvince")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">
                  State/Province <span className="star">*</span>
                </p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder=""
                  id="employer4ZipPostal"
                  {...register("employer4ZipPostal")}
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p class="text-sm pt-1">ZIP / Postal</p>
              </div>

              <div className="mb-4">
                <select
                  id="employer4Country"
                  className="shadow  border  rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("employer4Country")}
                >
                  {countryList.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p class="text-sm pt-1">Country</p>
              </div>
              {/* Employment Continued 4 - End*/}
            </>
          )}
        </div>
        {/* Information About Your Current Work - End */}

        {/* RFC / CURP Details */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">RFC / CURP Details</h3>
          </div>

          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="RFC" className="label">
                RFC (Registro Federal de Contribuyentes)
              </label>
              <input
                type="text"
                placeholder=""
                id="RFC"
                {...register("RFC")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <p>Check if this RFC is owned by you</p>
              <div className="mb-4">
                <div className="my-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value="Yes"
                      {...register("RFCIsOwned")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="No"
                      {...register("RFCIsOwned")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="CURP" className="label">
                CURP
              </label>
              <input
                type="text"
                placeholder=""
                id="CURP"
                {...register("CURP")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>

        {/* RFC / CURP Details - End */}

        {/* Vehicle Information */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Vehicle Information</h3>
          </div>
          <div>
            <p>
              Do you plan to drive across the border from Mexico to the United
              States?
            </p>
            <div className="mb-4">
              <div className="my-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    value="Yes"
                    {...register("driveAcrossBorderMexicoToUnitedStates")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 ">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="No"
                    {...register("driveAcrossBorderMexicoToUnitedStates")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 ">No</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <p>
              Is the vehicle already actively registered on your account or on
              another Trusted Traveler Program member&#39;s account?
            </p>
            <div className="mb-4">
              <div className="my-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    value="Yes"
                    {...register("vehicleAlreadyActivelyRegistered")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 ">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="No"
                    {...register("vehicleAlreadyActivelyRegistered")}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 ">No</span>
                </label>
              </div>
            </div>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="" className="label">
                Make
              </label>
              <input
                type="text"
                id="Make"
                {...register("Make")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                Model
              </label>
              <input
                type="text"
                id="Model"
                {...register("Model")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="yearOfManufacture" className="label">
                Year of Manufacture
              </label>
              <input
                type="text"
                placeholder="MM/YYYY"
                id="yearOfManufacture"
                {...register("yearOfManufacture")}
                className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                VIN Number
              </label>
              <input
                type="text"
                id="VINNumber"
                {...register("VINNumber")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                Licence Plate Number
              </label>
              <input
                type="text"
                id="licencePlateNumber"
                {...register("licencePlateNumber")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                Vehicle Country of Issue
              </label>
              <input
                type="text"
                id="vehicleCountryOfIssue"
                {...register("vehicleCountryOfIssue")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                Vehicle State / Province of Issue
              </label>
              <input
                type="text"
                id="vehicleStateProvinceOfIssue"
                {...register("vehicleStateProvinceOfIssue")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <p>Is this a Govenment Issue Plate</p>
              <div className="mb-4">
                <div className="my-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value="Yes"
                      {...register("isThisGovenmentIssuePlate")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="No"
                      {...register("isThisGovenmentIssuePlate")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p>Is a Vehicle Inspection Required</p>
              <div className="mb-4">
                <div className="my-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value="Yes"
                      {...register("isVehicleInspectionRequired")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="No"
                      {...register("isVehicleInspectionRequired")}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 ">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Information - End */}

        {/* Vehicle Owner */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Vehicle Owner</h3>
            <p class="font-normal">
              There is no need to fill out the owner details if you are the
              owner. The is no need to fill in date of birth if the owner is a
              corporation or lease company.
            </p>
          </div>

          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="vehicleOwnerGender" className="label">
                Vehicle Owner Gender
              </label>
              <select
                id="vehicleOwnerGender"
                className="shadow  border rounded w-32 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setValue("vehicleOwnerGender", e.target.value)}
                {...register("vehicleOwnerGender")}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other gender">Other gender</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="owner" className="label">
                Owner
              </label>
              <input
                type="text"
                placeholder=""
                id="owner"
                {...register("owner")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="vehicleOwnerPhoneNumber" className="label">
                Vehicle Owner Phone Number
              </label>
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerPhoneNumber"
                {...register("vehicleOwnerPhoneNumber")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="vehicleOwnerAddress " className="label">
                Vehicle Owner Address
              </label>
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerAddress"
                {...register("vehicleOwnerAddress")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">Address Line 1</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerAddress2"
                {...register("vehicleOwnerAddress2")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">Address Line 2</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerAddressCity"
                {...register("vehicleOwnerAddressCity")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">City</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerAddressStateProvince"
                {...register("vehicleOwnerAddressStateProvince")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">State/Province</p>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder=""
                id="vehicleOwnerAddressZIPPostal"
                {...register("vehicleOwnerAddressZIPPostal")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p class="text-sm pt-1">ZIP / Postal</p>
            </div>

            <div className="mb-4">
              <label htmlFor="vehicleOwnerDateOfBirth" className="label">
                Vehicle Owner Date of Birth
              </label>
              {/* <DatePicker
                selected={startDate}
                {...register("vehicleOwnerDateOfBirth")}
                onChange={(date) => {
                  if (date) {
                    date.setHours(0, 0, 0, 0);
                    setStartDate(date);
                    setValue(
                      "vehicleOwnerDateOfBirth",
                      date.toLocaleDateString("en-US"),
                      {
                        shouldValidate: true,
                      }
                    );
                  }
                }}
                placeholderText="MM/DD/YYYY"
                dateFormat="MM/dd/yyyy"
                className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /> */}
                 <input
                type="text"
                placeholder="MM/DD/YYYY"
                id="vehicleOwnerDateOfBirth"
                {...register("vehicleOwnerDateOfBirth")}
                className="shadow appearance-none border  rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Owner - End */}

        {/* Travel History */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Travel History</h3>
            <p class="font-normal">
              List all the countries visited in last 5 years{" "}
              <b>excluding Mexico, USA & Canada</b>
            </p>
          </div>

          <div class="inputsGrid">
            {Object.entries(groupedCountries).map(([letter, countries]) => (
              <div key={letter}>
                <h3 className="font-bold mb-2">{letter}</h3>
                {countries.map((country) => (
                  <div key={country}>
                    <label
                      htmlFor={country}
                      className="inline-flex items-center mr-4"
                    >
                      <input
                        className="form-checkbox h-5 w-5 text-blue-500"
                        type="checkbox"
                        id={country}
                        value={country}
                        {...register("travelHistory")}
                        checked={selectedCountries.includes(country)}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-gray-700">{country}</span>
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Other:</h3>
              <input
                type="text"
                placeholder=""
                id="otherCountry"
                {...register("otherCountry")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* Travel History - End*/}

        {/* Additional Information */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Additional Information</h3>
          </div>

          <div>
            <ol className="list-decimal ml-4">
              <li>
                <p>
                  Have you ever been convicted of a criminal offense (including
                  misdemeanor or felony traffic violations) in the united States
                  or any other country. Please Indicate the country where the
                  incident(s) occurred (Even if you&apos;ve had only an arrest
                  or had an incident that was expunged/removed from your record,
                  please provide the details (optional))?{" "}
                  <span className="star">*</span>
                </p>
                <div className="mb-4">
                  <div className="my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        value="Yes"
                        {...register("additionalInformation1question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        {...register("additionalInformation1question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">No</span>
                    </label>
                  </div>
                  <p className="text-xs">
                    Indicate whether or not the applicant has ever been
                    convicted of a criminal offense (other than a traffic
                    violation) in any country
                  </p>
                  <p className="text-red-500">
                    {errors.additionalInformation1question?.message}
                  </p>
                </div>
              </li>
              <li>
                <p>
                  Have you ever received a waiver of inadmissibility to the USA
                  from a US government agency?
                  <span className="star">*</span>
                </p>
                <div className="mb-4">
                  <div className="my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        value="Yes"
                        {...register("additionalInformation2question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        {...register("additionalInformation2question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">No</span>
                    </label>
                  </div>
                  <p className="text-xs">
                    A waiver of inadmissibility is an application for entry into
                    the United States from someone who is otherwise inadmissible
                    for one or more reasons, such as on health or legal grounds
                  </p>
                  <p className="text-red-500">
                    {errors.additionalInformation2question?.message}
                  </p>
                </div>
              </li>
              <li>
                <p>
                  Have you ever been approved by Citizenship and Immigration
                  Canada for rehabilitation because of past criminal activity?
                  <span className="star">*</span>
                </p>
                <div className="mb-4">
                  <div className="my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        value="Yes"
                        {...register("additionalInformation3question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        {...register("additionalInformation3question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">No</span>
                    </label>
                  </div>
                  <p className="text-red-500">
                    {errors.additionalInformation3question?.message}
                  </p>
                </div>
              </li>
              <li>
                <p>
                  Have you ever been found in violation of Customs or
                  Immigration laws or other federal import laws?
                  <span className="star">*</span>
                </p>
                <div className="mb-4">
                  <div className="my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        value="Yes"
                        {...register("additionalInformation4question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="No"
                        {...register("additionalInformation4question")}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-red-500">No</span>
                    </label>
                  </div>
                  <p className="text-xs">
                    A customs violation could be failing to declare goods or
                    merchandise or bringing in prohibited goods etc, an
                    immigration violation could be any immigration document
                    issues, refusal into the USA, Not all violations are
                    disqualifying, but should be noted
                  </p>
                  <p className="text-red-500">
                    {errors.additionalInformation4question?.message}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* Additional Information - End*/}

        {/* Certification Disclaimer */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Certification Disclaimer</h3>
          </div>
          <h4>
            You will be charged the following fees when you apply for your
            SENTRI application with Global Entry Pro Assis:
          </h4>
          <h4>
            The Global Entry Pro Assis fee of USD $149.00 (for checking,
            processing, answering all your questions) via PayPal.
          </h4>
          <h4>
            In addition to the Global Entry Pro Assis fee the following
            government fees are payable by you after we have completed your
            application. You will be provided your login details an in order for
            you to finalize your application.
          </h4>
          <h4>
            To apply for Sentri, you&#39;ll need to submit your application
            along with a one-time government fee of $122,25.
          </h4>
          <h4>
            By Clicking &quot;I Certify & Agree&quot; below, you confirm that
            you understand that you are using a third party application
            processing service to file your application with the government.
            Global Entry Pro Assis are not affiliated with any government body.
            We offer paid assistance with services offered by the government. We
            cannot expedite your application. I agree to the starting of the
            service and I acknowledge that I lose my right to cancel once the
            service has been fully performed.
          </h4>
          <h4>
            You also confirm that the information contained in this form was
            given voluntarily and is true, complete and correct and that you
            understand that this information will be shared with law enforcement
            agencies, border protection agencies, government immigration
            agencies and other government bodies with applicable laws. Your
            information will be used for the sole purpose of processing your
            SENTRI application.
          </h4>
          <br />
          <p>
            I certify and agree that I have understood the Certification
            Disclaimer <span className="star">*</span>
          </p>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="Yes"
              {...register("agreeCertificationDisclaimer")}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-red-500">Yes</span>
          </label>
          <p className="text-red-500">
            {errors.agreeCertificationDisclaimer?.message}
          </p>
        </div>

        {/* Certification Disclaimer - End */}

        {/* Card details for payment of Government fee */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">
              Card details for payment of Government fee
            </h3>
          </div>
          <div class="inputsGrid">
            <div>
              <label
                class="block text-gray-700 font-bold mb-2"
                htmlFor="card-number"
              >
                Last four card digits <span className="star">*</span>
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="card-number"
                type="text"
                placeholder="XXXX"
                maxLength={4}
                {...register("cardNumber")}
              />
              <p className="text-red-500">{errors.cardNumber?.message}</p>
              <label
                class="block text-gray-700 font-bold mb-2 mt-4"
                htmlFor="expiry-date"
              >
                Expiry Date <span className="star">*</span>
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiry-date"
                type="text"
                placeholder="MM / YY"
                {...register("expiryDate")}
              />
              <p className="text-red-500">{errors.expiryDate?.message}</p>
              {/* <label class="block text-gray-700 font-bold mb-2 mt-4" for="cvv">
                CVV <span className="star">*</span>
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="text"
                placeholder="XXX"
                {...register("cvv")}
              />
              <p className="text-red-500">{errors.cvv?.message}</p> */}
            </div>

            <div className="mt-1">
              <label htmlFor="cardType" className="label">
                Card Type <span className="star">*</span>
              </label>
              <select
                id="cardType"
                onChange={(e) => setValue("cardType", e.target.value)}
                className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("cardType")}
              >
                <option></option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
              </select>
              <p className="text-red-500">{errors.cardType?.message}</p>
            </div>
          </div>
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">
              Card Holder Name & Address Details
            </h3>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersFirstName" className="label">
              Card Holders First Name <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersFirstName"
              {...register("cardHoldersFirstName")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.cardHoldersFirstName?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersLastName" className="label">
              Card Holders Last Name <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersLastName"
              {...register("cardHoldersLastName")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.cardHoldersLastName?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersAddress" className="label">
              Card Holders Address <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersAddress"
              {...register("cardHoldersAddress")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.cardHoldersAddress?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersAddressLine2" className="label">
              Card Holders Address Line 2
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersAddress"
              {...register("cardHoldersAddressLine2")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersCity" className="label">
              Card Holders City <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersCity"
              {...register("cardHoldersCity")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.cardHoldersCity?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersStateProvinceRegion" className="label">
              Card Holders State/Province/Region <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersStateProvinceRegion"
              {...register("cardHoldersStateProvinceRegion")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.cardHoldersStateProvinceRegion?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersZipPostalCode" className="label">
              Card Holders Zip/Postal Code <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersZipPostalCode"
              {...register("cardHoldersZipPostalCode")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.cardHoldersZipPostalCode?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="cardHoldersCountry" className="label">
              Card Holders Country <span className="star">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              id="cardHoldersCountry"
              {...register("cardHoldersCountry")}
              className="shadow appearance-none border-red-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.cardHoldersCountry?.message}</p>
          </div>

          {/* Card details for payment of Government fee - End */}

          {/* Select Enrollment Center */}
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">
              SENTRI Enrollment Centers
            </h3>
          </div>
          <div className="mb-4">
            <label htmlFor="enrollmentCenter" className="label">
              Select Enrollment Center <span className="star"> *</span>
            </label>
            <select
              id="enrollmentCenter"
              className="shadow  border border-red-500 rounded w-96 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setValue("enrollmentCenter", e.target.value)}
              {...register("enrollmentCenter")}
            >
              {enrollmentCentersSentri.map((center) => (
                <option key={center} value={center}>
                  {center}
                </option>
              ))}
            </select>
            <p className="text-red-500">{errors.enrollmentCenter?.message}</p>
          </div>
          {/* Select Enrollment Center  - End*/}
        </div>

        <input
          value="Preview"
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700 text-white w-32 ml-48 cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
        <Modal
          isOpen={showReviewModal}
          onRequestClose={() => setShowReviewModal(false)}
          contentLabel="Form Review"
        >
          <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
            Application Preview - Global Entry Apply
          </h1>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Have you created a LOGIN.GOV Account:{" "}
            <b> {watch("loginGovAccount")}</b>
          </h2>
          <p>
            Personal Key: <b>{watch("personalKey")}</b>
          </p>
          <p>
            Email address: <b>{watch("personalKeyEmail")}</b>
          </p>
          <p>
            Password: <b>{watch("personalKeyPassword")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Personal Details
          </h2>
          <p>
            Email: <b>{watch("email")}</b>{" "}
          </p>
          <p>
            First Name: <b>{watch("firstName")}</b>
          </p>
          <p>
            Last Name: <b>{watch("lastName")}</b>{" "}
          </p>
          <p>
            Middle Names: <b>{watch("middleNames")}</b>{" "}
          </p>
          <p>
            Other Names: <b>{watch("otherNames")}</b>{" "}
          </p>
          <p>
            Gender: <b>{watch("gender")}</b>{" "}
          </p>
          <p>
            Phone Number: <b>{watch("phoneNumber")}</b>{" "}
          </p>
          <p>
            Height: <b>{watch("height")}</b>{" "}
          </p>
          <p>
            Height in meters: <b>{watch("heightInMeters")}</b>{" "}
          </p>
          <p>
            Eye Colour: <b>{watch("eyeColour")}</b>{" "}
          </p>
          <p>
            Birth Date: <b>{watch("birthDate")}</b>{" "}
          </p>
          <p>
            City of Birth: <b>{watch("cityBirth")}</b>{" "}
          </p>
          <p>
            State / Province of Birth: <b>{watch("stateBirth")}</b>{" "}
          </p>
          <p>
            Country of Birth: <b>{watch("countryBirth")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Citizenship & Nationality
          </h2>
          <p>
            Primary Citizenship: <b>{watch("primaryCitizenship")}</b>{" "}
          </p>
          <p>
            Primary Passport Number: <b>{watch("primaryPassportNumber")}</b>{" "}
          </p>
          <p>
            Passport Expiry Date: <b>{watch("passportExpiryDate")}</b>{" "}
          </p>
          <p>
            Passport Date of Issue: <b>{watch("passportDateOfIssue")}</b>{" "}
          </p>
          <p>
            Exact Name on Primary Passport:{" "}
            <b>{watch("exactNameOnPrimaryPassport")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Secondary Citizenship:
          </h2>
          <p>
            Secondary Citizenship: <b>{watch("secondaryCitizenship")}</b>{" "}
          </p>
          <p>
            Secondary Passport Number: <b>{watch("secondaryPassportNumber")}</b>{" "}
          </p>
          <p>
            Secondary Expiry Date: <b>{watch("secondaryExpiryDate")}</b>{" "}
          </p>
          <p>
            Secondary Date of Issue: <b>{watch("secondaryDateOfIssue")}</b>{" "}
          </p>
          <p>
            Exact Name on Secondary Passport:{" "}
            <b>{watch("exactNameOnSecondaryPassport")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Alternate Documents:
          </h2>
          <p>
            Citizenship Certificate Number:{" "}
            <b> {watch("citizenshipCertificateNumber")}</b>
          </p>
          <p>
            Country of Issue: <b></b> {watch("countryOfIssue")}
          </p>
          <p>
            Exact Name on Citizenship Certificate:{" "}
            <b> {watch("exactNameOnCitizenshipCertificate")}</b>
          </p>
          <p>
            Alternate Issue Date: <b>{watch("alternateIssueDate")}</b>{" "}
          </p>
          <p>
            Birth Certificate Number: <b>{watch("birthCertificateNumber")}</b>{" "}
          </p>
          <p>
            Exact Name on Birth Certificate:{" "}
            <b> {watch("exactNameOnBirthCertificate")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Canada/US Permanent Residence
          </h2>
          <p>
            Permanent Resident: <b>{watch("permanentResident")}</b>{" "}
          </p>
          <p>
            PR Card Number (USCIS Number): <b>{watch("pRCardNumber")}</b>{" "}
          </p>
          <p>
            PR Country of Issue: <b>{watch("pRCountryOfIssue")}</b>{" "}
          </p>
          <p>
            Exact Name on PR Card: <b>{watch("exactNameOnPrCard")}</b>{" "}
          </p>
          <p>
            Does your Permanent Resident Card have a machine readable zone?:
            {watch("readableZone")}
          </p>
          <p>
            PR Expiry Date: <b>{watch("pRExpiryDate")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Driving Licence
          </h2>
          <p>
            Have a driving licence: <b>{watch("hasDrivingLicence")}</b>{" "}
          </p>
          <p>
            Driving Licence Number: <b>{watch("drivingLicenceNumber")}</b>{" "}
          </p>
          <p>
            Driving Licence Expiry Date:{" "}
            <b>{watch("drivingLicenceExpiryDate")}</b>
          </p>
          <p>
            DL State / Province of Issue: <b>{watch("dlProvinceOfIssue")}</b>{" "}
          </p>
          <p>
            DL Country: <b>{watch("dLCountry")}</b>{" "}
          </p>
          <p>
            Is this an Enhanced Licence: <b></b> {watch("enhancedLicence")}
          </p>
          <p>
            Has this Licence a Hazardous Material Endorsement:{" "}
            <b>{watch("hazardousMaterialEndorsement")}</b>
          </p>
          <p>
            Is this a Commercial Licence: <b>{watch("commercialLicence")}</b>{" "}
          </p>
          <p>
            Exact Name on Licence: <b>{watch("exactNameOnLicence")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Address History
          </h2>
          <p>
            Have you lived at your Residential Address for 5 years or more:{" "}
            <b> {watch("residentialAddressFor5YearsOrMore")}</b>
          </p>
          <p>
            Current When did you start living here:{" "}
            <b>{watch("startLivingHere")}</b>
          </p>
          <p>
            Current Address: <b>{watch("currentAddress")}</b>{" "}
          </p>
          <p>
            Current Address Line 2: <b>{watch("currentAddressLine2")}</b>{" "}
          </p>
          <p>
            Current City: <b>{watch("currentCity")}</b>{" "}
          </p>
          <p>
            Current State/Province/Region:{" "}
            <b>{watch("currentStateProvinceRegion")}</b>
          </p>
          <p>
            Current Zip/Postal Code: <b>{watch("currentZipPostalCode")}</b>{" "}
          </p>
          <p>
            Current Country: <b>{watch("currentCountry")}</b>{" "}
          </p>
          <h3 style={{ fontWeight: "bold" }}>Mailing Address:</h3>
          <p>
            Address Line 1: <b>{watch("mailingAddressLine1")}</b>{" "}
          </p>
          <p>
            Address Line 2: <b>{watch("mailingAddressLine2")}</b>{" "}
          </p>
          <p>
            City: <b>{watch("mailingAddressCity")}</b>{" "}
          </p>
          <p>
            State/Province: <b>{watch("mailingAddressStateProvince")}</b>{" "}
          </p>
          <p>
            ZIP / Postal: <b>{watch("mailingAddressZipPostal")}</b>{" "}
          </p>
          <p>
            Country: <b>{watch("mailingAddressCountry")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            5 Year Address History
          </h2>
          <h3 style={{ fontWeight: "bold" }}>
            Address 2 - when Did you start living here:
            {watch("address2monthYear")}
          </h3>
          <h3>End Date: {watch("address2monthYearEndDate")}</h3>
          <h3>Five Year History Address 2</h3>
          <p>Address Line 1: {watch("address2addressLine1")}</p>
          <p>Address Line 2: {watch("address2addressLine2")}</p>
          <p>City: {watch("address2City")}</p>
          <p>State/Province: {watch("address2StateProvince")}</p>
          <p>ZIP / Postal: {watch("address2ZipPostal")}</p>
          <p>Country: {watch("addressLine2Country")}</p>

          <br />
          <h3 style={{ fontWeight: "bold" }}>
            Address 3 - when Did you start living here:
            {watch("address3monthYear")}
          </h3>
          <h3>End Date: {watch("address3monthYearEndDate")}</h3>
          <h3>Five Year History Address 3</h3>
          <p>Address Line 1: {watch("address3addressLine1")}</p>
          <p>Address Line 2: {watch("address3addressLine2")}</p>
          <p>City: {watch("address3City")}</p>
          <p>State/Province: {watch("address3StateProvince")}</p>
          <p>ZIP / Postal: {watch("address3ZipPostal")}</p>
          <p>Country: {watch("addressLine3Country")}</p>

          <br />
          <h3 style={{ fontWeight: "bold" }}>
            Address 4 - when Did you start living here:
            {watch("address4monthYear")}
          </h3>
          <h3 style={{ fontWeight: "bold" }}>
            End Date: {watch("address4monthYearEndDate")}
          </h3>
          <h3 style={{ fontWeight: "bold" }}>Five Year History Address 4</h3>
          <p>Address Line 1: {watch("address4addressLine1")}</p>
          <p>Address Line 2: {watch("address4addressLine2")}</p>
          <p>City: {watch("address4City")}</p>
          <p>State/Province: {watch("address4StateProvince")}</p>
          <p>ZIP / Postal: {watch("address4ZipPostal")}</p>
          <p>Country: {watch("addressLine4Country")}</p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            US Contact Address
          </h2>
          <p>
            Since when have you used this contact address:
            <b>{watch("uSContactAddressSinceWhen")}</b>
          </p>
          <h3 style={{ fontWeight: "bold" }}>US Contact Name</h3>
          <p>
            First Name:<b>{watch("uSContactFirstName")}</b>{" "}
          </p>
          <p>
            Last Name:<b>{watch("uSContactLastName")}</b>{" "}
          </p>
          <p>
            US Contact Phone Number:<b>{watch("uSContactPhoneNumber")}</b>{" "}
          </p>
          <h3 style={{ fontWeight: "bold" }}>Contact Address</h3>
          <p>
            Address Line 1:<b>{watch("usContactAddressLine1")}</b>{" "}
          </p>
          <p>
            Address Line 2:<b>{watch("usContactAddressLine2")}</b>{" "}
          </p>
          <p>
            City:<b>{watch("usContactAddressCity")}</b>{" "}
          </p>
          <p>
            State/Province:<b>{watch("usContactAddressStateProvince")}</b>{" "}
          </p>
          <p>
            ZIP / Postal:<b>{watch("usContactAddressZipPostal")}</b>{" "}
          </p>
          <p>
            Country:<b>{watch("usContactAddressCountry")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Information About Your Current Work
          </h2>
          <p>
            Has your employment status been the same for 5 years or more:{" "}
            <b> {watch("employmentFor5YearsOrMore")}</b>
          </p>
          <p>
            From: <b>{watch("employmentDate")}</b>{" "}
          </p>
          <p>
            Employment Status: <b>{watch("employmentStatus")}</b>{" "}
          </p>
          <p>
            Occupation: <b>{watch("occupation")}</b>{" "}
          </p>
          <p>
            Employer Name: <b>{watch("employerName")}</b>{" "}
          </p>
          <p>
            Employer Phone Number: <b>{watch("employerPhoneNumber")}</b>{" "}
          </p>
          <h3 style={{ fontWeight: "bold" }}>Employer Address</h3>
          <p>
            Address Line 1: <b>{watch("employerAddressLine1")}</b>{" "}
          </p>
          <p>
            Address Line 2: <b>{watch("employerAddressLine2")}</b>{" "}
          </p>
          <p>
            City: <b>{watch("employerAddressCity")}</b>{" "}
          </p>
          <p>
            State/Province: <b>{watch("employerAddressStateProvince")}</b>{" "}
          </p>
          <p>
            ZIP / Postal: <b>{watch("employerAddressZipPostal")}</b>{" "}
          </p>
          <p>
            Country: <b>{watch("employerAddressCountry")}</b>{" "}
          </p>
          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Employment Continued
          </h2>
          <p>Employer 2 From: {watch("employer2monthYear")}</p>
          <p>End Date: {watch("employer2monthYearEndDate")}</p>
          <p>Employment Status 2: {watch("employmentStatus2")}</p>
          <p>Employer 2 Occupation: {watch("employer2Occupation")}</p>
          <p>Employer 2 Name: {watch("employerName2")}</p>
          <p>Employer 2 Phone Number: {watch("employer2PhoneNumber")}</p>
          <br />
          <h3 style={{ fontWeight: "bold" }}>Employer 2 Address</h3>
          <p>Address Line 1: {watch("employer2addressLine1")}</p>
          <p>Address Line 2: {watch("employer2addressLine2")}</p>
          <p>City: {watch("employer2City")}</p>
          <p>State/Province: {watch("employer2StateProvince")}</p>
          <p>ZIP / Postal: {watch("employer2ZipPostal")}</p>
          <p>Country: {watch("employer2Country")}</p>

          <br />

          <p>Employer 3 From: {watch("employer3monthYear")}</p>
          <p>End Date: {watch("employer3monthYearEndDate")}</p>
          <p>Employment Status 3: {watch("employmentStatus3")}</p>
          <p>Employer 3 Occupation: {watch("employer3Occupation")}</p>
          <p>Employer 3 Name: {watch("employerName3")}</p>
          <p>Employer 3 Phone Number: {watch("employer3PhoneNumber")}</p>
          <br />
          <h3 style={{ fontWeight: "bold" }}>Employer 3 Address</h3>
          <p>Address Line 1: {watch("employer3addressLine1")}</p>
          <p>Address Line 2: {watch("employer3addressLine2")}</p>
          <p>City: {watch("employer3City")}</p>
          <p>State/Province: {watch("employer3StateProvince")}</p>
          <p>ZIP / Postal: {watch("employer3ZipPostal")}</p>
          <p>Country: {watch("employer3Country")}</p>

          <br />

          <p>Employer 4 From: {watch("employer4monthYear")}</p>
          <p>End Date: {watch("employer4monthYearEndDate")}</p>
          <p>Employment Status 4: {watch("employmentStatus4")}</p>
          <p>Employer 4 Occupation: {watch("employer4Occupation")}</p>
          <p>Employer 4 Name: {watch("employerName4")}</p>
          <p>Employer 4 Phone Number: {watch("employer4PhoneNumber")}</p>
          <br />
          <h3 style={{ fontWeight: "bold" }}>Employer 4 Address</h3>
          <p>Address Line 1: {watch("employer4addressLine1")}</p>
          <p>Address Line 2: {watch("employer4addressLine2")}</p>
          <p>City: {watch("employer4City")}</p>
          <p>State/Province: {watch("employer4StateProvince")}</p>
          <p>ZIP / Postal: {watch("employer4ZipPostal")}</p>
          <p>Country: {watch("employer4Country")}</p>

          <br />

          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            RFC / CURP Details
          </h2>
          <p>
            RFC (Registro Federal de Contribuyentes): <b>{watch("RFC")}</b>
          </p>
          <p>
            Check if this RFC is owned by you: <b>{watch("RFCIsOwned")}</b>
          </p>
          <p>
            CURP: <b>{watch("CURP")}</b>
          </p>

          <br />

          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Vehicle Information
          </h2>
          <p>
            Do you plan to drive across the border from Mexico to the United
            States?: <b>{watch("driveAcrossBorderMexicoToUnitedStates")}</b>
          </p>

          <p>
            Is the vehicle already actively registered on your account or on
            another Trusted Traveler Program member&#39;s account?:{" "}
            <b>{watch("vehicleAlreadyActivelyRegistered")}</b>
          </p>

          <p>
            Make: <b>{watch("Make")}</b>
          </p>

          <p>
            Model: <b>{watch("Model")}</b>
          </p>

          <p>
            Year of Manufacture: <b>{watch("yearOfManufacture")}</b>
          </p>

          <p>
            VIN Number: <b>{watch("VINNumber")}</b>
          </p>

          <p>
            Licence Plate Number: <b>{watch("licencePlateNumber")}</b>
          </p>

          <p>
            Vehicle Country of Issue: <b>{watch("vehicleCountryOfIssue")}</b>
          </p>

          <p>
            Vehicle State / Province of Issue:{" "}
            <b>{watch("vehicleStateProvinceOfIssue")}</b>
          </p>

          <p>
            Is this a Govenment Issue Plate:{" "}
            <b>{watch("isThisGovenmentIssuePlate")}</b>
          </p>

          <p>
            Is a Vehicle Inspection Required:{" "}
            <b>{watch("isVehicleInspectionRequired")}</b>
          </p>

          <br />

          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Vehicle Owner
          </h2>
          <p>
            Vehicle Owner Gender: <b>{watch("vehicleOwnerGender")}</b>
          </p>

          <p>
            Owner: <b>{watch("owner")}</b>
          </p>

          <p>
            Vehicle Owner Phone Number:{" "}
            <b>{watch("vehicleOwnerPhoneNumber")}</b>
          </p>

          <p>
            Vehicle Owner Address: <b>{watch("vehicleOwnerAddress")}</b>
          </p>

          <p>
            Vehicle Owner Address :Line 2:{" "}
            <b>{watch("vehicleOwnerAddress2")}</b>
          </p>

          <p>
            Vehicle Owner City: <b>{watch("vehicleOwnerAddressCity")}</b>
          </p>

          <p>
            Vehicle Owner State/Province:{" "}
            <b>{watch("vehicleOwnerAddressStateProvince")}</b>
          </p>

          <p>
            Vehicle Owner ZIP / Postal:{" "}
            <b>{watch("vehicleOwnerAddressZIPPostal")}</b>
          </p>

          <p>
            Vehicle Owner Date of Birth:{" "}
            <b>{watch("vehicleOwnerDateOfBirth")}</b>
          </p>

          <br />

          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Travel History
          </h2>
          <p>
            Countries:{" "}
            <b>
              {watch("travelHistory") ? watch("travelHistory").join(", ") : ""}
            </b>{" "}
            | Other Country: <b> {watch("otherCountry")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Additional Information
          </h2>
          <p>
            1. Have you ever been convicted of a criminal offense (including
            misdemeanor or felony traffic violations) in the united States or
            any other country. Please Indicate the country where the incident(s)
            occurred (Even if you&#39;ve had only an arrest or had an incident
            that was expunged/removed from your record, please provide the
            details (optional))?
          </p>
          <p>
            {" "}
            <b>{watch("additionalInformation1question")}</b>
          </p>
          <p>
            2. Have you ever received a waiver of inadmissibility to the USA
            from a US government agency?
          </p>
          <p>
            {" "}
            <b>{watch("additionalInformation2question")}</b>
          </p>
          <p>
            3. Have you ever been approved by Citizenship and Immigration Canada
            for rehabilitation because of past criminal activity?
          </p>
          <p>
            {" "}
            <b>{watch("additionalInformation3question")}</b>
          </p>
          <p>
            4. Have you ever been found in violation of Customs or Immigration
            laws or other federal import laws?
          </p>
          <p>
            {" "}
            <b>{watch("additionalInformation4question")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Certification Disclaimer
          </h2>
          <p>
            I certify and agree that I have understood the Certification
            Disclaimer
          </p>
          <p>
            {" "}
            <b>{watch("agreeCertificationDisclaimer")}</b>
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Card details for payment of Government fee
          </h2>
          <p>
            Card Number: <b>{watch("cardNumber")}</b>{" "}
          </p>
          <p>
            Expiry Date: <b>{watch("expiryDate")}</b>{" "}
          </p>
          {/* <p>
            CVV: <b>{watch("cvv")}</b>{" "}
          </p> */}
          <p>
            Card Type: <b>{watch("cardType")}</b>{" "}
          </p>

          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            Card Holder Name & Address Details
          </h2>
          <p>
            Card Holders First Name: <b>{watch("cardHoldersFirstName")}</b>{" "}
          </p>
          <p>
            Card Holders Last Name: <b>{watch("cardHoldersLastName")}</b>{" "}
          </p>
          <p>
            Card Holders Address: <b>{watch("cardHoldersAddress")}</b>{" "}
          </p>
          <p>
            Card Holders Address Line 2:{" "}
            <b>{watch("cardHoldersAddressLine2")}</b>{" "}
          </p>
          <p>
            Card Holders City: <b>{watch("cardHoldersCity")}</b>{" "}
          </p>
          <p>
            Card Holders State/Province/Region:{" "}
            <b>{watch("cardHoldersStateProvinceRegion")}</b>
          </p>
          <p>
            Card Holders Zip/Postal Code:{" "}
            <b>{watch("cardHoldersZipPostalCode")}</b>
          </p>
          <p>
            Card Holders Country: <b>{watch("cardHoldersCountry")}</b>{" "}
          </p>
          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>
            SENTRI Enrollment Centers:
          </h2>
          <p>
            <b>{watch("enrollmentCenter")}</b>{" "}
          </p>

          <button
            className="rounded-md bg-blue-300 mr-4 mt-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowReviewModal(false)}
          >
            Edit
          </button>
          <button
            className="rounded-md bg-blueMain mt-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => handleConfirm(watch())}
            disabled={isSubmitting} 
          >
            Confirm
          </button>
        </Modal>
      </form>
    </div>
  );
}
