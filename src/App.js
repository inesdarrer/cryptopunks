import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  const [selectedPunk, setSelectedPunk] = useState(1)
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x6B8E33eC3a1d1596a23522509cF504cdEC20d322&order_direction=desc');

      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    };

    return getMyNfts();
  }, [])



  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}


    </div>

  );
}

export default App;
