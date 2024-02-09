

const Divider = () => {
  return (
    <section className="w-full h-[284px] py-20 bg-neutral-800 rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex my-6">
      <div className="h-[124px] flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch text-center  max-w-[450px]">
          <span className="text-white text-4xl md:text-5xl font-bold px-2 md:px-0  leading-[48px]">
            You will never miss an
          </span>
          <span className="text-red-400 text-4xl md:text-5xl font-bold px-2 md:px-0 leading-[48px]">
            {""} NFT {""}
          </span>
          <span className="text-white text-4xl md:text-5xl font-bold px-2 md:px-0 leading-[48px]">
            drop again
          </span>
        </div>
        <div className="text-white text-sm md:text-base font-normal font-['Inter'] leading-tight">
          Unveiling Our NFT Launchpad
        </div>
      </div>
    </section>
  );
}

export default Divider
