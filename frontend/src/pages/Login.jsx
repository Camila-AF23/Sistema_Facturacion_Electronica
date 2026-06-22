import React, { useState } from "react";
import clienteAxios from "../axios";
import fondoPantalla from "../assets/fondo1.png";
import logoTienda from "../assets/logo.png";

export default function Login({ alAutenticar, alCambiarVista }) {
  // Estado adaptado estrictamente al LoginDto del backend
  const [formData, setFormData] = useState({
    documento: "",
    contrasena: "",
  });

  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      // Petición POST al endpoint @Controller('auth') -> @Post('login')
      const respuesta = await clienteAxios.post("/auth/login", formData);

      if (respuesta.data.ok) {
        // Guardamos el token de Nest.js de forma segura en el navegador
        localStorage.setItem("token", respuesta.data.token);
        localStorage.setItem("user", JSON.stringify(respuesta.data.user));

        // Configura el token globalmente en las cabeceras de Axios para futuras peticiones protegidas
        clienteAxios.defaults.headers.common["Authorization"] =
          `Bearer ${respuesta.data.token}`;

        alert(`¡Bienvenido de nuevo, ${respuesta.data.user.nombre}!`);

        // Callback para indicarle a App.jsx que el usuario inició sesión con éxito
        if (alAutenticar) alAutenticar(respuesta.data.user);
      }
    } catch (err) {
      // Captura el UnauthorizedException del backend (Credenciales incorrectas)
      const mensajeError =
        err.response?.data?.message || "Error al intentar iniciar sesión.";
      setError(mensajeError);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fondoPantalla})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      {/* Barra de Navegación superior con el logo integrado */}
      <header
        style={{
          background: "#d38b5d",
          color: "white",
          padding: "10px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logoTienda}
            alt="Logo"
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
            Recibos Virtuales
          </h2>
        </div>
        <nav style={{ display: "flex", gap: "20px", fontWeight: "500" }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Acerca De Nosotros</span>
          <span style={{ cursor: "pointer" }}>Ayuda</span>
        </nav>
      </header>

      {/* Panel Central de Login */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "8%",
        }}
      >
        <div
          style={{
            background: "rgba(235, 172, 134, 0.85)",
            padding: "40px 35px",
            borderRadius: "20px",
            maxWidth: "450px",
            width: "100%",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#2c1e15",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "30px",
              lineHeight: "1.2",
            }}
          >
            Ingresa tu
            <br />
            usuario
          </h1>

          {error && (
            <div
              style={{
                background: "#fce8e6",
                color: "#a81c1c",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Campo Documento */}
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  color: "#3d2616",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Número De Identificación
              </label>
              <input
                type="text"
                name="documento"
                required
                value={formData.documento}
                onChange={handleChange}
                placeholder="Escribe tu número de documento"
                style={inputEstilo}
              />
            </div>

            {/* Campo Contraseña */}
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  color: "#3d2616",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Contraseña
              </label>
              <input
                type="password"
                name="contrasena"
                required
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Escribe tu contraseña"
                style={inputEstilo}
              />
            </div>

            {/* Botón de Confirmación */}
            <button
              type="submit"
              disabled={cargando}
              style={{
                background: "#cfcfcf",
                color: "#21160e",
                padding: "12px 0",
                border: "none",
                borderRadius: "25px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: cargando ? "not-allowed" : "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginTop: "10px",
                transition: "background 0.2s",
              }}
            >
              {cargando ? "Validando..." : "Confirmar"}
            </button>

            {/* Enlace para ir a Registro */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
                borderTop: "1px solid rgba(61,38,22,0.2)",
                paddingTop: "15px",
              }}
            >
              <div
                style={{
                  color: "#3d2616",
                  fontSize: "13px",
                  lineHeight: "1.3",
                }}
              >
                ¿No tienes una cuenta?
                <br />
                <b>Regístrate ahora</b>
              </div>
              <button
                type="button"
                onClick={() => alCambiarVista && alCambiarVista("registro")}
                style={{
                  background: "#e6d8ce",
                  color: "#3d2616",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

const inputEstilo = {
  width: "100%",
  padding: "12px 16px",
  border: "none",
  borderRadius: "25px",
  background: "#e1e3e6",
  boxSizing: "border-box",
  outline: "none",
  fontSize: "14px",
  color: "#333",
};
