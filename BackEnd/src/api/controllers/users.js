import pool from "../config/database.js"

export async function getUser (id) {
    try {
        const [select] = await pool.query(`SELECT * 
        FROM tb_cliente where 
        idCliente = ?`, [id])
        return select[0]
    } 
    catch (err) {
        console.error("Error getting user: ",err)
        return { error: "Internal server error" }
    }
}

export async function insertUser (name, email, password){
    try {
        const [result] = await pool.query(`
            INSERT INTO tb_cliente
        (nome, email, senha) VALUES (? ,? ,?) `
        , [name, email, password])
        
        // show the created user
        const iduser = result.insertId
        const user = await getUser(iduser)
        return { message: 'User updated successfully', user};
    } catch (err) {
        console.error("Error getting user: ",err)
        return { error: "Internal server error" }
    }
}

export async function updateUser (id, name, email, password){
    try {
        const result = await pool.query(`
        UPDATE tb_cliente
        SET nome=? , email=? , senha=?
        WHERE idCliente = ? 
        `, [name, email, password, id])
        return { message: `User ${id} updated successfully!` }
    } catch (err) {
        console.error("Error updating user: ",err)
        return {error: "Internal server error"}
    }
}

export async function deleteUser(id) {
    try {
        const result = await pool.query(`
        DELETE FROM tb_cliente WHERE idCliente = ?
        `, [id])
        return { message: `User ${id} deleted successfully!` }
    } catch (err) {
        console.error("Error deleting user: ",err)
        return {error: "Internal server error"}
    }
}