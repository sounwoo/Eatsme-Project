import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Board } from "../boards/entities/board.entity";
import { Reply } from "../replies/entities/reply.entity";
import { CommentsResolver } from "./comments.resolver";
import { CommentsService } from "./comments.service";
import { Comment } from "./entities/comment.entity";


@Module({
 imports: [
  TypeOrmModule.forFeature([ 
   Comment,
   Board,
   Reply,
  ])
 ],
 providers:[
  CommentsResolver,
  CommentsService,
 ],
})
export class CommentModule {}