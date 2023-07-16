import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class User {
  // id
  @ApiProperty({ example: "1", description: "Уникальный модификатор" })
  @PrimaryGeneratedColumn("uuid")
  id: string;
  // email
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адресс" })
  @Column({ nullable: false })
  email: string;
  // password
  @ApiProperty({ example: "kirill1234", description: "Пароль" })
  @Column({ nullable: false })
  password: string;
  // name
  @ApiProperty({ example: "Кирилл", description: "Имя пользователя" })
  @Column({ nullable: false })
  name: string;
  // lastname
  @ApiProperty({ example: "Марченко", description: "Фамилия пользователя" })
  @Column({ nullable: false })
  lastName: string;
  // avatar
  @ApiProperty({
    example:
      "https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?resize=400x0",
    description: "Аватар пользователя",
  })
  @Column({
    nullable: false,
    default:
      "https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?resize=400x0",
  })
  avatar: string;
  // createAt
  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
  // updateAt
  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
