import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classed from "./Tabs.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export const SimpleTabs = memo(({ tabs, tabsSticks, toggleGetMethod }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" style={{ background: "#FFF" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabsSticks &&
            tabsSticks.map((tabStick, index) => (
              <Tab
                key={`${tabsSticks.label}${index}`}
                className={classed.tab_st}
                label={tabStick.label}
                {...a11yProps(index)}
                onClick={() => toggleGetMethod(tabStick.method, tabStick.iud)}
              />
            ))}
        </Tabs>
      </AppBar>
      {tabs &&
        tabs.map((func, index) => (
          <TabPanel value={value} index={index} key={index}>
            {func()}
          </TabPanel>
        ))}
    </div>
  );
});
