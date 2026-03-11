import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Risks() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-6xl mb-12" style={{ fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          Understanding the <span className="text-[#155dfc]">Risks of AI</span>
        </h1>
        <p className="text-2xl text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
          As artificial intelligence becomes part of everyday life, understanding its risks is more important than ever.
        </p>
      </section>

      {/* Progress Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl mb-12 max-w-4xl" style={{ fontWeight: 600 }}>
          Progress in AI is proceeding at breakneck pace.
        </h2>
        
        <div className="text-lg text-[#364153] max-w-2xl space-y-8" style={{ lineHeight: '1.6' }}>
          <p>
            By one metric, capabilities are doubling{' '}
            <a 
              href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/" 
              className="text-[#155dfc] underline hover:text-[#0d4ac9] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              every four to seven months
            </a>
            . But for all this progress in capabilities, progress in safety and governance has lagged far behind.
          </p>
          <p>
            In 2023, CEOs of the major AI labs, along with many other prominent figures in the field,{' '}
            <a 
              href="https://safe.ai/work/press-release-ai-risk" 
              className="text-[#155dfc] underline hover:text-[#0d4ac9] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              signed a statement
            </a>
            {' '}declaring that AI represents an existential risk on the level of nuclear war and pandemics.
          </p>
          <p>The risks come in many forms, some of which include:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <strong>Bad Actors:</strong> A CEO, government, or bad actor with access to a sufficiently powerful AI could concentrate power and lock in authoritarianism worldwide.
            </li>
            <li>
              <strong>Losing Control:</strong> Humanity could lose control of AI altogether, with a misaligned system leading to catastrophic outcomes for humanity.
            </li>
            <li>
              <strong>Destabilized Information Ecosystem:</strong> AI could severely damage our already dysfunctional information ecosystem through deepfakes (photos and videos that are impossible to identify as fabricated) and targeted persuasion campaigns.
            </li>
            <li>
              <strong>Unprepared Socioeconomic Systems:</strong> AI capabilities are advancing at a much faster pace than previous technologies and threaten current economic, educational, and social systems. Without appropriate regulations in place and time to adapt, AI could destabilize society.
            </li>
            <li>
              <strong>Enhancing Social Isolation:</strong> AI could worsen the loneliness epidemic by offering temporary coping mechanisms through anthropomorphic Large Language Models.
            </li>
          </ul>
        </div>
      </section>

      {/* Despite These Risks Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl mb-12 max-w-4xl" style={{ fontWeight: 600 }}>
          Despite these risks, AI companies are forging ahead with further development.
        </h2>
        
        <div className="text-lg text-[#364153] max-w-2xl space-y-8" style={{ lineHeight: '1.6' }}>
          <p>
            Arms race dynamics have made it difficult for any single company to slow down. Even if one did, the argument goes, competitors would not, and we'd still face the same problem of development outpacing safety. And while AI development is currently concentrated in the United States and China, the chips used for training will become more widely available over time, meaning AI could eventually be developed anywhere. Because of this, the only way to regulate frontier AI sufficiently is through an international treaty governing its development and deployment.
          </p>
          <p>
            Even though these risks are real and severe, AI does have the potential to benefit humanity profoundly. Systems like AlphaFold have already proven valuable in medical research, and more general systems could advance society in countless ways. But it doesn't make sense to take the big risks that come by rushing to those advances a little sooner.
          </p>
          <p>
            The CEOs and investors making decisions about AI are a vanishingly small group, but their decisions will affect everyone. We must ensure that choices with consequences for all of humanity are made democratically.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}