var ReporteService = require("../services/reporte.service");

_this = this;

// Creacion de reporte
exports.createReporte = async function (req, res, next) {
  var Reporte = {
    pedido: req.body.pedido,
    codigoproducto: req.body.codigoproducto,
    droga: req.body.droga,
    marca: req.body.marca,
    presentacion: req.body.presentacion,
    laboratorio: req.body.laboratorio,
    precio: req.body.precio,
    acuerdo: req.body.acuerdo,
    valoracuerdo: req.body.valoracuerdo,
    cantidadvendida: req.body.cantidadvendida,
    moroso: req.body.moroso,
    valormoroso: req.body.valormoroso,
    cronologico: req.body.cronologico,
    valorcronologico: req.body.valorcronologico,
    resultado: req.body.resultado,
    valorresultado: req.body.valorresultado,
  };
  try {
    var createdReporte = await ReporteService.createReporte(Reporte);
    return res
      .status(201)
      .json({ createdReporte, message: "Reporte creado exitosamente" });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .json({ status: 400, message: "Reporte no pudo ser creado" });
  }
};

// Traigo Reporte
exports.getReporte = async function (req, res, next) {
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 1000;
  try {
    var Reporte = await ReporteService.getReporte({}, page, limit);
    return res
      .status(200)
      .json({
        status: 200,
        data: Reporte,
        message: "Reporte recuperados exitosamente",
      });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Traigo Reportes por ID
exports.getReporteID = async function (req, res, next) {
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 1000;

  var filtro = {
    _id: req.body._id,
  };
  try {
    var Reporte = await ReporteService.getReporte(filtro, page, limit);

    if (Reporte.total === 0)
      return res
        .status(201)
        .json({
          status: 201,
          data: Reporte,
          message: "No existe la reporte por ID",
        });
    else
      return res
        .status(200)
        .json({
          status: 200,
          data: Reporte,
          message: "Reporte por ID recuperada exitosamente",
        });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: 400, message: e.message });
  }
};
