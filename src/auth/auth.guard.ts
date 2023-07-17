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
    const {authorization} = request.headers;
    console.log(request.headers, 'headr!')
    const bearer = "Bearer ";
    if (!authorization || !authorization.startsWith(bearer)) {
      throw new UnauthorizedException({
        message: "У вас нет доступа к этой странице",
      });
    }
    const token = authorization.replace(bearer, "");
    let payload;
    try {
      payload = this.jwtService.verify(token);
      request["user"] = payload;
    } catch (err) {
      throw new UnauthorizedException({
        message: "У вас нет доступа к этой странице",
      });
    }
    return true;
  }
}
