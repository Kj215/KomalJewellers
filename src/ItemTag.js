import React from 'react';

// Define a functional component for the ItemTag
const ItemTag = ({ itemName, barcode, shopName, weight, hallmark, size }) => {
  return (
    <div style={styles.container}>
      {/* Left Side: Item Name and Barcode */}
      <div style={styles.leftSide}>
        <div style={styles.itemName}>{itemName}</div>
        <div style={styles.barcode}>{barcode}</div>
      </div>
      
      {/* Right Side: Item Details */}
      <div style={styles.rightSide}>
        <div style={styles.detailTitle}>KJB:</div>
        <div style={styles.detail}>{shopName}</div>
        <div style={styles.detailTitle}>Wt:</div>
        <div style={styles.detail}>{weight}</div>
        <div style={styles.detailTitle}>Hallmark:</div>
        <div style={styles.detail}>{hallmark}</div>
        <div style={styles.detailTitle}>Size:</div>
        <div style={styles.detail}>{size}</div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      width: '55mm',
      height: '12mm',
      border: '1px solid #000',
      fontFamily: 'Arial, sans-serif',
    },
    leftSide: {
      width: '27.5mm',
      height: '12mm',
      padding: '1mm',
      boxSizing: 'border-box',
      borderRight: '1px solid #000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    itemName: {
      fontSize: '6pt',
      fontWeight: 'bold',
    },
    barcode: {
      marginTop: '1mm',
      fontSize: '8pt',
      fontWeight: 'bold',
      border: '1px solid #000',
      padding: '1mm',
      width: '100%',
      height: '6mm',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightSide: {
      width: '27.5mm',
      height: '12mm',
      padding: '1mm',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    detailTitle: {
      fontSize: '5pt',
      fontWeight: 'bolder', // More bold title
      marginBottom: '0.5mm',
    },
    detail: {
      fontSize: '5pt',
      fontWeight: 'bold',
      marginBottom: '0.5mm',
    },
  };
  

export default ItemTag;
