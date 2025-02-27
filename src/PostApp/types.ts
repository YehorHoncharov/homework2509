import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{}>
// с большой буквы тип
export type createPost = Prisma.PostUncheckedCreateInput

export type PostWithComment = Prisma.PostGetPayload<{
    include: {
        comments: true
    }
}>