import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Tab2() {
  return (
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Alabama-2" title="Alabama-2">
        <table
            class="qa usa-table usa-table--striped text-left"
            summary="Anchorage Ted Stevens International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Huntsville International Airport (HSV)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  1000 Glenn Hearn Blvd SW
                  <br />
                  Huntsville, AL 35824
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>9:30 a.m. - 3:00 p.m., Tuesday - Thursday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(256) 772-2756</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            class="qa usa-table usa-table--striped text-left"
            summary="Anchorage Ted Stevens International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Mobile Regional Airport (MOB)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  8400 Airport Blvd
                  <br />
                  Mobile, AL 36608
                  <br />
                  Main Terminal
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. - 3:00 p.m., Tuesday, Wednesday and Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(251) 378-7652</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Alaska" title="Alaska">
        <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Anchorage Ted Stevens International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>
                    Anchorage Ted Stevens International Airport (ANC)
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4600 Postmark Drive
                  <br />
                  RM NA 207
                  <br />
                  Anchorage, AK 99502
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 a.m. - 1:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(907) 271-6309 ext. 4</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Arizona" title="Arizona">
        <table border="1" cellpadding="1" cellspacing="1">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Douglas, Arizona Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />1 Pan American Avenue&nbsp;
                  <br />
                  Douglas, AZ 85607
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00AM - 4:00PM, Monday - Saturday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (520) 364-8486 ext.327
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Nogales, Arizona Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  200 N. Mariposa Rd, Bldg B700
                  <br />
                  Nogales, AZ
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00AM - 4:00PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (520) 397-2184
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Phoenix Sky Harbor Airport (PHX) Address, Hours of Operation, and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Phoenix Sky Harbor Airport (PHX)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  3400 East Sky Harbor Blvd
                  <br />
                  Phoenix, AZ 85034
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>7:00 a.m. to 3:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (602) 392-4440 ext. 449
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>San Luis, Arizona Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  1375 South Avenue E.
                  <br />
                  San Luis, AZ
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00AM - 4:00PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (928) 722-6801
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Tucson International Airport (TUS) Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Tucson International Airport (TUS)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  7081 S. Plumer&nbsp;Ave&nbsp;
                  <br />
                  Tucson, AZ 85756
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 a.m. to 4:00 p.m., Sunday - Saturday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (520) 799-8348
                  </span>{" "}
                  ext. 5
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
