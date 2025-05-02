"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supabase_js_1 = require("@supabase/supabase-js");
const router = express_1.default.Router();
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
// Get all projects
router.get('/', async (req, res) => {
    try {
        console.log('Supabase URL:', process.env.SUPABASE_URL);
        console.log('Querying projects...');
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });
        console.log('Query result:', { data, error });
        if (error)
            throw error;
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});
// Get a single project
router.get('/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('id', req.params.id)
            .single();
        if (error)
            throw error;
        if (!data) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ error: 'Failed to fetch project' });
    }
});
// Create a new project
router.post('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('projects')
            .insert([req.body])
            .select()
            .single();
        if (error)
            throw error;
        res.status(201).json(data);
    }
    catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
});
// Update a project
router.patch('/:id', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('projects')
            .update(req.body)
            .eq('id', req.params.id)
            .select()
            .single();
        if (error)
            throw error;
        if (!data) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(data);
    }
    catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project' });
    }
});
// Delete a project
router.delete('/:id', async (req, res) => {
    try {
        const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', req.params.id);
        if (error)
            throw error;
        res.status(204).send();
    }
    catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
});
exports.default = router;
