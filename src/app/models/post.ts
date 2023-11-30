export class Post {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public active: boolean,
    public type: string,
    public author: string
  ) {}
}
