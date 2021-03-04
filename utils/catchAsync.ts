import { NextFunction, Request, Response } from "express";

/**
 * @export
 */
export default (fn: any) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};
};
