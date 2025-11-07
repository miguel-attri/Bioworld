export default function Pricing() {
  const features = [
    'Complete system architecture',
    '6 core functional components',
    'Full implementation & testing',
    'Training & documentation',
    '30-day post-launch support',
    'All source code & IP transfer',
  ]

  const paymentTerms = [
    '50% upon SOW execution',
    '50% upon Phase 1 delivery & acceptance',
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          Pricing
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Fixed-fee pricing with clear payment terms
        </p>
        <div className="relative bg-surface border-2 border-black p-12 md:p-16 mb-16">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-accent px-12 py-5 shadow-lg">
              <span className="text-black font-bold text-3xl">$12,750</span>
            </div>
          </div>
          <div className="mt-8 text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Phase 1 – Pack Pilot Core Implementation
            </h3>
            <p className="text-gray-600 text-lg">Fixed Fee</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-black text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-gray-300 mb-8"></div>
          <div className="bg-white border-2 border-black p-6">
            <h4 className="font-bold text-black mb-4">Payment Terms</h4>
            <ul className="space-y-2">
              {paymentTerms.map((term, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent font-bold">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
