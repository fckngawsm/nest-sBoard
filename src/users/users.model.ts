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
  @ApiProperty({ example: "1", description: "Уникальный модификатор" })
  @PrimaryGeneratedColumn("uuid")
  id: number;
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адресс" })
  @Column({ nullable: false })
  email: string;
  @ApiProperty({ example: "kirill1234", description: "Пароль" })
  @Column({ nullable: false })
  password: string;
  @ApiProperty({ example: "Кирилл", description: "Имя пользователя" })
  @Column({ nullable: false })
  name: string;
  @ApiProperty({ example: "Марченко", description: "Фамилия пользователя" })
  @Column({ nullable: false })
  lastName: string;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}
