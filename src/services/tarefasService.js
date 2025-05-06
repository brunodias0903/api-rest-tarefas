const tarefas = require("../database/fakeDb");
const { v4: uuidv4 } = require("uuid");

function listarTarefas(filtroConcluida) {
  if (filtroConcluida !== undefined) {
    return tarefas.filter((t) => t.concluida === (filtroConcluida === "true"));
  }
  return tarefas;
}

function buscarTarefaPorId(id) {
  return tarefas.find((t) => t.id === id);
}

function criarTarefa({ titulo, descricao, concluida }) {
  const nova = { id: uuidv4(), titulo, descricao, concluida };
  tarefas.push(nova);
  return nova;
}

function atualizarTarefa(id, dados) {
  const index = tarefas.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tarefas[index] = { ...tarefas[index], ...dados };
  return tarefas[index];
}

function deletarTarefa(id) {
  const index = tarefas.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tarefas.splice(index, 1);
  return true;
}

function concluirTarefa(id) {
  const tarefa = buscarTarefaPorId(id);
  if (!tarefa) return null;
  tarefa.concluida = true;
  return tarefa;
}

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa,
};
