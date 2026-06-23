import React, { useState } from "react";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import GestionCajeros from "./pages/GestionCajeros";
import GestionCategorias from "./pages/GestionCategorias";
import GestionProductos from "./pages/GestionProductos";
import GestionRecibos from "./pages/GestionRecibos";
import GestionClientes from "./pages/GestionClientes";

export default function App() {
  const [vistaActual, setVistaActual] = useState("login");
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  // Sub-navegación dentro del Dashboard:
  const [subVista, setSubVista] = useState("perfil");

  const manejarAutenticacion = (user) => {
    setUsuarioLogueado(user);
    setVistaActual("dashboard");
    setSubVista("perfil"); // Por defecto abre el perfil al entrar
  };

  return (
    <div>
      {vistaActual === "login" && (
        <Login
          alAutenticar={manejarAutenticacion}
          alCambiarVista={setVistaActual}
        />
      )}
      {vistaActual === "registro" && (
        <Registro alCambiarVista={setVistaActual} />
      )}

      {vistaActual === "dashboard" && (
        <div
          style={{
            minHeight: "100vh",
            background: "#fdf8f5",
            fontFamily: "sans-serif",
          }}
        >
          {/* BARRA DE NAVEGACIÓN SUPERIOR */}
          <header
            style={{
              background: "#5c4033",
              color: "white",
              padding: "15px 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "22px" }}>
              {usuarioLogueado?.nombre_tienda}
            </h2>

            {/* Opciones de la barra adaptadas dinámicamente al rol */}
            <nav style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
              <span
                onClick={() => setSubVista("perfil")}
                style={{
                  cursor: "pointer",
                  opacity: subVista === "perfil" ? 1 : 0.6,
                }}
              >
                Perfil
              </span>
              <span
                onClick={() => setSubVista("inventario")}
                style={{
                  cursor: "pointer",
                  opacity: subVista === "inventario" ? 1 : 0.6,
                }}
              >
                Inventario
              </span>

              <span
                onClick={() => setSubVista("categorias")}
                style={{
                  cursor: "pointer",
                  opacity: subVista === "categorias" ? 1 : 0.6,
                }}
              >
                Categorías
              </span>

              <span
                onClick={() => setSubVista("recibos")}
                style={{
                  cursor: "pointer",
                  opacity: subVista === "recibos" ? 1 : 0.6,
                }}
              >
                Recibos
              </span>

              <span
                onClick={() => setSubVista("clientes")}
                style={{
                  cursor: "pointer",
                  opacity: subVista === "clientes" ? 1 : 0.6,
                }}
              >
                Clientes
              </span>

              {/* El módulo de empleados/cajeros SÓLO aparece si el rol es Administrador */}
              {usuarioLogueado?.rol === "Administrador" && (
                <span
                  onClick={() => setSubVista("empleados")}
                  style={{
                    cursor: "pointer",
                    color: "#fdf8f5",
                    opacity: subVista === "empleados" ? 1 : 0.7,
                  }}
                >
                  Cajas
                </span>
              )}
            </nav>

            <button
              onClick={() => setVistaActual("login")}
              style={{
                background: "#cc0000",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Cerrar Sesión
            </button>
          </header>

          {/* CONTENEDOR DE SUB-VISTAS */}
          <main
            style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}
          >
            {subVista === "perfil" && (
              <div
                style={{
                  background: "white",
                  padding: "40px 30px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(92, 64, 51, 0.15)",
                  maxWidth: "550px",
                  margin: "40px auto",
                  textAlign: "center",
                  borderTop: "6px solid #5c4033", // Línea superior con el tono café de tu marca
                }}
              >
                {/* Avatar o Icono Representativo */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#fdf8f5",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px auto",
                    border: "2px solid #5c4033",
                    fontSize: "32px",
                  }}
                >
                  👤
                </div>

                <h3
                  style={{
                    color: "#5c4033",
                    margin: "0 0 5px 0",
                    fontSize: "24px",
                  }}
                >
                  {usuarioLogueado?.nombre}
                </h3>

                <span
                  style={{
                    background:
                      usuarioLogueado?.rol === "Administrador"
                        ? "#5c4033"
                        : "#8b5a2b",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {usuarioLogueado?.rol}
                </span>

                <hr
                  style={{
                    border: "0",
                    borderTop: "1px solid #eee",
                    margin: "25px 0",
                  }}
                />

                {/* Datos del Establecimiento */}
                <div
                  style={{
                    textAlign: "left",
                    background: "#fdf8f5",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}
                  >
                    <b style={{ color: "#5c4033" }}>
                      Establecimiento asignado:
                    </b>
                  </p>
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    🏢 {usuarioLogueado?.nombre_tienda || "Sede Principal"}
                  </p>

                  <p
                    style={{
                      margin: "10px 0 5px 0",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    <b style={{ color: "#5c4033" }}>Estado del Turno:</b>
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "14px",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Conectado y Activo
                  </p>
                </div>
              </div>
            )}

            {subVista === "inventario" && <GestionProductos />}

            {subVista === "categorias" && <GestionCategorias />}

            {subVista === "clientes" && (
              <GestionClientes usuarioLogueado={usuarioLogueado} />
            )}

            {subVista === "recibos" && (
              <GestionRecibos usuarioLogueado={usuarioLogueado} />
            )}

            {subVista === "empleados" &&
              usuarioLogueado?.rol === "Administrador" && <GestionCajeros />}
          </main>
        </div>
      )}
    </div>
  );
}
