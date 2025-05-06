const express = require("express");
const morgan = require("morgan");
const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
