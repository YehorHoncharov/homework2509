import { Comment } from './../CommentApp/types';
import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{}>

export type createPost = Prisma.PostUncheckedCreateInput

export type PostWithComment = Prisma.PostGetPayload<{
    include: {
        comments: true
    }
}>