
import React, { useState } from 'react';
import { validateEmail, validatePassword } from "./Validacion.jsx";
import s from "./Forms.module.css"


function Form({login}) {
   const [userData, setUserData] = useState({
      email: '',
      password: '',
   });

   
   
   const [errors, setErrors] = useState({
     email: '',
     password: '',
    });
    
    const handleChange = (e) => {
       const { name, value } = e.target;
       setUserData({
          ...userData,
          [name]: value,
       });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      login(userData)
      const emailError = validateEmail(userData.email);
      const passwordError = validatePassword(userData.password);

      if (!emailError && !passwordError) {
         login(userData);
      } else {
         setErrors({
            email: emailError,
            password: passwordError,
         });
      }
   };

   return (
      <div   className={s.div}  >


           <form  className={s.form}  onSubmit={handleSubmit}>
       <label className={s.label1}>
          Email:
          <input
             type='email'
             name='email'
             value={userData.email}
             onChange={handleChange}
          />
       </label  >
       {errors.email && <p className='error'>{errors.email}</p>}
       <label className={s.label2} >
          Password:
          <input
             type='password'
             name='password'
             value={userData.password}
             onChange={handleChange}
             />
       </label>
       {errors.password && <p className='error'>{errors.password}</p>}
       <button   className={s.button}  type='submit'>Submit</button>

          </form>

          <img  className={s.img}  src="\img\gif inicio.gif" alt="" />

       </div>
      

   
 );
}
export default Form;
