import Card from "./Card";
import data from "../../data.json"



const CardGroup = () => {

  const cardGroup = data.map((card, index) => <Card nftdata={card} key={index}/>);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
      {cardGroup}
    </div>
  );
};

export default CardGroup;
