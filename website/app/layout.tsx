import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trilled - Hybrid Nearshore and AI Agent Teams',
  description: 'Trilled offers innovative hybrid teams combining nearshore talent with AI agents for optimal efficiency and performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
        <iframe 
          id="audio_iframe" 
          src="https://widget.synthflow.ai/widget/v2/1734375424705x493629502574876700/1734375424522x558475900273748500" 
          allow="microphone" 
          width="400px" 
          height="600px" 
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: 'transparent',
            border: 'none',
            zIndex: 999,
            pointerEvents: 'auto'
          }}
        />
      </body>
    </html>
  )
}

