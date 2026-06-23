import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionClientes({ usuarioLogueado }) {
  // Según backend, id_rol === 1 es el Administrador con poder de borrar
  const esAdmin =
    usuarioLogueado?.id_rol === 1 || usuarioLogueado?.rol === "Administrador";

  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [clienteData, setClienteData] = useState({
    nombre_cliente: "",
    documento_cliente: "",
    telefono_cliente: "",
    correo_cliente: "",
  });
  const [editandoId, setEditandoId] = useState(null);

  const colores = {
    fondo: "#f3e5db",
    cabecera: "#5c4033",
    tarjeta: "#ffffff",
    texto: "#333333",
    linea: "#cccccc",
    verde: "#4CAF50",
    rojo: "#f44336",
    textoSecundario: "#777777",
  };

  const cargarClientes = async () => {
    try {
      setCargando(true);
      const res = await clienteAxios.get("/clientes");
      setClientes(res.data);
    } catch (error) {
      console.error("Error al cargar directorio de clientes", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        nombre_cliente: clienteData.nombre_cliente,
        documento_cliente: clienteData.documento_cliente,
        correo_cliente: clienteData.correo_cliente,
        telefono_cliente: clienteData.telefono_cliente || undefined,
      };

      if (editandoId) {
        await clienteAxios.patch(`/clientes/${editandoId}`, payload);
        alert("¡Datos del cliente actualizados!");
      } else {
        await clienteAxios.post("/clientes", payload);
        alert("¡Cliente registrado en el sistema!");
      }

      limpiarFormulario();
      await cargarClientes();
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Ocurrió un error con los datos del cliente.";
      alert(Array.isArray(msg) ? msg.join("\n") : msg);
    }
  };

  const handleEliminar = async (id) => {
    if (
      !window.confirm("¿Seguro que deseas eliminar este cliente del sistema?")
    )
      return;
    try {
      await clienteAxios.delete(`/clientes/${id}`);
      alert("Cliente removido con éxito.");
      await cargarClientes();
    } catch (err) {
      alert(err.response?.data?.message || "Error al eliminar.");
    }
  };

  const limpiarFormulario = () => {
    setClienteData({
      nombre_cliente: "",
      documento_cliente: "",
      telefono_cliente: "",
      correo_cliente: "",
    });
    setMostrarFormulario(false);
    setEditandoId(null);
  };

  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nombre_cliente?.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.documento_cliente?.includes(busqueda),
  );

  const inputEstilo = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: `1px solid ${colores.linea}`,
    marginTop: "5px",
    marginBottom: "12px",
    boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "sans-serif", color: colores.texto }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          placeholder="Buscar por nombre o identificación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "20px",
            border: `1px solid ${colores.linea}`,
            width: "320px",
            outline: "none",
          }}
        />
        <button
          onClick={() => {
            if (mostrarFormulario) {
              limpiarFormulario();
            } else {
              setMostrarFormulario(true);
            }
          }}
          style={{
            background: colores.cabecera,
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {mostrarFormulario ? "✕ Cancelar" : "➕ Agregar Cliente"}
        </button>
      </div>

      {mostrarFormulario && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: colores.tarjeta,
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(92,64,51,0.15)",
          }}
        >
          <h3 style={{ margin: "0 0 15px 0", color: colores.cabecera }}>
            {editandoId ? "Modificar Registro" : "Registro de Cliente Nuevo"}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: colores.textColorSecundario,
                  fontWeight: "bold",
                }}
              >
                Nombre Completo
              </label>
              <input
                style={inputEstilo}
                required
                value={clienteData.nombre_cliente}
                onChange={(e) =>
                  setClienteData({
                    ...clienteData,
                    nombre_cliente: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: colores.textColorSecundario,
                  fontWeight: "bold",
                }}
              >
                Documento
              </label>
              <input
                style={inputEstilo}
                required
                disabled={!!editandoId}
                value={clienteData.documento_cliente}
                onChange={(e) =>
                  setClienteData({
                    ...clienteData,
                    documento_cliente: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: colores.textColorSecundario,
                  fontWeight: "bold",
                }}
              >
                Celular / Teléfono
              </label>
              <input
                style={inputEstilo}
                value={clienteData.telefono_cliente}
                onChange={(e) =>
                  setClienteData({
                    ...clienteData,
                    telefono_cliente: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "13px",
                  color: colores.textColorSecundario,
                  fontWeight: "bold",
                }}
              >
                Email corporativo/personal
              </label>
              <input
                type="email"
                style={inputEstilo}
                required
                value={clienteData.correo_cliente}
                onChange={(e) =>
                  setClienteData({
                    ...clienteData,
                    correo_cliente: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <button
              type="submit"
              style={{
                background: colores.verde,
                color: "white",
                padding: "10px 25px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {editandoId ? "Actualizar Cambios" : "Guardar Cliente"}
            </button>
          </div>
        </form>
      )}

      <div
        style={{
          background: colores.tarjeta,
          borderRadius: "12px",
          overflow: "hidden",
          border: `1px solid ${colores.linea}`,
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ background: colores.cabecera, color: "white" }}>
              <th style={{ padding: "12px" }}>Identificación</th>
              <th style={{ padding: "12px" }}>Nombre del Cliente</th>
              <th style={{ padding: "12px" }}>Teléfono</th>
              <th style={{ padding: "12px" }}>Correo</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  Buscando ...
                </td>
              </tr>
            ) : clientesFiltrados.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  No hay clientes registrados que coincidan.
                </td>
              </tr>
            ) : (
              clientesFiltrados.map((c) => (
                <tr
                  key={c.id_cliente}
                  style={{ borderBottom: `1px solid #eee` }}
                >
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {c.documento_cliente}
                  </td>
                  <td style={{ padding: "12px" }}>{c.nombre_cliente}</td>
                  <td style={{ padding: "12px" }}>
                    {c.telefono_cliente || "—"}
                  </td>
                  <td style={{ padding: "12px" }}>{c.correo_cliente}</td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      gap: "15px",
                    }}
                  >
                    <button
                      onClick={() => {
                        setClienteData({
                          nombre_cliente: c.nombre_cliente,
                          documento_cliente: c.documento_cliente,
                          telefono_cliente: c.telefono_cliente || "",
                          correo_cliente: c.correo_cliente,
                        });
                        setEditandoId(c.id_cliente);
                        setMostrarFormulario(true);
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#49b220",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      ⊕ Editar
                    </button>

                    {esAdmin && (
                      <button
                        onClick={() => handleEliminar(c.id_cliente)}
                        style={{
                          background: "none",
                          border: "none",
                          color: colores.rojo,
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        ⊗ Eliminar
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
