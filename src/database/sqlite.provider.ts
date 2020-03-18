import { Sequelize } from 'sequelize-typescript';
import { Order } from '../order/order.entity';

export const sqliteProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'mysql.sqlite',
    });
    sequelize.addModels([Order]);
    await sequelize.sync();
    return sequelize;
  },
};
