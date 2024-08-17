// src/PrintPage.js
import React from 'react';
import JewelryTag from './JewelryTag';

const PrintPage = ({ item }) => {
  if (!item) return null;

  return (
    <div className="print-page">
      <JewelryTag item={item} />
    </div>
  );
};

export default PrintPage;
