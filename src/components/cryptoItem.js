import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function CryptoItem({
  name, symbol, rank,
}) {
  return (
    <div className="crypto-item">
      <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
      <h2>{symbol}</h2>
      <h4>{name}</h4>
      <p>
        Rank#
        {rank}
      </p>
    </div>
  );
}

CryptoItem.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};
export default CryptoItem;
