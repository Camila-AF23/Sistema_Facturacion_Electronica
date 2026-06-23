import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionProductos() {
  // --- ESTADOS ---
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
  const [tabActiva, setTabActiva] = useState("Todo");

  const usuarioInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const esAdmin = usuarioInfo.rol === "Administrador";

  // --- PALETA DE COLORES ---
  const colores = {
    fondo: "#f3e5db",
    cabecera: "#5c4033",
    tarjeta: "#ffffff",
    texto: "#333333",
    linea_divisora: "#cccccc",
    placeholder_imagen: "#e0e0e0",
    icono_imagen: "#888888",
    verde: "#4CAF50",
    rojo: "#f44336",
    texto_secundario: "#777777",
  };

  // --- CARGA DE DATOS ---
  const cargarDatos = async () => {
    try {
      const [p, c] = await Promise.all([
        clienteAxios.get("/productos"),
        clienteAxios.get("/categorias"),
      ]);
      setProductos(p.data);
      setCategorias(c.data);
    } catch {
      setError("Error al cargar datos desde el servidor");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  // --- ACCIONES AUTOMÁTICAS (LLAMAN A CARGARDATOS EN AUTOMÁTICO) ---

  const handle創造Producto = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        nombre_producto: nuevoProducto.nombre_producto,
        precio_compra: Number(nuevoProducto.precio_compra),
        precio_venta: Number(nuevoProducto.precio_venta),
        stock: Number(nuevoProducto.stock),
        id_categoria: Number(nuevoProducto.id_categoria),
        codigo_barras: nuevoProducto.codigo_barras || undefined, // Si va vacío, que Nest no se queje
      };

      await clienteAxios.post("/productos", payload);

      // Resetear formulario y recargar automáticamente
      setNuevoProducto({
        nombre_producto: "",
        precio_compra: "",
        precio_venta: "",
        stock: "",
        id_categoria: "",
        codigo_barras: "",
      });
      setMostrarFormulario(false);
      await cargarDatos();
    } catch (err) {
      alert("Error al crear producto. Revisa los campos obligatorios.");
    }
  };

  const handleEliminarProducto = async (id) => {
    if (
      !confirm(
        "¿Seguro que deseas eliminar este producto? (Se aplicará borrado lógico)",
      )
    )
      return;
    try {
      await clienteAxios.delete(`/productos/${id}`);
      await cargarDatos(); // Actualización reactiva instantánea
    } catch (err) {
      alert("No se pudo eliminar el producto.");
    }
  };

  const handleActualizarProducto = async (e) => {
    e.preventDefault();
    try {
      // Enviamos solo campos DTO válidos que NestJS espera
      const payload = {
        nombre_producto: productoAEditar.nombre_producto,
        precio_compra: Number(productoAEditar.precio_compra),
        precio_venta: Number(productoAEditar.precio_venta),
        stock: Number(productoAEditar.stock),
        id_categoria: Number(productoAEditar.id_categoria),
        codigo_barras: productoAEditar.codigo_barras || undefined,
      };

      await clienteAxios.patch(
        `/productos/${productoAEditar.id_producto}`,
        payload,
      );
      setMostrarModalEdit(false);
      setProductoAEditar(null);
      await cargarDatos(); // Actualización reactiva instantánea
    } catch (err) {
      console.error(err);
      alert("Error al actualizar producto.");
    }
  };

  // AGREGAR STOCK RÁPIDO: ¡Ahora súper optimizado gracias a tu Partial DTO!
  const handleAgregarStockRapido = async (prod) => {
    const cantidadStr = prompt(
      `¿Cuántas unidades deseas SUMAR al stock de "${prod.nombre_producto}"?`,
      "1",
    );
    if (cantidadStr === null) return;
    const cantidad = Number(cantidadStr);

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingresa un número válido mayor a 0.");
      return;
    }

    try {
      // Al usar Partial<CreateProductoDto>, solo mandamos la propiedad 'stock' calculada
      const payload = {
        stock: Number(prod.stock) + cantidad,
      };

      await clienteAxios.patch(`/productos/${prod.id_producto}`, payload);
      await cargarDatos(); // Actualización reactiva instantánea
    } catch (err) {
      alert("Error al actualizar el stock rápido.");
    }
  };

  // CAMBIAR CATEGORÍA DESDE LA TARJETA: ¡Mandamos solo el id_categoria!
  const handleCambiarCategoriaRapido = async (prod, nuevaCategoriaId) => {
    if (!esAdmin || !nuevaCategoriaId) return;

    try {
      const payload = {
        id_categoria: Number(nuevaCategoriaId),
      };

      await clienteAxios.patch(`/productos/${prod.id_producto}`, payload);
      await cargarDatos(); // Actualización reactiva instantánea
    } catch (err) {
      alert("Error al cambiar la categoría.");
    }
  };

  // --- FILTRADO CORREGIDO USANDO TU RELACIÓN DE PRISMA (prod.categorias) ---
  const productosFiltrados = productos.filter((p) => {
    const coincideBusqueda = p.nombre_producto
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    // Tu backend devuelve 'categorias' (en plural) debido al include del service
    const nombreCatProducto = p.categorias?.nombre_categoria || "Sin Categoría";

    if (tabActiva !== "Todo") {
      return coincideBusqueda && nombreCatProducto === tabActiva;
    }
    return coincideBusqueda;
  });

  const listaTabs = ["Todo", ...categorias.map((c) => c.nombre_categoria)];

  // --- ESTILOS ---
  const inputEstilo = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginTop: "5px",
    marginBottom: "15px",
    boxSizing: "border-box",
    fontSize: "14px",
  };

  const botonAccionRapida = {
    background: "none",
    border: "none",
    cursor: esAdmin ? "pointer" : "default",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    margin: "5px 0",
    width: "100%",
    textAlign: "left",
  };

  return (
    <div
      style={{
        background: colores.fondo,
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        color: colores.texto,
      }}
    >
      {/* BARRA SUPERIOR (Sin el botón molesto de sincronizar) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <div style={{ position: "relative", width: "350px" }}>
          <span
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          ></span>
          <input
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              padding: "12px 15px 10px 40px",
              borderRadius: "25px",
              border: `1px solid ${colores.linea_divisora}`,
              width: "100%",
              background: colores.tarjeta,
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "13px",
            color: colores.texto_secundario,
            fontWeight: "500",
          }}
        >
          Visualizando: <b>{productosFiltrados.length}</b> productos
        </span>
      </div>

      {error && (
        <p
          style={{
            color: colores.rojo,
            background: "#fee",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {error}
        </p>
      )}

      {/* PESTAÑAS (TABS) */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          borderBottom: `1px solid ${colores.linea_divisora}`,
          marginBottom: "15px",
          paddingBottom: "5px",
        }}
      >
        {listaTabs.map((nombre) => (
          <button
            key={nombre}
            onClick={() => setTabActiva(nombre)}
            style={{
              background: "none",
              border: "none",
              padding: "10px 5px",
              fontSize: "15px",
              fontWeight: tabActiva === nombre ? "bold" : "normal",
              color:
                tabActiva === nombre
                  ? colores.cabecera
                  : colores.texto_secundario,
              cursor: "pointer",
              position: "relative",
              outline: "none",
            }}
          >
            {nombre}
            {tabActiva === nombre && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: colores.cabecera,
                  borderRadius: "2px",
                }}
              ></div>
            )}
          </button>
        ))}
      </div>

      {/* ENLACE FORMULARIO */}
      {esAdmin && (
        <div style={{ marginBottom: 20 }}>
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            style={{
              background: "none",
              color: colores.texto_secundario,
              padding: "5px",
              border: "none",
              fontSize: "15px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: "500",
            }}
          >
            {mostrarFormulario
              ? "✕ Cerrar Formulario"
              : "＋ Añadir nuevo producto"}
          </button>
        </div>
      )}

      {/* FORMULARIO CREAR */}
      {mostrarFormulario && esAdmin && (
        <form
          onSubmit={handle創造Producto}
          style={{
            background: colores.tarjeta,
            padding: 25,
            borderRadius: 15,
            marginBottom: 20,
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            border: `1px solid ${colores.linea_divisora}`,
          }}
        >
          <h3
            style={{ marginTop: 0, marginBottom: 15, color: colores.cabecera }}
          >
            Información del Nuevo Producto
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <input
              placeholder="Nombre del producto"
              value={nuevoProducto.nombre_producto}
              required
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
              required
              onChange={(e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  id_categoria: e.target.value,
                })
              }
              style={inputEstilo}
            >
              <option value="">-- Selecciona Categoría --</option>
              {categorias.map((c) => (
                <option key={c.id_categoria} value={c.id_categoria}>
                  {c.nombre_categoria}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "15px",
            }}
          >
            <input
              placeholder="Código de barras (opcional)"
              style={inputEstilo}
              value={nuevoProducto.codigo_barras}
              onChange={(e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  codigo_barras: e.target.value,
                })
              }
            />
            <input
              placeholder="Precio venta ($)"
              type="number"
              step="0.01"
              required
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
              placeholder="Precio compra ($)"
              type="number"
              step="0.01"
              style={inputEstilo}
              value={nuevoProducto.precio_compra}
              onChange={(e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  precio_compra: e.target.value,
                })
              }
            />
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "15px" }}
          >
            <input
              placeholder="Inventario inicial (Stock)"
              type="number"
              required
              style={{ ...inputEstilo, width: "49.2%" }}
              value={nuevoProducto.stock}
              onChange={(e) =>
                setNuevoProducto({ ...nuevoProducto, stock: e.target.value })
              }
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <button
              type="button"
              onClick={() => setMostrarFormulario(false)}
              style={{
                padding: "12px 25px",
                background: "#eee",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: "12px 25px",
                background: colores.cabecera,
                color: "white",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Guardar Producto
            </button>
          </div>
        </form>
      )}

      {/* TARJETAS DE PRODUCTOS */}
      {cargando ? (
        <p style={{ textAlign: "center", color: colores.texto_secundario }}>
          Cargando inventario real...
        </p>
      ) : productosFiltrados.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: colores.texto_secundario,
            background: colores.tarjeta,
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          No hay productos asignados a la pestaña '{tabActiva}'{" "}
          {busqueda && `que coincidan con "${busqueda}"`}.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {productosFiltrados.map((prod) => (
            <div
              key={prod.id_producto}
              style={{
                display: "flex",
                background: colores.tarjeta,
                borderRadius: 15,
                padding: 15,
                alignItems: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                border: `1px solid ${colores.linea_divisora}`,
              }}
            >
              {/* Imagen Placeholder */}
              <div
                style={{
                  width: "100px",
                  height: "80px",
                  background: colores.placeholder_imagen,
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <span style={{ fontSize: "30px", color: colores.icono_imagen }}>
                  📦
                </span>
              </div>

              {/* Información Real vinculada a tu Prisma include */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <h3
                  style={{ margin: 0, color: colores.texto, fontSize: "18px" }}
                >
                  {prod.nombre_producto}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    fontSize: "15px",
                    color: colores.texto_secundario,
                  }}
                >
                  <span style={{ fontWeight: "600", color: colores.texto }}>
                    $ {prod.precio_venta}
                  </span>
                  <span>
                    Stock:{" "}
                    {prod.stock > 0 ? (
                      prod.stock
                    ) : (
                      <span style={{ color: colores.rojo, fontWeight: "bold" }}>
                        AGOTADO
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      background: colores.fondo,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: colores.cabecera,
                    }}
                  >
                    {prod.categorias?.nombre_categoria || "Sin Categoría"}
                  </span>
                </div>
              </div>

              {/* Acciones Rápidas */}
              {esAdmin && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    width: "180px",
                    paddingLeft: "20px",
                    borderLeft: `1px solid ${colores.linea_divisora}`,
                  }}
                >
                  <button
                    onClick={() => handleAgregarStockRapido(prod)}
                    style={{ ...botonAccionRapida, color: colores.verde }}
                  >
                    <span style={{ fontSize: "18px" }}>⊕</span> Agregar Cantidad
                  </button>

                  <button
                    onClick={() => handleEliminarProducto(prod.id_producto)}
                    style={{ ...botonAccionRapida, color: colores.rojo }}
                  >
                    <span style={{ fontSize: "16px" }}>⊗</span> Eliminar
                    Producto
                  </button>

                  {/* Selector de Categoría Directo */}
                  <div style={{ position: "relative", marginTop: "3px" }}>
                    <select
                      value={prod.id_categoria || ""}
                      onChange={(e) =>
                        handleCambiarCategoriaRapido(prod, e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "6px 20px 6px 10px",
                        borderRadius: "15px",
                        border: `1px solid ${colores.linea_divisora}`,
                        background: colores.fondo,
                        fontSize: "13px",
                        color: colores.texto_secundario,
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>
                        Cambiar Categoría
                      </option>
                      {categorias.map((cat) => (
                        <option key={cat.id_categoria} value={cat.id_categoria}>
                          {cat.nombre_categoria}
                        </option>
                      ))}
                    </select>
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        fontSize: "10px",
                        color: colores.texto_secundario,
                      }}
                    >
                      ▼
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setProductoAEditar({ ...prod });
                      setMostrarModalEdit(true);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "11px",
                      color: "#aaa",
                      textAlign: "right",
                      textDecoration: "underline",
                      marginTop: "5px",
                    }}
                  >
                    editar detalles completos
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* MODAL EDICIÓN COMPLETA */}
      {mostrarModalEdit && productoAEditar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleActualizarProducto}
            style={{
              background: colores.tarjeta,
              padding: 30,
              borderRadius: 15,
              width: 450,
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ margin: "0 0 15px 0", color: colores.cabecera }}>
              Editar Producto
            </h3>

            <label
              style={{ fontSize: "13px", color: colores.texto_secundario }}
            >
              Nombre
            </label>
            <input
              style={inputEstilo}
              value={productoAEditar.nombre_producto}
              required
              onChange={(e) =>
                setProductoAEditar({
                  ...productoAEditar,
                  nombre_producto: e.target.value,
                })
              }
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{ fontSize: "13px", color: colores.texto_secundario }}
                >
                  Categoría
                </label>
                <select
                  style={inputEstilo}
                  value={productoAEditar.id_categoria}
                  required
                  onChange={(e) =>
                    setProductoAEditar({
                      ...productoAEditar,
                      id_categoria: e.target.value,
                    })
                  }
                >
                  <option value="">Selecciona</option>
                  {categorias.map((c) => (
                    <option key={c.id_categoria} value={c.id_categoria}>
                      {c.nombre_categoria}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  style={{ fontSize: "13px", color: colores.texto_secundario }}
                >
                  Stock Total
                </label>
                <input
                  type="number"
                  style={inputEstilo}
                  value={productoAEditar.stock}
                  required
                  onChange={(e) =>
                    setProductoAEditar({
                      ...productoAEditar,
                      stock: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{ fontSize: "13px", color: colores.texto_secundario }}
                >
                  Precio Venta ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  style={inputEstilo}
                  value={productoAEditar.precio_venta}
                  required
                  onChange={(e) =>
                    setProductoAEditar({
                      ...productoAEditar,
                      precio_venta: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  style={{ fontSize: "13px", color: colores.texto_secundario }}
                >
                  Precio Compra ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  style={inputEstilo}
                  value={productoAEditar.precio_compra}
                  onChange={(e) =>
                    setProductoAEditar({
                      ...productoAEditar,
                      precio_compra: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <label
              style={{ fontSize: "13px", color: colores.texto_secundario }}
            >
              Código de barras
            </label>
            <input
              style={inputEstilo}
              value={productoAEditar.codigo_barras || ""}
              onChange={(e) =>
                setProductoAEditar({
                  ...productoAEditar,
                  codigo_barras: e.target.value,
                })
              }
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
                marginTop: "15px",
              }}
            >
              <button
                type="button"
                onClick={() => setMostrarModalEdit(false)}
                style={{
                  padding: "10px 20px",
                  background: "#eee",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Cerrar
              </button>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  background: colores.cabecera,
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
