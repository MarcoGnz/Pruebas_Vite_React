import React, { useState } from "react";

const AuthDemo = () => {
  // Estado para manejar los datos del usuario y el token
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  // Función para iniciar sesión
  const handleLogin = async () => {
    try {
      // Solicitud de autenticación
      const loginResponse = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // opcional
        }),
      });

      if (!loginResponse.ok) throw new Error("Error al iniciar sesión");

      const loginData = await loginResponse.json();
      setToken(loginData.token); // Guarda el token en el estado
      setUserData(loginData); // Guarda los datos del usuario en el estado

      // Solicitud para obtener información del usuario
      const userResponse = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${loginData.token}` },
      });

      if (!userResponse.ok) throw new Error("Error al obtener datos del usuario");

      const userInfo = await userResponse.json();
      setUserData(userInfo); // Actualiza los datos del usuario

      // Solicitud para refrescar el token
      const refreshResponse = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: loginData.refreshToken,
          expiresInMins: 30, // opcional
        }),
      });

      if (!refreshResponse.ok) throw new Error("Error al refrescar el token");

      const refreshData = await refreshResponse.json();
      setToken(refreshData.token); // Actualiza el token

    } catch (err) {
      setError(err.message); // Maneja cualquier error
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h3>Datos del Usuario:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default AuthDemo;
