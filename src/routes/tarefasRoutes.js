const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefasController");
const validate = require("../middlewares/validateTarefa");

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", validate, controller.criar);
router.put("/:id", validate, controller.atualizar);
router.patch("/:id/concluir", controller.concluir);
router.delete("/:id", controller.deletar);

module.exports = router;
