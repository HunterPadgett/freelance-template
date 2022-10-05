import React from 'react'
import './Attorneys.css'

const JHC = () => {
  return (
    <div className="secondarybg" id="profilePage">
      <div className="name grid grid-cols-1 items-center text-center">
        <h1 className="text-3xl md:text-5xl m-1" id="profileh1">
          Thomas J. Mahoney III
        </h1>
        <h3 className="text-xl md:text-4xl m-1">Senior Partner</h3>
      </div>

      <div className="profileImg grid grid-cols-1 ">
        <img
          class="profpic mx-auto mt-3"
          src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
          alt="sdfsdf"
        />
      </div>
      <div className="container bg-gray-50 scrollable">
        <div className="grid grid-cols-1 text-center">
          <div className="m-2">
            <h3 className="text-2xl md:text-3xl">Practice Areas</h3>
            <hr class=" mx-auto w-36 m:w-48 h-0.5 bg-gray-900 rounded border-0  dark:bg-gray-900"></hr>
            <ul className="md:text-lg">
              <li>Commercial and Residential Real Estate</li>
              <li>Business and Corporate Law</li>
              <li>Maritime Law</li>
              <li>Civil Litigation</li>
              <li>Personal Injury</li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-2xl md:text-3xl">Education</h3>
            <hr class=" mx-auto w-36 m:w-48 h-0.5 bg-gray-900 rounded border-0  dark:bg-gray-900"></hr>
            <ul className="md:text-lg">
              <li>Juris Doctor, 1988 – University of Georgia School of Law</li>
              <li>Bachelor of Arts, 1985 – University of Georgia</li>
              <li>Class of 1981 – Benedictine Military School</li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-2xl md:text-3xl">Legal Experience</h3>
            <hr class=" mx-auto w-36 m:w-48 h-0.5 bg-gray-900 rounded border-0  dark:bg-gray-900"></hr>
            <ul className="md:text-lg">
              <li className="m-1">
                Admitted to the State Bar of Georgia in 1988
              </li>
              <li className="m-1">
                Chairman of Chatham County Board of Elections
              </li>
              <li className="m-1">
                Admitted to practice in the U.S. Supreme Court, U.S. Court of
                Appeals 4th and 11th Circuits, and the U.S. District Courts for
                the Southern District of GA & SC
              </li>
              <li className="m-1">
                Admitted to practice in the GA Supreme Court & GA Court of
                Appeals
              </li>
              <li className="m-1">
                Admitted to practice in the SC Supreme Court & SC Court of
                Appeals
              </li>
              <li className="m-1">
                Special Assistant Attorney General (SAAG) Georgia Ports
                Authority 1987 – Present
              </li>
              <li className="m-1">
                Special Assistant Attorney General for the GA Department of
                Transportation 1999 – Present
              </li>
              <li className="m-1">
                General Counsel, Benedictine Military School
              </li>
              <li className="m-1">
                General Counsel, St. Patrick’s Day Parade Committee
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="profileBtn grid grid-cols-1 items-center text-center">
        <button className="mb-4 mt-2 border-none ">
          <a
            href="/attorneys"
            className="rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white text-decoration-none hover:bg-blue-900 md:py-4 md:px-10 md:text-lg md:w1/4 lg:w-1/5"
          >
            View all Attorneys
          </a>
        </button>
      </div>
    </div>
  )
}

export default JHC