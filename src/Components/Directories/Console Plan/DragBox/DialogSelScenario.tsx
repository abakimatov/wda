import * as React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import { TScenario } from "@AppStore/types/reducers/typesDataReducer"; 
//@ts-ignore
import { TemplateButton } from "@Templates/Buttons";
//
interface TDialogSelScenario {
  open: boolean;
  handleClose: (open: boolean) => void;
  selScenario: TScenario;
  scenarios: TScenario[];
  onChangeSelScenario: (event: React.ChangeEvent) => void;
}
export const DialogSelScenario: React.FC<TDialogSelScenario> = React.memo(
  ({ open, selScenario, scenarios, handleClose, onChangeSelScenario }) => {
    return (
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>Выберите сценарий:</DialogTitle>
        <DialogContent>
          <StyledSelect 
            value={selScenario.id}
            name="selScenario"
            onChange={onChangeSelScenario}
          >
            <option value="null">Выбрать сценарий:</option>
            {scenarios &&
              scenarios.map((scenario, index) => (
                <option key={index} value={scenario.id}>
                  {scenario.name}
                </option>
              ))}
          </StyledSelect>
        </DialogContent>
        <DialogActions>
          <TemplateButton onClick={() => handleClose(false)} text="Ok" />
        </DialogActions>
      </Dialog>
    );
  }
);

//styled
const StyledSelect = styled.select`
  width: 100%;
`;
