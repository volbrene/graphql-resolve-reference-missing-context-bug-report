import {
  Args,
  Query,
  Resolver,
  ResolveReference,
  ResolveProperty,
  Parent
} from "@nestjs/graphql";

interface Post {
  id: number;
  title: string;
  userId: number;
}

@Resolver("Post")
export class PostsResolvers {
  @Query("getPosts")
  getPosts(): Post[] {
    return [
      {
        id: 1,
        title: "123",
        userId: 1
      },
      {
        id: 2,
        title: "1111",
        userId: 1
      },
      {
        id: 3,
        title: "22222",
        userId: 1
      }
    ];
  }

  @ResolveProperty("User")
  getUser(@Parent() post: Post) {
    return { __typename: "User", id: post.userId };
  }
}
