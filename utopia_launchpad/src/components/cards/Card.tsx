interface CardProps {
  nftdata: {
    title: string,
    image: string,
    status: string,
    startDate: string,
    mintPrice: number,
    supply: number,
    minted: number|string,
  };
}



const Card = ({ nftdata }:CardProps) => {
  return (
    <article className=" relative w-full max-w-[450px] p-4 rounded-2xl border border-neutral-700  ">
      <img
        className="w-full h-[300px] object-cover relative rounded-2xl"
        src={nftdata.image}
        alt="Placeholder image"
      />

      <div className="absolute top-6 right-6 px-4 py-2 bg-amber-600 rounded-lg">
        <span className="text-white text-sm font-normal  leading-tight">
          {nftdata.status}
        </span>
      </div>
      <section className=" px-4 py-2 flex flex-col ">
        <h2 className="title text-white text-2xl font-bold leading-loose">
          {nftdata.title}
        </h2>
        <p className=" text-white text-sm font-normal leading-tight pb-3">
          {nftdata.startDate}
        </p>
      </section>
      <div className="self-stretch p-4 bg-neutral-800 rounded-2xl border border-neutral-700 flex justify-between items-center">
        <div className="stats-item flex flex-col gap-1">
          <span className="label text-red-400 text-sm font-normal leading-tight">
            Mint Price
          </span>
          <span className=" text-white text-xl font-bold leading-7">
           {nftdata.mintPrice} SEI
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="label text-red-400 text-sm font-normal leading-tight">
            Supply
          </span>
          <span className="value text-white text-xl font-bold leading-7">
           {nftdata.supply}
          </span>
        </div>
        <div className="stats-item flex flex-col gap-1">
          <span className="label text-red-400 text-sm font-normal font-['Inter'] leading-tight">
            Minted
          </span>
          <span className="value text-white text-xl font-bold font-['Inter'] leading-7">
            {`${nftdata.minted}%`}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
