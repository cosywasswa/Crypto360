import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsNav from './detailsNav';

function Details() {
  const { id } = useParams();
  const cryptoArr = useSelector((store) => store.cryptoList.cryptoArr);
  const data = cryptoArr.find((crypto) => crypto.id === id);
  return (
    <>
      <DetailsNav />
      <div className="crypto-details">
        <div className="detail-header">
          <h2>{data.name}</h2>
          <p>
            {data.symbol}
          </p>
        </div>
        <div className="more-details">
          <p>Crypto-details</p>
        </div>
        <div className="rank">
          <p>
            Rank
            {' '}
            {' '}
            {data.rank}
          </p>
        </div>
        <div className="price">
          <p>
            Price
          </p>
          <p>
            $
            {parseFloat(data.priceUsd).toFixed(2)}
            USD
          </p>
        </div>
        <div className="supply">
          <p>
            Supply
          </p>
          <p>
            {parseFloat(data.supply).toLocaleString()}
            {' '}
            {data.symbol}
          </p>
        </div>
        <div className="max-supply">
          <p>
            Max Supply
          </p>
          <p>
            {data.maxSupply ? parseFloat(data.maxSupply).toLocaleString() : 'N/A'}
          </p>
        </div>
        <div className="market">
          <p>
            Market Cap
          </p>
          <p>
            $
            {parseFloat(data.marketCapUsd).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
