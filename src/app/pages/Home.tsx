import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-6xl mb-12" style={{ fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          The Pittsburgh <span className="text-[#155dfc]">AI Safety</span> Coalition
        </h1>
        <p className="text-2xl text-[#364153] mb-12 max-w-3xl" style={{ lineHeight: '1.6' }}>
          Building public pressure for federal AI safety legislation that works toward an international treaty on frontier AI governance.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSSmNQaquQgkrRb2UFuZD3ALPWzdfeimrKc4nMYIzLUXBQjQ/viewform?usp=sharing&ouid=113684943441947452033"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#101828] rounded-full px-8 py-3 hover:bg-[#101828] hover:text-white transition-all inline-block"
          >
            Join the coalition
          </a>
          <Link 
            to="/about" 
            className="border-2 border-[#d1d5dc] rounded-full px-8 py-3 hover:border-[#101828] transition-all inline-block"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl mb-12" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          Our <span className="text-[#155dfc]">Mission</span>
        </h2>
        <p className="text-xl text-[#364153] max-w-4xl" style={{ lineHeight: '1.6' }}>
          Build public pressure for federal AI safety legislation that works toward an international treaty on frontier AI governance.
        </p>
      </section>

      {/* Coalition Identity Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl mb-16" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          Coalition <span className="text-[#155dfc]">Identity</span>
        </h2>
        
        <div className="space-y-16 max-w-4xl">
          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Nonpartisan</h3>
            <p className="text-lg text-[#364153]" style={{ lineHeight: '1.6' }}>
              The coalition exists to address one issue: AI safety. We actively seek members across the political spectrum. We understand that our society is in a moment of political polarization but firmly believe that we can come together around this issue, which will touch the lives of everyone in one way or another.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Breadth over technical depth</h3>
            <p className="text-lg text-[#364153]" style={{ lineHeight: '1.6' }}>
              We are not a policy think tank. Our comparative advantage is showing that ordinary citizens in our politically important swing state care about this issue. We seek out membership from people across all walks of life, whether they have prior technical knowledge about AI or not.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Pittsburgh-focused</h3>
            <p className="text-lg text-[#364153]" style={{ lineHeight: '1.6' }}>
              Pittsburgh is a fast developing AI hub. Although decisions about AI made anywhere affect people everywhere, living in a tech-focused city gives us unique leverage to move our legislators.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl mb-8" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          Ready to make a <span className="text-[#155dfc]">difference</span>?
        </h2>
        <p className="text-xl text-[#364153] mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
          Join the coalition and help build the political salience of AI safety as an issue.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSSmNQaquQgkrRb2UFuZD3ALPWzdfeimrKc4nMYIzLUXBQjQ/viewform?usp=sharing&ouid=113684943441947452033"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#101828] rounded-full px-10 py-4 hover:bg-[#101828] hover:text-white transition-all text-lg inline-block"
        >
          Join the coalition
        </a>
      </section>

      <Footer />
    </div>
  );
}