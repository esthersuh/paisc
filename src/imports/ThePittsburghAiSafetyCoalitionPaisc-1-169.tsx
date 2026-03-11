function Link() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[54.418px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.33px] tracking-[-0.4492px] whitespace-nowrap">The Pittsburgh AI Safety Coalition (PAISC)</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[43.655px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Committee</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[72.222px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Risks of AI</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[43.316px] relative rounded-[18641400px] shrink-0 w-[149.089px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#101828] border-[1.667px] border-solid inset-0 pointer-events-none rounded-[18641400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[25.66px] not-italic text-[#0a0a0a] text-[16px] top-[8.88px] tracking-[-0.3125px] whitespace-nowrap">Join Coalition</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[43.316px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.996px] h-full items-center relative">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex h-[43.316px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Link />
      <Container />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex flex-col h-[75.868px] items-start left-0 pb-[0.556px] pt-[15.998px] px-[200.66px] top-0 w-[1633.333px]" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Div />
    </div>
  );
}

function P() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[616.64px] not-italic text-[#4a5565] text-[16px] text-center top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Pittsburgh AI Safety Coalition</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[120.538px] items-start left-0 pt-[48.55px] px-[200.66px] top-[2345.87px] w-[1633.333px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <P />
    </div>
  );
}

export default function ThePittsburghAiSafetyCoalitionPaisc() {
  return (
    <div className="bg-white relative size-full" data-name="The Pittsburgh AI Safety Coalition (PAISC)">
      <Nav />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[200.66px] not-italic text-[#0a0a0a] text-[60px] top-[204.3px] tracking-[0.2637px] whitespace-nowrap">
        <span className="leading-[60px]">{`Understanding the `}</span>
        <span className="leading-[60px] text-[#155dfc]">Risks of AI</span>
      </p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[200.66px] not-italic text-[#0a0a0a] text-[36px] top-[502.73px] tracking-[0.3691px] whitespace-nowrap">{`Progress in AI is proceeding at breakneck pace. `}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[201px] not-italic text-[#0a0a0a] text-[36px] top-[1385px] tracking-[0.3691px] w-[883px]">Despite these risks, AI companies are forging ahead with further development.</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[200.66px] not-italic text-[#364153] text-[20px] top-[573.27px] tracking-[-0.4492px] w-[881px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[32.5px]">{`By one metric, capabilities are doubling `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[32.5px] underline" href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[32.5px]" href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/">
              every four to seven months
            </span>
          </a>
          <span className="leading-[32.5px]">. But for all this progress in capabilities, progress in safety and governance has lagged far behind.</span>
        </p>
        <p className="leading-[32.5px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[32.5px]">{`In 2023, CEOs of the major AI labs, along with many other prominent figures in the field, `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[32.5px] underline" href="https://safe.ai/work/press-release-ai-risk">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[32.5px]" href="https://safe.ai/work/press-release-ai-risk">
              signed a statement
            </span>
          </a>
          <span className="leading-[32.5px]">{` declaring that AI represents an existential risk on the level of nuclear war and pandemics. `}</span>
        </p>
        <p className="leading-[32.5px] mb-0">&nbsp;</p>
        <p className="leading-[32.5px] mb-0">The risks come in many forms, some of which include:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[32.5px]">{`Bad Actors: A CEO, government, or bad actor with access to a sufficiently powerful AI could concentrate power and lock in authoritarianism worldwide. `}</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[32.5px]">{`Losing Control: Humanity could lose control of AI altogether, with a misaligned system leading to catastrophic outcomes for humanity. `}</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[32.5px]">Destabilized Information Ecosystem: AI could severely damage our already dysfunctional information ecosystem through deepfakes (photos and videos that are impossible to identify as fabricated) and targeted persuasion campaigns.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[32.5px]">Unprepared Socioeconomic Systems: AI capabilities are advancing at a much faster pace than previous technologies and threaten current economic, educational, and social systems. Without appropriate regulations in place and time to adapt, AI could destabilize society.</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[32.5px]">{`Enhancing Social Isolation: AI could worsen the loneliness epidemic by offering temporary coping mechanisms through anthropomorphic Large Language Models. `}</span>
          </li>
        </ul>
        <p className="leading-[32.5px]">&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[200.66px] not-italic text-[#364153] text-[20px] top-[1500px] tracking-[-0.4492px] w-[881px]">
        <p className="mb-0">{`Arms race dynamics have made it difficult for any single company to slow down. Even if one did, the argument goes, competitors would not, and we'd still face the same problem of development outpacing safety. And while AI development is currently concentrated in the United States and China, the chips used for training will become more widely available over time, meaning AI could eventually be developed anywhere. Because of this, the only way to regulate frontier AI sufficiently is through an international treaty governing its development and deployment.`}</p>
        <p className="mb-0">{`Even though these risks are real and severe, AI does have the potential to benefit humanity profoundly. Systems like AlphaFold have already proven valuable in medical research, and more general systems could advance society in countless ways. But it doesn't make sense to take the big risks that come by rushing to those advances a little sooner.`}</p>
        <p>The CEOs and investors making decisions about AI are a vanishingly small group, but their decisions will affect everyone. We must ensure that choices with consequences for all of humanity are made democratically.</p>
      </div>
      <Footer />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[39px] left-[200.66px] not-italic text-[#364153] text-[24px] top-[295.85px] tracking-[0.0703px] w-[835px]">As artificial intelligence becomes part of everyday life, understanding its risks is more important than ever.</p>
    </div>
  );
}