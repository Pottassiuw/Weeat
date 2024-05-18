import pool from "../config/database.js"

export async function getEstablishment(id) {
    try {
        const [select] = await pool.query(`SELECT * 
        FROM tb_estabelecimento where 
        idEstabelecimento = ?`, [id])
        return select[0]
    } 
    catch (err) {
        console.error("Error getting establishment: ",err)
        return { error: "Internal server error" }
    }
}

export async function insertEstablishment(name, cnpj, fantasyName, telephone, email, password) {
    try {
        const [result] = await pool.query(`
        INSERT INTO tb_estabelecimento
        (nomeEstabelecimento, cnpj, nomeFantasia, telefone, email, senha) VALUES (? ,? ,?, ?, ?, ?) `
        , [name, cnpj, fantasyName, telephone, email, password])
        
        // show the created establishment
        const idEstablishment = result.insertId
        const user = await getUser(idEstablishment)
        return { message: 'User updated successfully', user};
    } catch (err) {
        console.error("Error getting user: ",err)
        return { error: "Internal server error" }
    }
}