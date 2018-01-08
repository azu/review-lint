/**
 * Extends React.Component for Container.
 * It has executor feature for almin UseCase.
 */
import { context } from "../AlminContext";
import * as React from "react";
import { UseCase, UseCaseExecutor } from "almin";

export class BaseContainer<T = {}, P = {}> extends React.Component<T, P> {
    useCase<T extends UseCase>(useCase: T): UseCaseExecutor<T> {
        return context.useCase(useCase) as UseCaseExecutor<T>;
    }
}
