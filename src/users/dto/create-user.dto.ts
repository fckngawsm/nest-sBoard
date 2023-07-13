import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адресс" })
  readonly email: string;
  @ApiProperty({ example: "kirill1234", description: "Пароль" })
  readonly password: string;
}
