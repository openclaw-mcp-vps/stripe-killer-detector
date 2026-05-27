export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Fintech Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Early Warning System for<br />
          <span className="text-[#58a6ff]">Payment Processor Account Risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your Stripe, PayPal, and Square account health in real time. Get alerted before chargeback rates, dispute ratios, or compliance flags put your account at risk of termination.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Risk indicators */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { label: 'Chargeback Rate', value: '0.84%', status: 'warning', note: 'Threshold: 1%' },
            { label: 'Dispute Ratio', value: '0.31%', status: 'ok', note: 'Well within limits' },
            { label: 'Compliance Flags', value: '2 Active', status: 'danger', note: 'Action required' },
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-xs text-[#8b949e] uppercase tracking-wide mb-1">{item.label}</p>
              <p className={`text-2xl font-bold ${
                item.status === 'ok' ? 'text-[#3fb950]' :
                item.status === 'warning' ? 'text-[#d29922]' : 'text-[#f85149]'
              }`}>{item.value}</p>
              <p className="text-xs text-[#8b949e] mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$99<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay protected</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect Stripe, PayPal & Square',
              'Real-time chargeback & dispute monitoring',
              'Webhook + scheduled health checks',
              'Instant email & SMS alerts',
              'Risk score dashboard',
              'Mitigation recommendations',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which payment processors are supported?',
              a: 'We currently support Stripe, PayPal, and Square. Additional processors are on the roadmap based on customer demand.',
            },
            {
              q: 'How quickly will I be alerted to a risk?',
              a: 'Alerts are sent within minutes via email and SMS when any monitored metric crosses a configurable threshold.',
            },
            {
              q: 'Is my payment processor data secure?',
              a: 'Yes. We use read-only API keys and OAuth scopes. We never store raw transaction data — only aggregated health metrics.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
