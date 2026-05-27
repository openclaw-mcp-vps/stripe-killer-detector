import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Killer Detector — Early Warning for Payment Processor Risks',
  description: 'Monitor your payment processor account health, flag risk factors, and prevent account termination before it happens.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="783403cf-51b3-4858-bdf2-ca7b56bb5a63"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
