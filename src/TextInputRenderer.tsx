import {
    jvString,
    type JsonValue,
    type Renderer,
    type RendererInitArgs,
    type RendererViewArgs
} from "@diesel-parser/json-form";
import { TextInput, Toggle } from "carbon-components-react";
import * as React from "react";
import { Cmd, just, noCmd, type Maybe } from "tea-cup-core";

export interface Msg { str: string }

export interface Model {
    readonly value: string;
}

export const TextInputRenderer: Renderer<Model, Msg> = {

    reinit: function (args: RendererInitArgs<Model>): [Model, Cmd<Msg>] {
        const { value } = args;
        const v = value.tag === "jv-string" ? value.value : "";
        const newModel: Model = {
            value: v,
        };
        return noCmd(newModel);
    },
    view: function (args: RendererViewArgs<Model, Msg>): React.ReactElement {
        
        const value = "abc";
        return (
            <>
                <TextInput
                    id={""}
                    onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                        
                    } } 
                    hideLabel={true}
                    labelText={""}
                    value={value}
                >
                </TextInput>  
            </>
        );
    },
    update: function (
        msg: Msg,
        model: Model
    ): [Model, Cmd<Msg>, Maybe<JsonValue>] {
        const newModel: Model = {
            ...model,
            value: msg.str,
        };
        return [newModel, Cmd.none(), just(jvString(msg.str))];
    },
};
