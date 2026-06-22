import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Estado adaptado estrictamente a tu CreateCategoriaDto
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Obtener los datos del usuario para validar el rol visualmente (Admin = 1)
  const usuarioInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const esAdmin = usuarioInfo.rol === "Administrador";

  // 1. Cargar las categorías (Tanto Admin como Cajero pueden verlas según tu Controller)
  const obtenerCategorias = async () => {
    try {
      // El JwtAuthGuard leerá el token que guardamos en las cabeceras de Axios
      const respuesta = await clienteAxios.get("/categorias");
      setCategorias(respuesta.data);
    } catch (err) {
      setError("Error al recuperar las categorías de tu establecimiento.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  // 2. Crear categoría (Solo si es Admin)
  const handleCrearCategoria = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // POST /categorias enviando el JSON { nombre_categoria }
      await clienteAxios.post("/categorias", {
        nombre_categoria: nombreCategoria,
      });
      alert("Categoría creada y vinculada a tu tienda con éxito.");
      setNombreCategoria("");
      setMostrarFormulario(false);
      obtenerCategorias(); // Recargar la tabla
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "No tienes permisos para realizar esta acción.",
      );
    }
  };

  // 3. Eliminar categoría usando tu ruta @Delete('/:id')
  const handleEliminarCategoria = async (id) => {
    if (
      !confirm(
        "¿Estás seguro de eliminar esta categoría? Esta acción afectará los productos asociados en MySQL.",
      )
    )
      return;

    try {
      // DELETE /categorias/:id
      await clienteAxios.delete(`/categorias/${id}`);
      alert("Categoría removida del sistema.");
      obtenerCategorias(); // Recargar lista
    } catch (err) {
      // Captura el ForbiddenException o BadRequestException de tu backend
      alert(err.response?.data?.message || "Error al intentar eliminar.");
    }
  };

  return (
    <div style={{ padding: "10px 20px", fontFamily: "sans-serif" }}>
      {/* Encabezado dinámico */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#5c4033", margin: 0 }}>
          Módulo de Categorías ({usuarioInfo.nombre_tienda})
        </h3>

        {/* El botón de crear solo se muestra si el usuario es Administrador */}
        {esAdmin && (
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
            {mostrarFormulario ? "❌ Ocultar" : "➕ Nueva Categoría"}
          </button>
        )}
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {/* FORMULARIO */}
      {mostrarFormulario && esAdmin && (
        <form
          onSubmit={handleCrearCategoria}
          style={{
            background: "#f5ebe6",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "25px",
            maxWidth: "400px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ margin: "0 0 15px 0", color: "#5c4033" }}>
            Crear Categoría (Filtro Inventario)
          </h4>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{ fontSize: "14px", fontWeight: "bold", color: "#2b1d15" }}
            >
              Nombre de Categoría *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Líquidos, Enlatados, Limpieza"
              value={nombreCategoria}
              onChange={(e) => setNombreCategoria(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
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
            Registrar
          </button>
        </form>
      )}

      {/* LISTADO DE CATEGORÍAS EN TARJETAS */}
      {cargando ? (
        <p>Consultando categorías...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {categorias.map((cat) => (
            <div
              key={cat.id_categoria}
              style={{
                background: "#f9f3ee",
                borderRadius: "15px",
                padding: "18px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                borderLeft: "5px solid #5c4033",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#8d7060",
                    fontWeight: "bold",
                  }}
                >
                  ID: #{cat.id_categoria}
                </span>
                <h4
                  style={{
                    margin: "5px 0 15px 0",
                    color: "#2b1d15",
                    fontSize: "18px",
                  }}
                >
                  {cat.nombre_categoria}
                </h4>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderTop: "1px solid #e3d5ca",
                  paddingTop: "10px",
                }}
              >
                {/* El botón de eliminar se oculta si es un Cajero, protegiendo la UI */}
                {esAdmin ? (
                  <button
                    onClick={() => handleEliminarCategoria(cat.id_categoria)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#cc0000",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    Eliminar
                  </button>
                ) : (
                  <span
                    style={{ fontSize: "12px", color: "#999", italic: "true" }}
                  >
                    Solo Lectura
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {categorias.length === 0 && !cargando && (
        <p style={{ textAlign: "center", color: "#666", marginTop: "30px" }}>
          No hay categorías configuradas en esta tienda.
        </p>
      )}
    </div>
  );
}
