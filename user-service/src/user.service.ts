import { Injectable, Inject } from "@nestjs/common";
import { CONTEXT } from "@nestjs/graphql";

@Injectable()
export class UserService {
  constructor(@Inject(CONTEXT) private readonly ctx) {}

  findOne(id: number) {
    return {
      id,
      name: "Test User from " + this.ctx.locale
    };
  }
}
