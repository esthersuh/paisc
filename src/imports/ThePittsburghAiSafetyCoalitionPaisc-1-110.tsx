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

function Frame() {
  return <div className="absolute left-[302.34px] size-[100px] top-[1223px]" />;
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[202px] not-italic text-[#0a0a0a] text-[60px] top-[157px] tracking-[0.2637px] whitespace-nowrap">
        <span className="leading-[60px]">{`About `}</span>
        <span className="leading-[60px] text-[#155dfc]">PAISC</span>
      </p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[202px] not-italic text-[#364153] text-[24px] top-[248.55px] tracking-[0.0703px] w-[835px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[39px]">{`The Pittsburgh AI Safety Coalition is building grassroots support for meaningful AI safety legislation. In 2023, the Center for AI Safety `}</span>
          <a className="cursor-pointer decoration-solid leading-[39px] underline" href="https://safe.ai/work/press-release-ai-risk">
            <span className="decoration-solid leading-[39px]" href="https://safe.ai/work/press-release-ai-risk">
              released a statement
            </span>
          </a>
          <span className="leading-[39px]">{` saying that mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war. The statement was signed by top AI experts and CEOs of leading AI companies. Yet no meaningful legislation has followed.`}</span>
        </p>
        <p className="leading-[39px] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[39px]">{`In March 2026, public figures from across the political spectrum released a `}</span>
          <a className="cursor-pointer decoration-solid leading-[39px] underline" href="https://humanstatement.org/">
            <span className="decoration-solid leading-[39px]" href="https://humanstatement.org/">
              pro-human AI declaration
            </span>
          </a>
          <span className="leading-[39px]">. PAISC strongly supports this declaration, and our goal is to mobilize growing public concern about AI into concrete regulation that protects us all from unfettered AI expansion.</span>
        </p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[202.34px] not-italic text-[#0a0a0a] text-[36px] top-[978px] tracking-[0.3691px] whitespace-nowrap">
        <span className="leading-[40px]">{`Theory of `}</span>
        <span className="leading-[40px] text-[#155dfc]">Change</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[202.34px] not-italic text-[#364153] text-[20px] top-[1048.66px] tracking-[-0.4492px] w-[881px]">Our primary goal is to build the political salience of AI safety as an issue. We do this by demonstrating to legislators and the broader political ecosystem that a broad, bipartisan constituency cares about this. By lobbying legislators, we hope to enact laws that meaningfully regulate the development of this technology.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[202px] not-italic text-[#0a0a0a] text-[36px] top-[1249.17px] tracking-[0.3691px] whitespace-nowrap">What we’re working on</p>
      <Frame />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[202px] not-italic text-[#0a0a0a] text-[30px] top-[1320.83px] tracking-[0.3955px] w-[1232.014px]">1. Sense of the Senate / House Resolution</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[202px] not-italic text-[#364153] text-[20px] top-[1371.72px] tracking-[-0.4492px] w-[871px]">{`Our first ask is that our senators and house representatives co-sponsor and introduce a resolution declaring that the U.S. should pursue an international treaty on frontier AI governance. This is a low-stakes action that would catalyze the legislative process around AI and signal openness to international coordination. We want to make clear to our representatives that their constituents care about this issue and expect AI governance to keep pace with the technology's current capabilities.`}</p>
      <Footer />
    </div>
  );
}