import { CreateReplyInput } from "../dto/create-reply.input";
import { UpdateReplyInput } from "../dto/update.reply.input";


export interface IReplysServiceFindOne {
 replyId: string;
}

export interface IReplyServiceNullList {
  reply: string;
}

export interface IReplysServiceCreate {
  createReplyInput: CreateReplyInput;
  commentId: string;
}

export interface IReplysServiceUpdate {
  updateReplyInput: UpdateReplyInput;
}
 
export interface IReplysServiceDelete {
  replyId: string;
}