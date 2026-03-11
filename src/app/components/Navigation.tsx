import { Link } from 'react-router';

export function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg text-[#0a0a0a] hover:text-[#155dfc] transition-colors">
          The Pittsburgh AI Safety Coalition (PAISC)
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/about" className="text-[#4a5565] hover:text-[#0a0a0a] transition-colors">
            About
          </Link>
          <Link to="/committee" className="text-[#4a5565] hover:text-[#0a0a0a] transition-colors">
            Committee
          </Link>
          <Link to="/risks" className="text-[#4a5565] hover:text-[#0a0a0a] transition-colors">
            Risks of AI
          </Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSSmNQaquQgkrRb2UFuZD3ALPWzdfeimrKc4nMYIzLUXBQjQ/viewform?usp=sharing&ouid=113684943441947452033"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#101828] rounded-full px-6 py-2 hover:bg-[#101828] hover:text-white transition-all"
          >
            Join Coalition
          </a>
        </div>
      </div>
    </nav>
  );
}