import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { UserModule } from './apis/users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';

import { AuthModule } from './apis/auth/auth.module';
import { BoardModule } from './apis/boards/boards.module';

import { JwtAccessStrategy } from './apis/auth/strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './apis/auth/strategies/jwt-refresh-strategy';
import { reservationModule } from './apis/reservations/reservation.module';
import { CommentModule } from './apis/Comments/comments.module';
import { AlarmModule } from './apis/alarm/alarms.module';

@Module({
  imports: [
    AuthModule,
    AlarmModule,
    BoardModule,
    CommentModule,
    UserModule,
    BoardModule,
    reservationModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: true,
        context: ({ req, res }) => ({ req, res }),
        cors: {
          origin: process.env.ORIGIN,
          credentials: true,
        },
        uploads: false,
      }),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: `redis://${process.env.REDIS_DATABASE_HOST}:6379`,
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          service: 'Gmail',
          host: process.env.EMAIL_HOST,
          port: Number(process.env.DATABASE_PORT),
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        },
      }),
    }),
  ],
  providers: [
    JwtAccessStrategy,
    AppController, //
    JwtRefreshStrategy,
  ],
})
export class AppModule {}
