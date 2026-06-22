import React, { useState } from "react";
import clienteAxios from "../axios";
import fondoPantalla from "../assets/fondo2.png";
import logoTienda from "../assets/logo.png";

export default function Registro({ alCambiarVista }) {
  // Estado unificado con los nombres EXACTOS de las variables del CreateRegistroDto
  const [formData, setFormData] = useState({
    nombre_tienda: "",
    nit: "",
    correo_tienda: "",
    direccion_tienda: "",
    telefono_tienda: "",
    nombre_dueno: "",
    documento_dueno: "",
    contrasena_dueno: "",
    confirmar_contrasena: "",
  });

  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Envío del formulario al backend de Nest.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // NOTA 1 del Backend: Validación local antes de desgastar el servidor
    if (formData.contrasena_dueno !== formData.confirmar_contrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setCargando(true);
    try {
      // Petición POST al endpoint @Controller('registro')
      const respuesta = await clienteAxios.post("/registro", formData);

      if (respuesta.data.ok) {
        alert(
          `🎉 ${respuesta.data.mensaje}\nTienda: ${respuesta.data.tienda}\nAdmin: ${respuesta.data.administrador}`,
        );
        // Si tienes una vista de Login, puedes redirigir aquí
        if (alCambiarVista) alCambiarVista("login");
      }
    } catch (err) {
      // Captura el BadRequestException del backend (NIT o Documento duplicado)
      const mensajeError =
        err.response?.data?.message || "Error al conectar con el servidor.";
      setError(Array.isArray(mensajeError) ? mensajeError[0] : mensajeError);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fondoPantalla})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      {/* Barra de Navegación superior basada en tu diseño */}
      {/* Barra de Navegación superior optimizada con tu LOGO real */}
      <header
        style={{
          background: "#5c4033",
          color: "white",
          padding: "10px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Tag de la imagen del logo */}
          <img
            src={logoTienda}
            alt="Logo Recibos Virtuales"
            style={{
              height: "40px", // Ajusta el tamaño para que no deforme la barra
              width: "auto",
              objectFit: "contain",
            }}
          />
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
            Recibos Virtuales
          </h2>
        </div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Acerca De Nosotros</span>
          <span style={{ cursor: "pointer" }}>Ayuda</span>
        </nav>
      </header>

      {/* Contenedor principal del formulario */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            background: "rgba(218, 191, 175, 0.9)",
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "800px",
            width: "100%",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#3d2b1f",
              marginBottom: "25px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {" "}
            Regístrate en nuestra página
          </h2>

          {error && (
            <div
              style={{
                background: "#ffcccc",
                color: "#cc0000",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "15px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {/*COLUMNA IZQUIERDA: DATOS DE LA TIENDA*/}
              <div>
                <h4
                  style={{
                    color: "#5c4033",
                    margin: "0 0 10px 0",
                    borderBottom: "2px solid #5c4033",
                  }}
                >
                  Datos de la Tienda
                </h4>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Nombre de la Tienda *
                  </label>
                  <input
                    type="text"
                    name="nombre_tienda"
                    required
                    value={formData.nombre_tienda}
                    onChange={handleChange}
                    placeholder="Ej. Tienda El Progreso"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    NIT de la Tienda *
                  </label>
                  <input
                    type="text"
                    name="nit"
                    required
                    value={formData.nit}
                    onChange={handleChange}
                    placeholder="901234567-1"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Correo Electrónico de Tienda *
                  </label>
                  <input
                    type="email"
                    name="correo_tienda"
                    required
                    value={formData.correo_tienda}
                    onChange={handleChange}
                    placeholder="contacto@tienda.com"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Dirección (Opcional)
                  </label>
                  <input
                    type="text"
                    name="direccion_tienda"
                    value={formData.direccion_tienda}
                    onChange={handleChange}
                    placeholder="Calle 12 # 34 - 56"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="text"
                    name="telefono_tienda"
                    value={formData.telefono_tienda}
                    onChange={handleChange}
                    placeholder="3101234567"
                    style={inputEstilo}
                  />
                </div>
              </div>

              {/*COLUMNA DERECHA: DATOS DEL DUEÑO*/}
              <div>
                <h4
                  style={{
                    color: "#5c4033",
                    margin: "0 0 10px 0",
                    borderBottom: "2px solid #5c4033",
                  }}
                >
                  Datos del Administrador
                </h4>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre_dueno"
                    required
                    value={formData.nombre_dueno}
                    onChange={handleChange}
                    placeholder="Escribe tus nombres y apellidos"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Número De Identificación *
                  </label>
                  <input
                    type="text"
                    name="documento_dueno"
                    required
                    value={formData.documento_dueno}
                    onChange={handleChange}
                    placeholder="Ingrese su número de documento"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Contraseña *
                  </label>
                  <input
                    type="password"
                    name="contrasena_dueno"
                    required
                    value={formData.contrasena_dueno}
                    onChange={handleChange}
                    placeholder="Mínimo 6 caracteres"
                    style={inputEstilo}
                  />
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold", color: "#2b1d15" }}>
                    Confirmar Contraseña *
                  </label>
                  <input
                    type="password"
                    name="confirmar_contrasena"
                    required
                    value={formData.confirmar_contrasena}
                    onChange={handleChange}
                    placeholder="Repite tu contraseña"
                    style={inputEstilo}
                  />
                </div>
              </div>
            </div>

            {/*BOTONES DE ACCIÓN*/}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <div style={{ color: "#3d2b1f", fontSize: "14px" }}>
                ¿Tienes una cuenta?{" "}
                <b
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => alCambiarVista && alCambiarVista("login")}
                >
                  Ingresa ahora
                </b>
              </div>

              <button
                type="submit"
                disabled={cargando}
                style={{
                  background: "#e0e0e0",
                  color: "#3d2b1f",
                  padding: "12px 40px",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: cargando ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                  transition: "0.2s",
                }}
              >
                {cargando ? "Registrando..." : "Confirmar"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

// Objeto de estilos reutilizable para los inputs limpios del boceto
const inputEstilo = {
  width: "100%",
  padding: "10px 15px",
  marginTop: "5px",
  border: "none",
  borderRadius: "20px",
  background: "#f5f5f5",
  boxSizing: "border-box",
  outline: "none",
  fontSize: "14px",
};
