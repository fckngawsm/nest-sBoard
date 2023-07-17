import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";
export class CreateUserDto {
  // name
  @ApiProperty({ example: "Kirill", description: "Имя пользователя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(2, 40, {
    message: "Имя должно быть не меньше 2 символов и не больше 40",
  })
  name: string;
  // lastName
  @ApiProperty({ example: "Marchenko", description: "Фамилия" })
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 40, {
    message: "Фамилия должен быть не меньше 7 и не больше 40 символов",
  })
  lastName: string;
  // email
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адресс" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Укажите верную почту" })
  readonly email: string;
  // pass
  @ApiProperty({ example: "kirill1234", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 40, {
    message: "Пароль должен быть не меньше 5 и не больше 40 символов",
  })
  readonly password: string;
}
