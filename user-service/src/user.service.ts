import { Injectable, Inject, Scope } from "@nestjs/common";
import { CONTEXT } from "@nestjs/graphql";

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(@Inject(CONTEXT) private readonly ctx) {}

  findOne(id: number) {
    return {
      id,
      name: "Test User from " + this.ctx.locale
    };
  }
}
