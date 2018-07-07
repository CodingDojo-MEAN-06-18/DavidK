const mongoose = require('mongoose'),
	Tasks = require('mongoose').model("Tasks");


tasks = {

	index: (req,res) => {
		Tasks.find({}).sort({created_by: 1})
		.then(data => {
			console.log("task list served");
			res.json(data);
		})
		.catch(error => {
			console.log("problem serving the task list.", error);
			res.json(error);
		});
	},

	show: (req,res) => {
		Tasks.findById( req.params.id)
		.then(data => {
			console.log("single task served");
			res.json(data);
		})
		.catch(error => {
			console.log("there was a problem retrieving task", error);
			res.json(error);
		});
	},

	create: (req,res) => {
		var task = new Tasks({
			title: req.params.name,
			description: req.params.description,
		});

		task.save()
			.then(data => {
				console.log("new task saved", data.title);
				res.json(data);
			})
			.catch(error => {
				console.log("there was a problem creating new task", error);
				res.json(error);
			});
	},

	update: (req,res) => {
		Tasks.findById(req.params.id)
			.then( data => {
				console.log("task found");
				task = data;
				if(task.completed === false) {
					task.set({completed: true, updated_at: new Data() });
				} else {
					task.set({completed: false, updated_at: new Data() });
				}
				task.save()
					.then( data => {
						console.log("successfully updated task", data.title);
						res.json(data);
					})
					.catch( error => {
						console.log("there was a problem saving update", error);
						res.json(error);
					});

			})
			.catch( error => {
				console.log("there was a problem finding the task to update");
				res.json(error);
			});
	},

	delete:(req,res) => {
		Tasks.remove({_id: req.params.id})
			.then(data => {
				console.log("task was deleted");
				let response = {
					Task : req.params.id,
					status: "deleted",
				};
				res.json({response: response});
			})
			.catch(error => {
				console.log("there was a problem deleting", error);
				res.json(error);
			});
	},


};

module.exports = tasks; 




