import React, { useState } from 'react';
import './styles.css'; // Archivo CSS para estilos personalizados

function UserName() {
  const [name, setName] = useState('No definido');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReset = () => {
    setName('No definido');
  };

  return (
    <div className="user-name-container">
      <div>
        <p>Su nombre es: {name}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={name}
          onChange={handleNameChange}
          className="name-input"
        />
      </div>
      <button onClick={handleReset} className="reset-button">
        Reiniciar Página
      </button>
    </div>
  );
}

export default UserName;


