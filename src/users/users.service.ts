import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

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

  async getCurrentUser(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    return user;
  }
}
