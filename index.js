const fs = require('fs');
const superagent = require('superagent');
const server = require('http').createServer();

//CMD + D

//Constants
const PORT = 5000;
const HOST = '0.0.0.0';

//fetch all the dogs breed
const urlFileBuilder = async () => {
  try {
    let data = await superagent.get('https://dog.ceo/api/breeds/list/all');
    console.log('Loading data...');

    console.log('Writting url into file...');
    await writeData(data.body.message);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Create a file with every dog url image
const writeData = async (breeds) => {
  try {
    var url = [];
    for (const element in breeds) {
      url.push(`https://dog.ceo/api/breed/${element}/images/random`);
    }
    fs.writeFile('dog_img.txt', url.join('\n'), (err) => {
      if (err) return console.log('Can`t write data');
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

urlFileBuilder();
