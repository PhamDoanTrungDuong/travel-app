import React from "react";
import { RiCustomerService2Line, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-3 gap-4">
      <div>
        <div className="border text-center p-4">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-2">12 HOURS LEFT</p>
          <p className="w-full bg-gray-800 text-gray-100 cursor-pointer hover:bg-transparent border-2 border-black duration-300 hover:text-black p-3 rounded-lg">
            BOOK NOW AND SAFE
          </p>
        </div>
        <form>
          <div className="flex flex-col my-2">
            <label>Destinations</label>
            <select className="border rounded-md p-2">
              <option>Grande Antiga</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center md:text-left">
            <button>
              <RiCustomerService2Line size={50} />
            </button>
            <div className="p-4">
              <h3 className="py-2">LEADING SERVICES</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center md:text-left">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="p-4">
              <h3 className="py-2">LEADING SERVICES</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
