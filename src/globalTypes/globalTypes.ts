export interface IError {
    status: 'error',
    message: string
}

export interface ISuccess<T>{
    status: 'success',
    data?: T,
    // нигде не используешь message
    // ошибка тк типы неправильно делаешь
    message?: string
}