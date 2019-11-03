exports.formatter = data => {
  const dataArray = data.split('\n');
  const formattedArray = [];
  const auxArray = [];
  dataArray.forEach(dato => {
    auxArray.push(dato);
    if (dato[0] === '4') {
      formattedArray.push(auxArray.slice());
      auxArray.length = 0;
    }
  });
  return formattedArray;
};

exports.obtainFotterInformation = rawFooter => {};

exports.generateTransaction = (rawTransaction, footer) => {};

exports.generatePayment = (rawPayment, footer) => {};
