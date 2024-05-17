import pool from "../config/database.js"

export async function getUser (id) {
    const [select] = await pool.query(`SELECT * 
    FROM tb_cliente where 
    idCliente = ?`, [id])
    return select[0]
}

export async function insertUser (id, name, email, password){
    const [result] = await pool.query(`
    INSERT INTO tb_cliente
    (idCliente, nome, email, senha) VALUES (?, ? ,? ,?) `
    , [id, name, email, password])
    const iduser = result.insertId
    return getUser(iduser);
}

const userI = await insertUser(7, 'test', 'test@test.com', 'test123')
console.log(userI)