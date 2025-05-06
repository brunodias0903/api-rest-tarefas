const service = require("../services/tarefasService");
const logger = require("../utils/logger");

module.exports = {
  listar: (req, res) => {
    const { concluida } = req.query;
    const tarefas = service.listarTarefas(concluida);
    res.json(tarefas);
  },

  buscarPorId: (req, res) => {
    const tarefa = service.buscarTarefaPorId(req.params.id);
    if (!tarefa)
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    res.json(tarefa);
  },

  criar: (req, res) => {
    const nova = service.criarTarefa(req.body);
    logger.log("Tarefa criada com sucesso.");
    res.status(201).json(nova);
  },

  atualizar: (req, res) => {
    const atualizada = service.atualizarTarefa(req.params.id, req.body);
    if (!atualizada)
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    res.json(atualizada);
  },

  deletar: (req, res) => {
    const ok = service.deletarTarefa(req.params.id);
    if (!ok) return res.status(404).json({ erro: "Tarefa não encontrada." });
    logger.log("Tarefa deletada.");
    res.status(204).send();
  },

  concluir: (req, res) => {
    const tarefa = service.concluirTarefa(req.params.id);
    if (!tarefa)
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    res.json(tarefa);
  },
};
