import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import tenantMiddleware from './middleware/tenantMiddleware';

dotenv.config();

const app = express();
app.use(express.json());

// Add tenant middleware globally
app.use(tenantMiddleware);

// Example route
app.get('/tasks', (req: Request, res: Response) => {
    const tenantId = (req as any).tenantId; // Use tenantId attached by middleware
    res.json({ message: `Tasks for tenant ${tenantId}` });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
