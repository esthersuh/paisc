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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-[200.66px] not-italic text-[#155dfc] text-[60px] top-[204.3px] tracking-[0.2637px] whitespace-nowrap">Steering Committee</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[200.66px] not-italic text-[#0a0a0a] text-[36px] top-[354px] tracking-[0.3691px] whitespace-nowrap">Executive Director</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[200.66px] not-italic text-[#364153] text-[20px] top-[424.54px] tracking-[-0.4492px] w-[881px] whitespace-pre-wrap">
        <p className="mb-0">Max Blair</p>
        <p className="mb-0">&nbsp;</p>
        <p>Max is an oboist in the Pittsburgh Symphony Orchestra with years of experience campaigning and organizing around a range of issues. After seeing growing concern about AI development from experts but no large-scale effort to rein in the risks, he founded the Pittsburgh AI Safety Coalition to pressure legislators to take the steps necessary to avoid the worst outcomes from AI.</p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[201px] not-italic text-[#0a0a0a] text-[36px] top-[699.27px] tracking-[0.3691px] whitespace-nowrap">{`Steering Committee `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[201px] not-italic text-[#364153] text-[20px] top-[771.27px] tracking-[-0.4492px] w-[881px]">Kenneth Diao</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[201px] not-italic text-[#364153] text-[20px] top-[827.27px] tracking-[-0.4492px] w-[881px]">Eddie Friedman</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[201px] not-italic text-[#364153] text-[20px] top-[883.27px] tracking-[-0.4492px] w-[881px]">Vy Tran</p>
      <Footer />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[200.66px] not-italic text-[#155dfc] text-[60px] top-[1307.44px] tracking-[0.2637px] whitespace-nowrap">
        <span className="leading-[60px] text-[#0a0a0a]">{`Joining the `}</span>
        <span className="leading-[60px]">Coalition</span>
      </p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[635px] leading-[39px] left-[201px] not-italic text-[#364153] text-[24px] top-[1399px] tracking-[0.0703px] w-[835px] whitespace-pre-wrap">
        <p className="mb-0">Our coalition is composed of diverse groups, each contributing according to their strengths. Every organization or individual who joins the coalition enters as a member. Members lend their name and endorsement to the coalition’s mission and asks. This is the default level of involvement and requires no ongoing time commitment. Members appear on the coalition’s public endorser list.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Members who want to contribute actively can opt into one or more ongoing working groups organized around specific functions. Current and anticipated working groups include education and outreach, legislative engagement, media and communications, and community organizing. Working groups operate with a high degree of autonomy under their own leads, coordinating with coalition leadership as needed. Contributors commit to participating in their working group’s activities on a regular basis, but the level of involvement is flexible.</p>
      </div>
    </div>
  );
}