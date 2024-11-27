import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://adminuser:dbAdminn252@192.168.1.252:27017/dev_endlessevent',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
