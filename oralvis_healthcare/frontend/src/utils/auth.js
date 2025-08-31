import jwtDecode from 'jwt-decode';

/**
 * Store JWT token in localStorage
 * @param {string} token - JWT token
 */
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Get JWT token from localStorage
 * @returns {string|null}
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Remove JWT token from localStorage
 */
export const removeToken = () => {
  localStorage.removeItem('token');
};

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export const isLoggedIn = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp > currentTime;
  } catch (err) {
    removeToken();
    return false;
  }
};

/**
 * Get logged-in user's role
 * @returns {string|null}
 */
export const getUserRole = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.role || null;
  } catch (err) {
    removeToken();
    return null;
  }
};
