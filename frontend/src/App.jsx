import React, { useState } from "react";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import GestionCajeros from "./pages/GestionCajeros";
import GestionCategorias from "./pages/GestionCategorias";
import GestionProductos from "./pages/GestionProductos";

export default function App() {
  const [vistaActual, setVistaActual] = useState("login");
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  // Sub-navegación dentro del Dashboard: 'perfil', 'inventario', 'categorias', 'recibos', 'empleados'
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

              {/* CRUCIAL: El módulo de empleados/cajeros SÓLO aparece si el rol es Administrador */}
              {usuarioLogueado?.rol === "Administrador" && (
                <span
                  onClick={() => setSubVista("empleados")}
                  style={{
                    cursor: "pointer",
                    color: "#ffcc99",
                    opacity: subVista === "empleados" ? 1 : 0.7,
                  }}
                >
                  Gestionar Cajas
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
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <h3>Datos de la Sesión</h3>
                <p>
                  <b>Funcionario:</b> {usuarioLogueado?.nombre}
                </p>
                <p>
                  <b>Rol asignado:</b> {usuarioLogueado?.rol}
                </p>
                <p>
                  <b>Código de establecimiento:</b> #
                  {usuarioLogueado?.id_tienda}
                </p>
              </div>
            )}

            {/* 2. INYECTAMOS EL COMPONENTE DE PRODUCTOS EN LA SUB-VISTA DE INVENTARIO */}
            {subVista === "inventario" && <GestionProductos />}

            {subVista === "categorias" && <GestionCategorias />}

            {subVista === "recibos" && (
              <div>
                <h3>Facturación y Recibos</h3>
                <p>
                  Módulo de emisión de facturas electrónicas (Próximamente
                  código).
                </p>
              </div>
            )}

            {/* Renderización condicionada de la vista de Cajeros */}
            {subVista === "empleados" &&
              usuarioLogueado?.rol === "Administrador" && <GestionCajeros />}
          </main>
        </div>
      )}
    </div>
  );
}
