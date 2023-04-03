/* eslint-disable @typescript-eslint/no-explicit-any */
/**  */
import express from "express";
import { Response, Request, NextFunction } from "express";
import { MongooseConnector } from "./db/mongoose-connector";
import routes from "./routes/index";
import morgan from "morgan";
import cors from "cors";

const app = express();

const mongooseConnector = new MongooseConnector({
	url: "mongodb://localhost:27017",
	dbName: "PostsVue3DB",
});

app.use(cors());
//morgan used for logging
app.use(morgan<Request, Response>("dev"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);

mongooseConnector
	.connect()
	.then(() => {
		app.use(routes);

		app.use((error: any, res: Response, next: NextFunction) => {
			try {
				const status = error.status || 500;
				const message = error.message || "There was an error while processing your request, please try again";
				return res.status(status).send({
					status,
					message,
				});
			} catch (error) {
				next(error);
			}
		});

		const port = 3000;

		app.listen(port, async () => {
			console.log(`Application started on ${port}...`);
		});
	})
	.catch((err: any) => {
		console.error("Failed to connect to database", err);
	});

export default app;
