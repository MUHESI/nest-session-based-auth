import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
export const URL_DB_LOCAL = 'mongodb://localhost:27017/sessionTest';

@Module({
  imports: [MongooseModule.forRoot(URL_DB_LOCAL), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
