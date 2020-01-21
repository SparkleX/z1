import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as express from "express";
import * as compression from 'compression'
import { Container } from "inversify"
import "reflect-metadata";

import {
  interfaces,
  InversifyExpressServer,
  TYPE
} from "inversify-express-utils"

import { container } from "./inversify.config"
import "z1-controller"
import {initDatabase} from "./initDatabase"
import * as proxy from 'http-proxy-middleware';

async function main() {
	await initDatabase();
	let server = new InversifyExpressServer(container);
	server.setConfig(app => {
		app.use(morgan("dev"));
		app.use(compression());
		app.use(express.static('public'));
		app.use(
		bodyParser.urlencoded({
			extended: true
			})
		);
		app.use(bodyParser.json());
		app.use('/web', proxy({target: 'http://localhost:8080'}));
	});
	
	let app = server.build();
	app.listen(3000);
	console.info('server start at port:3000');	
}


main();