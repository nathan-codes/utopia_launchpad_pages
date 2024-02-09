import CardGroup from "../components/cards/CardGroup";
import Divider from "../components/Divider";

import Navbar from "../components/navbar/Navbar";

const LaundPad = () => {
  return (
    <div className="max-w-[1450px] px-6 py-4 mx-auto ">
      {/* The Navbar  */}
      <Navbar />
      {/* The divider  */}
      <Divider />
      {/*  The card group rendering individual card components*/}
      <CardGroup />
   
   
    </div>
  );
};

export default LaundPad;
