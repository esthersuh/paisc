import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-6xl mb-12" style={{ fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          About <span className="text-[#155dfc]">PAISC</span>
        </h1>
        <div className="text-xl text-[#364153] max-w-2xl space-y-8" style={{ lineHeight: '1.6' }}>
          <p>
            The Pittsburgh AI Safety Coalition is building grassroots support for meaningful AI safety legislation. In 2023, the Center for AI Safety{' '}
            <a 
              href="https://safe.ai/work/press-release-ai-risk" 
              className="text-[#155dfc] underline hover:text-[#0d4ac9] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              released a statement
            </a>
            {' '}saying that mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war. The statement was signed by top AI experts and CEOs of leading AI companies. Yet no meaningful legislation has followed.
          </p>
          <p>
            In March 2026, public figures from across the political spectrum released a{' '}
            <a 
              href="https://humanstatement.org/" 
              className="text-[#155dfc] underline hover:text-[#0d4ac9] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              pro-human AI declaration
            </a>
            . PAISC strongly supports this declaration, and our goal is to mobilize growing public concern about AI into concrete regulation that protects us all from unfettered AI expansion.
          </p>
        </div>
      </section>

      {/* Theory of Change Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl mb-12 max-w-4xl" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          Theory of <span className="text-[#155dfc]">Change</span>
        </h2>
        <p className="text-xl text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
          Our primary goal is to build the political salience of AI safety as an issue. We do this by demonstrating to legislators and the broader political ecosystem that a broad, bipartisan constituency cares about this. By lobbying legislators, we hope to enact laws that meaningfully regulate the development of this technology.
        </p>
      </section>

      {/* What We're Working On Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl mb-16 max-w-4xl" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          What we're working on
        </h2>
        
        <div className="max-w-2xl">
          <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
            1. Sense of the Senate / House Resolution
          </h3>
          <p className="text-lg text-[#364153]" style={{ lineHeight: '1.6' }}>
            Our first ask is that our senators and house representatives co-sponsor and introduce a resolution declaring that the U.S. should pursue an international treaty on frontier AI governance. This is a low-stakes action that would catalyze the legislative process around AI and signal openness to international coordination. We want to make clear to our representatives that their constituents care about this issue and expect AI governance to keep pace with the technology's current capabilities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}