const modelTask = require('../Schemas/Task.js');

module.exports = {
    create: function (req, res) {
        var task = new modelTask({
            name: req.body.name,
            description: req.body.description,
            useId: req.body.userId,
            assignedUserID: req.body.assignedUserID,
            dueDate: req.body.dueDate,
            executionDate: req.body.executionDate,
            houseID: req.body.houseID,
            removed: false
        });

        task.save(function (err, task) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar nova task', error: err }) };
            return res.json({ task: task, message: 'Task criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.body.name;
        modelTask.findOne({ name: name }, function (err, task) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar task', error: err }) };
            if (task) {
                return res.json({ task: task, message: 'Task encontrado!' });
            } else {
                return res.json({ task: task, message: 'Task não encontrada :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.body.id;
        modelTask.findOne({ _id: id }, function (err, task) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar task', error: err }) };
            if (task) {
                return res.json({ task: task, message: 'Task encontrado!' });
            } else {
                return res.json({ task: task, message: 'Task não encontrado :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.body.id;
        modelTask.findByIdAndRemove(id, function (err, task) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar task', error: err }) };
            return res.json({ message: 'Task excluido com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.body.id;
        var body = req.body;
        var task = { 
            name: body.name, description: body.description, 
            removed: body.removed, dueDate: body.dueDate,
            assignedUserID: body.assignedUserID, executionDate: body.executionDate
        };
        modelTask.findByIdAndUpdate(id, task, function (err, task) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar task', error: err }) };
            return res.json({ message: 'Task atualizado com sucesso!' });
        });
    }
};