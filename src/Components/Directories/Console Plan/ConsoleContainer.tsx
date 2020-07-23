import * as React from "react";
import { connect } from "react-redux";
//components
//@ts-ignore
import { AppStateType } from "@AppStore/store";
import {
  IMapDispatchConsole,
  IMapStateConsole,
  IOwnPropsConsole,
} from "./types";
import {
  getUserFrames,
  getUserFields,
} from "@AppStore/Actions/UserData/UserData";
import { setTitleToNavbar } from "@AppStore/Actions/Ui.types";
//@ts-ignore
import App from "./DragBox/App";
import { selectLoadingData } from "@AppStore/Selectors";
import { getConsoleData } from "@AppStore/Actions/Console/console";
import { selectScenarios } from "@AppStore/Selectors/scenarios"; 
import { selectDefaultPlanStructure } from "@AppStore/Selectors/console";

export const ConsoleContainer: React.FC<
  IMapStateConsole & IMapDispatchConsole
> = React.memo(
  ({
    scenarios,
    defaultStructure,
    curOrgId,
    //functions
    getConsoleData,
    getUserFields,
    getUserFrames,
    loading,
  }) => {
    React.useEffect(() => {
      getUserFrames();
      getUserFields();
      getConsoleData(); //default
      setTitleToNavbar("Консоль формирования планов строительства");
      document.title = "Консоль формирования планов строительства";
    }, []);
    return (
      <App
        scenarios={scenarios}
        defaultStructure={defaultStructure}
        loading={loading}
        curOrgId={curOrgId}
      />
    );
  }
);
const mapStateToProps = (state: AppStateType) => ({
  scenarios: selectScenarios(state),
  loading: selectLoadingData(state),
  defaultStructure: selectDefaultPlanStructure(state),
  curOrgId: state.user.curOrgId,
});
const mapDispatchToProps = {
  getUserFrames,
  getUserFields,
  setTitleToNavbar,
  getConsoleData,
};
const connector = connect<
  IMapStateConsole,
  IMapDispatchConsole,
  IOwnPropsConsole,
  AppStateType
>(mapStateToProps, { ...mapDispatchToProps });
export default connector(ConsoleContainer);
/* 
<WConsole>
      <RightBar>
        <RightBarWorkObjects></RightBarWorkObjects>
        <RightBarWorkKinds></RightBarWorkKinds>
      </RightBar>
      <Body></Body>
      <LeftBar></LeftBar>
    </WConsole> */
