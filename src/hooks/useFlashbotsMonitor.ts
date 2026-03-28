import { useEffect, useState } from 'react';

const useFlashbotsMonitor = () => {
    const [spread, setSpread] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);

    const fetchSpread = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.flashbots.net/rpc'); // Replace with actual Flashbots RPC URL
            const data = await response.json();
            setSpread(data.spread); // Adjust depending on the actual data structure
            setLastUpdate(new Date().toISOString());
            setError(null);
        } catch (err) {
            setError(err.message);
            setSpread(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpread();
        const interval = setInterval(fetchSpread, 60000); // Fetch every minute
        return () => clearInterval(interval);
    }, []);

    return { spread, loading, error, lastUpdate };
};

export default useFlashbotsMonitor;