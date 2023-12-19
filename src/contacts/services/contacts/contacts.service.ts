import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactType } from 'src/contacts/types/ContactType';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contacts') private readonly ContactsModel: Model<ContactType>,
  ) {}

  async fetchContacts(): Promise<ContactType[]> {
    const contacts = await this.ContactsModel.find();
    return contacts;
  }

  async fetchContactById(id: number): Promise<ContactType> {
    const contact = await this.ContactsModel.findById(id);
    return contact;
  }

  async fetchContactByName(name: string): Promise<ContactType> {
    const contact = await this.ContactsModel.findOne({name});
    return contact;
  }

  async createContact(contactData: ContactType) {
    const newContact = new this.ContactsModel(contactData);
    await newContact.save();
    return { message: 'Document saved successfully' };
  }

  async deleteContact(id: string | number) {
    await this.ContactsModel.findByIdAndDelete(id);
    return { message: 'Document deleted!' };
  }
}
