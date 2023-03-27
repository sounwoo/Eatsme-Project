import { Field, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';
import { RestaurantBoardInfo } from './fetch-board-restaurantInfo.object';

@ObjectType()
export class FetchBoardReturn {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;

  @Field(() => Date)
  createdAt: Date;

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

  @Field(() => [String])
  restaurantIds: string[];

  @Field(() => [RestaurantBoardInfo])
  data: RestaurantBoardInfo[];
}
