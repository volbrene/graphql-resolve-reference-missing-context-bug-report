import { Args, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { UserService } from "./user.service";

@Resolver("User")
export class UsersResolvers {
  constructor(private readonly userService: UserService) {}

  @Query()
  getUser(@Args("id") id: number) {
    return this.userService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findOne(parseInt(reference.id));
  }
}
