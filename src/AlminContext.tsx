import { Context, Dispatcher } from "almin";
import * as React from "react";
import { ReactNode } from "react";
import { storeGroup } from "./AppStoreGroup";
import { AlminLogger } from "almin-logger";

export const context = new Context({
    dispatcher: new Dispatcher(),
    store: storeGroup
});

if (process.env.NODE_ENV !== "production") {
    const logger = new AlminLogger();
    logger.startLogging(context);
}

export interface AlminContextProps {
    render: (context: Context<any>, state: typeof storeGroup.state) => ReactNode;
}

export class AlminContext extends React.PureComponent<AlminContextProps, {}> {
    render() {
        return this.props.render(context, context.getState());
    }
}
