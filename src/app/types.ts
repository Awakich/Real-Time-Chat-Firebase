export type user = {
    email: string | null,
    token: string | null,
    id: string | null,
}

export type message = {
    id: string | null
    message: string | null
    name: string | null
}

export type messages = {
    messages: message[],
    loading: boolean,
    error: null | any
}