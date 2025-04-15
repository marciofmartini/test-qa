import axios from 'axios';

let cachedToken: string | null = null;

export const getToken = async (): Promise<string> => {
  if (cachedToken) {
    return cachedToken;
  }

  // Caso cachedToken ainda seja null, vamos buscar o token
  const res = await axios.post('http://localhost:3000/user/login', {
    mail: 'qa@raffinato.com', // ✅ corrigido aqui
    password: 'test-qa',
  });

  cachedToken = res.data.token;

  // Garantir que estamos retornando um string e não um null
  if (!cachedToken) {
    throw new Error('Token não encontrado');
  }

  return cachedToken;
};

export const authHeader = async () => {
  const token = await getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

