import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onClose }) => {
  const [mode, setMode] = useState<'one-time' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(1000);

  // Load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment
  const handlePayment = async () => {
    const ok = await loadRazorpayScript();
    if (!ok) {
      alert('Failed to load Razorpay SDK.');
      return;
    }

    // const amountInPaise = amount * 100;

    try {
      const orderRes = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount }),
      });
      const order = await orderRes.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Brick Foundation',
        description: `${mode === 'monthly' ? 'Monthly' : 'One-Time'} Donation`,
        order_id: order.id,
        handler: async (response: any) => {
          const verifyRes = await fetch('http://localhost:5000/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert('Payment Successful & Verified!');
            onClose();
          } else {
            alert('Payment verification failed!');
          }
        },
        prefill: { name: '', email: '', contact: '' },
        theme: { color: '#FF9933' },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('Payment failed!');
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-accent-saffron to-accent-green bg-clip-text text-transparent">
                Support Brick Foundation
              </span>
            </Dialog.Title>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-saffron/50"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <Dialog.Description className="text-gray-600 mb-6 text-center">
            Every contribution helps us defend the Constitution and strengthen democracy.
          </Dialog.Description>

          {/* Mode Switch */}
          <div className="mb-6">
            <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setMode('one-time')}
                className={`py-2 rounded-lg font-semibold transition-all duration-200 ${
                  mode === 'one-time'
                    ? 'bg-accent-saffron text-black shadow'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setMode('monthly')}
                className={`py-2 rounded-lg font-semibold transition-all duration-200 ${
                  mode === 'monthly'
                    ? 'bg-accent-saffron text-black shadow'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* One-Time Donation */}
          {mode === 'one-time' && (
            <div className="space-y-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount (₹)"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-accent-saffron/60 focus:border-accent-saffron/60 shadow-sm"
              />
              <Button
                onClick={handlePayment}
                className="group w-full relative overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold py-3 text-lg rounded-full transition-colors duration-300"
              >
                <span className="relative z-10 inline-flex items-center justify-center">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          )}

          {/* Monthly Donation */}
          {mode === 'monthly' && (
            <div className="space-y-6">
              <div className="flex justify-between gap-3">
                {[500, 1000, 2000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`flex-1 px-5 py-3 rounded-full font-semibold border transition-all duration-200 ${
                      amount === amt
                        ? 'bg-accent-saffron text-black border-accent-saffron shadow'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <Button
                onClick={handlePayment}
                className="group w-full relative overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold py-3 text-lg rounded-full transition-colors duration-300"
              >
                <span className="relative z-10 inline-flex items-center justify-center">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DonationModal;
