import { Request, Response, NextFunction } from 'express';

export const validateNotNull = ( fields: string[] ) => {
  return ( req: Request, res: Response, next: NextFunction ): void => {
    
    for (const field of fields) {
      if (!req.body[field] || req.body[field].toString().trim() === '') {
        res.status(400).json({ error: `El campo ${field} no puede ser nulo o vacío.` });
        return;
      }
    }
    next(); 
  };
};
