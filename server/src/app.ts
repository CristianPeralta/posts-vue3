/**  */
import express from "express";
import { Response, Request, NextFunction } from "express";
import indexRoute from  "./routes";
import morgan from "morgan";

const app = express();

//morgan used for logging
// app.use(morgan("dev"));
app.use(morgan<Request, Response>("dev"));

app.use('/', indexRoute);

app.use((error: any, res: Response, next: NextFunction) => {
    try {
      const status = error.status || 500;
      const message =
        error.message ||
        "There was an error while processing your request, please try again";
      return res.status(status).send({
        status,
        message,
      });
    } catch (error) {
      next(error);
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Application started on ${port}...`);
});

export default app;