import 'express-async-errors';
import '@utils/dotEnv';

import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import compression from 'compression';

import controllers from '@controllers/index';
import { connection } from '@database/config';

interface Server {
  express: express.Application;
}

class Server {
  constructor() {
    this.express = express();
    this.dataBase();
    this.middlewares();
    this.controllers();
  }

  dataBase() {
    connection();
  }

  controllers() {
    this.express.use(controllers);
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(compression());
    this.express.use(helmet());

    this.express.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
      return resp.status(500).json({
        success: false,
        data: {
          message: err.message,
        },
      });
    });
  }
}

export default new Server().express;
