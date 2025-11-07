export default function Scope() {
  const inScope = [
    'Pack Pilot UI (guided workflow interface)',
    'Customer Template Library (base templates per retailer)',
    'Trim Mapping Sheets (hanger types, stickers, tag placement)',
    'Matrix Composer (structured matrix generation)',
    'PDF Export Engine (factory-ready output format)',
    'User Training & Onboarding (AST training and documentation)',
  ]

  const outOfScope = [
    { text: 'ERP Integration', phase: 'Phase 2' },
    { text: 'Automated Ticket Image Generation', phase: 'Phase 2–3' },
    { text: 'Vendor Portal for Factories', phase: 'Phase 3' },
    { text: 'Automated PO-Based Data Pulling', phase: 'Phase 2' },
  ]

  return (
    <section id="scope" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          Project Scope
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Clear boundaries for Phase 1 implementation
        </p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative">
            <div className="bg-white border border-black p-10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">In Scope</h3>
              </div>
              <ul className="space-y-4">
                {inScope.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-charcoal leading-relaxed text-base">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white border border-gray-300 p-10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-400 text-white flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Out of Scope</h3>
              </div>
              <ul className="space-y-4">
                {outOfScope.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-charcoal leading-relaxed text-base">
                      <span className="font-semibold">{item.text}</span>
                      <span className="text-gray-500 text-sm ml-2">({item.phase})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-surface px-8 py-5 border border-gray-200">
            <span className="text-charcoal text-sm font-medium tracking-wide uppercase">
              Note: Out-of-scope items will be addressed in future phases
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
