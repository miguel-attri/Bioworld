export default function Challenge() {
  const challenges = [
    {
      number: '1',
      title: 'Manual Matrix Creation',
      description: 'Account Services Team manually creates packing instructions for each customer/item combination',
    },
    {
      number: '2',
      title: 'High Error Rate',
      description: 'Version inconsistencies and incorrect customer requirements lead to costly rework',
    },
    {
      number: '3',
      title: 'Slow Turnaround',
      description: 'Clarification emails and manual lookups delay production schedules',
    },
    {
      number: '4',
      title: 'No Standardization',
      description: 'Multiple matrix formats and scattered trim specifications create confusion across teams',
    },
  ]

  return (
    <section id="challenge" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          The Current Packaging Matrix Challenge
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Manual processes create delays, errors, and operational risk
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.number}
              className="bg-white border border-gray-200 p-10 hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{challenge.number}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{challenge.title}</h3>
              <p className="text-charcoal leading-relaxed text-base">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
