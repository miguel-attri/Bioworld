export default function Timeline() {
  const weeks = [
    {
      week: 'Week 1',
      title: 'Foundation',
      items: [
        'Finalize customer rule sets',
        'Complete trim mapping data models',
      ],
    },
    {
      week: 'Week 2',
      title: 'Development',
      items: [
        'Build Pack Pilot UI',
        'Develop template engine',
      ],
    },
    {
      week: 'Week 3',
      title: 'Integration',
      items: [
        'Implement PDF generation',
        'Test across multiple retailers',
      ],
    },
    {
      week: 'Week 4',
      title: 'Testing',
      items: [
        'End-to-end technical testing',
        'Quality assurance validation',
      ],
    },
    {
      week: 'Week 5',
      title: 'Deployment',
      items: [
        'User acceptance testing',
        'Production deployment',
      ],
    },
    {
      week: 'Week 6',
      title: 'Launch',
      items: [
        'Team training sessions',
        'Documentation delivery',
        'Go-live support',
      ],
    },
  ]

  return (
    <section id="timeline" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display text-center">
          6-Week Implementation Timeline
        </h2>
        <p className="text-lg md:text-xl text-charcoal text-center mb-20 max-w-2xl mx-auto leading-relaxed">
          Structured delivery with clear milestones
        </p>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300"></div>
            <div className="grid grid-cols-6 gap-4 relative">
              {weeks.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 cursor-pointer group border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="bg-white border-2 border-gray-200 hover:border-accent p-4 w-full transition-all duration-300">
                    <div className="font-bold text-black text-xs mb-1">{item.week}</div>
                    <div className="font-semibold text-black text-sm mb-2">{item.title}</div>
                    <ul className="space-y-1">
                      {item.items.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-accent">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden space-y-6">
          {weeks.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                {index < weeks.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                )}
              </div>
              <div className="flex-1 bg-white border-2 border-gray-200 hover:border-accent p-6 mb-4 transition-all duration-300">
                <div className="font-bold text-black mb-1">{item.week}</div>
                <div className="font-semibold text-black mb-3">{item.title}</div>
                <ul className="space-y-2">
                  {item.items.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
