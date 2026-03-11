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

function Link5() {
  return (
    <div className="absolute border-[#101828] border-[1.667px] border-solid h-[63.333px] left-[200.66px] rounded-[18641400px] top-[574.1px] w-[203.108px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[32px] not-italic text-[#0a0a0a] text-[18px] top-[16.33px] tracking-[-0.4395px] whitespace-nowrap">Join the coalition</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute border-[#d1d5dc] border-[1.667px] border-solid h-[63.333px] left-[419.77px] rounded-[18641400px] top-[574.1px] w-[158.151px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[32px] not-italic text-[#0a0a0a] text-[18px] top-[16.33px] tracking-[-0.4395px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute border-[#101828] border-[1.667px] border-solid h-[71.328px] left-[701.09px] rounded-[18641400px] top-[2172.05px] w-[231.146px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[114px] not-italic text-[#0a0a0a] text-[20px] text-center top-[19.67px] tracking-[-0.4492px] whitespace-nowrap">Join the coalition</p>
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
    <div className="absolute content-stretch flex flex-col h-[120.538px] items-start left-0 pt-[48.55px] px-[200.66px] top-[2371.37px] w-[1633.333px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <P />
    </div>
  );
}

export default function ThePittsburghAiSafetyCoalitionPaisc() {
  return (
    <div className="bg-white relative size-full" data-name="The Pittsburgh AI Safety Coalition (PAISC)">
      <Nav />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[200.66px] not-italic text-[#0a0a0a] text-[72px] top-[205.2px] tracking-[0.123px] w-[751px]">
        <span className="leading-[72px]">{`The Pittsburgh `}</span>
        <span className="leading-[72px] text-[#155dfc]">AI Safety</span>
        <span className="leading-[72px]">{` Coalition`}</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48.75px] left-[200.66px] not-italic text-[#364153] text-[30px] top-[380.52px] tracking-[0.3955px] w-[755px]">Building public pressure for federal AI safety legislation that works toward an international treaty on frontier AI governance.</p>
      <Link5 />
      <Link6 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[200.66px] not-italic text-[#0a0a0a] text-[48px] top-[830.54px] tracking-[0.3516px] whitespace-nowrap">
        <span className="leading-[48px]">{`Our `}</span>
        <span className="leading-[48px] text-[#155dfc]">Mission</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[39px] left-[200.66px] not-italic text-[#364153] text-[24px] top-[925.98px] tracking-[0.0703px] w-[879px]">Build public pressure for federal AI safety legislation that works toward an international treaty on frontier AI governance.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[200.66px] not-italic text-[#0a0a0a] text-[48px] top-[1197.09px] tracking-[0.3516px] whitespace-nowrap">
        <span className="leading-[48px]">{`Coalition `}</span>
        <span className="leading-[48px] text-[#155dfc]">Identity</span>
      </p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[200.66px] not-italic text-[#0a0a0a] text-[30px] top-[1308.53px] tracking-[0.3955px] w-[1023.993px]">Nonpartisan</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[200.66px] not-italic text-[#364153] text-[20px] top-[1359.42px] tracking-[-0.4492px] w-[993px]">The coalition exists to address one issue: AI safety. We actively seek members across the political spectrum. We understand that our society is in a moment of political polarization but firmly believe that we can come together around this issue, which will touch the lives of everyone in one way or another.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[200.66px] not-italic text-[#0a0a0a] text-[30px] top-[1473.52px] tracking-[0.3955px] w-[1023.993px]">Breadth over technical depth</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[200.66px] not-italic text-[#364153] text-[20px] top-[1524.41px] tracking-[-0.4492px] w-[987px]">We are not a policy think tank. Our comparative advantage is showing that ordinary citizens in our politically important swing state care about this issue. We seek out membership from people across all walks of life, whether they have prior technical knowledge about AI or not.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[200.66px] not-italic text-[#0a0a0a] text-[30px] top-[1671.02px] tracking-[0.3955px] w-[1023.993px]">Pittsburgh-focused</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-px leading-[32.5px] left-[201px] not-italic text-[#364153] text-[20px] top-[1722px] tracking-[-0.4492px] w-[947px]">{` Pittsburgh is a fast developing AI hub. Although decisions about AI made anywhere affect people everywhere, living in a tech-focused city gives us unique leverage to move our legislators.`}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[817.55px] not-italic text-[#0a0a0a] text-[48px] text-center top-[1980.62px] tracking-[0.3516px] whitespace-nowrap">
        <span className="leading-[48px]">{`Ready to make a `}</span>
        <span className="leading-[48px] text-[#155dfc]">difference</span>
        <span className="leading-[48px]">?</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[817.14px] not-italic text-[#364153] text-[24px] text-center top-[2059.73px] tracking-[0.0703px] w-[719px]">Join the coalition and help build the political salience of AI safety as an issue.</p>
      <Link7 />
      <Footer />
    </div>
  );
}