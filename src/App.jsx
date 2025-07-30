export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-cyan-400">The Appversal</h1>
        <nav className="space-x-6">
          <a href="#apps" className="hover:text-cyan-300">Apps</a>
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
          <a href="/policy" className="hover:text-cyan-300">Policy</a>
        </nav>
      </header>

      <section className="py-24 px-6 text-center bg-gradient-to-br from-black via-gray-900 to-black">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">Smart Tools. Smarter Life.</h2>
        <p className="text-lg text-gray-300 mb-6">Explore our universe of creative and productivity apps for Android & iOS</p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-6 rounded-full">Explore The Store</button>
      </section>

      <section id="apps" className="py-16 px-6">
        <h3 className="text-4xl font-bold text-center text-white mb-12">Our Apps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Piano Mastery',
                desc: 'Learn, play & enjoy music with interactive falling notes.',
                icon: '🎹',
                img: '/images/piano.jpg',
                android: true,
                ios: true
              },
              {
                name: 'PDF Toolkit',
                desc: 'View, convert, merge – All-in-one PDF solution.',
                icon: '📄',
                img: '/images/pdf.jpg',
                android: true,
                ios: true
              },
              {
                name: 'AR Draw Sketch',
                desc: 'Draw anything with AR on real surfaces.',
                icon: '🖍️',
                img: '/images/ar.jpg',
                android: true,
                ios: false
              },
              {
                name: 'QR Expert',
                desc: 'Scan, generate, and enhance QR codes with AI.',
                icon: '🔍',
                img: '/images/qr.jpg',
                android: true,
                ios: true
              },
              {
                name: 'QR Expert',
                desc: 'Scan, generate, and enhance QR codes with AI.',
                icon: '🔍',
                img: '/images/qr.jpg',
                android: true,
                ios: true
              },
              {
                name: 'QR Expert',
                desc: 'Scan, generate, and enhance QR codes with AI.',
                icon: '🔍',
                img: '/images/qr.jpg',
                android: true,
                ios: true
              },
              {
                name: 'QR Expert',
                desc: 'Scan, generate, and enhance QR codes with AI.',
                icon: '🔍',
                img: '/images/qr.jpg',
                android: true,
                ios: true
              }
            ].map(app => (
              <div key={app.name} className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition">
  <div className="flex items-center text-xl font-semibold mb-3">
    <span className="text-3xl mr-2">{app.icon}</span>
    <span>{app.name}</span>
  </div>
 <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl shadow-lg ring-1 ring-cyan-700/40">
  <img
    src={app.img}
    alt={app.name}
    className="absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out brightness-110 hover:scale-105 hover:brightness-125"
  />
</div>
  <p className="text-gray-400 mb-4">{app.desc}</p>
  <div className="space-x-2">
    {app.android && (
      <button className="inline-flex items-center bg-cyan-500 text-black px-4 py-2 rounded-full text-sm hover:bg-cyan-600">
        <span className="mr-2">🤖</span> Android
      </button>
    )}
    {app.ios ? (
      <button className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-600">
        <span className="mr-2"></span> iOS
      </button>
    ) : (
      <span className="inline-block bg-gray-800 text-gray-400 px-4 py-2 rounded-full text-sm">iOS Coming Soon</span>
    )}
  </div>
</div>
            ))}
          </div>
      </section>

      <section id="about" className="py-16 px-6 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-4">Why The Appversal?</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our mission is to simplify creativity and productivity using cutting-edge technology. We build tools that empower users, from casual creators to power users.
        </p>
      </section>

      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Let’s Connect</h3>
        <p className="text-gray-400 mb-6">Got feedback or business inquiries? Reach out to us.</p>
        <a href="mailto:contact@appversal.com" className="text-cyan-400 underline">contact@appversal.com</a>
      </section>

            {/* User Feedback Section (like Google Play style) */}
      <section className="py-16 px-6 bg-gray-950" id="feedback">
        <h3 className="text-3xl font-bold text-cyan-400 text-center mb-10">What Users Say</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { name: 'Alice Nguyen', app: 'Piano Mastery', rating: 5, feedback: 'Ứng dụng piano tuyệt vời nhất mình từng dùng! Âm thanh và giao diện đều rất chất lượng.' },
            { name: 'Minh Tran', app: 'PDF Toolkit', rating: 4, feedback: 'PDF Toolkit giúp mình xử lý tài liệu cực nhanh, rất đáng giá.' },
            { name: 'Linh Le', app: 'AR Draw Sketch', rating: 5, feedback: 'Vẽ trên tường bằng AR rất vui và sáng tạo, mong có thêm tính năng mới!' },
            { name: 'Hoang Pham', app: 'QR Expert', rating: 4, feedback: 'QR Expert dễ dùng và nhanh chóng, rất tiện cho công việc hàng ngày.' }
          ].map((f, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white">{f.name}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i2) => (
                    <span key={i2} className={i2 < f.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-cyan-300 mb-1">{f.app}</div>
              <p className="text-gray-300 text-sm">{f.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 text-center bg-gray-900" id="contact-form">
        <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-6 rounded-full">Send Message</button>
        </form>
        <div className="mt-8 text-gray-400 text-sm">
          Or reach us via:
          <div className="flex justify-center space-x-6 mt-4 text-xl">
            <a href="https://play.google.com/store/apps/dev?id=your_dev_id" target="_blank" className="hover:text-cyan-300 flex items-center space-x-2">
              <img src="/icons/playstore.svg" alt="Play Store" className="w-5 h-5" />
              <span>Google Play</span>
            </a>
            <a href="https://www.youtube.com/@your_channel" target="_blank" className="hover:text-cyan-300 flex items-center space-x-2">
              <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
              <span>YouTube</span>
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" className="hover:text-cyan-300 flex items-center space-x-2">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 px-6 text-center bg-gray-950" id="partners">
        <h3 className="text-3xl font-bold text-cyan-400 mb-10">Our Partners</h3>
        <div className="flex justify-center flex-wrap gap-10 items-center max-w-4xl mx-auto">
          <img src="/logos/admob.png" alt="AdMob" className="h-12" />
          <img src="/logos/ironsource.png" alt="IronSource" className="h-12" />
          <img src="/logos/pangle.png" alt="Pangle" className="h-12" />
          <img src="/logos/appsflyer.png" alt="Appsflyer" className="h-12" />
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        © 2025 The Appversal. All rights reserved.
      </footer>
    </div>
  );
}

