import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "061bfc41-b219-432a-9888-1f53e5784a10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section class="fade-in">
        <div className="text-center">
          <h1 class="lg:py-6 mb-4 mt-4 text-gray-800 text-3xl lg:text-5xl font-bold mb-2 leading-tight text-center mx-4 sm:mx-auto">
            Contact Us
          </h1>
        </div>
        <div class="w-full border-t lg:px-0 items-center"></div>

        <div class="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form class="space-y-8" onSubmit={onSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="061bfc41-b219-432a-9888-1f53e5784a10"
            />
            <div>
              <label
                for="email"
                class="block text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@test.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Subject"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-2 px-2 text-lg font-medium text-center text-white rounded-lg bg-greenAccent sm:w-fit hover:bg-darkGreenAccent focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-darkGreenAccent dark:hover:bg-darkGreenAccent dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Cal Poly logo */}
      <div class="border-t mt-4 pt-8 px-4 lg:px-0 items-center">
        <img
          src="https://i.ibb.co/kgHm5xJ/logo-for-signature.png"
          class="mx-auto"
        />
      </div>

      {/* <!-- footer --> */}
      <footer className="border-t mt-12 pt-6 px-4 lg:px-0 lg:py-2 bg-greenAccent text-gray-300">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/5"></div>

          <div className="w-full mt-2 md:w-1/2 lg:w-1/5 text-center pb-2 text-sm">
            @ Meaghan Sharrard 2024
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5"></div>
        </div>
      </footer>
    </>
  );
}
export default Contact;
