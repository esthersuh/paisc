import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Committee() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-6xl mb-20" style={{ fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
          <span className="text-[#155dfc]">Steering Committee</span>
        </h1>

        {/* Executive Director */}
        <div className="mb-24">
          <h2 className="text-4xl mb-8 max-w-4xl" style={{ fontWeight: 600 }}>
            Executive Director
          </h2>
          <div className="space-y-6 text-lg text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
            <p className="text-xl" style={{ fontWeight: 500 }}>Max Blair</p>
            <p>
              Max is an oboist in the Pittsburgh Symphony Orchestra with years of experience campaigning and organizing around a range of issues. After seeing growing concern about AI development from experts but no large-scale effort to rein in the risks, he founded the Pittsburgh AI Safety Coalition to pressure legislators to take the steps necessary to avoid the worst outcomes from AI.
            </p>
          </div>
        </div>

        {/* Steering Committee */}
        <div className="mb-24">
          <h2 className="text-4xl mb-8 max-w-4xl" style={{ fontWeight: 600 }}>
            Steering Committee
          </h2>
          <p className="text-lg text-[#364153] max-w-2xl mb-12" style={{ lineHeight: '1.6' }}>
            The steering committee is responsible for guiding the overall strategy and direction of the Pittsburgh AI Safety Coalition.
          </p>
          
          {/* Kenneth Diao */}
          <div className="mb-10">
            <p className="text-xl mb-4 text-[#364153]" style={{ fontWeight: 500 }}>Kenneth Diao</p>
            <p className="text-lg text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
              Kenneth is currently a first-year PhD student in the Social and Decision Sciences department at Carnegie Mellon. He does research on how Large Language Models can be used for persuasion and belief elicitation. He also leads the Effective Altruism student organization at CMU.
            </p>
          </div>

          {/* Eddie Friedman */}
          <div className="mb-10">
            <p className="text-xl mb-4 text-[#364153]" style={{ fontWeight: 500 }}>Eddie Friedman</p>
            <p className="text-lg text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
              Eddie is an undergraduate student at Carnegie Mellon University studying Computer Science, concentrating in Machine Learning and Algorithms. He serves on the board of the Carnegie AI Safety Initiative (CASI), where he works to raise awareness of technical AI safety among students and the broader public.
            </p>
          </div>

          {/* Vy Tran */}
          <div className="mb-10">
            <p className="text-xl mb-4 text-[#364153]" style={{ fontWeight: 500 }}>Vy Tran</p>
            <p className="text-lg text-[#364153] max-w-2xl" style={{ lineHeight: '1.6' }}>
              Vy is a Master's student in AI Engineering - Information Security at Carnegie Mellon and the current Chief of Staff of the Carnegie AI Safety Initiative (CASI). She is exploring how public sentiment and diverse stakeholder input regarding AI safety can transform the regulatory and incentive structures governing companies and countries.
            </p>
          </div>
        </div>
      </section>

      {/* Joining the Coalition Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl mb-12 max-w-4xl" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          Joining the <span className="text-[#155dfc]">Coalition</span>
        </h2>
        
        <div className="text-xl text-[#364153] max-w-2xl space-y-8" style={{ lineHeight: '1.6' }}>
          <p>
            Our coalition is composed of diverse groups, each contributing according to their strengths. Every organization or individual who joins the coalition enters as a member. Members lend their name and endorsement to the coalition's mission and asks. This is the default level of involvement and requires no ongoing time commitment. Members appear on the coalition's public endorser list.
          </p>
          <p>
            Members who want to contribute actively can opt into one or more ongoing working groups organized around specific functions. Current and anticipated working groups include education and outreach, legislative engagement, media and communications, and community organizing. Working groups operate with a high degree of autonomy under their own leads, coordinating with coalition leadership as needed. Contributors commit to participating in their working group's activities on a regular basis, but the level of involvement is flexible.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}