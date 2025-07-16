export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">The Appversal</h1>
        <nav className="space-x-6">
          <a href="https://www.google.com/" className="hover:text-cyan-300">Home</a>
          <a href="/theappversal/policy" className="text-cyan-300 underline">Policy</a>
        </nav>
      </header>

      <main className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-[length:200%_200%] animate-gradient-x">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center animate-fade-in-up">
            <h1 className="text-4xl font-extrabold text-cyan-400 mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn how we protect and handle your personal information.
            </p>
          </section>

          {[{
            title: "Introduction",
            content: "This Privacy Policy applies to The APPVERSAL. It describes how we collect, use, and disclose your information when you use our service. By using our apps, you agree to the terms outlined here."
          }, {
            title: "Information We Collect",
            content: (
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Platform type (e.g., Android)</li>
                <li>Operating system version</li>
                <li>Device model and manufacturer</li>
                <li>Language and time settings</li>
                <li>Screen resolution and hardware configuration</li>
                <li>Clicks and interactions with app features</li>
                <li>Cookies and Google Advertising ID</li>
                <li>Support-related information (name, email, support messages)</li>
              </ul>
            )
          }, {
            title: "Third-Party Services",
            content: (
              <>
                <p className="text-gray-300 mb-2">We may share data with the following services:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Google Play Services</li>
                  <li>AdMob</li>
                  <li>Google Analytics for Firebase</li>
                  <li>Firebase Crashlytics</li>
                </ul>
              </>
            )
          }, {
            title: "Purpose of Data Usage",
            content: "We use your data to operate and improve our services, communicate with you, analyze usage trends, and ensure app stability and performance."
          }, {
            title: "Data Retention",
            content: "We retain your personal data only as long as necessary to fulfill the purposes described in this policy. Usage data may be retained longer for analytics and security purposes."
          }, {
            title: "Security",
            content: "While we use commercially acceptable methods to protect your data, no transmission over the internet is 100% secure. We do our best to safeguard your information."
          }, {
            title: "Permissions",
            content: (
              <ul className="list-disc list-inside text-gray-300">
                <li>INTERNET - to connect with servers and services</li>
              </ul>
            )
          }, {
            title: "External Links",
            content: "Our services may contain links to external websites. We are not responsible for the content or privacy policies of these sites."
          }, {
            title: "Children’s Privacy",
            content: "We do not knowingly collect data from children under 13. If we discover such data has been collected, we will delete it immediately."
          }, {
            title: "Maintenance and Support",
            content: "Our apps are subject to ongoing improvement. Features may change without prior notice. Service interruptions may occur due to maintenance or other factors beyond our control."
          }, {
            title: "Policy Updates",
            content: "This policy may be updated periodically. Changes will be posted on this page. Please check back regularly for updates."
          }, {
            title: "Contact Us",
            content: (
              <>
                <p className="text-gray-300">If you have any questions or concerns, feel free to reach out at:</p>
                <a href="mailto:contact@appversal.com" className="text-cyan-400 underline">contact@appversal.com</a>
              </>
            )
          }].map((section, idx) => (
            <section key={idx} className={`animate-fade-in-up delay-${100 * (idx + 1)} hover:shadow-cyan-400/20 transition duration-300 p-4 rounded-xl`}>
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{section.title}</h2>
              <div className="text-gray-300">{section.content}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
