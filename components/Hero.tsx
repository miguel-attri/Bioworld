export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-36 bg-white">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 font-display leading-[1.05] tracking-tight">
          Pack Pilot
        </h1>
        <p className="text-xl md:text-2xl text-charcoal font-normal max-w-3xl mx-auto mb-8 leading-relaxed">
          AI-Powered Packaging Matrix Generator
        </p>
        <div className="max-w-2xl mx-auto mb-24">
          <div className="bg-accent/5 border-l-4 border-accent p-6 md:p-8">
            <p className="text-base md:text-lg text-charcoal leading-relaxed mb-3">
              Pack Pilot is an AI-powered platform that automatically generates compliant packing matrices from customer and item attributes.
            </p>
            <p className="text-base md:text-lg text-charcoal leading-relaxed">
              Eliminates manual errors, reduces rework costs, and accelerates production timelines.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-white border border-gray-200 p-10 hover:border-accent hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-display group-hover:text-accent transition-colors duration-300">
              6 Weeks
            </div>
            <div className="text-gray-500 font-medium uppercase tracking-[0.1em] text-xs">Timeline</div>
          </div>
          <div className="bg-white border border-gray-200 p-10 hover:border-accent hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-display group-hover:text-accent transition-colors duration-300">
              $12,750
            </div>
            <div className="text-gray-500 font-medium uppercase tracking-[0.1em] text-xs">Fixed Investment</div>
          </div>
          <div className="bg-white border border-gray-200 p-10 hover:border-accent hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl md:text-5xl font-bold text-black mb-3 font-display group-hover:text-accent transition-colors duration-300">
              Phase 1
            </div>
            <div className="text-gray-500 font-medium uppercase tracking-[0.1em] text-xs">Core Foundation</div>
          </div>
        </div>
        <div className="mt-12">
          <a href="#challenge" className="inline-flex items-center gap-3 text-charcoal hover:text-black transition-colors font-medium text-sm tracking-wide">
            <span>Explore Details</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
