// https://web3forms.com/platforms/nextjs-contact-form

"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c930d947-9d82-444b-8deb-7a7941195bf0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setFormSubmitted(true);

      // Clear the form after submission
      event.target.reset();
    }
  };

  useEffect(() => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <section class="bg-white bg-blueMain">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form id="myForm" class="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Full name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="shadow-sm bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-blueMain dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="your name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Your email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="shadow-sm bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-blueMain  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="email"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-blueMain  dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Your message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-blueMain dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blueMain sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
            {isFormSubmitted && (
              <h6 class="mt-2 text-green-600">Your message has been sent.</h6>
            )}
            <br />
            <br />
            <h3>
              You can also write to us here:{" "}
              <span >
                <a href="mailto:geproassist@gmail.com" style={{ color: "#5DBBF0" }}>geproassist@gmail.com</a>
              </span>
            </h3>
          </form>
        </div>
      </section>
    </>
  );
}
