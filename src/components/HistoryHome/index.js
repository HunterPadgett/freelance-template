import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const HistoryHome = () => {
    return (
        <div className="bgwood grid flex items-center grid-cols-1 ">
            <div className="bgwood"></div>
            <div class="container text-center mt-5 popbg">
                <h2 className="text-white text-4xl mb-3 md:text-6xl tshadow">
                    OUR HISTORY
                </h2>

                <p className="mb-3 text-lg text-white tshadow">
                    Founded in 1937 by Richard James, the firm originally operated as JAMES &
                    JUNE. Miss Bobby June was one of the first female attorneys to practice law
                    in Savannah. When war hero John Patterson returned from World War II, he
                    completed his law degree in the original Armstrong house and joined Dennis
                    James as JAMES & PATTERSON after Miss June left private practice.
                </p>
                <p className="mb-3 text-lg text-white tshadow">
                    Fred J. Smith, Jr. returned to his hometown of Savannah after working in
                    the legal department for the Federal Bureau of Investigation and joined the
                    firm in 1961. PATTERSON & SMITH welcomed Smith’s son, Fred J. Smith III
                    to join the practice in 1986 after practicing law in Dacula, GA.
                </p>
                <p className="mb-3 text-lg text-white tshadow">
                    In 1995 the Smith’s joined with Social Security/SSI attorney, Katie Jones,
                    to begin SMITH & JONES. Tom L Greenburg Jr. joined the firm in 2016 after
                    a thirty year career as Chief Assistant United State Attorney for the US
                    Department of Justice to form SMITH JONES & GREENBURG.
                </p>
                <Link
                    to="/history"
                    className="flex border-none flex-row w-1/2 justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white text-decoration-none hover:bg-blue-900 md:py-4 md:px-10 md:text-lg md:w1/4 lg:w-1/5 m-auto"
                >
                    Way back in...
                </Link>
            </div>

            <div className="mt-5 container flex-row ">
                <div className=" row items-center row align-middle">
                    <address className="col-sm-12 col-md-12 text-center items-center row justify-around align-middle">
                        <h3 className="pb-3 fill-white text-white">
                            <i class="fa-solid fa-phone "></i> | Call us{" "}
                            <a className="linkHoverFooter text-white" href="tel:+1-912-233-9999">
                                912-233-9999
                            </a>
                        </h3>
                        <p className="flex justify-center pb-3 align-middle">
                            <div className="text-3xl text-white">
                                <i class="fa-sharp fa-solid fa-location-dot align-center text-white"></i>{" "}
                                |{" "}
                            </div>
                            <div className="text-lg">
                                <a
                                    className="linkHoverFooter text-white"
                                    href="https://www.google.com/maps/place/Savannah,+GA/@32.0390572,-81.340707,11z/data=!3m1!4b1!4m5!3m4!1s0x88fb75fc78f20659:0x4e0c6751036020bc!8m2!3d32.0808989!4d-81.091203,-81.1090828,17z/data=!3m2!4b1!5s0x88fb9fc405aa4e2b:0x3f8585c618c35b01!4m5!3m4!1s0x88fb9e65f0ad53f9:0xd110e64a56e97e00!8m2!3d32.004739!4d-81.1068941"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    &nbsp;123 Industrial Blvd, Suite 500 <br /> Savannah, Georgia 31401
                                </a>
                            </div>
                        </p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default HistoryHome;
