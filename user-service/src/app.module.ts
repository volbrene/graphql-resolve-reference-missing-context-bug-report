import { Module } from "@nestjs/common";
import { GraphQLFederationModule } from "@nestjs/graphql";
import { UsersResolvers } from "./users.resolver";
import { UserService } from "./user.service";

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ["**/*.graphql"],
      context: ({ req }) => {
        const locale = (
          (req.headers["x-locale"] as string) || "DE"
        ).toUpperCase();

        return {
          locale
        };
      }
    })
  ],
  providers: [UsersResolvers, UserService]
})
export class AppModule {}
