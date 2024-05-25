import pool from "../config/database.js";

export async function getEstablishment(id) {
  try {
    const [select] = await pool.query(
      `SELECT * 
        FROM tb_estabelecimento where 
        idEstabelecimento = ?`,
      [id]
    );
    return select[0];
  } catch (err) {
    console.error("Error GETTING establishment: ", err);
    return { error: "Internal server error" };
  }
}

export async function insertEstablishment(
  name,
  cnpj,
  fantasyName,
  telephone,
  email,
  password
) {
  try {
    const [result] = await pool.query(
      `
        INSERT INTO tb_estabelecimento
        (nomeEstabelecimento, cnpj, nomeFantasia, telefone, email, senha) VALUES (? ,? ,?, ?, ?, ?) `,
      [name, cnpj, fantasyName, telephone, email, password]
    );

    // show the created establishment
    const idEstablishment = result.insertId;
    const establishment = await getUser(idEstablishment);
    return {
      message: `Establishment ID:${idEstablishment} CREATED SUCCESSFULLY, Result:${establishment}`,
    };
  } catch (err) {
    console.error("Error CREATING establishment: ", err);
    return { error: "Internal server error" };  
  }
}

export async function updateEstablishment(
  id,
  name,
  cnpj,
  fantasyName,
  telefone,
  email,
  password
) {
  try {
    const [update] = pool.query(
      `
        FROM tb_estabelecimento SET 
        nome = ?, cnpj = ?, nomeFantasia = ?, telefone = ?, email = ?, senha = ?
        WHERE idEstabelecimento = ?
        `,
      [name, cnpj, fantasyName, telefone, email, password, id]
    );
    const idEstablishment = result.insertId;
    const establishment = getEstablishment(idEstablishment);
    return {
      message: `Establishment id:${idEstablishment} updated. Result:${establishment}`,
    };
  } catch (err) {
    console.error("Error UPDATING establishment: ", err);
    return { error: "Internal server error" };
  }
}

export async function deleteEstablishment(id) {
  try {
    const [deleteEstb] = pool.query(
      `
        DELETE FROM tb_estabelecimentos
        WHERE idEstabelecimento = ?
        `,
      [id]
    );
    const idEstablishment = result.insertId;
    return {
      message: `Establishment id:${idEstablishment} deleted.`,
    };
  } catch (err) {
    console.error("Error DELETING establishment:", err);
    return { error: "Internal server error" };
  }
}
