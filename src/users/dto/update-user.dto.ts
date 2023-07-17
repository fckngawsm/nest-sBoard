import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";
export class UpdateUserDto {
  // name
  @ApiProperty({ example: "Kirill", description: "Имя пользователя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(2, 40, {
    message: "Фамилия должен быть не меньше 7 и не больше 40 символов",
  })
  name: string;
  // lastName
  @ApiProperty({ example: "Marchenko", description: "Фамилия" })
  @IsString({ message: "Должно быть строкой" })
  @Length(5, 40, {
    message: "Фамилия должен быть не меньше 7 и не больше 40 символов",
  })
  lastName: string;
  // avatar
  @ApiProperty({
    example:
      "https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?resize=400x0",
    description: "Аватар пользователя",
  })
  avatar: string;
}
