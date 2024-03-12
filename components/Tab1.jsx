import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";


export default function Tab1() {
  return (
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Alabama" title="Alabama">
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
            class="qa text-left"
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

        <AccordionItem
          key="3"
          aria-label="Arizona"
          title="Arizona"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            className="text-left"
          >
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
                  </span>
                  ext. 5
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem key="4" aria-label="Arkansas" title="Arkansas">
          <p className="text-tiny">
            There are currently no Global Entry enrollment centers in Arkansas.
          </p>
        </AccordionItem>

        <AccordionItem
          key="5"
          aria-label="California"
          title="California"
          className="text-left"
        >
          <table class="usa-table usa-table--striped text-left">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Calexico, California Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1699 East Carr Road
                  <br />
                  PO Box 632
                  <br />
                  Calexico, CA
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td> 6:00 a.m. - 2:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  {" "}
                  (760) 768-2406
                  <br />
                  (760) 768-2473
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Calexico, California Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1699 East Carr Road
                  <br />
                  PO Box 632
                  <br />
                  Calexico, CA
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>6:00 a.m. - 2:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  (760) 768-2406
                  <br />
                  (760) 768-2473
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Otay Mesa, California Enrollment Center
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
                <td>(619) 690-7600</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  San Francisco International Airport (SFO)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  International Arrival Level
                  <br />
                  San Francisco, CA 94128
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  7:30 a.m. - 9:30 p.m., Monday- Friday (excluding Federal
                  holidays)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(650) 877-4006</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  San Diego International Airport (SAN)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  3835 North Harbor Drive
                  <br />
                  Terminal 2 West
                  <br />
                  San Diego, CA 92101
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>By Appointment Only</td>
              </tr>
              <tr>
                <td s>Contact Information:</td>
                <td>(619) 491-2600 or (619) 690-7600</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="6"
          aria-label="Colorado"
          title="Colorado"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Denver International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Denver International Airport (DEN)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  8400 Pena Blvd
                  <br />
                  Denver, CO 80249
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  10:00 a.m. to 6:00 p.m., Monday - Friday (Closed Federal
                  Holidays)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (303) 342-7400
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="7"
          aria-label="Connecticut"
          title="Connecticut"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Port of Hartford Enrollment Center Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Bradley International Airport (BDL)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  International Arrivals Building&nbsp;
                  <br />
                  Schoephoester Road
                  <br />
                  ​​​​Windsor Locks, CT 06096&nbsp;
                  <br />
                  Located past Sheraton Hotel; at traffic light bear right and
                  park in front of the building and enter lobby.
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>7:00 a.m. to 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(860) 292-1764</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="8"
          aria-label="District of Columbia"
          title="District of Columbia"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Washington DC Enrollment Center Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Washington, DC Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Ronald Reagan Building
                  <br />
                  1300 Pennsylvania Avenue NW
                  <br />
                  Washington, DC 20229
                </td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>7:00 a.m. - 7:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (202) 325-4002
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="9"
          aria-label="Florida"
          title="Florida"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
            summary="Ft. Lauderdale/Hollywood International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Ft. Lauderdale/Hollywood International Airport (FLL)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1800 Eller Drive
                  <br />
                  Suite 104
                  <br />
                  Ft. Lauderdale, FL 33316
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  9:00 a.m. to 3:00 p.m. Monday - Friday, by appointment only,
                  Closed Weekends
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(954) 761-2029</td>
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
                <th colspan="2" scope="col">
                  Miami International Airport
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4200 NW 21st Street
                  <br />
                  Concourse J - 2nd level, Passenger Hallway
                  <br />
                  Miami, FL 33122
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  8:00 a.m.&nbsp;- 8:15 p.m. Monday - Saturday, Closed on
                  Sundays
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(786) 369-3710</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
            summary="Orlando International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Orlando International Airport (MCO)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  10300 Jeff Fuqua Blvd., South, Orlando, FL 32827
                  <br />
                  Terminal C, Level 1 (adjacent to the Orlando Police Department
                  Office)
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  8:00 a.m.&nbsp;- 3:00 p.m.&nbsp;Monday, Wednesday, Friday
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  8:00 a.m. - 3:00 p.m. Tuesday, Thursday (Zoom/Virtual
                  -Renewals Only)
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>8:00 a.m. - 3:00 p.m. Saturday, Sunday (when scheduled)</td>
              </tr>
              <tr>
                <td rowspan="1">Contact Information:</td>
                <td>(407) 825-4366</td>
              </tr>
            </tbody>
          </table>

          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Orlando-Sanford International  Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Orlando-Sanford International Airport (SFB)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1100 Red Cleveland Blvd
                  <br />
                  Sanford, FL 32773
                </td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>10:00 a.m. - 6:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(407) 585-6400 (option 1)</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
            summary="Tampa International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Tampa International Airport (TPA)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4100 George J Bean Outbound Parkway
                  <br />
                  Tampa, FL 33607
                  <br />
                  (Located on 1st floor baggage claim level - Red)
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>7:00 a.m. - 3:00&nbsp;p.m.&nbsp;(Closed Weekends)</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  (813) 676-4929,{" "}
                  <a
                    href="mailto:TampaTTPinformation@cbp.dhs.gov"
                    class="survey-processed"
                  >
                    TampaTTPinformation@cbp.dhs.gov&nbsp;
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--stripe"
            summary="Treasure Coast International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Treasure Coast International Airport (FPR)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  2990 Curtis King Blvd
                  <br />
                  Room 122
                  <br />
                  Fort Pierce, Florida 34946
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  1:00 p.m. - 5:00 p.m. By Appointment Only: Monday, Wednesday,
                  and Thursday (Every Other Week)
                  <br />
                  1:00 p.m. - 5:00 p.m. By Appointment Only: Tuesday, Wednesday,
                  and Thursday (Every Other Week)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(772) 461-1733 ext. 1</td>
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
                <th colspan="2" scope="col">
                  West Palm Beach, Florida Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1 East 11th Street, 3rd Floor
                  <br />
                  Riviera Beach, FL 33404
                </td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>
                  12:00 p.m. - 4:00 p.m. (Daily), By Appointment Only
                  <br />
                  3:00 p.m. - 4:00 p.m. (Walk-ins) Daily, Excluding Federal
                  Holidays
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(561) 844-1703 ext. 249</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Port Miami
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Terminal D &nbsp;
                  <br />
                  1435 N Cruise Blvd &nbsp;
                  <br />
                  Miami, FL 33132 &nbsp;
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 a.m. to 6:00 p.m., Tuesday - Thursday&nbsp;</td>
              </tr>
              <tr>
                <td>Contact Information</td>
                <td>
                  <p
                    paraeid="{09de2049-fc89-4526-8460-67366643044c}{141}"
                    paraid="1636550970"
                  >
                    (305) 536-4758 &nbsp;
                    <br />
                    <a
                      href="mailto:MSE-GLOBAL-ENTRY@cbp.dhs.gov"
                      class="survey-processed"
                    >
                      MSE-GLOBAL-ENTRY@cbp.dhs.gov
                    </a>
                    &nbsp;
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="10"
          aria-label="Georgia"
          title="Georgia"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Atlanta Hartsfield-Jackson International Airport
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                 Address:
                </th>
                <td>
                
                    2600&nbsp;Maynard H. Jackson Blvd
                    <br />
                    Atlanta, GA 30320&nbsp;
              
                </td>
              </tr>
              <tr>
                <th scope="row">
                Hours of Operation:
                </th>
                <td>
                 6:00AM - 4:00PM&nbsp;
                </td>
              </tr>
              <tr>
                <th scope="row">
                 Contact Information:
                </th>
                <td>
               (404) 765-2302
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="11"
          aria-label="Guam"
          title="Guam"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Guam International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Guam International Airport (GUM)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  355 Chalan PasaHeru
                  <br />
                  Suite B 224-B
                  <br />
                  Tamuning, Guam
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  11:00 a.m. to 2:30 p.m.,&nbsp;Seven Days a Week (Closed
                  Federal Holidays)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (671) 642-7611
                  </span>{" "}
                  ext. 258
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="12"
          aria-label="Hawaii"
          title="Hawaii"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Honolulu International Airport (HNL)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  300 Rodgers Blvd
                  <br />
                  Honolulu, HI 96819
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>6:00AM - 2:45PM, Daily (Closed Federal Holidays)</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (808) 237-4601
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="13"
          aria-label="Idaho"
          title="Idaho"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1">
            <tbody>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Boise Enrollment Center</strong>
                </th>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  4655 S Enterprise Street
                  <br />
                  Boise, ID 83705
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>12:00 p.m. - 4:00 p.m., Monday and Wednesday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(208) 972-8730</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="14"
          aria-label="Illinois"
          title="Illinois"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Chicago Illinois Enrollment Center Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Chicago, Illinois Enrollment Office</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  610 South Canal Street
                  <br />
                  Chicago, IL 60607
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:15 a.m. to 3:30 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(312) 542-5700 ext. 4</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Chicago O&#39;Hare International Airport Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Chicago O&#39;Hare International Airport</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  10000 W. Bessie Coleman Drive
                  <br />
                  Terminal 5<br />
                  Chicago, IL 60666
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:15 a.m. to 3:30 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(773) 686-7066</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="15"
          aria-label="Indiana"
          title="Indiana"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  South Bend International Airport (SBN)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  4501 Progress Drive
                  <br />
                  South Bend, IN 46628
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operations:</th>
                <td>
                  11:00 a.m. - 3:00 p.m., Tuesday and Wednesday, by appointment
                  only
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(574) -232-9650</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="16"
          aria-label="Iowa"
          title="Iowa"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="usa-table">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Des Moines, Iowa Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Des Moines International Airport
                  <br />
                  6100 Fleur Drive,&nbsp; Des Moines, IA&nbsp; 50321
                </td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>(515) 256-5822</td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>Tuesday, Wednesday, Thursday 12:00 PM - 4:00 PM</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="17"
          aria-label="Kansas"
          title="Kansas"
          className="text-left"
        >
          
            There are currently no Global Entry enrollment centers in Kansas.
         
        </AccordionItem>

        <AccordionItem
          key="18"
          aria-label="Kentucky"
          title="Kentucky"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <strong>
                  Cincinnati/Northern Kentucky International Airport (CVG)
                </strong>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4243 Olympic Blvd, Suite 210
                  <br />
                  Erlanger, KY 41018
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:30 AM - 2:30 PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (859) 282-6308
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="19"
          aria-label="Louisiana"
          title="Louisiana"
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
                  <strong>New Orleans Enrollment Center (MSY)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1 Terminal Drive
                  <br />
                  Kenner, LA 70062
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  8:30AM - 4:00PM, Monday - Friday (Closed on Saturday and
                  Sunday)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (504) 303-7663 EXT 1
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="20"
          aria-label="Maine"
          title="Maine"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Calais Maine Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Calais, Maine Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  3 Customs Street
                  <br />
                  Calais, Maine 04619
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. to 4:00 p.m., Tuesday - Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(207) 454-3621 ext. 2015</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="21"
          aria-label="Maryland"
          title="Maryland"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Baltimore/Washington International Thurgood Marshall Airport
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  International E Pier - Arrivals
                  <br />
                  Lower Level Door 18, Room E1709
                  <br />
                  Linthicum, MD 21240
                  <br />
                  (Down the hall and to the right; DHS Seal on the door)
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  1:00 p.m. - 8:30 p.m., Monday - Friday, by appointment only
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(410) 865-2100 ext. 0</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="22"
          aria-label="Massachusetts"
          title="Massachusetts"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Boston-Logan International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Boston-Logan International Airport (BOS)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Terminal E - Arrivals
                  <br />
                  Boston, MA 02128
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>7 a.m. - 3 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(617) 568-1810 Option 1</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="23"
          aria-label="Michigan"
          title="Michigan"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Detroit Metropolitan Airport (DTW)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Evans Terminal
                  <br />
                  600 Rogell Drive
                  <br />
                  Romulus, MI 48226
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00AM - 4:00PM: Monday - Wednesday and Friday
                  <br />
                  8:00AM - 12:00PM: Thursday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(734) 941-7668</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Detroit, Michigan Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  2810 West Fort Street
                  <br />
                  Building B<br />
                  Detroit, MI
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00AM - 4:00PM: Monday and Saturday
                  <br />
                  8:00AM - 8:00PM: Tuesday - Friday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(313) 964-7868</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Port Huron, Michigan Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  2321 Pine Grove Avenue
                  <br />
                  Port Huron, MI
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>Temporarily Closed</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(810) 985-9541 ext. 8830</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Sault Saint Marie, Michigan Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  900 International Bridge Plaza
                  <br />
                  Sault Ste. Marie, MI
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  12:00PM - 8:00PM: Monday - Wednesday
                  <br />
                  8:00AM - 4:00PM: Thursday - Friday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(906) 632-8822 ext. 302</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="24"
          aria-label="Minnesota"
          title="Minnesota"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Grand Portage, Minnesota Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  9403 E. Highway 61
                  <br />
                  Grand Portage, MN
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  11:00 a.m. to 7:00 p.m., Tuesday - Friday. Observed Federal
                  Holidays: Closed
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(218) 475-2244</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  International Falls Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  312 Highway 11 East
                  <br />
                  International Falls, MN 56649
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:30 a.m. to 8:00 p.m., Daily</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(218) 283-2541</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table
            class="usa-table usa-table--striped"
            summary="Minneapolis/St. Paul International Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Minneapolis/St. Paul International Airport (MSP)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  4300 Glumack Drive Terminal 1<br />
                  (Baggage Claim Level by Carousel 11) Minneapolis, MN 55111
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  11:00 a.m. to 7:00 p.m., Tuesday - Friday
                  <br />
                  CLOSED on Federal Holidays
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(612) 727-3415 ext. 4</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Warroad, Minnesota Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  41059 State Highway 313, North
                  <br />
                  Warroad, MN
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00AM - 4:00PM, Monday - Friday (except Thursday)
                  <br />
                  8:00AM - 8:00PM Thursday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(218) 386-2796</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>
        </AccordionItem>

        <AccordionItem
          key="25"
          aria-label="Mississippi"
          title="Mississippi"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
            summary="Gulfport-Biloxi International Airport (GPT) Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Gulfport-Biloxi International Airport (GPT)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Room 216
                  <br />
                  14035 Airport Road
                  <br />
                  Gulfport, MS 39503
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:30 a.m. - 3:30 p.m., Tuesday - Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(228) 867-2958</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="26"
          aria-label="Missouri"
          title="Missouri"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table"
            summary="Kansas City Enrollment Center Address, Hours and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  City Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Kansas City International Airport
                  <br />
                  1 Kansas City Blvd.
                  <br />
                  Suite 30
                  <br />
                  Kansas City, Missouri 64153
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  12:00&nbsp;p.m. - 4:00&nbsp;p.m.&nbsp;Monday,
                  Tuesday,&nbsp;Thursday, Friday
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(816) 780-6170</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
            summary="St. Louis Enrollment Center Address, Hours and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  St. Louis Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  <br />
                  4349 Woodson Road #201
                  <br />
                  St. Louis, Missouri 63134
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00&nbsp;a.m. - 5:00&nbsp;p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(314) 429-8141</td>
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
                <th colspan="2" scope="col">
                  Springfield-Branson National Airport Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:&nbsp;</td>
                <td>2300 N Airport Blvd, Springfield, MO 65802</td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>11:00 a.m. - 3:00 p.m., Tuesday &amp; Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(417) 868-0547</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="27"
          aria-label="Montana"
          title="Montana"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Sweetgrass Montana Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Sweetgrass, Montana Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  39825 Interstate 15 North
                  <br />
                  Sweetgrass, MT
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. to 4:00 p.m., Tuesday and Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (406) 335-9406
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="28"
          aria-label="Nebraska"
          title="Nebraska"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2">Omaha Enrollment Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  3737A Orville Plaza
                  <br />
                  Omaha, NE 68110
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  12:00&nbsp;p.m. - 4:00&nbsp;p.m.&nbsp;Tuesday -&nbsp;Thursday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(402) 341-0240</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="29"
          aria-label="Nevada"
          title="Nevada"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Harry Reid International Airport (LAS)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <strong>Address:</strong>
                </th>
                <td>
                  5757 Wayne Newton Blvd
                  <br />
                  Terminal 3<br />
                  Las Vegas, NV 89119
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Hours of Operation:</strong>
                </th>
                <td>
                  8:00AM - 4:00PM,
                  <br />
                  Monday - Friday, by appointment
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Contact Information:</strong>
                </th>
                <td>(702) 730-6072</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="30"
          aria-label="New Hampshire"
          title="New Hampshire"
          className="text-left"
        >
       
            There are currently no Global Entry enrollment centers in New
            Hampshire.
        
        </AccordionItem>

        <AccordionItem
          key="31"
          aria-label="New Jersey"
          title="New Jersey"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Newark Liberty International Airport (EWR)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Terminal B<br />
                  Newark, NJ 07114
                  <br />
                  (Located on Level 1, behind domestic baggage carousel #1)
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  7:30 a.m. - 11:30 p.m. Monday - Sunday
                  <br />
                  All interviews are by appointment only - no walk-in
                  interviews.
                  <br />
                  (Closed on all Federal Holidays)
                  <br />
                  <br />
                  All Passport updates and Name changes are done Monday-Friday
                  between 10am-2pm. No appointments are needed for Passport
                  updates and name changes only - all other interviews require
                  appointments. NO passport updates or name changes are
                  conducted on Federal Holidays. Name changes must bring their
                  new Passport, New Driver&#39;s License and proof of name change
                  paperwork.
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>
                  (973) 565-8000 ext. 8135 and/or{" "}
                  <a
                    href="mailto:ewrglobalentry@cbp.dhs.gov"
                    class="survey-processed"
                  >
                    ewrglobalentry@cbp.dhs.gov
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="32"
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
          key="33"
          aria-label="New York"
          title="New York"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Bowling Green (U.S. Customs House)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  1 Bowling Green
                  <br />
                  New York, NY 10004
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00 a.m. - 4:00 p.m., Monday - Friday
                  <br />
                  Closed on all Federal Holidays
                  <br />
                  By Appointment Only
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(212) 344-2296</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table
            class="usa-table usa-table--striped"
            summary="Buffalo-Fort Erie Ontario Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Niagara Falls, New York Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  2250 Whirlpool Street
                  <br />
                  Niagara Falls, NY 14305
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  8:00 a.m. - 4:00 p.m., Monday and Saturday
                  <br />
                  8:00 a.m. - 8:00 p.m., Tuesday - Friday
                  <br />
                  Closed Sunday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(716) 282-4663</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table
            class="usa-table usa-table--striped"
            summary="Champlain, New York Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Champlain, New York Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  237 West Service Road
                  <br />
                  Champlain, NY
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. to 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(518) 298-7950</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  New York John F. Kennedy International Airport (JFK)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Terminal Four, Main Lobby (next to baggage claim)
                  <br />
                  Jamaica, NY 11430
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  6:30 a.m. - 8:30 p.m., Monday-Friday (Closed Federal Holidays)
                  <br />
                  7:00 a.m. - 8:00 p.m., Saturday-Sunday (Closed Federal
                  Holidays)
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(718) 553-1237</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>
        </AccordionItem>

        <AccordionItem
          key="34"
          aria-label="North Carolina"
          title="North Carolina"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Charlotte-Douglas International Airport (CLT)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  5501 Josh Birmingham Parkway
                  <br />
                  Charlotte, NC 28208
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>
                  1:00 p.m. - 8:00 p.m., Monday - Friday, Closed on Federal
                  Holidays
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>General Global Entry Inquiries: (877) 227-5511</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="35"
          aria-label="North Dakota"
          title="North Dakota"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Pembina, North Dakota Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  10980 Interstate 29 N<br />
                  Suite 2<br />
                  Pembina, ND
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00AM - 4:00PM, Tuesday, Wednesday, Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (701) 825-5878
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="36"
          aria-label="Ohio"
          title="Ohio"
          className="text-left"
        >
          <table>
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Cincinnati/Northern Kentucky International Airport (CVG)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4243 Olympic Blvd, Suite 210
                  <br />
                  Erlanger, KY 41018
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  Monday 10:00 AM – 2:00 PM Tuesday - Thursday 9:00 AM - 3:00 PM
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(859) 282-6308</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Cleveland, Ohio Enrollment Center
                </th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Port Office Building
                  <br />
                  6747 Engle Road
                  <br />
                  Middleburg Heights, OH
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>Tuesday - Thursday 10:00 AM - 3:00 PM</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (216) 267-3600 ext. 1
                  </span>
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Dayton, Ohio Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Dayton, Ohio Enrollment Center
                </th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Port Office Building
                  <br />
                  3800 Wright Drive
                  <br />
                  Vandalia, Ohio 45377
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>Tuesday - Thursday 9:00 AM - 3:00 PM</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>(937) 890-7633</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Port Clinton, Ohio Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  709 S.E. Catawba Road
                  <br />
                  Port Clinton, OH 43452
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>Monday - Saturday 10:00 AM - 6:00 PM</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (419) 732-4446
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="37"
          aria-label="Oklahoma"
          title="Oklahoma"
          className="text-left"
        >
          
            There are currently no Global Entry enrollment centers in Oklahoma.
         
        </AccordionItem>

        <AccordionItem
          key="38"
          aria-label="Oregon"
          title="Oregon"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Portland International Airport (PDX)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  8337 NE Alderwood&nbsp;
                  <br />
                  Portland, OR 97220
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  9:00AM - 2:45PM, Monday - Wednesday, Friday.&nbsp; Closed
                  Thursday&nbsp;and Weekends
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (503) 326-7063
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="39"
          aria-label="Pennsylvania"
          title="Pennsylvania"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Philadelphia International Airport Address and Hours of Operation"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Philadelphia International Airport (PHL)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Terminal A West
                  <br />
                  3rd Floor
                  <br />
                  Philadelphia, PA 19153
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                
                    1:30 p.m. - 9:00 p.m.,&nbsp; Monday - Thursday by
                    appointment only
                
               
                    1:00 p.m. - 5:00 p.m., Saturday &amp; Sunday by appointment
                    only
                 
                 Closed on Fridays
                </td>
              </tr>
              <tr>
                <td rowspan="1">Contact Information:</td>
                <td>(215) 863-4287</td>
              </tr>
            </tbody>
          </table>

          <br />
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Pittsburgh International Airport Address and Hours of Operation"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Pittsburgh International Airport (PIT)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1000 Airport Boulevard
                  <br />
                  Pittsburgh, PA
                  <br />
                  Main Terminal - Ticketing Level
                </td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>
                  1:30 p.m. - 4:30 p.m., Sunday - Thursday (Closed Friday &amp;
                  Saturday)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(412) 472-0804&nbsp;ext. 2500</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="40"
          aria-label="Puerto Rico"
          title="Puerto Rico"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Jet Aviation San Juan Luis Munoz Marin International Airport Address, Hours of Operation and Contract Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>
                    San Juan
                    <br />
                    Luis Muñoz Marin International Airport (SJU)
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Luis Munoz Marin Internation Airport
                  <br />
                  Terminal B, First Floor
                  <br />
                  U.S. Customs and Border Protection
                  <br />
                  Carolina, Puerto Rico 00983
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 a.m. to 8:00 p.m., Monday - Saturday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (787) 253-7247 /&nbsp;(787) 253-4521
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="41"
          aria-label="Rhode Island"
          title="Rhode Island"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Warwick, Rhode Island Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  300 Jefferson Boulevard
                  <br />
                  Suite 106
                  <br />
                  Warwick, RI 02888
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (401) 732-6701
                  </span>{" "}
                  ext. 2014
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="42"
          aria-label="South Carolina"
          title="South Carolina"
          className="text-left"
        >
       
            There are currently no Global Entry enrollment centers in South
            Carolina.
      
        </AccordionItem>

        <AccordionItem
          key="43"
          aria-label="South Dakota"
          title="South Dakota"
          className="text-left"
        >
       
            There are currently no Global Entry enrollment centers in South
            Dakota.
       
        </AccordionItem>

        <AccordionItem
          key="44"
          aria-label="Tennessee"
          title="Tennessee"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa usa-table usa-table--striped"
            summary="Nashville Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>
                    Memphis International Airport Enrollment Center
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  2491 Winchester Road
                  <br />
                  Suite 230
                  <br />
                  Memphis, TN 38116
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  9:00 a.m. - 1:00 p.m., Monday-Wednesday
                  <br />
                  (Closed Federal Holidays)
                  <br />
                  <strong>Note:</strong> Hours may change seasonally, please
                  check website for hours and appointment availability.
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (901) 922-2594
                    <br />
                    (901) 922-2595
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
            class="qa usa-table usa-table--striped"
            summary="Nashville Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Nashville Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  612 Hangar Lane
                  <br />
                  Suite 116
                  <br />
                  Nashville, TN 37217
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  1:00 p.m. - 4:00 p.m., Monday - Thursday
                  <br />
                  (Closed Federal Holidays)
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (615) 736-5861
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
            class="usa-table usa-table--striped"
            summary="Tri-Cities Enrollment Center"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <div>
                    <strong>Tri-Cities Enrollment Center</strong>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Tri-Cities Airport (Main Terminal)
                  <br />
                  2525 TN-75
                  <br />
                  Blountville, TN 37617
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 a.m. - 1:30 p.m., Tuesday - Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(423) 279-0801</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="45"
          aria-label="Texas"
          title="Texas"
          className="text-left"
        >
          <table
            class="usa-table usa-table--striped"
            summary="Austin-Bergstrom International Airport (AUS) Hours and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">
                  Austin-Bergstrom International Airport (AUS)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  3600 Presidential Blvd
                  <br />
                  Austin, TX 78719
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. - 2:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(512) 530-3056</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="Brownsville, Texas Enrollment Center Hours and Contact Information"
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
                  Brownsville, TX
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m.- 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(956) 983-5668</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="Dallas/Ft. Worth International Airport (DFW) Hours and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">
                  Dallas/Ft. Worth International Airport (DFW)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Terminal D<br />
                  Dallas, TX 75261
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>7:00 a.m.&amp; - 3:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>Primary (972) 456-2307 Alternate (972) 456-2290</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="Dallas/Ft. Worth International Airport (DFW) Hours and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">Del Rio Global Entry Enrollment Center</th>
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
                <td>8:00 a.m. - 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(830) 306-4309 or 4497 or 4334</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="El Paso, Texas Enrollment Center Hours and Contact Information"
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
                  El Paso, TX
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
            class="usa-table usa-table--striped"
            summary="George Bush Intercontinental Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">George Bush Intercontinental Airport (IAH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Terminal E<br />
                  3870 North Terminal Road
                  <br />
                  Houston, TX 77032
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>8:00 a.m. to 4:00 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>
                  (281) 230-4740
                  <br />
                  (281) 230-4742
                  <br />
                  (281) 230-4694
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="George Bush Intercontinental Airport Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">George Bush Intercontinental Airport (IAH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  Terminal E (Requires Boarding Pass)
                  <br />
                  Houston, TX 77032
                </td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>9:00 a.m. to 3:30 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(281) 230-4818</td>
              </tr>
            </tbody>
          </table>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="Hidalgo Texas Enrollment Center Hours and Contact Information"
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
                <td>
                  8:00 a.m. to 8:00 p.m., Monday - Friday
                  <br />
                  8:00 a.m. to 2:00 p.m., Saturday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(956) 205-7929</td>
              </tr>
            </tbody>
          </table>

          <br />

          <div class="usa-table-container">
            <table
              class="usa-table usa-table--striped"
              summary="Laredo Texas Enrollment Center Address, Hours of Operation and Contact Information"
            >
              <thead>
                <tr>
                  <th colspan="2" scope="col">
                    Laredo, Texas Enrollment Center
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Address:</th>
                  <td>
                    Lincoln Juarez Bridge
                    <br />
                    700 Zaragoza Street
                    <br />
                    Building 2<br />
                    Laredo, TX
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hours of Operation:</th>
                  <td>
                    8:00 a.m. to 4:00 p.m., Monday, Wednesday, Friday
                    <br />
                    8:00 a.m. to 6:00 p.m., Tuesday, Thursday
                    <br />
                    12:00 p.m. to 4:00 p.m. - Saturday
                  </td>
                </tr>
                <tr>
                  <th scope="row">Contact Information:</th>
                  <td>(956) 523-7399</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <table
            class="usa-table usa-table--striped"
            summary="San Antonio International Airport (SAT) Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2">San Antonio International Airport (SAT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>
                  9800 Airport Blvd
                  <br />
                  Suite 1101
                  <br />
                  San Antonio, TX 78216
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  9:00 a.m. to 5:00 p.m., Monday - Friday
                  <br />
                  9:00 a.m. to 7:00 p.m., Saturday
                  <br />
                  8:00 a.m. to 7:00 p.m., Sunday
                </td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(210) 829-4277</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="46"
          aria-label="Utah"
          title="Utah"
          className="text-left"
        >
          <table class="usa-table usa-table--striped">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Salt Lake City International Airport (SLC)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <strong>Address:</strong>
                </th>
                <td>
                  3920 West Terminal Drive
                  <br />
                  Salt Lake City, UT 84112
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Hours of Operation:</strong>
                </th>
                <td>3:30 PM - 5:30 PM, Daily</td>
              </tr>
              <tr>
                <th scope="row">
                  <strong>Contact Information:</strong>
                </th>
                <td>(801) 524-3445</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="47"
          aria-label="Vermont"
          title="Vermont"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            summary="Derby Line, VT Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Derby Line, Vermont Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  U.S. Customs and Border Protection Office
                  <br />
                  107 Route 91 South
                  <br />
                  Derby Line, VT 05830
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8 a.m - 8 p.m., Tuesday and Thursday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (802) 873-3219
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="48"
          aria-label="Virginia"
          title="Virginia"
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
                  Washington-Dulles International Airport (IAD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  1 Saarinen Circle, Main Terminal Lower Level, West End, near
                  arrivals Door 1 Sterling, VA 20166
                </td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>
                  8:00 AM - 4:00 PM, Monday - Friday. Closed Saturdays, Sundays,
                  and Federal Holidays
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(703) 661-2854</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Richmond, Virginia Enrollment Center
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td>5707 Huntsman Road Suite 104 Richmond, VA 23250</td>
              </tr>
              <tr>
                <th scope="row">Hours of Operation:</th>
                <td>7:00 a.m. to 10:00 a.m. Tuesday</td>
              </tr>
              <tr>
                <th scope="row">Contact Information:</th>
                <td>(804) 226-9675</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>

          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="usa-table usa-table--striped"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  Norfolk, Virginia (Owen B. Pickett U.S. Customs House)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>101 E. Main Street Norfolk, VA 23510</td>
              </tr>
              <tr>
                <td rowspan="1">Hours of Operation:</td>
                <td>
                  8:00 AM - 4:00 PM, Monday - Friday. Closed Saturdays, Sundays,
                  and Federal Holidays
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>(757) 533-4286</td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="49"
          aria-label="Washington"
          title="Washington"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1" class="qa">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Birch Bay Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  8115 Birch Bay Square St.
                  <br />
                  Suite 104
                  <br />
                  Blaine, WA 98230
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>9:00 AM - 3:00 PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (360) 366-4342
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
                  <strong>Seattle-Tacoma International Airport (SEA)</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  17801 International Blvd
                  <br />
                  Seattle, WA 98158
                  <br />
                  (Located on the street level at the very south end of the
                  airport, near the transit bus stops. Continue walking south on
                  the paved sidewalk and you will see the U.S. Customs and
                  Border Protection office on the right.)
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>8:00 AM - 4:00 PM, Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (206) 214-4961&nbsp;
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="50"
          aria-label="West Virginia"
          title="West Virginia"
          className="text-left"
        >
        
            There are currently no Global Entry enrollment centers in West
            Virginia.
        
        </AccordionItem>

        <AccordionItem
          key="51"
          aria-label="Wisconsin"
          title="Wisconsin"
          className="text-left"
        >
          <table
            border="1"
            cellpadding="1"
            cellspacing="1"
            class="qa"
            summary="Milwaukee Wisconsin Enrollment Center Address, Hours of Operation and Contact Information"
          >
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Milwaukee, Wisconsin Enrollment Center</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  4915 S. Howell Ave, 2<sup>nd</sup>
                  <sup> </sup>Floor
                  <br />
                  Milwaukee, WI 53207
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>2:30 p.m. to 8:30 p.m., Monday - Friday</td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (414) 486-7790 ext. 2026 or 2027
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>

        <AccordionItem
          key="52"
          aria-label="Wyoming"
          title="Wyoming"
          className="text-left"
        >
         
            There are currently no Global Entry enrollment centers in Wyoming.
       
        </AccordionItem>

        <AccordionItem
          key="53"
          aria-label="Qatar"
          title="Qatar"
          className="text-left"
        >
          <table border="1" cellpadding="1" cellspacing="1">
            <thead>
              <tr>
                <th colspan="2" scope="col">
                  <strong>Doha, Qatar Enrollment Center </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Address:</td>
                <td>
                  Hamad International Airport
                  <br />
                  Doha, Qatar
                </td>
              </tr>
              <tr>
                <td>Hours of Operation:</td>
                <td>
                  10:30 AM - 12:10 PM, Monday and Tuesday
                  <br />
                  09:30 AM - 10:40 AM, Saturday and Sunday
                </td>
              </tr>
              <tr>
                <td>Contact Information:</td>
                <td>
                  <span class="baec5a81-e4d6-4674-97f3-e9220f0136c1">
                    (974) 401-0889
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
