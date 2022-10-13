import app from './App';

const PORT = process.env.PORT || 3000;

// inicia o servidor http na porta 3000
app.listen(PORT, () => console.log(`App rodandona porta ${PORT}`));