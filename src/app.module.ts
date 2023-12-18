import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ContactsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/my-contacts'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
