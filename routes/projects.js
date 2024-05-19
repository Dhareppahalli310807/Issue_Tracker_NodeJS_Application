import express from 'express';
import { getProjects, createProject, getProjectDetails } from '../controllers/projectController.js';
import { createIssue } from '../controllers/issueController.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/new', (req, res) => {
    res.render('projects/new');
});
router.post('/', createProject);
router.get('/:id', getProjectDetails);
router.get('/:id/issues/new', (req, res) => {
    const { id } = req.params;
    res.render('issues/new', { projectId: id });
});
router.post('/:id/issues', createIssue);

export default router;
