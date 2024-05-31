import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

function Operations() {
  return (
    <div id="operations-section" className="section">
      <div className="mb-20">
        {/* <h1 className="relative z-10 text-sm md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          OPERATIONS
        </h1> */}
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-white  text-center font-sans font-bold">
          Everything as simple as possible, but no simpler.
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#262419] min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Instant Transfers
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Tranfser money to anyone, instantly! No fees, no BS.
            </p>
          </div>
          <Image
            src="/transfer.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[30%]  filter -bottom-4 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#271916]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Instant closing
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            No longer need your account? No problem! Close it instantly.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#1b2619] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Buy a home or make your dreams come true, with instant loans.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users,
            </p>
          </div>
          <Image
            src="/request.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

export default Operations;
