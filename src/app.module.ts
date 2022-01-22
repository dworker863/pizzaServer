import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GoodsModule } from './goods/goods.module';
import { User } from './users/models/users.model';
import { Pizza } from './goods/models/pizza.model';
import { Salad } from './goods/models/salad.model';
import { Snack } from './goods/models/snack.model';
import { Dessert } from './goods/models/dessert.model';
import { Drink } from './goods/models/drink.model';
import { Hot } from './goods/models/hot.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Pizza, Salad, Snack, Dessert, Drink, Hot],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    GoodsModule,
  ],
})
export class AppModule {}
