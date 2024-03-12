import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Tab3() {
  return (
    <div>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Arizona"
          title="Arizona"
          className="text-left"
        >
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
                <td>9:00 AM - 4:00 PM, Monday - Saturday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(520) 364-8486 ext&nbsp;327</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Nogales, Arizona Enrollment Center</strong>
                </th>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office 200 N. Mariposa
                  Road, Building B700 Nogales, AZ
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (520) 397-2184
                  </span>
                </td>
              </tr>
            </thead>
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
                  San Luis, AZ 85349
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(928) 722-6801</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <b>Phoenix, Arizona Enrollment Center</b>
                </th>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office 3400 East Sky Harbor
                  Boulevard Phoenix, AZ 85034
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>7:00 a.m. - 3:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(602) 392-4440 Ext. 449</td>
              </tr>
            </thead>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Tucson, Arizona Enrollment Center</strong>
                </th>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office 7081 S. Plumer Ave
                  Tucson, AZ 85756
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 a.m. - 4:00 p.m., Daily</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(520) 799-8348 Ext. 5</td>
              </tr>
            </thead>
          </table>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="California"
          title="California"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Calexico, California Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1699 East Carr Road
                  <br />
                  Calexico, CA 92231
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(760) 768-2473</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>(760) 768-2406</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Otay Mesa, California Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  9725 Via De La Amistad
                  <br />
                  San Diego, CA 92154
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>By Appointment Only</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (619) 690-7600
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="New Mexico"
          title="New Mexico"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Albuquerque International Sunport Airport (ABQ)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  2200 Sunport Blvd SE
                  <br />
                  Albuquerque, NM 87106
                  <br />
                  Located on Departure Level West End
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00AM - 4:30PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(505) 346-6994</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Texas"
          title="Texas"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2">Brownsville, Texas Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  3300 South Expressway 77 83
                  <br />
                  Veterans International Bridge - Los Tomates
                  <br />
                  Brownsville, TX 78520
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(956) 983-5668</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2">Del Rio, Texas Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  3140 Spur 239
                  <br />
                  Del Rio, Texas 78840
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  6:00 a.m. - 10:00 a.m., Monday - Thursday
                  <br />
                  6:00 a.m. - 12:00 a.m., Friday, Saturday &amp; Sunday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(830) 306-4309 or 4497 or 4334</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2">El Paso, Texas Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  797 S. Zaragoza Road
                  <br />
                  Building A<br />
                  El Paso, TX 79907
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>6:00 a.m. - 2:00 p.m., Monday - Saturday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(915) 872-3472</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2">Hidalgo, Texas Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  5911 South Steward Road
                  <br />
                  Mission, TX 78572
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(956) 205-7929</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2">Laredo, Texas Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  0 Lincoln Juarez Bridge
                  <br />
                  Building 2<br />
                  Laredo, TX 78040
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00 a.m. - 4:00 p.m., Monday, Wednesday, Friday
                  <br />
                  8:00 a.m. - 6:00 p.m., Tuesday, Thursday
                  <br />
                  12:00 a.m. - 4:00 p.m. - Saturday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(956) 523-7399</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
