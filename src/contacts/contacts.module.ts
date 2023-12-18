import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { ContactsService } from './services/contacts/contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsSchema } from './schema/contacts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contacts', schema: ContactsSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
