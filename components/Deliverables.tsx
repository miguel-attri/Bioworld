export default function Deliverables() {
  const deliverables = [
    {
      number: '1',
      title: 'Pack Pilot Application',
      description: 'Web-based guided workflow for Account Services Team',
    },
    {
      number: '2',
      title: 'Customer Template Library',
      description: 'Pre-configured templates for each major retailer (Kohl\'s, Target, Hot Topic, etc.)',
    },
    {
      number: '3',
      title: 'Trim Repository',
      description: 'Centralized database of hangers, tags, stickers, and packaging components',
    },
    {
      number: '4',
      title: 'Matrix Composer Engine',
      description: 'Auto-populates validated instructions based on customer + category selection',
    },
    {
      number: '5',
      title: 'PDF Generator',
      description: 'Exports standardized, factory-ready packing matrices',
    },
    {
      number: '6',
      title: 'Training & Support',
      description: 'Team onboarding, documentation, and 30-day post-launch support',
    },
  ]

  const acceptanceCriteria = [
    {
      number: '1',
      description: '90%+ of generated matrices match expected customer formats',
    },
    {
      number: '2',
      description: 'AST completes matrix creation in <15 minutes without manual lookups',
    },
    {
      number: '3',
      description: 'All templates load correctly across 5+ customer scenarios',
    },
  ]

  return (
    <section id="deliverables" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          What Phase 1 Delivers
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Complete Pack Pilot implementation with training and support
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-gray-200 p-10 hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">{item.number}</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-4">{item.title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-black p-10">
          <h3 className="text-2xl font-bold text-black mb-8">Acceptance Criteria</h3>
          <div className="space-y-5">
            {acceptanceCriteria.map((criteria) => (
              <div key={criteria.number} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-accent text-black flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                  {criteria.number}
                </div>
                <p className="text-charcoal leading-relaxed text-base flex-1">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
