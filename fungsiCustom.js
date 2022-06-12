// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const stepFile1 = (nextStep) => {
  fs.readFile(file1, 'utf-8', (err, data) => {
    let error = null;
    let hasilBaca = [];
    if (err) {
      error = err;
    } else {
      let result = JSON.parse(data);
      hasilBaca.push(result.message.split(' ')[1]);
    }
    nextStep(error, hasilBaca);
  });
}

const stepFile2 = (error, hasilBaca, nextStep) => {
  fs.readFile(file2, 'utf-8', (err, data) => {
    if(!error) {
      if (err) {
        error = err;
      } else {
        let result = JSON.parse(data);
        hasilBaca.push(result[0].message.split(' ')[1]);
      }
    }
    nextStep(error, hasilBaca);
  });
}

const stepFile3 = (error, hasilBaca, nextStep) => {
  fs.readFile(file3, 'utf-8', (err, data) => {
    if(!error) {
      if (err) {
        error = err;
      } else {
        let result = JSON.parse(data);
        hasilBaca.push(result[0].data.message.split(' ')[1]);
      }
    }
    nextStep(error, hasilBaca); 
  });
}

const bacaData = (fnCallBack) => {
  stepFile1((error1, hasilBaca) => {
    stepFile2(error1, hasilBaca, (error2, hasilStep2) => {
      stepFile3(error2, hasilStep2, (error3, hasilStep3) => {
        fnCallBack(error3, hasilStep3);
      })
    })
  }); 
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
