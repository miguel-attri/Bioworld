export default function Solution() {
  const benefits = [
    {
      icon: '✓',
      title: 'Automated Matrix Generation',
      description: 'Generate factory-ready packing matrices in under 15 minutes',
    },
    {
      icon: '✓',
      title: 'Centralized Rule Library',
      description: 'Single source of truth for customer requirements and trim specifications',
    },
    {
      icon: '✓',
      title: 'Error Elimination',
      description: 'Validated templates ensure correct customer rules are applied every time',
    },
    {
      icon: '✓',
      title: 'Future-Ready Foundation',
      description: 'Modular architecture ready for ERP integration and workflow expansion',
    },
  ]

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display">
            Introducing Pack Pilot
          </h2>
          <p className="text-lg md:text-xl text-charcoal mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered automation that eliminates manual packaging matrix creation
          </p>
          <div className="bg-accent/5 border-l-4 border-accent p-10 md:p-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-black leading-relaxed">
              A unified platform where your team selects customer + item attributes and automatically generates customer-compliant packing matrices
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-surface border border-gray-200 p-8 hover:border-accent hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-charcoal text-base leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
