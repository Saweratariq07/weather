import React from "react";

function Currency() {
  return (
    <div>
      <nav class="bg-transparent border-gray-200 dark:bg-transparent-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center  rtl:space-x-reverse">
            <img src="st.png" class="h-24" alt="st Logo" />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-white-500 rounded-lg md:hidden hover:bg-transparent-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-white-400 dark:hover:bg-transparent-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 bg-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-black-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 bg-white-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:bg-black dark:hover:bg-transparent-700 dark:hover:bg-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 bg-white-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:bg-black dark:hover:bg-transparent-700 dark:hover:bg-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 bg-white-900 rounded hover:bg-transparent-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:bg-black dark:hover:bg-transparent-700 dark:hover:bg-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-transparent-100">
          <div className="bg-transparent p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>

            <div className="mb-4">
              <label htmlFor="from-currency" className="block bg-white-700">
                From:
              </label>
              <select
                id="from-currency"
                className="mt-1 block w-full bg-transparent-100 border border-gray-300 rounded-md p-2"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                {/* Add more currencies as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="to-currency" className="block bg-white-700">
                To:
              </label>
              <select
                id="to-currency"
                className="mt-1 block w-full bg-transparent-100 border border-gray-300 rounded-md p-2"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                {/* Add more currencies as needed */}
              </select>
            </div>

            <button className="w-full bg-blue-500 bg-black py-2 rounded-md hover:bg-blue-600">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
