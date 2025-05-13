const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, Kubernetes!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
