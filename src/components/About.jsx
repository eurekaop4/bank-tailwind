import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="">
              Hi. I'm Bank, Nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga
              unde culpa temporibus qui labore pariatur velit magni quas ipsam
              explicabo, eum quaerat doloremque deleniti dignissimos modi
              repellat reprehenderit vero, beatae fugiat consequatur tempore,
              autem facere. Quasi impedit quas corporis iure voluptatem iusto,
              ullam officia cum libero adipisci a quos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
