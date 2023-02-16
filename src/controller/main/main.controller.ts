import { Request, Response } from 'express';

export const main = (req: Request, res: Response) => {
  res.render('main', { title: 'Main' });
};
