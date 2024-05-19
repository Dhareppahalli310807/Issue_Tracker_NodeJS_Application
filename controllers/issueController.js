import Issue from '../models/issue.js';
import Project from '../models/project.js';
export const createIssue = async (req, res) => {
    const { projectId } = req.params;
    const { title, description, labels, author } = req.body;

    const issue = new Issue({
        title,
        description,
        labels: labels.split(',').map(label => label.trim()),
        author,
        project: projectId
    });

    await issue.save();
    res.redirect(`/projects/${projectId}`);
};
