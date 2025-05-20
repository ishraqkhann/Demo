import { DataSource, DataSourceOptions } from "typeorm";

// Configuration object for the database connection
const dbConfig: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admin",
    password: "zobest",
    database: "projet-typescript",
    entities: [
        "src/entity/entity.ts"
    ],
    logging: false,
    synchronize: true,
    subscribers: [],
    migrations: []
};     //TypeScript 'as' type assertions are not allowed in JavaScript [E0281]

// Create a new instance of the DataSource using the configuration
export const AppDataSource = new DataSource(dbConfig);
