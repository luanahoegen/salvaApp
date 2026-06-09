import { useSQLiteContext } from "expo-sqlite";

export type UserDatabase = {
  nome_completo: string;
  email: string;
  senha_hash: string;
  data_nascimento: string;
};

export function useUserDatabase() {
  const database = useSQLiteContext();

  async function create(data: UserDatabase) {
    const statement = await database.prepareAsync(
      `INSERT INTO usuarios 
      (nome_completo, email, senha_hash, data_nascimento) 
      VALUES ($nome_completo, $email, $senha_hash, $data_nascimento)`
    );

    try {
      const result = await statement.executeAsync({
        $nome_completo: data.nome_completo,
        $email: data.email,
        $senha_hash: data.senha_hash,
        $data_nascimento: data.data_nascimento,
      });

      return {
        insertedId: result.lastInsertRowId,
      };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  return { create };
}