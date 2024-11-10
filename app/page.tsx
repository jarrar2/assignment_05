import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <>
      {/* <div className="w-full"> */}
      <div className="bg-[#A29875]">
        <div className="   m-auto">
          <div className=" flex flex-col text-[40px] text-white justify-center leading-[80.75px] font-bold  pl-[20px] py-[15px]">
            <h1 className="">MANZZARI</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-content w-fit m-auto mt-[60px] gap-10">
        <div className="flex flex-col justify-center gap-4 ">
          <h1 className="text-[27px] font-bold">
            IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
          </h1>
          <h2 className="text-[22px] font-medium">
            An example of intricate workmanship and detail, elegant <br />
            necklaces and long and short chains form a part of our <br />
            desirable collection.
          </h2>
          <Link
            href={""}
            className="bg-[#A29875] text-center gap-[10px] p-[10px] rounded-[10px] font-500 text-[22px] leading-[37.5px] text-white px-[30px] w-[230px]"
          >
            Explore Now
          </Link>
        </div>
        <div className="bg-[url('/slider.png')] w-[350px] h-[476px] bg-no-repeat	 rounded-tl-[150px] rounded-br-[150px]">
          <div className="w-[90%] h-[92%] rounded-tl-[150px] rounded-br-[150px] border-2 m-[20px] "></div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}