import * as React from 'react'
//@ts-ignore
import delItem from '@Files/delitem.png'
//@ts-ignore
import fileItem from '@Files/file.png'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core'
//@ts-ignore
import styled from './scss/filereader.module.scss'
import { iudFile, getFiles, deleteFile } from '@AppStore/Actions/files'
import { connect } from 'react-redux'
import { AppStateType } from '@AppStore/store'
import { toggleOpenFiles } from '@AppStore/Actions/Derictories/Helpers'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { TFile } from '@AppStore/types/actions/actionsFilesReducer'
/* 
objTypeId:
1  Договор
2  Проект
3  Объект
4  Вид работ
5  Организация
6  Суточный рапорт
7  План строительства
8  Акт регистрации НПВ
=== iudFile
objTypeId: number,
fileId: number = null,
files: file[]
 */
type Tfile = { base64: string | ArrayBuffer; name: string }
type Tstate = {
  files: Tfile[]
  visibleIndex: number
}
type Tprops = {
  loading: boolean
  title: string
  objectId: number
  objTypeId: number
  open: boolean
  filesStore: TFile[]
  iudFile: (
    flag: string,
    objectId: number,
    objTypeId: number,
    fileId: number,
    files: Tfile[],
    resolveThunk: () => void
  ) => void
  getFiles: (objTypeId: number, objectId: number) => void
  toggleOpenFiles: (open: boolean) => void
  deleteFile: (fileId: string) => void
}
class Container extends React.PureComponent<Tprops, Tstate> {
  constructor(props: Tprops) {
    super(props)
    this.state = {
      files: [],
      visibleIndex: 0,
    }
  }
  toggleVisibleIndex = (visibleIndex: number) => this.setState({ visibleIndex })
  onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    return this.getBase64(event.target.files)
  }
  getBase64 = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      reader.onloadend = (e: ProgressEvent<FileReader>) => {
        const name = files[i].name.replace(/\s+/g, '-')
        if (reader.result) {
          const base64 = reader.result.toString().split(',')[1]
          this.setState((prevState) => {
            let files = [
              ...prevState.files,
              {
                base64,
                name,
              },
            ]
            return { files }
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }
  resolveThunk = () => this.setState({ files: [] })
  handleSubmitFile = () => {
    this.props.iudFile(
      'add',
      this.props.objectId,
      this.props.objTypeId,
      null,
      this.state.files,
      this.resolveThunk
    )
  }
  handleDeleteFile = (fileId: string, name: string) => {
    if (window.confirm(`Вы действительно хотите удалить файл ${name} ?`)) {
      this.props.deleteFile(fileId)
    }
  }
  handleDeleleFileState = (index: number) =>
    this.setState((prevState) => {
      const files = [...prevState.files].filter((i, idx) => idx !== index)
      return { files }
    })
  render() {
    const { files, visibleIndex } = this.state
    const { open, filesStore, title, loading } = this.props
    const disabled = files.length > 0 && !loading ? false : true
    const visibleFilesStore =
      Array.isArray(filesStore) && filesStore.length > 0 ? true : false
    const visibleFiles = files.length > 0 ? true : false
    return (
      <Dialog
        open={open}
        onClose={() => this.props.toggleOpenFiles(false)}
        maxWidth="md"
        fullWidth
        className={styled.root}
      >
        <DialogContent>
          {title && <DialogTitle>{title}</DialogTitle>}
          <HorizontalTabs
            toggleVisibleIndex={this.toggleVisibleIndex}
            IssuedFiles={
              <section>
                {visibleFilesStore ? (
                  <section className={styled.filerow}>
                    <div className={styled.filerowitem}>{'Владелец'}</div>
                    <div className={styled.filerowitem}>{'Имя файла'}</div>
                    <div className={styled.filerowitem}>{''}</div>
                    <div className={styled.filerowitem}>{''}</div>
                  </section>
                ) : (
                  <h3>Файлов нет</h3>
                )}
                <section>
                  {filesStore &&
                    Array.isArray(filesStore) &&
                    filesStore.map((f, index) => (
                      <section key={index} className={styled.filerow}>
                        <div className={styled.filerowitem}>
                          {f.userCreated}
                        </div>
                        <div className={styled.filerowitem}>{f.name}</div>
                        <div className={styled.filerowitem}>
                          {f.url && (
                            <a
                              href={f.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className={styled.filerowitemdelete}>
                                <img src={fileItem} alt="" />
                              </Button>
                            </a>
                          )}
                          {f.fileData && f.fileData}
                        </div>
                        <div className={styled.filerowitem}>
                          <Button
                            className={styled.filerowitemdelete}
                            onClick={() => this.handleDeleteFile(f.id, f.name)}
                          >
                            <img src={delItem} alt="" />
                          </Button>
                        </div>
                      </section>
                    ))}
                </section>
              </section>
            }
            DonwloadingFiles={
              <section>
                {visibleFiles && files ? (
                  files.map((f, index) => (
                    <section className={styled.filerow} key={index}>
                      <div className={styled.filerowitem}>{index + 1}</div>
                      <div className={styled.filerowitem}>{f.name}</div>
                      <div className={styled.filerowitem}>
                        {
                          <Button
                            className={styled.filerowitemdelete}
                            onClick={() => this.handleDeleleFileState(index)}
                          >
                            <img src={delItem} alt="" />
                          </Button>
                        }
                      </div>
                      <div className={styled.filerowitem}>{''}</div>
                    </section>
                  ))
                ) : (
                  <h3>Файлов нет</h3>
                )}
              </section>
            }
          />
        </DialogContent>
        {visibleIndex === 1 && (
          <DialogActions>
            <label className={styled.inputfile}>
              <input
                multiple={true}
                type="file"
                accept=".png, .jpg, .pdf"
                onChange={(event) => this.onChangeFiles(event)}
              />
              Выберите файл(ы)
            </label>
            <Button onClick={this.handleSubmitFile} disabled={disabled}>
              {!loading && 'Загрузить файл(ы)'}
              {loading && <CircularProgress color="secondary" size={20} />}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    )
  }
}

const mapState = (state: AppStateType) => ({
  loading: state.files.loadingFiles,
  open: state.UI.openFiles,
  filesStore: state.files.files,
  title: state.files.title,
})
const mapDispatch = { iudFile, getFiles, toggleOpenFiles, deleteFile }
const connector = connect(mapState, mapDispatch)

export const FilesReader = connector(Container)

//COMPONENTS

function TabPanel(props: { value: any; index: any; children: any }) {
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

function a11yProps(index: number) {
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
  //selected: {},
}))((props: { id: string; 'aria-controls': string; label: string }) => (
  <Tab disableRipple {...props} />
))

function HorizontalTabs({
  toggleVisibleIndex,
  IssuedFiles,
  DonwloadingFiles,
}: {
  toggleVisibleIndex?: (visibleIndex: number) => void
  IssuedFiles?: any
  DonwloadingFiles?: any
}) {
  //@ts-ignore
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
    toggleVisibleIndex(newValue)
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
          <AntTab label="Файлы" {...a11yProps(0)} />
          <AntTab label="Загрузка файлов" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {IssuedFiles && IssuedFiles}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {DonwloadingFiles && DonwloadingFiles}
      </TabPanel>
    </div>
  )
}
