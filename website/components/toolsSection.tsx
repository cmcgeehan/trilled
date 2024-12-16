import Image from 'next/image'

const tools = [
  { name: 'Zapier', logo: '/images/logos/zapier.png' },
  { name: 'Cursor', logo: '/images/logos/cursor.webp' },
  { name: 'Parsio', logo: '/images/logos/parsio.png' },
  { name: 'Keyboard Maestro', logo: '/images/logos/keyboardmaestro.png' },
  { name: 'V0', logo: '/images/logos/v0.png' },
  { name: 'Vercel', logo: '/images/logos/vercel.svg' },
  { name: 'Synthflow', logo: '/images/logos/synthflow.png' },
  { name: 'Google App Script', logo: '/images/logos/appscript.png' },
]

export default function ToolsGallery() {
  // Split tools into two rows
  const firstRow = tools.slice(0, Math.ceil(tools.length / 2));
  const secondRow = tools.slice(Math.ceil(tools.length / 2));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* First Row */}
        <div className="flex justify-center items-center gap-8 mb-8">
          {firstRow.map((tool) => (
            <div key={tool.name} className="w-40 sm:w-48">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 relative group">
                <div className="relative">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={180}
                    height={180}
                    className={`w-full h-auto object-contain p-4 transition-all duration-300 ${
                      tool.name === 'Vercel' || tool.name === 'V0'
                        ? 'brightness-0 invert opacity-70 hover:filter-none hover:brightness-[2] hover:sepia hover:hue-rotate-[320deg] hover:saturate-[8] hover:opacity-100'
                        : 'brightness-125 contrast-75 grayscale invert opacity-70 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:contrast-100 hover:sepia hover:hue-rotate-[320deg] hover:saturate-[8]'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Offset by half a logo width */}
        <div className="flex justify-center items-center gap-8">
          <div className="w-20 sm:w-24 shrink-0"></div> {/* Half-width spacer */}
          {secondRow.map((tool) => (
            <div key={tool.name} className="w-40 sm:w-48">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 relative group">
                <div className="relative">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={180}
                    height={180}
                    className={`w-full h-auto object-contain p-4 transition-all duration-300 ${
                      tool.name === 'Vercel' || tool.name === 'V0'
                        ? 'brightness-0 invert opacity-70 hover:filter-none hover:brightness-[2] hover:sepia hover:hue-rotate-[320deg] hover:saturate-[8] hover:opacity-100'
                        : 'brightness-125 contrast-75 grayscale invert opacity-70 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:contrast-100 hover:sepia hover:hue-rotate-[320deg] hover:saturate-[8]'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

