export class Node {
    constructor(name: string) {
        this.deley = 0;
        this.name = name;
    }

    name: string;
    deley: number;
}
 
export class Edge {
    endToken: number;
    startToken: number;
    token: number;
    angle: number;
    constructor(token: number ,start: number, end: number) {
        this.token = token;
        this.endToken = end; 
        this.startToken = start;
        this.angle = 0;
    }
}

export class MatrixNode {
    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y;
    }

    x: number;
    y: number;
}