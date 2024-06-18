import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

import { Link } from "@nextui-org/react";

import styles from "../../styles/pages.module.css";

function UsaItem() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getItem() {
      const entryRef = doc(db, "entries", id);
      const entryDoc = await getDoc(entryRef);
      if (entryDoc.exists()) {
        setItem({ id: entryDoc.id, ...entryDoc.data() });
      } else {
        setItem(null);
      }
    }
    if (id) {
      getItem();
    }
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-5">
      <button className={styles.btnBack}>
        <Link href="/admin">Back to Administration</Link>
      </button>
      <h1>Entry ID: <b>{item.id}</b></h1>
      <h1>
        Form type:
        <span className="text-lg font-bold my-1"><b>{item.formType}</b></span>
      </h1>
      <br />
      <h1>
        Application form for
        <span className="text-lg font-bold my-1">
        <b>  {item.firstName} {item.lastName}</b>
        </span>
      </h1>

      <br />
      <h2>Have you created a LOGIN.GOV Account:<b> {item.loginGovAccount}</b></h2>
      <p>Personal Key: <b>{item.personalKey}</b></p>
      <p>Email address: <b>{item.personalKeyEmail}</b></p>
      <p>Password: <b>{item.personalKeyPassword}</b></p>

      <br />
      <span className=" text-red-500">Only for Renewal Form </span>
      <p>GOES ID: <b>{item.goesId}</b></p>
      <p>GOES Password: <b>{item.goesPassword}</b></p>
      <p>PASSID: <b>{item.passId}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Personal Details</h2>
      <p>Email: <b>{item.email}</b></p>
      <p>First Name: <b>{item.firstName}</b></p>
      <p>Last Name: <b>{item.lastName}</b></p>
      <p>Middle Names: <b>{item.middleNames}</b></p>
      <p>Other Names: <b>{item.otherNames}</b></p>
      <p>Gender: <b>{item.gender}</b></p>
      <p>Phone Number: <b>{item.phoneNumber}</b></p>
      <p>Height: <b>{item.height}</b></p>
      <p>Height in meters: <b>{item.heightInMeters}</b></p>
      <p>Eye Colour: <b>{item.eyeColour}</b></p>
      <p>Birth Date: <b>{item.birthDate}</b></p>
      <p>City of Birth: <b>{item.cityBirth}</b></p>
      <p>State / Province of Birth: <b>{item.stateBirth}</b></p>
      <p>Country of Birth <b>{item.countryBirth}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Parent / Guardian Details
        <span className=" text-red-500">(Only for child forms) </span>
      </h2>
      <p>Parent / Guardian Name: <b>{item.parentGuardianName}</b></p>
      <p>Parent / Guardian Birth Date: <b>{item.parentGuardianBirthDate}</b></p>
      <p>Parent / Guardian Gender: <b>{item.parentGuardianGender}</b></p>
      <p>Home Phone Number: <b>{item.parentHomePhoneNumber}</b></p>
      <p>State / Province of birth: <b>{item.parentStateProvinceOfBirth}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Citizenship & Nationality</h2>
      <p>Primary Citizenship: <b>{item.primaryCitizenship}</b></p>
      <p>Primary Passport Number: <b>{item.primaryPassportNumber}</b></p>
      <p>Passport Expiry Date: <b>{item.passportExpiryDate}</b></p>
      <p>Passport Date of Issue: <b>{item.passportDateOfIssue}</b></p>
      <p>Exact Name on Primary Passport: <b>{item.exactNameOnPrimaryPassport}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Secondary Citizenship:</h2>
      <p>Secondary Citizenship: <b>{item.secondaryCitizenship}</b></p>
      <p>Secondary Passport Number: <b>{item.secondaryPassportNumber}</b></p>
      <p>Secondary Expiry Date: <b>{item.secondaryExpiryDate}</b></p>
      <p>Secondary Date of Issue: <b>{item.secondaryDateOfIssue}</b></p>
      <p>
        Exact Name on Secondary Passport:
       <b> {item.exactNameOnSecondaryPassport}</b>
      </p>

      <br />
      <h2 className="text-xl font-bold my-1">Alternate Documents:</h2>
      <p>Citizenship Certificate Number: <b>{item.citizenshipCertificateNumber}</b></p>
      <p>Country of Issue: <b>{item.countryOfIssue}</b></p>
      <p>
        Exact Name on Citizenship Certificate:
        <b>{item.exactNameOnCitizenshipCertificate}</b>
      </p>
      <p>Alternate Issue Date: <b>{item.alternateIssueDate}</b></p>
      <p>Birth Certificate Number: <b>{item.birthCertificateNumber}</b></p>
      <p>Exact Name on Birth Certificate: <b>{item.exactNameOnBirthCertificate}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Canada/US Permanent Residence</h2>
      <p>Permanent Resident:<b> {item.permanentResident}</b></p>
      <p>PR Card Number (USCIS Number): <b>{item.pRCardNumber}</b></p>
      <p>PR Country of Issue:<b> {item.pRCountryOfIssue}</b></p>
      <p>Exact Name on PR Card:<b> {item.exactNameOnPrCard}</b></p>
      <p>
        Does your Permanent Resident Card have a machine readable zone?:
       <b> {item.readableZone}</b>
      </p>
      <p>PR Expiry Date:<b> {item.pRExpiryDate}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Driving Licence</h2>
      <p>Have a driving licence:<b> {item.hasDrivingLicence}</b></p>
      <p>Driving Licence Number:<b> {item.drivingLicenceNumber}</b></p>
      <p>Driving Licence Expiry Date: <b>{item.drivingLicenceExpiryDate}</b></p>
      <p>DL State / Province of Issue:<b> {item.dlProvinceOfIssue}</b> </p>
      <p>DL Country:<b> {item.dLCountry}</b></p>
      <p>Is this an Enhanced Licence:<b> {item.enhancedLicence}</b></p>
      <p>
        Has this Licence a Hazardous Material Endorsement:
       <b> {item.hazardousMaterialEndorsement}</b>
      </p>
      <p>Is this a Commercial Licence:<b> {item.commercialLicence}</b> </p>
      <p>Exact Name on Licence:<b> {item.exactNameOnLicence}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Address History</h2>
      <p>
        Have you lived at your Residential Address for 5 years or more:
        <b>{item.residentialAddressFor5YearsOrMore}</b>
      </p>
      <p>Current When did you start living here: <b></b>{item.startLivingHere}</p>
      <p>Current Address: <b>{item.currentAddress}</b></p>
      <p>Current Address Line 2: <b>{item.currentAddressLine2} </b></p>
      <p>Current City: <b>{item.currentCity}</b></p>
      <p>Current State/Province/Region: <b>{item.currentStateProvinceRegion}</b></p>
      <p>Current Zip/Postal Code: <b>{item.currentZipPostalCode}</b></p>
      <p>Current Country: <b>{item.currentCountry}</b></p>
      <h3 className="text-lg font-semibold">Mailing Address:</h3>
      <p>Address Line 1:<b> {item.mailingAddressLine1}</b></p>
      <p>Address Line 2: <b>{item.mailingAddressLine2}</b></p>
      <p>City:<b> {item.mailingAddressCity}</b></p>
      <p>State/Province:<b> {item.mailingAddressStateProvince}</b></p>
      <p>ZIP / Postal:<b> {item.mailingAddressZipPostal}</b></p>
      <p>Country: <b>{item.mailingAddressCountry}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">5 Year Address History</h2>
      <h3 className="text-lg font-semibold">
        Address 2 - when Did you start living here: <b>{item.address2monthYear}</b>
      </h3>
      <h3 className="text-lg font-semibold">
        End Date: <b>{item.address2monthYearEndDate}</b>
      </h3>
      <h3 className="text-lg font-semibold">Five Year History Address 2</h3>
      <p>Address Line 1: <b>{item.address2addressLine1}</b></p>
      <p>Address Line 2:<b> {item.address2addressLine2}</b></p>
      <p>City: <b>{item.address2City}</b></p>
      <p>State/Province: <b>{item.address2StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.address2ZipPostal}</b></p>
      <p>Country: <b>{item.addressLine2Country}</b></p>

      <br />
      <h3 className="text-lg font-semibold">
        Address 3 - when Did you start living here: <b>{item.address3monthYear}</b>
      </h3>
      <h3 className="text-lg font-semibold">
        End Date: <b>{item.address3monthYearEndDate}</b>
      </h3>
      <h3 className="text-lg font-semibold">Five Year History Address 3</h3>
      <p>Address Line 1: <b>{item.address3addressLine1}</b></p>
      <p>Address Line 2: <b>{item.address3addressLine2}</b></p>
      <p>City: <b>{item.address3City}</b></p>
      <p>State/Province: <b>{item.address3StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.address3ZipPostal}</b></p>
      <p>Country: <b>{item.addressLine3Country}</b></p>

      <br />
      <h3 className="text-lg font-semibold">
        Address 4 - when Did you start living here: <b>{item.address4monthYear}</b>
      </h3>
      <h3 className="text-lg font-semibold">
        End Date: <b>{item.address4monthYearEndDate}</b>
      </h3>
      <h3 className="text-lg font-semibold">Five Year History Address 4</h3>
      <p>Address Line 1: <b>{item.address4addressLine1}</b></p>
      <p>Address Line 2: <b>{item.address4addressLine2}</b></p>
      <p>City: <b>{item.address4City}</b></p>
      <p>State/Province: <b>{item.address4StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.address4ZipPostal}</b></p>
      <p>Country: <b>{item.addressLine4Country}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">US Contact Address</h2>
      <p>
        Since when have you used this contact address:
       <b> {item.uSContactAddressSinceWhen}</b>
      </p>
      <h3 className="text-lg font-semibold">US Contact Name</h3>
      <p>First Name: <b>{item.uSContactFirstName}</b></p>
      <p>Last Name: <b>{item.uSContactLastName}</b></p>
      <p>US Contact Phone Number: <b>{item.uSContactPhoneNumber}</b></p>
      <h3 className="text-lg font-semibold">Contact Address</h3>
      <p>Address Line 1: <b>{item.usContactAddressLine1}</b></p>
      <p>Address Line 2: <b>{item.usContactAddressLine2}</b></p>
      <p>City: <b>{item.usContactAddressCity}</b></p>
      <p>State/Province: <b>{item.usContactAddressStateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.usContactAddressZipPostal}</b></p>
      <p>Country:<b>{item.usContactAddressCountry}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Information About Your Current Work
      </h2>
      <p>
        Has your employment status been the same for 5 years or more:
        <b>{item.employmentFor5YearsOrMore}</b>
      </p>
      <p>From: <b>{item.employmentDate}</b></p>
      <p>Employment Status: <b>{item.employmentStatus}</b></p>
      <p>Occupation: <b>{item.occupation}</b></p>
      <p>Employer Name: <b>{item.employerName}</b></p>
      <p>Employer Phone Number: <b>{item.employerPhoneNumber}</b></p>
      <h3 className="text-lg font-semibold">Employer Address</h3>
      <p>Address Line 1: <b>{item.employerAddressLine1}</b></p>
      <p>Address Line 2: <b>{item.employerAddressLine2}</b></p>
      <p>City: <b>{item.employerAddressCity}</b></p>
      <p>State/Province: <b>{item.employerAddressStateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.employerAddressZipPostal}</b></p>
      <p>Country: <b>{item.employerAddressCountry}</b></p>

      <h2 className="text-xl font-bold my-1">Employment Continued</h2>
      <p>Employer 2 From: <b>{item.employer2monthYear}</b></p>
      <p>End Date: <b>{item.employer2monthYearEndDate}</b></p>
      <p>Employment Status 2: <b>{item.employmentStatus2}</b></p>
      <p>Employer 2 Occupation: <b>{item.employer2Occupation}</b></p>
      <p>Employer 2 Name: <b>{item.employerName2}</b></p>
      <p>Employer 2 Phone Number: <b>{item.employer2PhoneNumber}</b></p>
      <h3 className="text-lg font-semibold">Employer 2 Address</h3>
      <p>Address Line 1: <b>{item.employer2addressLine1}</b></p>
      <p>Address Line 2: <b>{item.employer2addressLine2}</b></p>
      <p>City: <b>{item.employer2City}</b></p>
      <p>State/Province: <b>{item.employer2StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.employer2ZipPostal}</b></p>
      <p>Country: <b>{item.employer2Country}</b></p>

      <br />

      <p>Employer 3 From: <b>{item.employer3monthYear}</b></p>
      <p>End Date: <b>{item.employer3monthYearEndDate}</b></p>
      <p>Employment Status 3: <b>{item.employmentStatus3}</b></p>
      <p>Employer 3 Occupation:<b> {item.employer3Occupation}</b></p>
      <p>Employer 3 Name: <b>{item.employerName3}</b></p>
      <p>Employer 3 Phone Number:<b> {item.employer3PhoneNumber}</b></p>
      <h3 className="text-lg font-semibold">Employer 3 Address</h3>
      <p>Address Line 1:<b> {item.employer3addressLine1}</b></p>
      <p>Address Line 2: <b>{item.employer3addressLine2}</b></p>
      <p>City: <b>{item.employer3City}</b></p>
      <p>State/Province: <b>{item.employer3StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.employer3ZipPostal}</b></p>
      <p>Country: <b>{item.employer3Country}</b></p>

      <br />

      <p>Employer 4 From: <b>{item.employer4monthYear}</b></p>
      <p>End Date: <b>{item.employer4monthYearEndDate}</b></p>
      <p>Employment Status 4: <b>{item.employmentStatus4}</b></p>
      <p>Employer 4 Occupation: <b>{item.employer4Occupation}</b></p>
      <p>Employer 4 Name: <b>{item.employerName4}</b></p>
      <p>Employer 4 Phone Number: <b>{item.employer4PhoneNumber}</b></p>
      <h3 className="text-lg font-semibold">Employer 4 Address</h3>
      <p>Address Line 1: <b>{item.employer4addressLine1}</b></p>
      <p>Address Line 2: <b>{item.employer4addressLine2}</b></p>
      <p>City: <b>{item.employer4City}</b></p>
      <p>State/Province: <b>{item.employer4StateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.employer4ZipPostal}</b></p>
      <p>Country: <b>{item.employer4Country}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        RFC / CURP Details
        <span className=" text-red-500">(Only for Sentri Form )</span>
      </h2>
      <p>RFC (Registro Federal de Contribuyentes): <b>{item.RFC}</b></p>
      <p>Check if this RFC is owned by you: <b>{item.RFCIsOwned}</b></p>
      <p>CURP: <b>{item.CURP}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Vehicle Information{" "}
        <span className=" text-red-500">(Only for Sentri Form )</span>
      </h2>
      <p>
        Do you plan to drive across the border from Mexico to the United
        States?: <b> {item.driveAcrossBorderMexicoToUnitedStates}</b>
      </p>
      <p>
        Is the vehicle already actively registered on your account or on another
        Trusted Traveler Program member&apos;s account?:{" "}
        <b> {item.vehicleAlreadyActivelyRegistered}</b>
      </p>
      <p>Make:  <b>{item.Make}</b></p>
      <p>Model: <b> {item.Model}</b></p>
      <p>Year of Manufacture: <b>{item.yearOfManufacture}</b></p>
      <p>VIN Number: <b> {item.VINNumber}</b></p>
      <p>Licence Plate Number: <b> {item.licencePlateNumber}</b></p>
      <p>Vehicle Country of Issue:  <b>{item.vehicleCountryOfIssue}</b></p>
      <p>
        Vehicle State / Province of Issue: <b> {item.vehicleStateProvinceOfIssue}</b>
      </p>
      <p>Is this a Govenment Issue Plate: <b> {item.isThisGovenmentIssuePlate}</b></p>
      <p>
        Is a Vehicle Inspection Required: <b> {item.isVehicleInspectionRequired}</b>
      </p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Vehicle Owner
        <span className=" text-red-500">(Only for Sentri Form )</span>
      </h2>
      <p>Vehicle Owner Gender: <b>{item.vehicleOwnerGender}</b></p>
      <p> Owner: <b>{item.owner}</b></p>
      <p>Vehicle Owner Phone Number: <b>{item.vehicleOwnerPhoneNumber}</b></p>
      <p>Vehicle Owner Address: <b>{item.vehicleOwnerAddress}</b></p>
      <p>Address Line 2: <b>{item.vehicleOwnerAddress2}</b></p>
      <p>City: <b>{item.vehicleOwnerAddressCity}</b></p>
      <p>State/Province: <b>{item.vehicleOwnerAddressStateProvince}</b></p>
      <p>ZIP / Postal: <b>{item.vehicleOwnerAddressZIPPostal}</b></p>
      <p> Vehicle Owner Date of Birth: <b>{item.vehicleOwnerDateOfBirth}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Travel History</h2>
      <p>Countries: <b>{item.travelHistory.join(", ")}</b> </p>
      <p>Other Country: <b>{item.otherCountry}</b></p>
      <br />
      <h2 className="text-xl font-bold my-1">Additional Information</h2>
      <p>
        1. Have you ever been convicted of a criminal offense (including
        misdemeanor or felony traffic violations) in the united States or any
        other country. Please Indicate the country where the incident(s)
        occurred (Even if you&#39;ve had only an arrest or had an incident that
        was expunged/removed from your record, please provide the details
        (optional))?
      </p>
      <p><b>{item.additionalInformation1question}</b></p>
      <p>
        2. Have you ever received a waiver of inadmissibility to the USA from a
        US government agency?
      </p>
      <p><b>{item.additionalInformation2question}</b></p>
      <p>
        3. Have you ever been approved by Citizenship and Immigration Canada for
        rehabilitation because of past criminal activity?
      </p>
      <p><b>{item.additionalInformation3question}</b></p>
      <p>
        4. Have you ever been found in violation of Customs or Immigration laws
        or other federal import laws?
      </p>
      <p><b>{item.additionalInformation4question}</b></p>

      <br />
      <h2>Certification Disclaimer</h2>
      <p>
        I certify and agree that I have understood the Certification Disclaimer
      </p>
      <p><b>{item.agreeCertificationDisclaimer}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Card details for payment of Government fee
      </h2>
      <p>Card Number (last four digits): <b>{item.cardNumber}</b></p>
      <p>Expiry Date: <b>{item.expiryDate}</b></p>
      {/* <p>CVV: {item.cvv}</p> */}
      <p>Card Type <b>{item.cardType}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">
        Card Holder Name & Address Details
      </h2>
      <p>Card Holders First Name: <b>{item.cardHoldersFirstName}</b></p>
      <p>Card Holders Last Name:<b> {item.cardHoldersLastName}</b></p>
      <p>Card Holders Address: <b>{item.cardHoldersAddress}</b></p>
      <p>Card Holders Address Line 2:<b> {item.cardHoldersAddressLine2}</b></p>
      <p>Card Holders City: <b>{item.cardHoldersCity}</b></p>
      <p>
        Card Holders State/Province/Region:
        <b>{item.cardHoldersStateProvinceRegion}</b>
      </p>
      <p>Card Holders Zip/Postal Code: <b>{item.cardHoldersZipPostalCode}</b></p>
      <p>Card Holders Country: <b>{item.cardHoldersCountry}</b></p>

      <br />
      <h2 className="text-xl font-bold my-1">Enrollment Center: </h2>
      <p><b>{item.enrollmentCenter}</b></p>
    </div>
  );
}

export default UsaItem;
