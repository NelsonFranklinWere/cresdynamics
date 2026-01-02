'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RetailSalesCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-12 md:py-20 bg-gradient-to-br bg-[url('/backround.png')] bg-repeat bg-cover bg-center from-[var(--cres-deep-navy)] via-[#0D1B2A] to-[#1B263B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--cres-electric-teal)] to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            Retail Sales System
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            From high traffic to predictable sales growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-[var(--cres-electric-teal)] hover:bg-[#00B894] text-white font-bold text-lg py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
              Request a Growth Audit
            </a>
            <a href="/case-studies" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white font-semibold text-lg py-3 px-4 md:px-6 rounded-lg transition-all duration-300">
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">The Business</h2>
          <div className="space-y-6 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Industry</h3><p>Retail store specializing in electronics</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Business Size</h3><p>Single location with high foot traffic</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Market Situation</h3><p>Competitive Nairobi electronics market</p></div>
              <div><h3 className="font-bold text-[var(--cres-deep-navy)] mb-2">Growth Stage</h3><p>Traffic-heavy but conversion-challenged</p></div>
            </div>
            <div className="mt-8 p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
              <p className="text-lg">This retail store had excellent foot traffic but struggled to convert browsers into buyers, with no system to track or optimize the customer journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">The Challenge</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Broken</h3>
                <ul className="space-y-2 text-white">
                  <li>• High foot traffic but low conversion rates</li>
                  <li>• No customer journey tracking or optimization</li>
                  <li>• Manual sales processes with no follow-up</li>
                  <li>• No data on what drives purchases</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--cres-electric-teal)]">What Was Costing Growth</h3>
                <ul className="space-y-2 text-white">
                  <li>• Lost sales from undecided customers</li>
                  <li>• Inefficient sales staff allocation</li>
                  <li>• No way to nurture future purchases</li>
                  <li>• Missing repeat customer opportunities</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg border-l-4 border-[var(--cres-electric-teal)]">
              <p className="font-semibold text-[var(--cres-deep-navy)] mb-2">The Root Issue</p>
              <p className="text-white">They had plenty of potential customers but no system to guide them through the buying process or track what worked.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">Why Previous Solutions Didn't Work</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Basic POS Systems</h3>
                <p className="text-white text-sm">Handled transactions but provided no customer insights or sales optimization tools.</p>
              </div>
              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Generic Sales Training</h3>
                <p className="text-white text-sm">Staff training helped but didn't address systemic sales process problems.</p>
              </div>
              <div className="text-center p-6 bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-3">Standalone Apps</h3>
                <p className="text-white text-sm">Individual apps for loyalty, inventory, and sales that didn't integrate or provide actionable insights.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-semibold mb-2">The Pattern</p>
              <p className="text-red-700">They had tools for individual tasks but no integrated system to optimize the entire customer experience and sales process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--cres-deep-navy)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">Our Thinking & Strategy</h2>
          <div className="space-y-6 text-gray-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">Questions We Asked</h3>
                <ul className="space-y-3">
                  <li>• How do customers actually make purchase decisions?</li>
                  <li>• What information do they need at each stage?</li>
                  <li>• How can we track and optimize the sales funnel?</li>
                  <li>• What data do we need to make better decisions?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-electric-teal)] mb-4">What We Prioritized</h3>
                <ul className="space-y-3">
                  <li>• Customer experience optimization</li>
                  <li>• Data-driven sales improvements</li>
                  <li>• Integrated customer journey tracking</li>
                  <li>• Measurable conversion improvements</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg text-white font-semibold mb-3">Our Strategic Decision</p>
              <p className="text-gray-300">We built a comprehensive sales ecosystem that guides customers through their entire decision-making process, from awareness to purchase to repeat business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">The System We Implemented</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Customer Journey Mapping</h3>
                <p className="text-white mb-3">Digital touchpoints that guide customers through their decision-making process.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• In-store tablets for product research and comparisons</li>
                  <li>• WhatsApp integration for post-visit follow-up</li>
                  <li>• Email sequences for abandoned cart recovery</li>
                  <li>• SMS notifications for special offers</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Sales Performance Dashboard</h3>
                <p className="text-white mb-3">Real-time insights into sales performance and customer behavior.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• Conversion rate tracking by product category</li>
                  <li>• Customer journey analytics</li>
                  <li>• Staff performance metrics</li>
                  <li>• Inventory turnover optimization</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[var(--cres-deep-navy)] mb-2">Automated Nurture System</h3>
                <p className="text-white mb-3">Intelligent follow-up that keeps customers engaged throughout their buying journey.</p>
                <ul className="text-white text-sm space-y-1">
                  <li>• Personalized product recommendations</li>
                  <li>• Cart abandonment recovery</li>
                  <li>• Post-purchase engagement campaigns</li>
                  <li>• Loyalty program automation</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[var(--cres-electric-teal)]/10 rounded-lg border border-[var(--cres-electric-teal)]/20">
              <p className="text-[var(--cres-deep-navy)] font-semibold">System Integration: Every customer touchpoint connects to create a seamless, optimized sales experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">The Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Predictable Sales Growth</h3>
              <p className="text-white">Established measurable sales targets and processes that consistently meet or exceed expectations.</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Customer Experience Optimization</h3>
              <p className="text-white">Streamlined purchase process that reduces friction and increases customer satisfaction.</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Data-Driven Decisions</h3>
              <p className="text-white">Real-time insights that inform inventory decisions, staffing, and marketing strategies.</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[var(--cres-electric-teal)] mb-3">Scalable Operations</h3>
              <p className="text-white">Processes that work whether serving 50 customers/day or 500, with room for future expansion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/70 backdrop-blur-sm border border-white/20 bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-[0-9]xl font-black underline-custom text-[var(--cres-deep-navy)] mb-8">What This Case Teaches</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Traffic doesn't equal sales</h3>
                <p className="text-white">High foot traffic is meaningless without systems to convert visitors into customers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Customer journeys are complex</h3>
                <p className="text-white">Modern customers research, compare, and decide across multiple channels and touchpoints.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Data enables optimization</h3>
                <p className="text-white">Without tracking customer behavior, businesses can't identify and fix conversion bottlenecks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[var(--cres-electric-teal)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-[var(--cres-deep-navy)] mb-1">Systems create consistency</h3>
                <p className="text-white">Standardized processes ensure every customer receives the same high-quality experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--cres-electric-teal)] bg-[url('/backround.png')] bg-repeat bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-[0-9]xl font-black underline-custom text-white mb-8">Is This Similar to Your Business?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-white/20/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">This applies to you if:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• You have good foot traffic but poor conversion</li>
                <li>• Customer decisions happen across multiple touchpoints</li>
                <li>• You want data-driven sales optimization</li>
                <li>• You're ready to invest in customer experience systems</li>
                <li>• You want predictable, measurable sales growth</li>
              </ul>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-white/20/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Let's discuss your situation:</h3>
              <ul className="text-white space-y-2 text-left">
                <li>• Physical retail stores with conversion challenges</li>
                <li>• Service businesses with complex customer journeys</li>
                <li>• Companies wanting to optimize sales processes</li>
                <li>• Businesses needing customer data and insights</li>
                <li>• Organizations preparing for expansion</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-black/70 backdrop-blur-sm border border-white/20 text-[var(--cres-electric-teal)] hover:bg-black/70 backdrop-blur-sm border border-white/20 font-black text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Let's Map Your Growth System
            </a>
            <a href="/case-studies" className="border-2 border-white text-white hover:bg-black/70 backdrop-blur-sm border border-white/20 hover:text-[var(--cres-electric-teal)] font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300">
              View More Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
