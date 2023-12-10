export enum Network {
  POLYGON = "polygon",
  POLYGON_MUMBAI = "mumbai",
  ETHEREUM_GOERLI = "goerli",
  ETHEREUM = "ethereum",
}

export const getNetworkUrl = (network: Network) => {
  switch (network) {
    case Network.POLYGON:
      return "https://polygon-rpc.com/";
    case Network.POLYGON_MUMBAI:
      return "https://rpc-mumbai.maticvigil.com/";
    case Network.ETHEREUM_GOERLI:
      return "https://eth-goerli.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0";
    case Network.ETHEREUM:
      return "https://eth-mainnet.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0";
    default:
      throw new Error("Network not supported");
  }
};

export const getChainId = (network: Network) => {
  switch (network) {
    case Network.POLYGON:
      return 137;
    case Network.POLYGON_MUMBAI:
      return 80001;
    case Network.ETHEREUM_GOERLI:
      return 5;
    case Network.ETHEREUM:
      return 1;
  }
};

export const getNetworkToken = (network: Network) => {
  switch (network) {
    case Network.POLYGON_MUMBAI:
    case Network.POLYGON:
      return "MATIC";
    case Network.ETHEREUM:
    case Network.ETHEREUM_GOERLI:
      return "ETH";
  }
};

export const getFaucetUrl = (network: Network) => {
  switch (network) {
    case Network.POLYGON_MUMBAI:
      return "https://faucet.polygon.technology/";
    case Network.ETHEREUM_GOERLI:
      return "https://goerlifaucet.com/";
  }
};

export const getNetworkName = (network: Network) => {
  switch (network) {
    case Network.POLYGON:
      return "Polygon (Mainnet)";
    case Network.POLYGON_MUMBAI:
      return "Polygon (Mumbai)";
    case Network.ETHEREUM_GOERLI:
      return "Ethereum (Goerli)";
    case Network.ETHEREUM:
      return "Ethereum (Mainnet)";
  }
};

export const getBlockExplorer = (network: Network, address: string) => {
  switch (network) {
    case Network.POLYGON:
      return `https://polygonscan.com/address/${address}`;
    case Network.POLYGON_MUMBAI:
      return `https://mumbai.polygonscan.com/address/${address}`;
    case Network.ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case Network.ETHEREUM_GOERLI:
      return `https://goerli.etherscan.io/address/${address}`;
  }
};
