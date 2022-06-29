export class ClassModel {    
    constructor(
        private name: string,
        private module: number
    ) {};

    public getName = (): string => this.name;

    public getModule = (): number => this.module;
};