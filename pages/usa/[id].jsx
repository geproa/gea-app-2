import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

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
    getItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-5">
      <h1>Form type: {item.formType}</h1>
      <br/>
      <h1>Application form for {item.firstName} {item.firstLast}</h1>

      <br />
      <h2>Have you created a LOGIN.GOV Account: {item.loginGovAccount}</h2>
      <p>Personal Key: {item.personalKey}</p>
      <p>Email address: {item.personalKeyEmail}</p>
      <p>Password: {item.personalKeyPassword}</p>
      
      <br/>
      <span className=" text-red-500">Only for Renewal Form </span>
      <p>GOES ID: {item.goesId}</p>
      <p>GOES Password: {item.goesPassword}</p>
      <p>PASSID: {item.passId}</p>

     

      <br />
      <h2 className="text-xl font-bold my-1">Personal Details</h2>
      <p>Email: {item.email}</p>
      <p>First Name: {item.firstName}</p>
      <p>Last Name: {item.lastName}</p>
      <p>Middle Names: {item.middleNames}</p>
      <p>Other Names: {item.otherNames}</p>
      <p>Gender: {item.gender}</p>
      <p>Phone Number: {item.phoneNumber}</p>
      <p>Height: {item.height}</p>
      <p>Height in meters: {item.heightInMeters}</p>
      <p>Eye Colour: {item.eyeColour}</p>
      <p>Birth Date: {item.birthDate}</p>
      <p>City of Birth: {item.cityBirth}</p>
      <p>State / Province of Birth: {item.stateBirth}</p>
      <p>Country of Birth {item.countryBirth}</p>


      <br />
      <h2 className="text-xl font-bold my-1">Parent / Guardian Details <span className=" text-red-500">(Only for child forms) </span></h2>
      <p>Parent / Guardian Name: {item.parentGuardianName}</p>
      <p>Parent / Guardian Birth Date: {item.parentGuardianBirthDate}</p>
      <p>Parent / Guardian Gender: {item.parentGuardianGender}</p>
      <p>Home Phone Number: {item.parentHomePhoneNumber}</p>
      <p>State / Province of birth: {item.parentStateProvinceOfBirth}</p>


      <br />
      <h2 className="text-xl font-bold my-1">Citizenship & Nationality</h2>
      <p>Primary Citizenship: {item.primaryCitizenship}</p>
      <p>Primary Passport Number: {item.primaryPassportNumber}</p>
      <p>Passport Expiry Date: {item.passportExpiryDate}</p>
      <p>Passport Date of Issue: {item.passportDateOfIssue}</p>
      <p>
        Exact Name on Primary Passport: {item.exactNameOnPrimaryPassport}
      </p>

      <br />
      <h2 className="text-xl font-bold my-1">Secondary Citizenship:</h2>
      <p>Secondary Citizenship: {item.secondaryCitizenship}</p>
      <p>Secondary Passport Number: {item.secondaryPassportNumber}</p>
      <p>Secondary Expiry Date: {item.secondaryExpiryDate}</p>
      <p>Secondary Date of Issue: {item.secondaryDateOfIssue}</p>
      <p>
        Exact Name on Secondary Passport:
        {item.exactNameOnSecondaryPassport}
      </p>

      <br />
      <h2 className="text-xl font-bold my-1">Alternate Documents:</h2>
      <p>
        Citizenship Certificate Number: {item.citizenshipCertificateNumber}
      </p>
      <p>Country of Issue: {item.countryOfIssue}</p>
      <p>
        Exact Name on Citizenship Certificate:
        {item.exactNameOnCitizenshipCertificate}
      </p>
      <p>Alternate Issue Date: {item.alternateIssueDate}</p>
      <p>Birth Certificate Number: {item.birthCertificateNumber}</p>
      <p>
        Exact Name on Birth Certificate: {item.exactNameOnBirthCertificate}
      </p>

      <br />
      <h2 className="text-xl font-bold my-1">Canada/US Permanent Residence</h2>
      <p>Permanent Resident: {item.permanentResident}</p>
      <p>PR Card Number (USCIS Number): {item.pRCardNumber}</p>
      <p>PR Country of Issue: {item.pRCountryOfIssue}</p>
      <p>Exact Name on PR Card: {item.exactNameOnPrCard}</p>
      <p>
        Does your Permanent Resident Card have a machine readable zone?:
        {item.readableZone}
      </p>
      <p>PR Expiry Date: {item.pRExpiryDate}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Driving Licence</h2>
      <p>Have a driving licence: {item.hasDrivingLicence}</p>
      <p>Driving Licence Number: {item.drivingLicenceNumber}</p>
      <p>Driving Licence Expiry Date: {item.drivingLicenceExpiryDate}</p>
      <p>DL State / Province of Issue: {item.dlProvinceOfIssue} </p>
      <p>DL Country: {item.dLCountry}</p>
      <p>Is this an Enhanced Licence: {item.enhancedLicence}</p>
      <p>
        Has this Licence a Hazardous Material Endorsement:
        {item.hazardousMaterialEndorsement}
      </p>
      <p>Is this a Commercial Licence: {item.commercialLicence} </p>
      <p>Exact Name on Licence: {item.exactNameOnLicence}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Address History</h2>
      <p>
        Have you lived at your Residential Address for 5 years or more:
        {item.residentialAddressFor5YearsOrMore}
      </p>
      <p>Current When did you start living here: {item.startLivingHere}</p>
      <p>Current Address: {item.currentAddress}</p>
      <p>Current Address Line 2: {item.currentAddressLine2}</p>
      <p>Current City: {item.currentCity}</p>
      <p>
        Current State/Province/Region: {item.currentStateProvinceRegion}
      </p>
      <p>Current Zip/Postal Code: {item.currentZipPostalCode}</p>
      <p>Current Country: {item.currentCountry}</p>
      <h3 className="text-lg font-semibold">Mailing Address:</h3>
      <p>Address Line 1: {item.mailingAddressLine1}</p>
      <p>Address Line 2: {item.mailingAddressLine2}</p>
      <p>City: {item.mailingAddressCity}</p>
      <p>State/Province: {item.mailingAddressStateProvince}</p>
      <p>ZIP / Postal: {item.mailingAddressZipPostal}</p>
      <p>Country: {item.mailingAddressCountry}</p>

      <br />
      <h2 className="text-xl font-bold my-1">5 Year Address History</h2>
      <h3 className="text-lg font-semibold">
        Address 2 - when Did you start living here: {item.address2monthYear}
      </h3>
      <h3 className="text-lg font-semibold">End Date: {item.address2monthYearEndDate}</h3>
      <h3 className="text-lg font-semibold">Five Year History Address 2</h3>
      <p>Address Line 1: {item.address2addressLine1}</p>
      <p>Address Line 2: {item.address2addressLine2}</p>
      <p>City: {item.address2City}</p>
      <p>State/Province: {item.address2StateProvince}</p>
      <p>ZIP / Postal: {item.address2ZipPostal}</p>
      <p>Country: {item.addressLine2Country}</p>

      <br />
      <h3 className="text-lg font-semibold">
        Address 3 - when Did you start living here: {item.address3monthYear}
      </h3>
      <h3 className="text-lg font-semibold">End Date: {item.address3monthYearEndDate}</h3>
      <h3 className="text-lg font-semibold">Five Year History Address 3</h3>
      <p>Address Line 1: {item.address3addressLine1}</p>
      <p>Address Line 2: {item.address3addressLine2}</p>
      <p>City: {item.address3City}</p>
      <p>State/Province: {item.address3StateProvince}</p>
      <p>ZIP / Postal: {item.address3ZipPostal}</p>
      <p>Country: {item.addressLine3Country}</p>

      <br />
      <h3 className="text-lg font-semibold">
        Address 4 - when Did you start living here: {item.address4monthYear}
      </h3>
      <h3 className="text-lg font-semibold">End Date: {item.address4monthYearEndDate}</h3>
      <h3 className="text-lg font-semibold">Five Year History Address 4</h3>
      <p>Address Line 1: {item.address4addressLine1}</p>
      <p>Address Line 2: {item.address4addressLine2}</p>
      <p>City: {item.address4City}</p>
      <p>State/Province: {item.address4StateProvince}</p>
      <p>ZIP / Postal: {item.address4ZipPostal}</p>
      <p>Country: {item.addressLine4Country}</p>

      <br />
      <h2 className="text-xl font-bold my-1">US Contact Address</h2>
      <p>
        Since when have you used this contact address:
        {item.uSContactAddressSinceWhen}
      </p>
      <h3 className="text-lg font-semibold">US Contact Name</h3>
      <p>First Name: {item.uSContactFirstName}</p>
      <p>Last Name: {item.uSContactLastName}</p>
      <p>US Contact Phone Number: {item.uSContactPhoneNumber}</p>
      <h3 className="text-lg font-semibold">Contact Address</h3>
      <p>Address Line 1: {item.usContactAddressLine1}</p>
      <p>Address Line 2: {item.usContactAddressLine2}</p>
      <p>City: {item.usContactAddressCity}</p>
      <p>State/Province: {item.usContactAddressStateProvince}</p>
      <p>ZIP / Postal: {item.usContactAddressZipPostal}</p>
      <p>Country: {item.usContactAddressCountry}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Information About Your Current Work</h2>
      <p>
        Has your employment status been the same for 5 years or more:
        {item.employmentFor5YearsOrMore}
      </p>
      <p>From: {item.employmentDate}</p>
      <p>Employment Status: {item.employmentStatus}</p>
      <p>Occupation: {item.occupation}</p>
      <p>Employer Name: {item.employerName}</p>
      <p>Employer Phone Number: {item.employerPhoneNumber}</p>
      <h3 className="text-lg font-semibold">Employer Address</h3>
      <p>Address Line 1: {item.employerAddressLine1}</p>
      <p>Address Line 2: {item.employerAddressLine2}</p>
      <p>City: {item.employerAddressCity}</p>
      <p>State/Province: {item.employerAddressStateProvince}</p>
      <p>ZIP / Postal: {item.employerAddressZipPostal}</p>
      <p>Country: {item.employerAddressCountry}</p>

      <h2 className="text-xl font-bold my-1">Employment Continued</h2>
      <p>Employer 2 From: {item.employer2monthYear}</p>
      <p>End Date: {item.employer2monthYearEndDate}</p>
      <p>Employment Status 2: {item.employmentStatus2}</p>
      <p>Employer 2 Occupation: {item.employer2Occupation}</p>
      <p>Employer 2 Name: {item.employerName2}</p>
      <p>Employer 2 Phone Number: {item.employer2PhoneNumber}</p>
      <h3 className="text-lg font-semibold">Employer 2 Address</h3>
      <p>Address Line 1: {item.employer2addressLine1}</p>
      <p>Address Line 2: {item.employer2addressLine2}</p>
      <p>City: {item.employer2City}</p>
      <p>State/Province: {item.employer2StateProvince}</p>
      <p>ZIP / Postal: {item.employer2ZipPostal}</p>
      <p>Country: {item.employer2Country}</p>

      <br />

      <p>Employer 3 From: {item.employer3monthYear}</p>
      <p>End Date: {item.employer3monthYearEndDate}</p>
      <p>Employment Status 3: {item.employmentStatus3}</p>
      <p>Employer 3 Occupation: {item.employer3Occupation}</p>
      <p>Employer 3 Name: {item.employerName3}</p>
      <p>Employer 3 Phone Number: {item.employer3PhoneNumber}</p>
      <h3 className="text-lg font-semibold">Employer 3 Address</h3>
      <p>Address Line 1: {item.employer3addressLine1}</p>
      <p>Address Line 2: {item.employer3addressLine2}</p>
      <p>City: {item.employer3City}</p>
      <p>State/Province: {item.employer3StateProvince}</p>
      <p>ZIP / Postal: {item.employer3ZipPostal}</p>
      <p>Country: {item.employer3Country}</p>

      <br />

      <p>Employer 4 From: {item.employer4monthYear}</p>
      <p>End Date: {item.employer4monthYearEndDate}</p>
      <p>Employment Status 4: {item.employmentStatus4}</p>
      <p>Employer 4 Occupation: {item.employer4Occupation}</p>
      <p>Employer 4 Name: {item.employerName4}</p>
      <p>Employer 4 Phone Number: {item.employer4PhoneNumber}</p>
      <h3 className="text-lg font-semibold">Employer 4 Address</h3>
      <p>Address Line 1: {item.employer4addressLine1}</p>
      <p>Address Line 2: {item.employer4addressLine2}</p>
      <p>City: {item.employer4City}</p>
      <p>State/Province: {item.employer4StateProvince}</p>
      <p>ZIP / Postal: {item.employer4ZipPostal}</p>
      <p>Country: {item.employer4Country}</p>



      <br />
      <h2 className="text-xl font-bold my-1">RFC / CURP Details <span className=" text-red-500">(Only for Sentri Form )</span></h2>
      <p>RFC (Registro Federal de Contribuyentes): {item.RFC}</p>
      <p>Check if this RFC is owned by you: {item.RFCIsOwned}</p>
      <p>CURP: {item.CURP}</p>


      <br />
      <h2 className="text-xl font-bold my-1">Vehicle Information <span className=" text-red-500">(Only for Sentri Form )</span></h2>
      <p>Do you plan to drive across the border from Mexico to the United States?: {item.driveAcrossBorderMexicoToUnitedStates}</p>
      <p>Is the vehicle already actively registered on your account or on another Trusted Traveler Program member&apos;s account?: {item.vehicleAlreadyActivelyRegistered}</p>
      <p>Make: {item.Make}</p>
      <p>Model: {item.Model}</p>
      <p>Year of Manufacture: {item.yearOfManufacture}</p>
      <p>VIN Number: {item.VINNumber}</p>
      <p>Licence Plate Number: {item.licencePlateNumber}</p>
      <p>Vehicle Country of Issue: {item.vehicleCountryOfIssue}</p>
      <p>Vehicle State / Province of Issue: {item.vehicleStateProvinceOfIssue}</p>
      <p>Is this a Govenment Issue Plate: {item.isThisGovenmentIssuePlate}</p>
      <p>Is a Vehicle Inspection Required: {item.isVehicleInspectionRequired}</p>


      <br />
      <h2 className="text-xl font-bold my-1">Vehicle Owner <span className=" text-red-500">(Only for Sentri Form )</span></h2>
      <p>Vehicle Owner Gender: {item.vehicleOwnerGender}</p>
      <p> Owner: {item.owner}</p>
      <p>Vehicle Owner Phone Number: {item.vehicleOwnerPhoneNumber}</p>
      <p>Vehicle Owner Address: {item.vehicleOwnerAddress}</p>
      <p>Address Line 2: {item.vehicleOwnerAddress2}</p>
      <p>City: {item.vehicleOwnerAddressCity}</p>
      <p>State/Province: {item.vehicleOwnerAddressStateProvince}</p>
      <p>ZIP / Postal: {item.vehicleOwnerAddressZIPPostal}</p>
      <p> Vehicle Owner Date of Birth: {item.vehicleOwnerDateOfBirth}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Travel History</h2>
      <p>Countries: {item.travelHistory}</p>

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
      <p>{item.additionalInformation1question}</p>
      <p>
        2. Have you ever received a waiver of inadmissibility to the USA from a
        US government agency?
      </p>
      <p>{item.additionalInformation2question}</p>
      <p>
        3. Have you ever been approved by Citizenship and Immigration Canada for
        rehabilitation because of past criminal activity?
      </p>
      <p>{item.additionalInformation3question}</p>
      <p>
        4. Have you ever been found in violation of Customs or Immigration laws
        or other federal import laws?
      </p>
      <p>{item.additionalInformation4question}</p>

      <br />
      <h2>Certification Disclaimer</h2>
      <p>
        I certify and agree that I have understood the Certification Disclaimer
      </p>
      <p>{item.agreeCertificationDisclaimer}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Card details for payment of Government fee</h2>
      <p>Card Number (last four digits): {item.cardNumber}</p>
      <p>Expiry Date: {item.expiryDate}</p>
      {/* <p>CVV: {item.cvv}</p> */}
      <p>Card Type {item.cardType}</p>

      <br />
      <h2 className="text-xl font-bold my-1">Card Holder Name & Address Details</h2>
      <p>Card Holders First Name: {item.cardHoldersFirstName}</p>
      <p>Card Holders Last Name: {item.cardHoldersLastName}</p>
      <p>Card Holders Address: {item.cardHoldersAddress}</p>
      <p>Card Holders Address Line 2: {item.cardHoldersAddressLine2}</p>
      <p>Card Holders City: {item.cardHoldersCity}</p>
      <p>
        Card Holders State/Province/Region:
        {item.cardHoldersStateProvinceRegion}
      </p>
      <p>Card Holders Zip/Postal Code: {item.cardHoldersZipPostalCode}</p>
      <p>Card Holders Country: {item.cardHoldersCountry}</p>
    </div>
  );
}

export default UsaItem;
