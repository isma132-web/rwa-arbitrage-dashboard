import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const useGasCalculator = (provider, maxGasPrice) => {
    const [gasPrice, setGasPrice] = useState(null);

    useEffect(() => {
        const fetchGasPrice = async () => {
            try {
                const gasPriceFromProvider = await provider.getGasPrice();
                const aggressiveGasPrice = maxGasPrice || gasPriceFromProvider.mul(2);
                setGasPrice(aggressiveGasPrice);
            } catch (error) {
                console.error('Error fetching gas price:', error);
            }
        };

        fetchGasPrice();
        const interval = setInterval(fetchGasPrice, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, [provider, maxGasPrice]);

    return gasPrice;
};

export default useGasCalculator;