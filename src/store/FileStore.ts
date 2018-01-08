import { Store } from "almin";

export interface FileState {}

export class FileStore extends Store<FileState> {
    state: FileState;

    constructor() {
        super();
        this.state = {};
    }

    getState() {
        return this.state;
    }
}
