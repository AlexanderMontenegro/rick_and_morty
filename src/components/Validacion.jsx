
export const validateEmail = (email) => {
  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? "" : "Email inválido";
 };
 
 export const validatePassword = (password) => {
  
    return password.length >= 6 ? "" : "La contraseña debe tener al menos 6 caracteres";
 };
 