import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { eyeColor, countryList, employmentStatus } from "@/data/usaGlobalForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormUsa() {
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
      .required("Birth Date is required!")
      .nullable(),
    cityBirth: yup.string().required("City of Birth required!"),
    stateBirth: yup
      .string()
      .required("Your State / Province of Birth required!"),
    countryBirth: yup.string().required("Your Country of birth required!"),
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      birthDate: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "entries"), data);
      console.log("Document written with ID: ", docRef.id);
      console.log(data);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
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

  return (
    <div className="max-w-screen-2xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
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
              <span className="ml-2 text-gray-700">No</span>
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
              <span className="ml-2 text-gray-700">Yes</span>
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
                className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setValue("gender", e.target.value)}
                {...register("gender")}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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

            <div className="mb-4">
              <label htmlFor="height" className="label">
                Height <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="height"
                {...register("height")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.height?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="eyeColour" className="label">
                Eye Colour <span className="star">*</span>
              </label>
              <select
                id="eyeColour"
                className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  date.setHours(0, 0, 0, 0);
                  setStartDate(date);
                  setValue("birthDate", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                Your Country of birth <span className="star">*</span>
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
                Primary Citizenship
              </label>
              <select
                id="primaryCitizenship"
                onChange={(e) => setValue("primaryCitizenship", e.target.value)}
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("primaryCitizenship")}
              >
                {countryList.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="primaryPassportNumber" className="label">
                Primary Passport Number
              </label>
              <input
                type="text"
                placeholder=""
                id="primaryPassportNumber"
                {...register("primaryPassportNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="passportExpiryDate" className="label">
                Passport Expiry Date
              </label>
              <DatePicker
                selected={passportExpiryDate}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setPassportExpiryDate(date);
                  setValue("passportExpiryDate", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="passportDateOfIssue" className="label">
                Passport Date of Issue
              </label>
              <DatePicker
                selected={passportDateOfIssue}
                onChange={(date) => {
                  date.setHours(0, 0, 0, 0);
                  setPassportDateOfIssue(date);
                  setValue("passportDateOfIssue", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="exactNameOnPrimaryPassport" className="label">
                Exact Name on Primary Passport
              </label>
              <input
                type="text"
                placeholder=""
                id="exactNameOnPrimaryPassport"
                {...register("exactNameOnPrimaryPassport")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
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
                  setValue("secondaryExpiryDate", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  setValue("secondaryDateOfIssue", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  setValue("alternateIssueDate", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <h3 class="text-3xl text-white pb-2">Canada/US Permanent Residence</h3>
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
                maxlength="9"
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
                  setValue("pRExpiryDate", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <span className="ml-2 text-gray-700">No</span>
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
              <span className="ml-2 text-gray-700">Yes</span>
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
                    setValue("drivingLicenceExpiryDate", date.toDateString(), {
                      shouldValidate: true,
                    });
                  }}
                  dateFormat="dd/MM/yyyy"
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow  border border-red-500 rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <span className="ml-2 text-gray-700">Yes</span>
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
                <span className="ml-2 text-gray-700">No</span>
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
                  setValue("startLivingHere", date.toDateString(), {
                    shouldValidate: true,
                  });
                }}
                dateFormat="dd/MM/yyyy"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <input
              type="text"
              placeholder=""
              id="currentCountry"
              {...register("currentCountry")}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address3addressLine1" className="label">
                  Five Year History Address 2
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address4addressLine1" className="label">
                  Five Year History Address 2
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
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

            <div className="mb-4">
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

            <div className="mb-4">
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
            <h3 class="text-3xl text-white pb-2">Information About Your Current Work</h3>
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
                <span className="ml-2 text-gray-700">Yes</span>
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
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="address3monthYearEndDate" className="label">
                From <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="MM/YYYY"
                id="address3monthYearEndDate"
                {...register("address3monthYearEndDate")}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

        {/* Travel History */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl text-white pb-2">Travel History</h3>
            <p class="font-normal">
              List all the countries visited in last 5 years{" "}
              <b>excluding Mexico, USA & Canada</b>
            </p>
          </div>

          <div class="inputsGrid"></div>
        </div>
        {/* Travel History - End*/}

        <input
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}
