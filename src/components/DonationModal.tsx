import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming your custom button

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onClose }) => {
  const [mode, setMode] = useState<'one-time' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(1000); // Default to a common monthly amount

  // Load Razorpay SDK (kept as is)
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment (kept as is)
 const handlePayment = async () => {
  const ok = await loadRazorpayScript();
  if (!ok) {
    alert("Failed to load Razorpay SDK.");
    return;
  }

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  try {
    // ==============================
    // 🧾 ONE-TIME PAYMENT
    // ==============================
    if (mode === "one-time") {
      const orderRes = await fetch(`${backendUrl}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await orderRes.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Brick Foundation",
        description: "One-Time Donation",
        order_id: order.id,
        handler: async (response: any) => {
          const verifyRes = await fetch(`${backendUrl}/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("Donation successful ❤️");
            onClose();
          } else {
            alert("Payment verification failed");
          }
        },
        theme: { color: "#FF9933" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
      return;
    }

    // ==============================
    // 🔁 MONTHLY SUBSCRIPTION
    // ==============================
    if (mode === "monthly") {
      const subRes = await fetch(`${backendUrl}/create-subscription`, {
        method: "POST",
      });

      const subscription = await subRes.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        subscription_id: subscription.id,
        name: "Brick Foundation",
        description: "Monthly Donation (Auto-Debit)",
        handler: async (response: any) => {
          const verifyRes = await fetch(
            `${backendUrl}/verify-subscription`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            }
          );

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("Monthly subscription activated 🎉");
            onClose();
          } else {
            alert("Subscription verification failed");
          }
        },
        theme: { color: "#FF9933" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    }
  } catch (err) {
    console.error(err);
    alert("Payment failed");
  }
};


  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-overlay-show" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl animate-content-show transform transition-all duration-300 ease-out">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:bg-gray-100/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <Dialog.Title className="text-4xl font-extrabold pb-2">
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Support Our Mission
              </span>
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 text-lg leading-relaxed mt-2">
              Every contribution fuels our work to strengthen democracy.
            </Dialog.Description>
          </div>

          {/* Mode Switch */}
          <div className="mb-8 p-1 bg-gray-100 rounded-full flex justify-center items-center shadow-inner-sm border border-gray-200">
            <button
              onClick={() => setMode('one-time')}
              className={`flex-1 py-2 px-4 rounded-full font-semibold text-base transition-all duration-300 ease-in-out
                ${
                  mode === 'one-time'
                    ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }
              `}
            >
              One-Time
            </button>
            <button
              onClick={() => setMode('monthly')}
              className={`flex-1 py-2 px-4 rounded-full font-semibold text-base transition-all duration-300 ease-in-out
                ${
                  mode === 'monthly'
                    ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }
              `}
            >
              Monthly
            </button>
          </div>

          {/* Donation Amount Section */}
          <div className="space-y-7">
            {mode === 'monthly' ? (
              <div className="grid grid-cols-3 gap-4">
                {[1000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`flex items-center justify-center h-16 rounded-2xl border-2 transition-all duration-200 ease-in-out
                      ${
                        amount === amt
                          ? 'bg-orange-100 border-orange-500 text-orange-700 shadow-md font-bold text-xl'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-gray-50 font-medium text-lg'
                      }
                    `}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500 font-semibold">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Enter custom amount"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-2xl font-semibold text-gray-800 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 shadow-sm"
                  min="1"
                />
              </div>
            )}

            {/* Call to Action Button */}
            <Button
              onClick={handlePayment}
              className="group w-full relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 text-2xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1"
            >
              <span className="relative z-10 inline-flex items-center">
                Donate Now
                <ArrowRight className="ml-3 w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Your support empowers our mission. Thank you for your generosity.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DonationModal;