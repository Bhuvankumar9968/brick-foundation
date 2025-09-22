import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(3500);
  const [otherAmount, setOtherAmount] = useState<string>("");
  const [isIndianCitizen, setIsIndianCitizen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [makeAnonymous, setMakeAnonymous] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [receiveUpdates, setReceiveUpdates] = useState<boolean>(false);

  const totalMonthlyDonation = donationAmount;

  const handleAmountChange = (amount: number) => {
    setDonationAmount(amount);
    setOtherAmount("");
  };

  const handleOtherAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtherAmount(value);
    setDonationAmount(value === "" ? 0 : parseInt(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      donationAmount,
      isIndianCitizen,
      fullName,
      makeAnonymous,
      mobileNumber,
      email,
      billingAddress,
      pincode,
      panNumber,
      receiveUpdates,
    });
    alert("Donation form submitted! (Check console for data)");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Donation amount</h2>

            {/* Donation Amount Selection */}
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border text-center ${
                  donationAmount === 1000
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => handleAmountChange(1000)}
              >
                ₹1,000
              </button>
              <button
                type="button"
                className={`relative flex-1 py-2 px-4 rounded-md border text-center ${
                  donationAmount === 3500
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => handleAmountChange(3500)}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  Popular
                </span>
                ₹3,500
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 rounded-md border text-center ${
                  donationAmount === 7000
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => handleAmountChange(7000)}
              >
                ₹7,000
              </button>
            </div>

            {/* Other amount input */}
            <div className="relative mb-6">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">₹</span>
              <input
                type="number"
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Other amount - ₹500 or more"
                value={otherAmount}
                onChange={handleOtherAmountChange}
              />
            </div>

            {/* Indian Citizen Checkbox */}
            {/* <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="indianCitizen"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={isIndianCitizen}
                onChange={(e) => setIsIndianCitizen(e.target.checked)}
              />
              <label htmlFor="indianCitizen" className="ml-2 block text-sm text-gray-900">
                I confirm that I am an Indian citizen
              </label>
            </div> */}

            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Details</h2>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="eg. Raghu Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Make my donation anonymous */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="makeAnonymous"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={makeAnonymous}
                  onChange={(e) => setMakeAnonymous(e.target.checked)}
                />
                <label htmlFor="makeAnonymous" className="ml-2 block text-sm text-gray-900">
                  Make my donation anonymous
                </label>
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                  Mobile Number*
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="flex-1 block w-full rounded-none rounded-r-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                {/* <p className="mt-2 text-xs text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Payment updates will be sent on this number
                </p> */}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="eg. raghukumar@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Billing Address */}
              <div className="mb-4">
                <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">
                  Billing Address*
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="eg. 24, Ganesha Layout, Bengaluru"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  required
                />
              </div>

              {/* Pincode */}
              <div className="mb-4">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="eg. 560001"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                />
                {/* <p className="mt-2 text-xs text-gray-500">
                  Govt. mandates donor address collection
                </p> */}
              </div>

              {/* PAN Number */}
              <div className="mb-6">
                <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">
                  PAN Number
                </label>
                <input
                  type="text"
                  id="panNumber"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="eg. ABCY1234D"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                />
                {/* <p className="mt-2 text-xs text-gray-500">Required to claim tax exemption</p> */}
              </div>

              {/* Receive updates checkbox */}
              {/* <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="receiveUpdates"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  checked={receiveUpdates}
                  onChange={(e) => setReceiveUpdates(e.target.checked)}
                />
                <label htmlFor="receiveUpdates" className="ml-2 block text-sm text-gray-900">
                  Send me updates and notifications via WhatsApp/SMS
                </label>
              </div> */}

              {/* Bottom Pledge Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center transition duration-300 ease-in-out"
              >
                Pledge ₹{totalMonthlyDonation} / month
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500 text-center">
                All payments go through a secure gateway
              </p>
            </form>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-md flex-shrink-0 h-fit">
            <img
              src="https://via.placeholder.com/300x200?text=Children+Eating" // Placeholder image
              alt="Children receiving meals"
              className="rounded-md mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Give a million meals to India's hungry
            </h3>
            <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
              <span className="text-gray-700 font-medium">Total Monthly Donation</span>
              <span className="text-gray-900 font-bold text-lg">₹{totalMonthlyDonation}</span>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="taxCertificate"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="taxCertificate" className="ml-2 block text-sm text-gray-900">
                Get Indian tax certificate for your donation
              </label>
            </div>
            <button
              type="button"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center transition duration-300 ease-in-out"
              onClick={handleSubmit} // Triggers the same form submission
            >
              Pledge ₹{totalMonthlyDonation} / month
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <p className="mt-3 text-xs text-gray-500 text-center">
              All payments go through a secure gateway
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;