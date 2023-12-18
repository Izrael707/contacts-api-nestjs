import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, Length, MinLength } from "class-validator"

export class CreateContactDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsNumberString()
  @Length(6,14, {message: "Phone number must be more than 6 and less than 14 digits long"})
  phone: string
}