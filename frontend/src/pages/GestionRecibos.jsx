import React, { useState, useEffect } from "react";
import clienteAxios from "../axios";

export default function GestionRecibos({ usuarioLogueado }) {
  const esAdmin =
    usuarioLogueado?.id_rol === 1 || usuarioLogueado?.rol === "Administrador";

  // CONTROLES DE FLUJO:
  const [subTab, setSubTab] = useState("emitir");
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [clientesDisponibles, setClientesDisponibles] = useState([]);
  const [recibosHistorial, setRecibosHistorial] = useState([]);
  const [cargando, setCargando] = useState(false);

  // FILTROS DE HISTORIAL:
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [filtroCliente, setFiltroCliente] = useState("");
  const [filtroFactura, setFiltroFactura] = useState("");
  const [reporteEconomico, setReporteEconomico] = useState(null);

  // ESTADO ORDEN DE COMPRA (CARRITO)
  const [carrito, setCarrito] = useState([]);
  const [facturaData, setFacturaData] = useState({
    numero_factura: "",
    id_cliente: "", // Se cargará de la Base de datos
    id_pago: "10", // Mapear con tus IDS de la tabla método pago
  });

  const colores = {
    fondo: "#f3e5db",
    cabecera: "#5c4033",
    tarjeta: "#ffffff",
    texto: "#333333",
    linea: "#cccccc",
    verde: "#4CAF50",
    rojo: "#f44336",
    textoSecundario: "#777777",
    grisClaro: "#e0e0e0",
  };

  // Generador de numeración automática para evitar choques P2002 en Prisma
  const generarConsecutivo = () => `FAC-${Date.now().toString().slice(-6)}`;

  // EFECTOS E INGESTAS DESDE BACKEND:
  const iniciarModuloPOS = async () => {
    try {
      const [resProd, resCli] = await Promise.all([
        clienteAxios.get("/productos"),
        clienteAxios.get("/clientes"),
      ]);
      setProductosDisponibles(resProd.data);
      setClientesDisponibles(resCli.data);

      // Asignar primer cliente por defecto si existe

      // Asignar primer cliente por defecto si existe
      if (resCli.data.length > 0) {
        setFacturaData({
          numero_factura: generarConsecutivo(),
          id_cliente: resCli.data[0].id_cliente.toString(), // Usa el ID real que viene de la DB
          id_pago: "10",
        });
      } else {
        setFacturaData((prev) => ({
          ...prev,
          numero_factura: generarConsecutivo(),
          id_pago: "10",
        }));
      }
    } catch (err) {
      console.error("Error sincronizando catálogos del punto de venta", err);
    }
  };

  const cargarHistorialYMetricas = async () => {
    try {
      setCargando(true);
      let url = "/facturas";
      if (fechaInicio && fechaFin) {
        url += `?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
      }
      const res = await clienteAxios.get(url);
      setRecibosHistorial(res.data);

      if (esAdmin && fechaInicio && fechaFin) {
        const resRep = await clienteAxios.get(
          `/facturas/reporte-economico?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
        );
        setReporteEconomico(resRep.data);
      } else {
        setReporteEconomico(null);
      }
    } catch (err) {
      console.error("Error trayendo historial transaccional", err);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    iniciarModuloPOS();
  }, []);

  useEffect(() => {
    if (subTab === "historial") {
      cargarHistorialYMetricas();
    }
  }, [subTab, fechaInicio, fechaFin]);

  // ACCIONES DEL CARRITO:
  const agregarAlCarrito = (prod) => {
    const stockMax = Number(prod.stock);
    if (stockMax <= 0) {
      alert("Este artículo no cuenta con unidades disponibles en stock.");
      return;
    }
    const existente = carrito.find(
      (item) => item.id_producto === prod.id_producto,
    );
    if (existente) {
      if (existente.cantidad >= stockMax) {
        alert(
          `Imposible agregar más. Stock máximo alcanzado (${stockMax} unidades).`,
        );
        return;
      }
      setCarrito(
        carrito.map((item) =>
          item.id_producto === prod.id_producto
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    } else {
      setCarrito([...carrito, { ...prod, cantidad: 1 }]);
    }
  };

  const cambiarCantidad = (id_producto, cantidadIngresada, stockMax) => {
    const cant = Number(cantidadIngresada);
    if (cant <= 0) {
      setCarrito(carrito.filter((item) => item.id_producto !== id_producto));
      return;
    }
    if (cant > Number(stockMax)) {
      alert(
        `Inventario insuficiente. Máximo disponible: ${stockMax} unidades.`,
      );
      return;
    }
    setCarrito(
      carrito.map((item) =>
        item.id_producto === id_producto ? { ...item, cantidad: cant } : item,
      ),
    );
  };

  const totalFacturaCalculado = carrito.reduce(
    (sum, item) => sum + item.cantidad * Number(item.precio_venta),
    0,
  );

  // DISPARAR POST HACIA EL BACKEND:
  const procesarFacturacion = async (e) => {
    e.preventDefault();
    if (carrito.length === 0) {
      alert("Debe añadir al menos un producto a la orden de compra.");
      return;
    }
    if (!facturaData.id_cliente) {
      alert("Seleccione o registre un cliente válido primero.");
      return;
    }

    try {
      const payload = {
        numero_factura: facturaData.numero_factura,
        id_cliente: Number(facturaData.id_cliente),
        id_pago: Number(facturaData.id_pago),
        total: Number(totalFacturaCalculado.toFixed(2)),
        productos: carrito.map((item) => ({
          id_producto: item.id_producto,
          cantidad: item.cantidad,
          precio_unitario: Number(item.precio_venta),
        })),
      };

      const res = await clienteAxios.post("/facturas", payload);
      alert(res.data.mensaje || "Venta confirmada exitosamente.");

      // Forzar apertura de la descarga de PDFKit desde tu API de NestJS
      await descargarPdfHistorico(res.data.id_factura);

      // Resetear estados limpios
      setCarrito([]);
      setFacturaData({
        numero_factura: generarConsecutivo(),
        id_cliente: clientesDisponibles[0]?.id_cliente?.toString() || "",
        id_pago: "10",
      });
      await iniciarModuloPOS();
    } catch (err) {
      const msg =
        err.response?.data?.message || "Error al emitir el recibo electrónico.";
      alert(Array.isArray(msg) ? msg.join("\n") : msg);
    }
  };

  const descargarPdfHistorico = async (id) => {
    try {
      alert("Generando PDF, por favor espere...");

      // Hacemos la petición con axios indicando que esperamos un archivo binario (blob)
      const respuesta = await clienteAxios.get(
        `/facturas/${id}/descargar-pdf`,
        {
          responseType: "blob",
        },
      );

      // Creamos una URL temporal para el archivo descargado
      const blob = new Blob([respuesta.data], { type: "application/pdf" });
      const urlDescarga = window.URL.createObjectURL(blob);

      // Creamos un enlace invisible para forzar la descarga en el navegador
      const enlace = document.createElement("a");
      enlace.href = urlDescarga;
      enlace.setAttribute("download", `Factura-${id}.pdf`); // Nombre del archivo
      document.body.appendChild(enlace);
      enlace.click();

      // Esto es para limpiar el DOM y liberar memoria
      document.body.removeChild(enlace);
      window.URL.revokeObjectURL(urlDescarga);
    } catch (err) {
      console.error("Error al descargar el archivo PDF", err);
      alert(
        "No se pudo descargar el PDF. Asegúrate de tener una sesión activa.",
      );
    }
  };

  const historialFiltrado = recibosHistorial.filter((fact) => {
    const matchesCliente =
      fact.clientes?.nombre_cliente
        ?.toLowerCase()
        .includes(filtroCliente.toLowerCase()) ?? true;
    const matchesFactura =
      fact.numero_factura
        ?.toLowerCase()
        .includes(filtroFactura.toLowerCase()) ?? true;
    return matchesCliente && matchesFactura;
  });

  const inputEstilo = {
    padding: "8px 12px",
    borderRadius: "8px",
    border: `1px solid ${colores.linea}`,
    fontSize: "14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "sans-serif", color: colores.texto }}>
      {/* SELECTOR DE SUBMODULO */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          borderBottom: `1px solid ${colores.linea}`,
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setSubTab("emitir")}
          style={{
            background: "none",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: subTab === "emitir" ? "bold" : "normal",
            borderBottom:
              subTab === "emitir" ? `3px solid ${colores.cabecera}` : "none",
            color:
              subTab === "emitir" ? colores.cabecera : colores.textoSecundario,
          }}
        >
          Punto de Venta (POS)
        </button>
        <button
          onClick={() => setSubTab("historial")}
          style={{
            background: "none",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: subTab === "historial" ? "bold" : "normal",
            borderBottom:
              subTab === "historial" ? `3px solid ${colores.cabecera}` : "none",
            color:
              subTab === "historial"
                ? colores.cabecera
                : colores.textoSecundario,
          }}
        >
          Historial & Reportes Semanales
        </button>
      </div>

      {/* VISTA PUNTO DE VENTA */}
      {subTab === "emitir" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "20px",
          }}
        >
          {/* SECCIÓN PRODUCTOS RECONECTADA */}
          <div>
            <h4 style={{ margin: "0 0 15px 0", color: colores.cabecera }}>
              Inventario en Tienda
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "65vh",
                overflowY: "auto",
              }}
            >
              {productosDisponibles.map((p) => (
                <div
                  key={p.id_producto}
                  style={{
                    display: "flex",
                    background: "white",
                    padding: "12px",
                    borderRadius: "10px",
                    border: `1px solid ${colores.linea}`,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong style={{ fontSize: "15px" }}>
                      {p.nombre_producto}
                    </strong>
                    <div
                      style={{
                        fontSize: "13px",
                        color: colores.textoSecundario,
                        marginTop: "2px",
                      }}
                    >
                      Precio unitario:{" "}
                      <b>${Number(p.precio_venta).toFixed(2)}</b> | Quedan:{" "}
                      {Number(p.stock) > 0 ? (
                        `${Number(p.stock)} uds`
                      ) : (
                        <span style={{ color: colores.rojo }}>Agotado</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => agregarAlCarrito(p)}
                    disabled={Number(p.stock) <= 0}
                    style={{
                      background:
                        Number(p.stock) > 0 ? colores.verde : colores.grisClaro,
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    ➕ Agregar
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* INTERFAZ TIRILLA DERECHA CONECTADA CON DB CLiENTES & PAGOS */}
          <div
            style={{
              background: "#fcf8f2",
              border: "2px dashed #5c4033",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "center",
                borderBottom: `2px solid ${colores.cabecera}`,
                paddingBottom: "10px",
                marginBottom: "15px",
              }}
            >
              <h3 style={{ margin: 0, color: colores.cabecera }}>
                GENERAR FACTURA
              </h3>
              <small style={{ color: colores.textoSecundario }}>
                Establecimiento #{usuarioLogueado?.id_tienda}
              </small>
            </div>

            <form
              onSubmit={procesarFacturacion}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  No. Factura (Código Único)
                </label>
                <input
                  style={inputEstilo}
                  required
                  value={facturaData.numero_factura}
                  onChange={(e) =>
                    setFacturaData({
                      ...facturaData,
                      numero_factura: e.target.value,
                    })
                  }
                />
              </div>

              {/* SELECT RELACIONAL DE CLIENTES TRAÍDOS DE LA BASE DE DATOS */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Asociar Cliente Registrado
                </label>
                <select
                  style={inputEstilo}
                  value={facturaData.id_cliente}
                  required
                  onChange={(e) =>
                    setFacturaData({
                      ...facturaData,
                      id_cliente: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    -- Seleccione un comprador --
                  </option>
                  {clientesDisponibles.map((c) => (
                    <option key={c.id_cliente} value={c.id_cliente}>
                      {c.nombre_cliente} ({c.documento_cliente})
                    </option>
                  ))}
                </select>
              </div>

              {/* INPUT DE MÉTODOS DE PAGO RELACIONADO A TU INSERCIÓN EN BD */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  ID / Método de Pago (Configurado en BD)
                </label>
                <select
                  style={inputEstilo}
                  value={facturaData.id_pago}
                  onChange={(e) =>
                    setFacturaData({ ...facturaData, id_pago: e.target.value })
                  }
                >
                  <option value="10">Efectivo (ID: 10)</option>
                  <option value="20">Cheque (ID: 20)</option>
                  <option value="42">Consignacion Bancaria (ID: 42)</option>
                  <option value="45">
                    Transferencia Credito Bancario (ID: 45)
                  </option>
                  <option value="46">
                    Transferencia Debito Interbancario (ID: 46)
                  </option>
                  <option value="48">Tarjeta Credito (ID: 48)</option>
                  <option value="49">Tarjeta Debito (ID: 49)</option>
                </select>
              </div>

              {/* ITEMS TOTALES */}
              <div
                style={{
                  borderTop: "1px dashed #ccc",
                  borderBottom: "1px dashed #ccc",
                  padding: "10px 0",
                  minHeight: "120px",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {carrito.length === 0 ? (
                  <p
                    style={{
                      textAlign: "center",
                      fontStyle: "italic",
                      color: colores.textoSecundario,
                      fontSize: "13px",
                    }}
                  >
                    Orden vacía
                  </p>
                ) : (
                  carrito.map((item) => (
                    <div
                      key={item.id_producto}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "8px",
                        fontSize: "13px",
                      }}
                    >
                      <span style={{ width: "50%", fontWeight: "600" }}>
                        {item.nombre_producto}
                      </span>
                      <input
                        type="number"
                        style={{
                          width: "50px",
                          padding: "3px",
                          textAlign: "center",
                        }}
                        value={item.cantidad}
                        onChange={(e) =>
                          cambiarCantidad(
                            item.id_producto,
                            e.target.value,
                            item.stock,
                          )
                        }
                      />
                      <span
                        style={{
                          width: "30%",
                          textAlign: "right",
                          fontWeight: "bold",
                        }}
                      >
                        $
                        {(item.cantidad * Number(item.precio_venta)).toFixed(2)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                <span>TOTAL CAJA:</span>
                <span style={{ color: colores.cabecera }}>
                  ${totalFacturaCalculado.toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                style={{
                  background: colores.cabecera,
                  color: "white",
                  padding: "12px",
                  border: "none",
                  borderRadius: "25px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                Confirmar Venta & Emitir PDF
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VISTA HISTORIAL Y REPORTE SEMANAL */}
      {subTab === "historial" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "12px",
              border: `1px solid ${colores.linea}`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "15px",
            }}
          >
            <input
              style={inputEstilo}
              placeholder="Buscar por No. Factura"
              value={filtroFactura}
              onChange={(e) => setFiltroFactura(e.target.value)}
            />
            <input
              style={inputEstilo}
              placeholder="Buscar por Cliente"
              value={filtroCliente}
              onChange={(e) => setFiltroCliente(e.target.value)}
            />
            <input
              type="date"
              style={inputEstilo}
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />
            <input
              type="date"
              style={inputEstilo}
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
            />
          </div>

          {/* MÉTRICAS BLINDADAS DEL ADMINISTRADOR */}
          {esAdmin && reporteEconomico && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                background: colores.cabecera,
                color: "white",
                padding: "18px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  borderRight: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span style={{ fontSize: "13px", opacity: 0.8 }}>
                  Ingresos Brutos en Rango Seleccionado
                </span>
                <h2 style={{ margin: "5px 0 0 0" }}>
                  ${Number(reporteEconomico.total_ingresos).toFixed(2)}
                </h2>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "13px", opacity: 0.8 }}>
                  Ventas Procesadas con Éxito
                </span>
                <h2 style={{ margin: "5px 0 0 0" }}>
                  {reporteEconomico.total_ventas_realizadas} transacciones
                </h2>
              </div>
            </div>
          )}

          {/* TABLA HISTÓRIAL GENERAL */}
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              border: `1px solid ${colores.linea}`,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: colores.cabecera,
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  <th style={{ padding: "12px" }}>Código Recibo</th>
                  <th style={{ padding: "12px" }}>Cliente Receptor</th>
                  <th style={{ padding: "12px" }}>Cajero de Turno</th>
                  <th style={{ padding: "12px" }}>Fecha</th>
                  <th style={{ padding: "12px" }}>Total Cobrado</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>
                    Imprimir
                  </th>
                </tr>
              </thead>
              <tbody>
                {cargando ? (
                  <tr>
                    <td
                      colSpan="6"
                      style={{ padding: "20px", textAlign: "center" }}
                    >
                      Solicitando registros ...
                    </td>
                  </tr>
                ) : historialFiltrado.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      style={{ padding: "20px", textAlign: "center" }}
                    >
                      Sin registros de venta en el rango establecido.
                    </td>
                  </tr>
                ) : (
                  historialFiltrado.map((f) => (
                    <tr
                      key={f.id_factura}
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <td style={{ padding: "12px", fontWeight: "bold" }}>
                        {f.numero_factura}
                      </td>
                      <td style={{ padding: "12px" }}>
                        {f.clientes?.nombre_cliente}{" "}
                        <small style={{ color: "#888" }}>
                          ({f.clientes?.documento_cliente})
                        </small>
                      </td>
                      <td style={{ padding: "12px", color: "#666" }}>
                        {f.usuarios?.nombre}
                      </td>
                      <td style={{ padding: "12px" }}>
                        {new Date(f.fecha).toLocaleDateString()}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          fontWeight: "bold",
                          color: colores.cabecera,
                        }}
                      >
                        ${Number(f.total).toFixed(2)}
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <button
                          onClick={() => descargarPdfHistorico(f.id_factura)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#0066cc",
                            cursor: "pointer",
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Descargar PDF
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
