import Project from '../models/project.js';
import Issue from '../models/issue.js';

export const getProjects = async (req, res) => {
    const projects = await Project.find();
    res.render('projects/index', { projects });
};

export const createProject = async (req, res) => {
    const { name, description, author } = req.body;

    const project = new Project({ name, description, author });
    await project.save();
    res.redirect('/projects');
};

export const getProjectDetails = async (req, res) => {
    const { id } = req.params;
    const { search, author, labels } = req.query;

    const project = await Project.findById(id);
    let issuesQuery = { project: id };

    if (search) {
        issuesQuery.$or = [
            { title: new RegExp(search, 'i') },
            { description: new RegExp(search, 'i') }
        ];
    }

    if (author) {
        issuesQuery.author = new RegExp(author, 'i');
    }

    if (labels) {
        issuesQuery.labels = { $all: labels.split(',').map(label => label.trim()) };
    }

    const issues = await Issue.find(issuesQuery);
    res.render('projects/show', { project, issues });
};
