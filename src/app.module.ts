import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "kirill",
      database: "sBoard",
      entities: [],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
