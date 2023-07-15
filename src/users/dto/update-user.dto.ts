import { ApiProperty } from "@nestjs/swagger";
export class UpdateUserDto {
  @ApiProperty({ example: "Kirill", description: "Имя пользователя" })
  name: string;
  @ApiProperty({ example: "Marchenko", description: "Фамилия" })
  lastName: string;
}
