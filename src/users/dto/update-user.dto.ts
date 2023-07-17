import { ApiProperty } from "@nestjs/swagger";
export class UpdateUserDto {
  // name
  @ApiProperty({ example: "Kirill", description: "Имя пользователя" })
  name: string;
  // lastName
  @ApiProperty({ example: "Marchenko", description: "Фамилия" })
  lastName: string;
  // avatar
  @ApiProperty({
    example:
      "https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?resize=400x0",
    description: "Аватар пользователя",
  })
  avatar: string;
}
