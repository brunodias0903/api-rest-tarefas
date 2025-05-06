const Joi = require("joi");

const tarefaSchema = Joi.object({
  titulo: Joi.string().min(3).required(),
  descricao: Joi.string().required(),
  concluida: Joi.boolean().required(),
});

module.exports = (req, res, next) => {
  const { error } = tarefaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }
  next();
};
