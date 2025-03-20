/*
 Licensed Materials - Property of IBM

 (C) Copyright IBM Corporation 2023. All Rights Reserved.
 US Government Users Restricted Rights- Use, duplication or disclosure
 restricted by GSA ADP Schedule Contract with IBM Corp.
*/

import * as JsonForm from "@diesel-parser/json-form";

import { useFlowEditorTranslation } from "@flowEditor/nls/flowEditorI18n";
import { Modal } from "carbon-components-react";
import React from "react";
import { TextInputRenderer } from "../CustomRenderers/TextInputRenderer/TextInputRenderer";
import "./PreviewInputFormDialog.scss";

interface PreviewInputFormDialogProps {
    open: boolean;
    selectedFlowId: string | undefined;
    currentName: string;
    showDialog: (show: boolean) => void;
    runPlayback: (payload?: object) => void;
    onPlaybackError?: (error: unknown) => void;
}

const PreviewInputFormDialog = (props: PreviewInputFormDialogProps) => {
    const { t } = useFlowEditorTranslation();
    
    const customRenderer = new JsonForm.RendererFactory();
    customRenderer.addRenderer("TextAreaRenderer", TextInputRenderer);

    const jsonFormSchema1 = `{
      "properties": {
        "Variable10": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable11": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable12": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable13": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable14": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable15": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable16": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable17": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable18": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable19": {"type": ["string", "null"], "renderer": "TextAreaRenderer"}
      },
      "definitions": {}
    }`;
  
    const testJsonValue1 = `{
      "Variable10": "",
      "Variable11": "",
      "Variable12": "",
      "Variable13": "",
      "Variable14": "",
      "Variable15": "",
      "Variable16": "",
      "Variable17": "",
      "Variable18": "",
      "Variable19": ""
    }`;
  


        return (
            
                <Modal
                    danger={false}
                    modalHeading={t("newInstance")}
                    primaryButtonText={t("run")}
                    secondaryButtonText={t("cancel")}
                    id="PreviewInputFormDialog"
                    
                >
                    <div className="dieselContainer">
                        {
                            JsonForm.JsonEditor({
                                schema: JsonForm.parseJsonValue(jsonFormSchema1).toMaybe(),
                                value: JsonForm.parseJsonValue(testJsonValue1).toMaybe().withDefault(JsonForm.jvNull),
                                language: navigator.language,
                                onChange: (value) => { },
                                strictMode: false,
                                rendererFactory: customRenderer,
                                debounceMs: 10
                        })}
                    </div>
                </Modal>
            
        );

};

export default PreviewInputFormDialog;
