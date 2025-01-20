export interface IToken {
    id: number,
    name: string,
    email: string,
    hash: string,
}

export type CookieContextType = {
    token: IToken | null;
    updateUser: (user: IToken) => void
    clear: () => void
    getName: (cname: string) => string | null | undefined

}