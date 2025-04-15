export const generateBarcode = () => {
  return Math.floor(100 + Math.random() * 999899); // entre 100 e 999999 (3 a 6 dígitos)
};
