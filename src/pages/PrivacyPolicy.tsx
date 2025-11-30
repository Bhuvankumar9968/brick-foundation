import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mb-2">Introduction</h2>
              <p>
                We value your privacy. This policy explains what information we collect,
                how we use it, and your choices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Contact information (e.g., name, email, phone) you provide.</li>
                <li>Usage data (pages visited, interactions) to improve our services.</li>
                <li>Donation-related details necessary to process contributions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide and improve our website and services.</li>
                <li>Communicate updates, respond to inquiries, and support requests.</li>
                <li>Comply with legal obligations and protect our users.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share data with trusted
                service providers under strict confidentiality and only as needed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Data Security</h2>
              <p>
                We implement reasonable safeguards to protect your information. However,
                no method of transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Update or request deletion of your data by contacting us.</li>
                <li>Opt out of non-essential communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p>
                For questions about this policy, contact us at +91 63667 05015
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;