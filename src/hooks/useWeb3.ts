import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const POLYGON_CHAIN_ID = '0x89'; // Hex for Polygon Mainnet

const useWeb3 = () => {
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        const ethersProvider = new ethers.BrowserProvider(window.ethereum);
        setProvider(ethersProvider);

        const accounts = await ethersProvider.listAccounts();
        const currentChainId = await ethersProvider.getNetwork();
        
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setSigner(await ethersProvider.getSigner());
          setIsConnected(true);
        }

        setChainId(currentChainId.chainId);
      }
    };

    initProvider();

    // Handle account changes
    window.ethereum.on('accountsChanged', async (accounts: string[]) => {
      setAccount(accounts[0] || null);
      setSigner(await provider.getSigner());
      setIsConnected(accounts.length > 0);
    });

    // Handle network changes
    window.ethereum.on('chainChanged', async (chainId: number) => {
      setChainId(chainId);
    });

    return () => {
      window.ethereum.removeListener('accountsChanged', () => {});
      window.ethereum.removeListener('chainChanged', () => {});
    };
  }, [provider]);

  const connectWallet = async () => {
    if (provider) {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setSigner(await provider.getSigner());
        setIsConnected(true);
      }
    }
  };

  const switchToPolygon = async () => {
    if (provider) {
      try {
        await provider.send('wallet_switchEthereumChain', [{ chainId: POLYGON_CHAIN_ID }]);
      } catch (switchError) {
        console.error(`Switch Error: ${switchError}`);
      }
    }
  };

  return {
    provider,
    signer,
    account,
    chainId,
    isConnected,
    connectWallet,
    switchToPolygon,
  };
};

export default useWeb3;
