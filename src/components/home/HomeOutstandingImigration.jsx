import React from "react";

const HomeOutstandingImigration = () => {
  return (
    <div className="px-28 w-full py-14 bg-slate-50">
      <div className="grid grid-cols-2 gap-10 w-full">
        {/* Text Grid  */}
        <div className=" w-full">
          <p className="text-sm tracking-widest uppercase text-slate-500">
            what do we offer
          </p>
          <p className="text-4xl font-semibold pt-3">
            Outstanding immigration visa{" "}
            <span className="text-orange-500">services</span>
          </p>
          <p className="text-sm pt-3 text-slate-600 text-justify">
            Expert visa services that ensure a smooth and hassle-free
            immigration process, handled with precision and personalized care
            every step of the way.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-10">
          <div className="w-60 h-60 bg-slate-800">hello</div>
          <div className="w-60 h-60 bg-slate-800">hello</div>
        </div>
      </div>
    </div>
  );
};

export default HomeOutstandingImigration;
