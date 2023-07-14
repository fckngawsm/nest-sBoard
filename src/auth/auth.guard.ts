import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers.authorization;
    const bearer = "Bearer ";
    if (!headers || !headers.startsWith(bearer)) {
      throw new UnauthorizedException({
        message: "У вас нет доступа к этой странице",
      });
    }
    const token = headers.replace(bearer, "");
    let payload;
    try {
      payload = this.jwtService.verify(token);
      request.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException({
        message: "У вас нет доступа к этой странице",
      });
    }
  }
}
