import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const Donate: React.FC = () => {
  const { Razorpay } = useRazorpay();

  // Enforce 1000 only as per user request
  // Enforce 1000 only as per user request
  const [donationAmount, setDonationAmount] = useState<number>(1000);
  const [debugSubId, setDebugSubId] = useState<string>("");

  // Other state variables
  const [fullName, setFullName] = useState<string>("");
  const [makeAnonymous, setMakeAnonymous] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");

  const totalMonthlyDonation = donationAmount;

  const handleCreateSubscription = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total_count: 120, // 10 years (effectively indefinitely for now)
          customer_notify: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create subscription");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating subscription:", error);
      alert("Failed to initiate donation. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Razorpay) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const subscription = await handleCreateSubscription();
    console.log("Full Subscription Response:", subscription);

    if (!subscription || !subscription.id) {
      console.error("No subscription ID received");
      alert("Failed to create subscription. Check console.");
      return;
    }

    setDebugSubId(subscription.id); // Show on UI

    // Minimal options to debug
    const options: any = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      subscription_id: subscription.id,
      name: "Brick Foundation",
      description: "Monthly Donation",
      handler: async function (response: any) {
        console.log("Payment Response:", response);
        try {
          const verifyResponse = await fetch("http://localhost:5000/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_subscription_id: response.razorpay_subscription_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            alert(`Subscription Successful! Payment ID: ${response.razorpay_payment_id}`);
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        } catch (error) {
          console.error("Verification Error:", error);
          alert("Payment verification error.");
        }
      },
      theme: {
        color: "#2563EB",
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response: any) {
      console.error("Payment Failed:", response.error);
      alert(`Payment Failed: ${response.error.description}`);
    });

    console.log("Opening Razorpay with options:", options);
    rzp1.open();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Donation amount</h2>
            <p className="text-red-600 font-bold mb-4">DEBUG MODE: V4 - CHECKING SUBSCRIPTION</p>
            {debugSubId && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
                <strong>SUBSCRIPTION ID:</strong> {debugSubId}
              </div>
            )}

            {/* Donation Amount Selection - LOCKED to 1000 */}
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                className="flex-1 py-3 px-4 rounded-md border text-center bg-blue-600 text-white border-blue-600 font-semibold cursor-default"
              >
                ₹1,000 / Month
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              *Currently we are only accepting standard monthly subscriptions of ₹1,000.
            </p>

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
              </div>

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
              <span className="text-gray-700 font-medium">Monthly Donation</span>
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