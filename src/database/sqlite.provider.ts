import { Dialect } from 'sequelize/types';
import { Sequelize } from 'sequelize-typescript';
import { Order } from '../order/order.entity';

export const sqliteProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: process.env.DB_SEQUELIZE_DIALECT as Dialect,
      storage: process.env.DB_SEQUELIZE_STORAGE,
    });
    sequelize.addModels([Order]);
    await sequelize.authenticate();
    return sequelize;
  },
};
