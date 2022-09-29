import React from "react";
import { Link } from "react-router-dom";

const HistoryHome = () => {
  return (
    <div className="grid flex items-center grid-cols-1">
      <div class="container text-center mt-5">
        <h2 className="text-black text-4xl mb-3 md:text-6xl">OUR HISTORY</h2>

        <p className="mb-3 text-lg">
          Founded in 1935 by Dennis Pierce, the firm originally operated as
          PIERCE & MAY. Miss Adele May was one of the first female attorneys to
          practice law in Savannah. When war hero John Ranitz returned from
          World War II, he completed his law degree in the original Armstrong
          house and joined Dennis Pierce as PIERCE & RANITZ after Miss May left
          private practice.
        </p>
        <p className="mb-3 text-lg">
          Thomas J. Mahoney, Jr. returned to his hometown of Savannah after
          working in the legal department for the Federal Bureau of
          Investigation and joined the firm in 1963. RANITZ & MAHONEY welcomed
          Mahoney’s son, Thomas J. Mahoney III to join the practice in 1989
          after practicing law in Atlanta, GA.
        </p>
        <p className="mb-3 text-lg">
          In ? the Mahoney’s joined with Social Security/SSI attorney, Allison
          Cole, to begin MAHONEY & COLE. James L Coursey Jr. joined the firm in
          2016 after a thirty year career as Chief Assistant United State
          Attorney for the US Department of Justice to form MAHONEY COLE &
          COURSEY.
        </p>
      </div>

      <div className="container flex-row text-decoration-none">
        <div className="row items-center row ">
          <address className="col-sm-12 col-md-12 text-center items-center row justify-around ">
            <h3>
              <i class="fa-solid fa-phone"></i> | Call us{" "}
              <a href="tel:+1-912-233-7272">912-233-7272</a>
            </h3>
            <p>
              <a
                href="https://www.google.com/maps/place/Mahoney+Cole+Clark+%26+Gore+PC/@32.0047435,-81.1090828,17z/data=!3m2!4b1!5s0x88fb9fc405aa4e2b:0x3f8585c618c35b01!4m5!3m4!1s0x88fb9e65f0ad53f9:0xd110e64a56e97e00!8m2!3d32.004739!4d-81.1068941"
                target="_blank"
                rel="noreferrer"
              >
                337 Commercial Drive, Suite 500 <br /> Savannah, Georgia 31406
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default HistoryHome;
