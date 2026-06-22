import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionProductos() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre_producto: "",
    precio_compra: "",
    precio_venta: "",
    stock: "",
    id_categoria: "",
    codigo_barras: "",
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [mostrarModalEdit, setMostrarModalEdit] = useState(false);

  const usuarioInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const esAdmin = usuarioInfo.rol === "Administrador";

  const inputEstilo = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "5px",
  };

  const cargarDatos = async () => {
    try {
      const [p, c] = await Promise.all([
        clienteAxios.get("/productos"),
        clienteAxios.get("/categorias"),
      ]);
      setProductos(p.data);
      setCategorias(c.data);
    } catch {
      setError("Error al cargar datos");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleCrearProducto = async (e) => {
    e.preventDefault();

    const payload = {
      ...nuevoProducto,
      precio_compra: Number(nuevoProducto.precio_compra),
      precio_venta: Number(nuevoProducto.precio_venta),
      stock: Number(nuevoProducto.stock),
      id_categoria: Number(nuevoProducto.id_categoria),
    };

    await clienteAxios.post("/productos", payload);
    setMostrarFormulario(false);
    cargarDatos();
  };

  const handleEliminarProducto = async (id) => {
    if (!confirm("¿Eliminar producto?")) return;
    await clienteAxios.delete(`/productos/${id}`);
    cargarDatos();
  };

  const handleActualizarProducto = async (e) => {
    e.preventDefault();

    await clienteAxios.patch(`/productos/${productoAEditar.id_producto}`, {
      ...productoAEditar,
      id_categoria: Number(productoAEditar.id_categoria),
      precio_compra: Number(productoAEditar.precio_compra),
      precio_venta: Number(productoAEditar.precio_venta),
      stock: Number(productoAEditar.stock),
    });

    setMostrarModalEdit(false);
    setProductoAEditar(null);
    cargarDatos();
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre_producto.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div style={{ padding: "10px 20px", fontFamily: "sans-serif" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <input
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "320px",
          }}
        />

        {esAdmin && (
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            style={{
              background: "#5c4033",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
            }}
          >
            {mostrarFormulario ? "Cerrar" : "➕ Añadir Producto"}
          </button>
        )}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* FORM */}
      {mostrarFormulario && esAdmin && (
        <form
          onSubmit={handleCrearProducto}
          style={{
            background: "#f5ebe6",
            padding: 20,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <h3>Nuevo Producto</h3>

          <input
            placeholder="Nombre"
            value={nuevoProducto.nombre_producto}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                nombre_producto: e.target.value,
              })
            }
            style={inputEstilo}
          />

          <select
            value={nuevoProducto.id_categoria}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                id_categoria: e.target.value,
              })
            }
            style={inputEstilo}
          >
            <option value="">Categoría</option>
            {categorias.map((c) => (
              <option key={c.id_categoria} value={c.id_categoria}>
                {c.nombre_categoria}
              </option>
            ))}
          </select>

          <input
            placeholder="Precio compra"
            type="number"
            style={inputEstilo}
            value={nuevoProducto.precio_compra}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                precio_compra: e.target.value,
              })
            }
          />

          <input
            placeholder="Precio venta"
            type="number"
            style={inputEstilo}
            value={nuevoProducto.precio_venta}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                precio_venta: e.target.value,
              })
            }
          />

          <input
            placeholder="Stock"
            type="number"
            style={inputEstilo}
            value={nuevoProducto.stock}
            onChange={(e) =>
              setNuevoProducto({ ...nuevoProducto, stock: e.target.value })
            }
          />

          <input
            placeholder="Código barras"
            style={inputEstilo}
            value={nuevoProducto.codigo_barras}
            onChange={(e) =>
              setNuevoProducto({
                ...nuevoProducto,
                codigo_barras: e.target.value,
              })
            }
          />

          <button
            style={{
              marginTop: 15,
              width: "100%",
              padding: 10,
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 8,
            }}
          >
            Guardar
          </button>
        </form>
      )}

      {/* LISTA (TU ESTILO ORIGINAL) */}
      {cargando ? (
        <p>Procesando inventario...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {productosFiltrados.map((prod) => (
            <div
              key={prod.id_producto}
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: "#f9f3ee",
                borderRadius: 15,
                padding: 15,
                alignItems: "center",
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>{prod.nombre_producto}</h3>
                <p style={{ margin: 0 }}>Stock: {prod.stock}</p>
                <p style={{ margin: 0 }}>Venta: ${prod.precio_venta}</p>
              </div>

              {esAdmin && (
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => {
                      setProductoAEditar(prod);
                      setMostrarModalEdit(true);
                    }}
                  >
                    ✏️ Editar
                  </button>

                  <button
                    onClick={() => handleEliminarProducto(prod.id_producto)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {mostrarModalEdit && productoAEditar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleActualizarProducto}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 10,
              width: 400,
            }}
          >
            <h3>Editar Producto</h3>

            <input
              style={inputEstilo}
              value={productoAEditar.nombre_producto}
              onChange={(e) =>
                setProductoAEditar({
                  ...productoAEditar,
                  nombre_producto: e.target.value,
                })
              }
            />

            <button type="submit" style={{ marginTop: 10 }}>
              Guardar cambios
            </button>

            <button type="button" onClick={() => setMostrarModalEdit(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
