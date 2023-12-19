import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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

  @Get('/id/:id')
  getContactById(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.fetchContactById(id);
  }

  @Get('/name/:name')
  getContactByName(@Param('name') name: string){
    return this.contactsService.fetchContactByName(name)
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Delete('id/:id')
  deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.deleteContact(id);
  }
}
