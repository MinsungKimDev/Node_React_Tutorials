// express 세팅
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// mongoDB 연결
mongoose.connect('mongodb://localhost:27017/TestDB')
    .then(() => console.log('Mongo DB Connected ...'))
    .catch(err => console.log(err));

// 루트 디렉토리 렌더링
app.get('/', (req, res) => res.send('안녕하세요!')); 

// 서버 활성화
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));