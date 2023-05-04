import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { eyeColor, countryList } from "@/data/usaGlobalForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormUsa() {
  const schema = yup.object().shape({
    PersonalKey: yup.string(),

    name: yup.string().required("Name is required!"),
    surname: yup.string().required("Surname is required!"),
    email: yup.string().email().required("Email required!"),
    city: yup.string().required("City required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "entries"), data);
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
  };

  const [hasLoginGovAccount, setHasLoginGovAccount] = useState("No");
  const [showTextInputs, setShowTextInputs] = useState(false);

  const [hasDrivingLicence, setHasDrivingLicence] = useState("No");
  const [showTextInputsDriving, setShowTextInputsDriving] = useState(false);

  const [fiveYears, setFiveYears] = useState("Yes");
  const [showfiveYearsInput, setShowfiveYearsInput] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [selectedMonth2, setSelectedMonth2] = useState("");
  const [selectedYear2, setSelectedYear2] = useState("");

  const [selectedMonth3, setSelectedMonth3] = useState("");
  const [selectedYear3, setSelectedYear3] = useState("");

  const [selectedMonth4, setSelectedMonth4] = useState("");
  const [selectedYear4, setSelectedYear4] = useState("");

  const handleMonthChange2 = (event) => {
    setSelectedMonth2(event.target.value);
  };

  const handleYearChange2 = (event) => {
    setSelectedYear2(event.target.value);
  };

  const handleMonthChange3 = (event) => {
    setSelectedMonth3(event.target.value);
  };

  const handleYearChange3 = (event) => {
    setSelectedYear3(event.target.value);
  };

  const handleMonthChange4 = (event) => {
    setSelectedMonth3(event.target.value);
  };

  const handleYearChange4 = (event) => {
    setSelectedYear3(event.target.value);
  };

  return (
    <div className="max-w-screen-2xl ">
      <form
        //    onSubmit={handleSubmit(onSubmit)}
        className="formContainer"
      >
        {/* LOGIN.GOV Account */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">LOGIN.GOV Account</h3>
          </div>
          <label className="label">Have you created a LOGIN.GOV Account*</label>
          <div className="pb-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
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
                  type="text"
                  {...register("PersonalKey")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="****-****-****-****"
                />
              </div>

              <div className="mb-4">
                <label className="label">
                  If so please enter email address used
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label className="label">Please enter password</label>
                <input
                  type="text"
                  {...register("password")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>
            </>
          )}
        </div>
        {/* LOGIN.GOV Account - End */}

        {/* Personal Details */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">Personal Details</h3>
            <p class="font-normal">
              You must give EXACT details as they appear on your official
              documents
            </p>
          </div>
          <div class="inputsGrid">
            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                placeholder=""
                id="email"
                {...register("email")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="firstName" className="label">
                Your First Name
              </label>
              <input
                type="text"
                placeholder=""
                id="firstName"
                {...register("firstName")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="label">
                Your Last Name
              </label>
              <input
                type="text"
                placeholder=""
                id="lastName"
                {...register("lastName")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <p className="text-red-500">{errors.middleNames?.message}</p>
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
              <p className="text-red-500">{errors.otherNames?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="label">
                Your Gender
              </label>
              <select
                id="gender"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option {...register("gender")} value=""></option>
                <option {...register("gender")} value="male">
                  Male
                </option>
                <option {...register("gender")} value="female">
                  Female
                </option>
              </select>
              <p className="text-red-500">{errors.gender?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder=""
                id="phoneNumber"
                {...register("phoneNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.phoneNumber?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="height" className="label">
                Height
              </label>
              <input
                type="number"
                placeholder=""
                id="height"
                {...register("height")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.height?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="eyeColour" className="label">
                Eye Colour
              </label>
              <select
                id="eyeColour"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {eyeColor.map((color) => (
                  <option key={color} {...register("eyeColour")} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.eyeColour?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="birthDate" className="label">
                Your Birth Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.birthDate?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="cityBirth" className="label">
                Your City of Birth
              </label>
              <input
                type="text"
                placeholder=""
                id="cityBirth"
                {...register("cityBirth")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.cityBirth?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="stateBirth" className="label">
                Your State / Province of Birth
              </label>
              <input
                type="text"
                placeholder=""
                id="stateBirth"
                {...register("stateBirth")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.stateBirth?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="stateBirth" className="label">
                Your State / Province of Birth
              </label>
              <input
                type="text"
                placeholder=""
                id="stateBirth"
                {...register("stateBirth")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.stateBirth?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="countryBirth" className="label">
                Your Country of birth
              </label>
              <select
                id="countryBirth"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {countryList.map((country) => (
                  <option
                    key={country}
                    {...register("countryBirth")}
                    value={country}
                  >
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
            <h3 class="text-3xl pb-2">Citizenship & Nationality</h3>
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
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {countryList.map((country) => (
                  <option
                    key={country}
                    {...register("countryBirth")}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">
                {errors.primaryCitizenship?.message}
              </p>
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
              <p className="text-red-500">
                {errors.primaryPassportNumber?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="passportExpiryDate" className="label">
                Passport Expiry Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.passportExpiryDate?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="passportDateOfIssue" className="label">
                Passport Date of Issue
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.passportDateOfIssue?.message}
              </p>
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
              <p className="text-red-500">
                {errors.exactNameOnPrimaryPassport?.message}
              </p>
            </div>
          </div>
        </div>
        {/* Citizenship & Nationality - End */}

        {/* Secondary Citizenship */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">Secondary Citizenship</h3>
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
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {countryList.map((country) => (
                  <option
                    key={country}
                    {...register("secondaryCitizenship")}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">
                {errors.secondaryCitizenship?.message}
              </p>
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
              <p className="text-red-500">
                {errors.secondaryPassportNumber?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="secondaryExpiryDate" className="label">
                Secondary Expiry Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.secondaryExpiryDate?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="secondaryDateOfIssue" className="label">
                Secondary Date of Issue
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.secondaryDateOfIssue?.message}
              </p>
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
              <p className="text-red-500">
                {errors.exactNameOnSecondaryPassport?.message}
              </p>
            </div>
          </div>
        </div>
        {/* Secondary Citizenship - End */}

        {/* Alternate Documents */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">Alternate Documents</h3>
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
              <p className="text-red-500">
                {errors.citizenshipCertificateNumber?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="countryOfIssue" className="label">
                Country of Issue
              </label>
              <select
                id="countryOfIssue"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {countryList.map((country) => (
                  <option
                    key={country}
                    {...register("countryOfIssue")}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.countryOfIssue?.message}</p>
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
              <p className="text-red-500">
                {errors.exactNameOnCitizenshipCertificate?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="alternateIssueDate" className="label">
                Alternate Issue Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.alternateIssueDate?.message}
              </p>
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
              <p className="text-red-500">
                {errors.birthCertificateNumber?.message}
              </p>
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
              <p className="text-red-500">
                {errors.exactNameOnBirthCertificate?.message}
              </p>
            </div>
          </div>
        </div>
        {/* Alternate Documents - End */}

        {/* Canada/US Permanent Residence */}
        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">Canada/US Permanent Residence</h3>
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
              >
                <option {...register("permanentResident")} value=""></option>
                <option {...register("permanentResident")} value="USA">
                  USA
                </option>
                <option {...register("permanentResident")} value="Canada">
                  Canada
                </option>
              </select>
              <p className="text-red-500">
                {errors.permanentResident?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="pRCardNumber" className="label">
                PR Card Number Should be 9 digits (USCIS Number)
              </label>
              <input
                type="text"
                placeholder=""
                id="pRCardNumber"
                {...register("pRCardNumber")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.pRCardNumber?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="pRCountryOfIssue" className="label">
                PR Country of Issue
              </label>
              <select
                id="pRCountryOfIssue"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {countryList.map((country) => (
                  <option
                    key={country}
                    {...register("pRCountryOfIssue")}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>
              <p className="text-red-500">{errors.pRCountryOfIssue?.message}</p>
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
              <p className="text-red-500">
                {errors.exactNameOnPrCard?.message}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="readableZone" className="label">
                Does your Permanent Resident Card have a machine readable zone ?
              </label>
              <select
                id="readableZone"
                className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option {...register("readableZone")} value=""></option>
                <option {...register("readableZone")} value="Yes">
                  Yes
                </option>
                <option {...register("readableZone")} value="No">
                  No
                </option>
              </select>
              <p className="text-red-500">{errors.readableZone?.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="pRExpiryDate" className="label">
                PR Expiry Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.pRExpiryDate?.message}</p>
            </div>
          </div>
        </div>
        {/* Canada/US Permanent Residence - End */}

        {/* Driving Licence */}

        <div className="formSection">
          <div class="title-box">
            <h3 class="text-3xl pb-2">Driving Licence</h3>
            <p class="font-normal">
              If you have a driving licence you must provide details
            </p>
          </div>
          <label className="label">Do you have a driving licence</label>
          <div className="pb-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
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
              <div className="mb-4">
                <label className="label" htmlFor="drivingLicenceNumber">
                  Driving Licence Number
                </label>
                <input
                  type="text"
                  id="drivingLicenceNumber"
                  {...register("drivingLicenceNumber")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.drivingLicenceNumber?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="drivingLicenceExpiryDate" className="label">
                  Driving Licence Expiry Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.drivingLicenceExpiryDate?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="DlProvinceOfIssue" className="label">
                  DL State / Province of Issue
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="DlProvinceOfIssue"
                  {...register("DlProvinceOfIssue")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.DlProvinceOfIssue?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="dLCountry" className="label">
                  DL Country
                </label>
                <select
                  id="dLCountry"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {countryList.map((country) => (
                    <option
                      key={country}
                      {...register("dLCountry")}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
                <p className="text-red-500">{errors.dLCountry?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="enhancedLicence" className="label">
                  Is this an Enhanced Licence
                </label>
                <select
                  id="enhancedLicence"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option {...register("enhancedLicence")} value=""></option>
                  <option {...register("enhancedLicence")} value="Yes">
                    Yes
                  </option>
                  <option {...register("enhancedLicence")} value="No">
                    No
                  </option>
                </select>
                <p className="text-red-500">
                  {errors.enhancedLicence?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="hazardousMaterialEndorsement" className="label">
                  Has this Licence a Hazardous Material Endorsement
                </label>
                <select
                  id="hazardousMaterialEndorsement"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option
                    {...register("hazardousMaterialEndorsement")}
                    value=""
                  ></option>
                  <option
                    {...register("hazardousMaterialEndorsement")}
                    value="Yes"
                  >
                    Yes
                  </option>
                  <option
                    {...register("hazardousMaterialEndorsement")}
                    value="No"
                  >
                    No
                  </option>
                </select>
                <p className="text-red-500">
                  {errors.hazardousMaterialEndorsement?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="commercialLicence" className="label">
                  Is this a Commercial Licence
                </label>
                <select
                  id="commercialLicence"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option {...register("commercialLicence")} value=""></option>
                  <option {...register("commercialLicence")} value="Yes">
                    Yes
                  </option>
                  <option {...register("commercialLicence")} value="No">
                    No
                  </option>
                </select>
                <p className="text-red-500">
                  {errors.commercialLicence?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="exactNameOnLicence" className="label">
                  Exact Name on Licence
                </label>
                <select
                  id="exactNameOnLicence"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option {...register("exactNameOnLicence")} value=""></option>
                  <option {...register("exactNameOnLicence")} value="Yes">
                    Yes
                  </option>
                  <option {...register("exactNameOnLicence")} value="No">
                    No
                  </option>
                </select>
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
            <h3 class="text-3xl pb-2">Address History</h3>
            <p class="font-normal">
              Only if you have not lived at your current address for more than 5
              years. You have to provide 5 years continuous address history -
              your application cannot be processed without this
            </p>
          </div>
          <div class="inputsGrid">
            <label className="label">
              Have you lived at your Residential Address for 5 years or more?
            </label>
            <div className="pb-3">
              <label className="inline-flex items-center mx-4">
                <input
                  type="radio"
                  value="Yes"
                  className="form-radio h-5 w-5 text-blue-600"
                  checked={fiveYears === "Yes"}
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
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">{errors.startLivingHere?.message}</p>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="currentAddress" className="label">
              Current Address
            </label>
            <input
              type="text"
              placeholder=""
              id="currentAddress"
              {...register("currentAddress")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentAddress?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentAddress2" className="label">
              Current Address Line 2
            </label>
            <input
              type="text"
              placeholder=""
              id="currentAddress2"
              {...register("currentAddress2")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentAddress2?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentCity" className="label">
              Current City
            </label>
            <input
              type="text"
              placeholder=""
              id="currentCity"
              {...register("currentCity")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentCity?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentStateProvinceRegion" className="label">
              Current State/Province/Region
            </label>
            <input
              type="text"
              placeholder=""
              id="currentStateProvinceRegion"
              {...register("currentStateProvinceRegion")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.currentStateProvinceRegion?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentZipPostalCode" className="label">
              Current Zip/Postal Code
            </label>
            <input
              type="text"
              placeholder=""
              id="currentZipPostalCode"
              {...register("currentZipPostalCode")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">
              {errors.currentZipPostalCode?.message}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="mailingAddress" className="label">
              Is this also your Mailing Address
            </label>
            <select
              id="mailingAddress"
              className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option {...register("mailingAddress")} value=""></option>
              <option {...register("mailingAddress")} value="Yes">
                Yes
              </option>
              <option {...register("mailingAddress")} value="No">
                No
              </option>
            </select>
            <p className="text-red-500">{errors.mailingAddress?.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="currentCountry" className="label">
              Current Country
            </label>
            <input
              type="text"
              placeholder=""
              id="currentCountry"
              {...register("currentCountry")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-500">{errors.currentCountry?.message}</p>
          </div>

          {showfiveYearsInput && (
            <>
              <div class="title-box">
                <h3 class="text-3xl pb-2">5 Year Address History</h3>
              </div>
              {/* Address 2 */}
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress2">
                  Address 2 - when Did you start living here:
                </label>
                <select
                  id="monthAddress2"
                  name="monthAddress2"
                  value={selectedMonth2}
                  onChange={handleMonthChange2}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear2}
                  onChange={handleYearChange2}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress2">End Date:</label>
                <select
                  id="monthAddress2"
                  name="monthAddress2"
                  value={selectedMonth2}
                  onChange={handleMonthChange2}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear2}
                  onChange={handleYearChange2}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mb-4">
                <h4>Five Year History Address 2</h4>
                <label htmlFor="addressLine1" className="label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine1"
                  {...register("addressLine1")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine1?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine2" className="label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine2"
                  {...register("addressLine2")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine2?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine2City" className="label">
                  City
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine2City"
                  {...register("addressLine2City")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine2City?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine2StateProvince" className="label">
                  State/Province
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine2StateProvince"
                  {...register("addressLine2StateProvince")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine2StateProvince?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine2ZipPostal" className="label">
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine2ZipPostal"
                  {...register("addressLine2ZipPostal")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine2ZipPostal?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine2Country" className="label">
                  Country
                </label>
                <select
                  id="addressLine2Country"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {countryList.map((country) => (
                    <option
                      key={country}
                      {...register("addressLine2Country")}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
                <p className="text-red-500">
                  {errors.addressLine2Country?.message}
                </p>
              </div>
              {/* Address 2 - End*/}

              {/* Address 3 */}
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress2">
                  Address 3 - when Did you start living here:
                </label>
                <select
                  id="monthAddress3"
                  name="monthAddress3"
                  value={selectedMonth3}
                  onChange={handleMonthChange3}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear3}
                  onChange={handleYearChange3}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress3">End Date:</label>
                <select
                  id="monthAddress3"
                  name="monthAddress3"
                  value={selectedMonth3}
                  onChange={handleMonthChange3}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear3}
                  onChange={handleYearChange3}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mb-4">
                <h4>Five Year History Address 3</h4>
                <label htmlFor="addressLine13" className="label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine13"
                  {...register("addressLine13")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine13?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine23" className="label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine23"
                  {...register("addressLine23")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine23?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine23City" className="label">
                  City
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine23City"
                  {...register("addressLine23City")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine23City?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine23StateProvince" className="label">
                  State/Province
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine23StateProvince"
                  {...register("addressLine2StateProvince")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine23StateProvince?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine23ZipPostal" className="label">
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine23ZipPostal"
                  {...register("addressLine23ZipPostal")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine2ZipPostal?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine23Country" className="label">
                  Country
                </label>
                <select
                  id="addressLine23Country"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {countryList.map((country) => (
                    <option
                      key={country}
                      {...register("addressLine23Country")}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
                <p className="text-red-500">
                  {errors.addressLine23Country?.message}
                </p>
              </div>
              {/* Address 3 - End*/}

              {/* Address 4 */}
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress2">
                  Address 4 - when Did you start living here:
                </label>
                <select
                  id="monthAddress4"
                  name="monthAddress4"
                  value={selectedMonth4}
                  onChange={handleMonthChange4}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear4}
                  onChange={handleYearChange4}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-4 flex items-center gap-6">
                <label htmlFor="monthAddress4">End Date:</label>
                <select
                  id="monthAddress4"
                  name="monthAddress4"
                  value={selectedMonth4}
                  onChange={handleMonthChange4}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="year">Select Year:</label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear4}
                  onChange={handleYearChange4}
                  className="shadow  border rounded w-1/5 h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 101 }, (_, i) => 1923 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mb-4">
                <h4>Five Year History Address 4</h4>
                <label htmlFor="addressLine14" className="label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine14"
                  {...register("addressLine14")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine13?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine24" className="label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine24"
                  {...register("addressLine24")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">{errors.addressLine24?.message}</p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine24City" className="label">
                  City
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine24City"
                  {...register("addressLine24City")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine24City?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine24StateProvince" className="label">
                  State/Province
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine24StateProvince"
                  {...register("addressLine24StateProvince")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine24StateProvince?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine24ZipPostal" className="label">
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="addressLine24ZipPostal"
                  {...register("addressLine23ZipPostal")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="text-red-500">
                  {errors.addressLine24ZipPostal?.message}
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="addressLine24Country" className="label">
                  Country
                </label>
                <select
                  id="addressLine24Country"
                  className="shadow  border rounded w-full h-9  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {countryList.map((country) => (
                    <option
                      key={country}
                      {...register("addressLine24Country")}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
                <p className="text-red-500">
                  {errors.addressLine24Country?.message}
                </p>
              </div>
                {/* Address 4 - End */}
            </>
          )}
        </div>

        {/* Address History - End */}
      </form>
    </div>
  );
}
