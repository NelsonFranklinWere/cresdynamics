'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RestaurantAutomationCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Restaurant Automation System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From chaos to seamless operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-bold text-lg py-3 px-6 rounded-lg transition-all duration-300">
              Request a Growth Audit
            </a>
            <a href="/case-studies" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-3 px-6 rounded-lg transition-all duration-300">
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 1: BUSINESS CONTEXT */}
      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Business
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3>
                <p>Quick-service restaurant chain in Nairobi</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3>
                <p>3 locations, growing fast with high customer demand</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3>
                <p>Competitive Nairobi food delivery market with increasing demand for convenience</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3>
                <p>Popular but operationally overwhelmed by manual processes</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg">
                This restaurant was beloved by customers but drowning in manual work. Orders were coming in faster than they could process them, leading to delays, errors, and frustrated customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: THE REAL PROBLEM */}
      <section className="py-16 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Challenge
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Broken</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manual order taking and processing</li>
                  <li>• Phone orders mixed with walk-ins</li>
                  <li>• No system to track order status</li>
                  <li>• Payment collection scattered across methods</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Customers waiting too long for orders</li>
                  <li>• Lost orders during busy periods</li>
                  <li>• Staff overwhelmed by administrative work</li>
                  <li>• No way to analyze customer preferences</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-gray-700">
                They had great food and loyal customers but their operational systems couldn't handle the volume. Every order required manual intervention, creating bottlenecks that hurt both customer experience and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: WHY PREVIOUS ATTEMPTS FAILED */}
      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            Why Previous Solutions Didn't Work
          </h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Generic POS Systems</h3>
                <p className="text-gray-600 text-sm">Expensive international systems that didn't understand Kenyan payment methods or restaurant workflows.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Isolated Apps</h3>
                <p className="text-gray-600 text-sm">Different apps for orders, payments, and delivery that didn't communicate with each other.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">DIY Solutions</h3>
                <p className="text-gray-600 text-sm">Spreadsheets and manual processes that worked for small volume but collapsed under growth.</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">
                Each tool solved one problem but created new ones. They needed an integrated system that handled the entire order lifecycle, not individual point solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: THE CRES APPROACH */}
      <section className="py-16 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-8">
            Our Thinking & Strategy
          </h2>

          <div className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Questions We Asked</h3>
                <ul className="space-y-3">
                  <li>• How does a typical customer order flow work?</li>
                  <li>• What are the pain points in current processing?</li>
                  <li>• How can we reduce manual intervention?</li>
                  <li>• What data do they need to make better decisions?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Speed of service over feature complexity</li>
                  <li>• Mobile-optimized ordering experience</li>
                  <li>• Real-time order tracking for customers</li>
                  <li>• Local payment integration</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">
                Instead of automating individual tasks, we built a complete order management ecosystem that handles the entire customer journey from order placement to delivery, with minimal human intervention required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 5: THE SYSTEM BUILT */}
      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The System We Implemented
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">AI-Powered Order Management</h3>
                <p className="text-gray-700 mb-3">Intelligent system that handles orders across all channels with natural language processing.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• WhatsApp order processing with AI understanding</li>
                  <li>• Voice-to-text conversion for phone orders</li>
                  <li>• Automatic order routing to appropriate locations</li>
                  <li>• Real-time inventory checking and updates</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Customer Experience Platform</h3>
                <p className="text-gray-700 mb-3">Unified system for order tracking, updates, and customer communication.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Real-time order status updates via WhatsApp</li>
                  <li>• Automated delivery time estimates</li>
                  <li>• Customer feedback collection system</li>
                  <li>• Loyalty program integration</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Operational Dashboard</h3>
                <p className="text-gray-700 mb-3">Management tools for monitoring performance and making data-driven decisions.</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Real-time order volume monitoring</li>
                  <li>• Popular item analysis and trends</li>
                  <li>• Customer satisfaction tracking</li>
                  <li>• Automated reorder point alerts</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">
                System Integration: Orders flow seamlessly from customer to kitchen to delivery, with every step tracked and optimized automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 6: RESULTS & IMPACT */}
      <section className="py-16 bg-gray-50 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            The Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Processing Efficiency</h3>
              <p className="text-gray-700">Reduced order processing time by 70%, allowing staff to focus on food quality and customer service rather than administrative tasks.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Customer Satisfaction</h3>
              <p className="text-gray-700">Eliminated order errors and delays, with customers receiving accurate status updates throughout their order journey.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Scalable Operations</h3>
              <p className="text-gray-700">Created processes that work whether handling 50 orders/day or 500, with systems that grow with demand.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-700">Real-time insights into customer preferences, peak hours, and operational efficiency for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 7: KEY INSIGHTS */}
      <section className="py-16 bg-white bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[var(--cres-deep-navy)] mb-8">
            What This Case Teaches
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Manual processes don't scale</h3>
                <p className="text-gray-700">What works for 10 orders/day fails spectacularly at 100. Businesses need systems that grow with demand.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Customer experience is multichannel</h3>
                <p className="text-gray-700">Modern customers expect seamless experiences across phone, WhatsApp, and in-person channels.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Data enables better operations</h3>
                <p className="text-gray-700">Real-time data about orders, preferences, and performance allows businesses to optimize continuously.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Automation reduces risk</h3>
                <p className="text-gray-700">Automated systems eliminate human error in order processing, payment handling, and customer communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 8: RELEVANCE CHECK */}
      <section className="py-16 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            Is This Similar to Your Business?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">This applies to you if:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• You handle high-volume orders or inquiries</li>
                <li>• Customer service takes too much staff time</li>
                <li>• You lose orders during peak periods</li>
                <li>• Manual processes create errors and delays</li>
                <li>• You want to scale without hiring more staff</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Service-based business with booking complexity</li>
                <li>• Multiple customer communication channels</li>
                <li>• Operational bottlenecks in processing</li>
                <li>• Need for real-time customer updates</li>
                <li>• Customer experience consistency issues</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--cres-electric-teal)] hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Let's Map Your Growth System
            </a>
            <a href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              View More Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
