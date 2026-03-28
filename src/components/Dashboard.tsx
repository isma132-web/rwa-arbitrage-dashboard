import React from 'react';
import { useWallet } from 'use-wallet';
import axios from 'axios';

const Dashboard = () => {
  const wallet = useWallet();
  const [gasPrice, setGasPrice] = React.useState(0);
  const [rwaSpread, setRwaSpread] = React.useState(0);

  const connectWallet = () => {
    wallet.connect();
  };

  const fetchGasPrice = async () => {
    const response = await axios.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle');
    setGasPrice(response.data.result.ProposeGasPrice);
  };

  const fetchRwaSpread = async () => {
    // Dummy API call to fetch RWA spread
    const response = await axios.get('https://api.example.com/rwa/spread');
    setRwaSpread(response.data.spread);
  };

  const executeArbitrage = () => {
    // Logic to execute arbitrage goes here
  };

  React.useEffect(() => {
    fetchGasPrice();
    fetchRwaSpread();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-10">
      <h1 className="text-4xl text-white font-bold mb-5">RWA Arbitrage Dashboard</h1>
      <button onClick={connectWallet} className="bg-white text-blue-500 px-4 py-2 rounded shadow-lg">Connect Wallet</button>
      <div className="text-white mt-5">
        <p>Gas Price: {gasPrice} Gwei</p>
        <p>RWA Spread: {rwaSpread}%</p>
      </div>
      <button onClick={executeArbitrage} className="mt-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">Execute Arbitrage</button>
    </div>
  );
};

export default Dashboard;