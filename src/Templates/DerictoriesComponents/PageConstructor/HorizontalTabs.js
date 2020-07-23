import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '&$selected': {
      color: '#1890ff',
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  app: {
    background: 'rgba(223, 230, 240, 0.2)',
  },
}))
const AntTab = withStyles((theme) => ({
  root: {
    color: '#95A1B3',
    textTransform: 'none',
    '&:hover': {
      color: '#142A4A',
      opacity: 1,
    },
    '&$selected': {
      color: '#142A4A',
      fontWeight: 400,
    },
    '&:focus': {
      color: '#142A4A',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />)

export default function HorizontalTabs({ data }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
        >
          {data &&
            data.map((t, index) => (
              <AntTab
                key={index}
                label={t.label}
                {...a11yProps(index)}
                onClick={t.method}
              />
            ))}
        </Tabs>
      </AppBar>
      {data &&
        data.map((t, index) => {
          const Component = t.component
          const Header = t.header
          if (Component)
            return (
              <TabPanel key={index} value={value} index={index}>
                {Component}
                {Header && Header}
              </TabPanel>
            )
        })}
    </div>
  )
}
