// express server
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    // capaz tenga que cambiar esto y apuntar a src/index o a dist/index.html
 });

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});