// express 세팅
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// 모델 로드
const { User } = require('./models/user');

// 미들웨어 사용
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoDB 연결
mongoose.connect('mongodb://localhost:27017/TestDB')
    .then(() => console.log('Mongo DB Connected ...'))
    .catch(err => console.log(err));

// 라우터 =====================================================================

// 루트 라우터
app.get('/', (req, res) => res.send('안녕하세요!'));

// 회원가입 라우터
app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

// 라우터 =====================================================================

// 서버 활성화
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));