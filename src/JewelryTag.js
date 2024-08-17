// src/JewelryTag.js
import React from 'react';
import Barcode from 'react-barcode';

const JewelryTag = ({ item }) => {
  const { itemName, weight, grossWeight, hallmark, size } = item;

  const tagStyle = {
    width: '55mm',
    height: '12mm',
    border: '1px solid #000',
    padding: '1mm',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.5mm',
  };

  const detailsStyle = {
    flex: '1 1 25%',
    padding: '1mm',
    fontSize: '1.5mm'
  };

  const barcodeStyle = {
    flex: '1 1 75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  return (
    <div style={tagStyle}>
      <div style={detailsStyle}>
        <div><strong>Item:</strong> {itemName}</div>
        <div><strong>Weight:</strong> {weight}</div>
        <div><strong>Gross Weight:</strong> {grossWeight}</div>
        <div><strong>Hallmark:</strong> {hallmark}</div>
        <div><strong>Size:</strong> {size}</div>
      </div>
      <div style={barcodeStyle}>
        <Barcode value={itemName} />
      </div>
    </div>
  );
};

export default JewelryTag;
