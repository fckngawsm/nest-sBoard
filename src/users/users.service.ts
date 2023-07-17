import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectId, Repository } from "typeorm";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = await this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getAllUser() {
    const users = await this.userRepository.find();
    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async getUsersById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    console.log(id, "id");
    console.log(user, "user");
    return user;
  }

  async updateUsersData(id: string, user: UpdateUserDto) {
    try {
      const updateData = await this.userRepository.update(id, user);
      return {
        success: true,
        message: "Successfully updated profile",
        data: updateData,
      };
    } catch (error) {
      throw new HttpException(
        `Пользователя с id ${id} не существует`,
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async deleteMyAccount(id: string) {
    await this.userRepository.delete(id);
    return `Пользователь с id ${id} был успешно удален`;
  }
}
