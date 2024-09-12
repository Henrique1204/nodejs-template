import express, { Express, Application } from 'express';
import cors from 'cors';

export class App {
  constructor(private _express: Express = express(), private porta = 8000) {
    this.addMiddlewares();
    this.listen();
    this.createRoutes();
  }

  private addMiddlewares = (): void => {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));

    this.express.use(
      cors({
        origin: '*',
        optionsSuccessStatus: 200,
      }),
    );
  };

  private listen = (): void => {
    this.express.listen(this.porta, () => {
      console.log(`Servidor rodando na porta ${this.porta}`);
    });
  };

  private createRoutes = (): void => {};

  public get express(): Application {
    return this._express;
  }
}
