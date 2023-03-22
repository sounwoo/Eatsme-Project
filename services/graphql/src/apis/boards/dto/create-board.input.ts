import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateBoardInput {
 @Field(() => String)
 title: string;

 @Field(() => String)
 boardImg: string;

 @Field(() => String)
 startPoint: string;

 @Field(() => String)
 endPoint: string;

 @Field(() => String)
 customName: string;

 @Field(() => Int)
 like: number;

 // @Field(() => String)
 // userId: string;

 // @Field(() => String)
 // commentsId: string;
}