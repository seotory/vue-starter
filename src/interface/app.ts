import * as option from '../type/option'

export interface App {
    init(): void;
    start(config: option.App): void;
}