import { Network, getChainId, getNetworkUrl } from "@/utils/network";
import { OAuthExtension } from "@magic-ext/oauth";
import { AuthExtension } from "@magic-ext/auth";
import { Magic as MagicBase } from "magic-sdk";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
const { Web3 } = require("web3");

export type Magic = MagicBase<AuthExtension & OAuthExtension[]>;

type MagicContextType = {
  magic: Magic | null;
  web3: typeof Web3 | null;
  network: Network;
  switchNetwork(network: Network): void;
};

const MagicContext = createContext<MagicContextType>({
  magic: null,
  web3: null,
  network: Network.POLYGON_MUMBAI,
  switchNetwork: (network: Network) => {},
});

export const useMagic = () => useContext(MagicContext);

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const [network, switchNetwork] = useState<Network>(Network.POLYGON_MUMBAI);
  const [magic, setMagic] = useState<Magic | null>(null);
  const [web3, setWeb3] = useState<typeof Web3 | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      console.log("active network: ", network);

      const magic = new MagicBase(
        process.env.NEXT_PUBLIC_MAGIC_API_KEY as string,
        {
          network: {
            rpcUrl: getNetworkUrl(network),
            chainId: getChainId(network),
          },
          extensions: [new AuthExtension(), new OAuthExtension()],
        }
      );

      setMagic(magic);
      setWeb3(new Web3((magic as any).rpcProvider));
    }
  }, [network]);

  const value = useMemo(() => {
    return {
      magic,
      web3,
      network,
      switchNetwork,
    };
  }, [magic, web3, network]);

  return (
    <MagicContext.Provider value={value}>{children}</MagicContext.Provider>
  );
};

export default MagicProvider;
