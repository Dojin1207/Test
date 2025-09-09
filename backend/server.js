const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const correctPassword = "1234";

app.post('/api/verify-password', (req, res) => {
    const { password } = req.body;

    console.log(`Received password: ${password}`);

    if (password === correctPassword) {
        res.status(200).json({ success: true, message: '비밀번호가 일치합니다.' });
    } else {
        res.status(401).json({ success: false, message: '비밀번호가 올바르지 않습니다.' });
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});