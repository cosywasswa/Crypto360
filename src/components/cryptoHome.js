import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCrypto, setSearchQuery } from '../redux/Crypto/cryptoSlice';
import CryptoItem from './cryptoItem';
import logo from './logos/crypto.png';

function CryptoHome() {
  const dispatch = useDispatch();
  const {
    cryptoArr, isLoading, isError, searchQuery,
  } = useSelector((store) => store.cryptoList);

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  const searchResults = cryptoArr.filter(
    (crypto) => crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
      || crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const nonSearchResults = cryptoArr.filter(
    (crypto) => !crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
      && !crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const finalCryptoArr = [...searchResults, ...nonSearchResults];

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h1>Something went wrong...</h1>
      </div>
    );
  }
  return (
    <div className="crypto-container">
      <div className="logo-div">
        <img src={logo} className="logo" alt="crypto " />
      </div>
      <div className="stat-and-form">
        <h1 className="stats">Crypto Stats</h1>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search for Currency "
            className="input-field"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="main-item">
        <div className="container">
          {finalCryptoArr.map((crypto) => (
            <Link
              key={crypto.id}
              to={{
                pathname: `/Details/${crypto.id}`,
                state: {
                  cryptoArr: crypto,
                },
              }}
              className="crypto"
            >
              <CryptoItem
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                rank={crypto.rank}
                price={parseFloat(crypto.priceUsd).toFixed(2)}
              />
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoHome;
