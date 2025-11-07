export default function Future() {
  const phases = [
    {
      phase: 'Phase 2',
      title: 'ERP Integration & Data Automation',
      items: [
        'Direct integration with Bioworld\'s ERP system',
        'Automated PO-based data pulling',
        'Real-time inventory sync',
        'Vendor compliance validation',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Advanced Automation & Vendor Portal',
      items: [
        'Automated ticket image generation',
        'Factory-facing vendor portal',
        'Workflow analytics dashboard',
        'Multi-site deployment',
      ],
    },
  ]

  return (
    <section id="future" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          Future Expansion Roadmap
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Phase 1 establishes the foundation for end-to-end automation
        </p>
        <div className="bg-accent/5 border-l-4 border-accent p-10 md:p-12 mb-20">
          <p className="text-2xl font-semibold text-black leading-relaxed text-center">
            Build toward a unified AI operations platform that automates product packaging, trim selection, labeling, and vendor compliance across your entire supply chain.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 hover:border-accent p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-black text-white font-bold">{phase.phase}</div>
                <h3 className="text-xl font-bold text-black">{phase.title}</h3>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-5 border border-black">
            <span className="text-charcoal text-sm font-medium">
              <span className="font-bold text-black">Modular architecture</span> enables seamless phase expansion
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
