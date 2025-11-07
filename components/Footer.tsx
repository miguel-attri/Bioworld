import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/Attri_Logo.svg"
              alt="Attri Logo"
              width={50}
              height={50}
              className="h-10 w-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Prepared by</span>
          </div>
          <div className="text-sm text-charcoal text-center">
            <p className="font-medium">ayush@attri.ai</p>
            <p className="text-xs text-gray-500 mt-1">CTO, Attri AI</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Prepared for</span>
            <Image
              src="/assets/Bioworld_Logo.svg"
              alt="Bioworld Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500 tracking-wide">
          <p>© 2025 Pack Pilot Statement of Work</p>
        </div>
      </div>
    </footer>
  )
}
