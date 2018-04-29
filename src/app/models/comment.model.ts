export class CommentModel {
    id: number;
    writerId: number;
    targetId: number;
    content: string;

    constructor(i: number, w: number, t: number, c: string) {
        this.id = i;
        this.writerId = w;
        this.targetId = t;
        this.content = c;
    }
}
