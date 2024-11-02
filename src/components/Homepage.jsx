import { useState } from "react";
import SideNav from "./SideNav";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Stats from "./Stats";
import Charts from "./Charts";

function Homepage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="md:grid md:grid-cols-[16rem_1fr] md:grid-rows-[auto_1fr] h-screen bg-slate-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md md:hidden">
        <h4 className="text-2xl font-bold text-black">AppZest</h4>
        <button onClick={toggleNav} className="text-black">
          <Bars3Icon className="h-8 w-8" />
        </button>
      </header>

      <SideNav isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <main className={` bg-slate-100 p-6 pt-3 transition-all duration-300 `}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-black text-lg font-bold ">Analytics</h3>
          <button className="bg-gray-200 px-4 py-2 md:pr-[50px] text-gray-900 font-bold rounded-lg">
            Select Data Range
          </button>
        </div>
        <Stats />
        <Charts />
      </main>
    </div>
  );
}

export default Homepage;
