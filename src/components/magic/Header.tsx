import Image from "next/image";
import Logo from "public/logo.svg";
import DevLinks from "./DevLinks";
import { Network } from "@/utils/network";
import { useMagic } from "./MagicProvider";

const isNetwork = (value: any): value is Network => {
  return Object.values(Network).includes(value);
};

const Header = () => {
  const { network, switchNetwork } = useMagic();
  const onChangeNetwork = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (isNetwork(selectedValue)) {
      switchNetwork(selectedValue);
    }
  };

  return (
    <div className="app-header-container">
      <div className="flex flex-col gap-2.5 items-center">
        <Image src={Logo} alt="logo" />
        <div className="text-center text-white text-xl font-extrabold font-['Inter'] leading-[30px]">
          Magic
        </div>
        <div className="text-center text-white text-opacity-50 text-base font-normal font-['SF Mono'] leading-normal">
          Demo
        </div>
        <div className="text-center text-white">
          <select
            className="bg-gray-800 border-2 border-blue-500 rounded-md text-white py-2 px-4 cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-300 shadow-lg"
            value={network}
            onChange={onChangeNetwork}
          >
            {Object.values(Network).map((label) => (
              <option value={label} key={label}>
                {`${label[0].toUpperCase()}${label.substring(1)}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <DevLinks />
    </div>
  );
};

export default Header;
