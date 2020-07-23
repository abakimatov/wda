import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: `240px 1fr`,
    },
    tab: {
      fontWeight: 500,
      fontSize: '14px',
      textTransform: 'none',
      color: '#95A1B3', //142A4A
    },
    selected: { color: '#142A4A' }, //95A1B3
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      height: 450,
    },
    indicator: {
      background: 'blue',
      left: 0,
    },
    header: {
      width: '100%',
      background: '#F9FAFC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      fontSize: '12px',
      height: 29,
    },
    content: {
      marginTop: 10,
    },
  }
})

export default function VerticalTabs({ data, visibleTabs }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator,
        }}
      >
        >
        {data &&
          data.map((t, index) => (
            <Tab
              key={index}
              label={t.label}
              {...a11yProps(index)}
              onClick={t.method}
              className={classes.tab}
              classes={{
                selected: classes.selected,
              }}
            />
          ))}
      </Tabs>
      {data &&
        data.map((t, index) => {
          const Component = t.component
          if (Component)
            return (
              <TabPanel key={index} value={value} index={index}>
                <div className={classes.header}>{<span>{t.label}</span>}</div>
                <div className={classes.content}>{Component}</div>
              </TabPanel>
            )
        })}
    </div>
  )
}
