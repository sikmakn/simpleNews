export interface Comment{
    id: string
    text: string
    author: {
        username: string
        fullName: string
    }
    oneNewsId: string
}