import { Prisma } from "@prisma/client";

export type Comment = Prisma.CommentGetPayload<{}>

export type CreateComment = Prisma.CommentCreateInput