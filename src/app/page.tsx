//-top-106.25 -left-106.25

export default function Home() {
  return (<>
    <div className="w-screen h-screen bg-dark grid grid-cols-2">

      <div className="absolute -top-10 -left-10 light-effect pointer-events-none w-400 h-400"></div>

      <div className="w-full h-full flex justify-center items-center flex-col z-10">
        <h1 className="font-bodoni text-light text-5xl">SILVER CLARION</h1>
        <p className="text-light font-bentham text-center text-2xl mt-5">Clarinet as a passion.<br />As a lifestyle.<br />As a love.</p>
        <button className="bg-[#ffffff] hover:bg-light duration-300 px-8 py-3 mt-10 cursor-pointer text-dark hover:text-[#000000] font-bentham text-[22px]">Explore</button>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <h1 className="font-bodoni text-light">IMAGE</h1>
      </div>
    </div>
  </>);
}
