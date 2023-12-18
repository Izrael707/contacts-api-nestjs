import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';
import { CreateContactDto } from 'src/dtos/contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get()
  getContacts() {
    return this.contactsService.fetchContacts();
  }

  @Get(':id')
  getOneContact(@Param('id') id: string | number) {
    return this.contactsService.fetchContactById(id);
  }

  @UsePipes(ValidationPipe)
  @Post('create')
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Delete(':id')
  deleteContact(@Param('id') id: string | number) {
    return this.contactsService.deleteContact(id);
  }
}
