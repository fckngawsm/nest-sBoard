import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";
export class LoginUserDto {
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
