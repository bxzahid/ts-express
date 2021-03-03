import { Document } from "mongoose";

export interface loginUserResponse extends Document {
	_id: string;
	name: string;
	email: string;
	password: string;
}

export interface IUser extends Document {
	password: string;
}