import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{}>

export type CreatePost = Prisma.PostUncheckedCreateInput

export type PostWithComment = Prisma.PostGetPayload<{
    include: {
        comments: true
    }
}>