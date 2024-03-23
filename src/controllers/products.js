const pool = require("../connection/connection");

const addProducts = async (req, res) => {
    const { nomeProduto, descricaoProduto, valorProduto, disponivelParaVenda } = req.body;

    try {
        if (!nomeProduto || !descricaoProduto || !valorProduto || !disponivelParaVenda) {
            return res.status(400).json({ message: "Todos os campos são obrigatorios" });
        }
        const queryRegister = "insert into produtos (nomeProduto, descricaoProduto, valorProduto, disponivelParaVenda) values ($1, $2, $3, $4)"
        const params = [nomeProduto, descricaoProduto, valorProduto, disponivelParaVenda];
        const record = await pool.query(queryRegister, params);

        return res.status(201).json({ message: "Produto cadastrado com sucesso!" })

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Erro Interno" });
    }

}

const listProducts = async (req, res) => {

    try {
        const query = "select * from produtos order by valorProduto asc";
        const { rows } = await pool.query(query);
        res.status(200).json(rows)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "Erro Interno" });
    }
}


module.exports = { addProducts, listProducts };