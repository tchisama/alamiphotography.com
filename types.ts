
export type Folder = {
    name: string
    parent: string
    id:string
}
export type Photo = {
    name: string
    parent: string
    id:string
    image:string
}

export type Review = {
    name: string
    review: string
    img: string
    subtitle: string
}

export type Message = {
  id: string
  email: string
  number:string
  name: string
  date:string
  message:string
}