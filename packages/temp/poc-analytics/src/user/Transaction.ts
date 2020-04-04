import { CoreTransaction, getConnection } from "../core/Transaction";
import {createNamespace, getNamespace,Namespace } from 'cls-hooked';
import { Connection } from "db-conn";
import { NextFunction, Request, Response } from 'express';



var session:Namespace = createNamespace('session-namespace');
var sessionRead:Namespace = getNamespace('session-namespace');

export async function Transaction(req:Request, res:Response, next:NextFunction) {
	return CoreTransaction(req, res, next, global['pool'], session );
}

