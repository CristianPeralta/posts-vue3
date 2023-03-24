import mongoose, { ConnectOptions } from "mongoose";
import { IDbConfig } from "./config.interface";

export class MongooseConnector {
	constructor(private dbConfig: IDbConfig) {
		mongoose.connection.on("connected", this.onConnected);
		mongoose.connection.on("error", this.onError);
		mongoose.connection.on("disconnected", this.onDisconnected);
		mongoose.connection.on("reconnected", this.onReconnected);
	}

	async connect(): Promise<void> {
		await mongoose.connect(this.dbConfig.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: this.dbConfig.dbName,
		} as ConnectOptions);
	}

	private onConnected = () => {
		console.log(`Connected to MongoDB at ${this.dbConfig.url}`);
	};
	private onError = () => {
		console.log(`Could not connect to MongoDB at ${this.dbConfig.url}`);
	};
	private onReconnected = () => {
		console.log("Reconnecting to MongoDB");
	};
	private onDisconnected = () => {
		console.log("Database Disconnected");
	};
}
