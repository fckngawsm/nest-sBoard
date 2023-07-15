import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  UseGuards,
  Req,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // create user
  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
  // get all user
  @ApiOperation({ summary: "Получение всех пользователей" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUser();
  }
  // update user
  @ApiOperation({ summary: "Обновление пользователя" })
  @ApiResponse({ status: 200, type: UpdateUserDto })
  @UseGuards(AuthGuard)
  @Patch()
  async update(@Body() userDto: UpdateUserDto, @Req() request) {
    const { id } = request.user;
    await this.usersService.updateUsersData(id, userDto);
    return userDto;
  }
  // delete user
  @ApiOperation({ summary: "Удаление своего аккаунта" })
  @UseGuards(AuthGuard)
  @Delete()
  async delete(@Req() request) {
    const { id } = request.user;
    return this.usersService.deleteMyAccount(id);
  }
}
