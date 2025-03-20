/*
 Licensed Materials - Property of IBM

 (C) Copyright IBM Corporation 2023. All Rights Reserved.
 US Government Users Restricted Rights- Use, duplication or disclosure
 restricted by GSA ADP Schedule Contract with IBM Corp.
*/

import * as JsonForm from "@diesel-parser/json-form";
import { MenuOptions } from "@diesel-parser/json-form/dist/RenderOptions";
import { Modal } from "carbon-components-react";
import { TextInputRenderer } from "./TextInputRenderer";
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
        "Variable19": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable25": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable26": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable27": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable28": {"type": ["string", "null"], "renderer": "TextAreaRenderer"},
        "Variable29": {"type": ["string", "null"], "renderer": "TextAreaRenderer"}
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
      "Variable19": "",
      "Variable25": "",
      "Variable26": "",
      "Variable27": "",
      "Variable28": "",
      "Variable29": ""
    }`;
  

        return (
            
          
          <Modal
          open={props.open}
          danger={false}
          modalHeading={("newInstance")}
          primaryButtonText={("run")}
          secondaryButtonText={("cancel")}
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
                                debounceMs: 10,
                                menuFilter: {
                                  menuFilters: MenuOptions.CHANGE_TYPE | MenuOptions.MOVE | MenuOptions.PROPOSE
                                },
                                renderOptions: {
                                  hideCollapsiblePanel: true,
                                  hideDocRoot: true,
                                  hideMenuTooltip: true
                                }
                        })}
                    </div>
                    </Modal>
                
            
        );

};

export default PreviewInputFormDialog;
