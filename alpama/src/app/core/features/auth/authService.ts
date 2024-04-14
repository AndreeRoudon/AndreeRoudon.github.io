const API_URL = 'http://localhost:8080/api';

interface UserData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const login = async (userData: UserData): Promise<string> => {
  const response = await fetch(API_URL + '/user/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: LoginResponse = await response.json();

  return data.token;
};

const logout = (): void => {
  localStorage.removeItem('user');
};

const authService = {
  logout,
  login,
};

export default authService;
