import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionCajeros() {
  const [cajeros, setCajeros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Estado para el formulario de nuevo cajero (Basado en CreateCajeroDto)
  const [nuevoCajero, setNuevoCajero] = useState({
    nombre: "",
    documento: "",
    contrasena: "",
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // 1. Cargar cajeros vinculados a la tienda del administrador
  const obtenerCajeros = async () => {
    try {
      // Endpoint: @Get('cajeros') protegido por RolesGuard
      const respuesta = await clienteAxios.get("/auth/cajeros");
      setCajeros(respuesta.data);
    } catch (err) {
      setError("No se pudieron cargar los empleados.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerCajeros();
  }, []);

  // 2. Manejar la creación de un nuevo cajero
  const handleCrearCajero = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Endpoint: @Post('cajeros')
      await clienteAxios.post("/auth/cajeros", nuevoCajero);
      alert("Cajero registrado con éxito en tu tienda.");
      setNuevoCajero({ nombre: "", documento: "", contrasena: "" });
      setMostrarFormulario(false);
      obtenerCajeros(); // Recargar la lista
    } catch (err) {
      alert(err.response?.data?.message || "Error al crear el cajero.");
    }
  };

  // 3. Eliminar lógicamente un cajero (Cambiar estado a false)
  const handleEliminarCajero = async (id) => {
    if (!confirm("¿Está seguro de que desea desactivar este cajero?")) return;
    try {
      // Endpoint: @Delete('cajeros/:id')
      await clienteAxios.delete(`/auth/cajeros/${id}`);
      alert("Cajero desactivado del sistema.");
      obtenerCajeros();
    } catch (err) {
      alert("Error al intentar eliminar.");
    }
  };

  return (
    <div style={{ padding: "10px 20px", fontFamily: "sans-serif" }}>
      {/* Barra de búsqueda y controles superiores basados en tu boceto */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ position: "relative", width: "300px" }}>
          <input
            type="text"
            placeholder="Buscar cajero ..."
            style={{
              width: "100%",
              padding: "10px 15px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
              background: "#fcfcfc",
            }}
          />
        </div>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          style={{
            background: "#5c4033",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {mostrarFormulario
            ? "❌ Cerrar Formulario"
            : "➕ Añadir nuevo cajero"}
        </button>
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {/* FORMULARIO DE REGISTRO (MOCK / DTO CONECTION) */}
      {mostrarFormulario && (
        <form
          onSubmit={handleCrearCajero}
          style={{
            background: "#f4bca2",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "25px",
            maxWidth: "500px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ margin: "0 0 15px 0", color: "#5c4033" }}>
            Datos del nuevo Cajero
          </h4>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Nombre Completo:
            </label>
            <input
              type="text"
              required
              value={nuevoCajero.nombre}
              onChange={(e) =>
                setNuevoCajero({ ...nuevoCajero, nombre: e.target.value })
              }
              style={inputEstilo}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Número de Identificación:
            </label>
            <input
              type="text"
              required
              value={nuevoCajero.documento}
              onChange={(e) =>
                setNuevoCajero({ ...nuevoCajero, documento: e.target.value })
              }
              style={inputEstilo}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Contraseña de Acceso:
            </label>
            <input
              type="password"
              required
              value={nuevoCajero.contrasena}
              onChange={(e) =>
                setNuevoCajero({ ...nuevoCajero, contrasena: e.target.value })
              }
              style={inputEstilo}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#4CAF50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Guardar Cajero
          </button>
        </form>
      )}

      {/* LISTADO DE EMPLEADOS CON EL ESTILO DE TU MAQUETA */}
      {cargando ? (
        <p>Cargando lista de cajeros...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {cajeros.map((cajero) => (
            <div
              key={cajero.id_usuario}
              style={{
                display: "flex",
                background: "#f9f3ee",
                borderRadius: "15px",
                padding: "20px",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                justifyContent: "space-between",
              }}
            >
              {/* Contenedor Izquierdo: Icono/Avatar genérico del Empleado */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#e3d5ca",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
                <div>
                  <h3 style={{ margin: "0 0 5px 0", color: "#2b1d15" }}>
                    {cajero.nombre}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 5px 0",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    <b>C.C.:</b> {cajero.documento}
                  </p>
                  <p style={{ margin: 0, fontSize: "13px" }}>
                    <b>Estado:</b>{" "}
                    <span
                      style={{
                        color: cajero.estado ? "#006600" : "#cc0000",
                        fontWeight: "bold",
                      }}
                    >
                      {cajero.estado ? "Activo (En Caja)" : "Inactivo"}
                    </span>
                  </p>
                </div>
              </div>

              {/* Contenedor Derecho: Botones de Acción basados en tus iconos */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  minWidth: "180px",
                }}
              >
                <button
                  onClick={() =>
                    alert(
                      "Función para editar datos básicos o cambiar contraseña",
                    )
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#ffffff",
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Editar Datos / Clave
                </button>
                <button
                  onClick={() => handleEliminarCajero(cajero.id_usuario)}
                  disabled={!cajero.estado}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#ffffff",
                    border: "1px solid #ffcccc",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    cursor: cajero.estado ? "pointer" : "not-allowed",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#cc0000",
                  }}
                >
                  Eliminar / Desactivar
                </button>
              </div>
            </div>
          ))}
          {cajeros.length === 0 && (
            <p style={{ textAlign: "center", color: "#666" }}>
              No hay cajeros registrados para esta tienda.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

const inputEstilo = {
  width: "100%",
  padding: "8px 12px",
  marginTop: "4px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box",
};
