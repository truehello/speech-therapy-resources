import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    setMessage("Sending...");
    const response = await addToMailchimp(email);
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("You're already on to the list!");
      } else {
        setMessage("Some error occured while subscribing you to the list.");
      }
      setDisabled(false);
    } else {
      setMessage(
        "Thanks! Please check your e-mail and click the confirmation link."
      );
    }
  };

  return (
    <div className="p-4  md:p-8 ">
      <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Sign up for my newsletter
      </h2>
      <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
        <input
          aria-label="Email address"
          className="appearance-none w-full sm:max-w-xs px-4 py-2 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
          type="email"
        />
        <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            disabled={disabled}
          >
            Sign up
          </button>
        </div>
      </form>
      <div className={("w-full pt-4 text-sm", { "opacity-0": !message })}>
        {message}
      </div>
    </div>
  );
};

export default Newsletter;
