import React from "react";

const Headlinecard = () => {
  return (
    <div className=" max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 p-4 py-12">
      <div className=" relative rounded-xl">
        <div className=" absolute w-full h-full rounded-xl bg-black/50 text-white ">
          <p className=" p-2 font-bold text-2xl">Sun's Out, BOGO's Out</p>
          <p className="px-2 font-medium">Through 8/26</p>

          <button className=" absolute bottom-4 left-2 py-1 px-3 rounded-full bg-white text-black font-medium">
            Order Now
          </button>
        </div>
        <img
          className=" max-h-[164px] md:max-h-[200px] object-cover rounded-xl w-full"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div className=" relative rounded-xl">
        <div className=" absolute w-full h-full rounded-xl bg-black/50 text-white ">
          <p className=" p-2 font-bold text-2xl">New Restaurants</p>
          <p className="px-2 font-medium">Added Daily</p>

          <button className=" absolute bottom-4 left-2 py-1 px-3 rounded-full bg-white text-black font-medium">
            Order Now
          </button>
        </div>
        <img
          className=" max-h-[164px] md:max-h-[200px] object-cover rounded-xl w-full"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div className=" relative rounded-xl">
        <div className=" absolute w-full h-full rounded-xl bg-black/50 text-white ">
          <p className=" p-2 font-bold text-2xl">We Deliver Desserts Too</p>
          <p className="px-2 font-medium">Tasty Treats</p>

          <button className=" absolute bottom-4 left-2 py-1 px-3 rounded-full bg-white text-black font-medium">
            Order Now
          </button>
        </div>
        <img
          className=" max-h-[164px] md:max-h-[200px] object-cover rounded-xl w-full"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Headlinecard;
