import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include tenantId
interface TenantRequest extends Request {
    tenantId?: string;
}

const tenantMiddleware = (req: TenantRequest, res: Response, next: NextFunction) => {
    const tenantId = req.headers['x-tenant-id'] as string | undefined; // Safely cast the header
    if (!tenantId) {
        res.status(400).json({ error: 'Tenant ID is required.' });
        return; 
    }
    req.tenantId = tenantId; // Attach tenantId to the request object
    next(); // Pass control to the next middleware
};

export default tenantMiddleware;
