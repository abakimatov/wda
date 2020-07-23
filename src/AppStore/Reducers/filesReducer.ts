import {
  LOADING_FILE,
  STOP_LOADING_FILE,
  FILES_REDUCER_ACTIONS,
  SET_FILES,
  TFile,
} from '@AppStore/types/actions/actionsFilesReducer'

type TInitialState = {
  title: string
  loadingFiles: boolean
  files: TFile[]
}
const initialState: TInitialState = {
  title: '',
  loadingFiles: false,
  files: [
    {
      fileData: null,
      id: '70344CAB-B409-4B4E-BE0B-0D66C36186AD',
      name: 'Снимок_экрана_от_2020-05-07_18-52-28.png',
      objectId: 136,
      url:
        'https://wda.bitoobit.ru/api/image/Project/136/Снимок_экрана_от_2020-05-07_18-52-28.png',
      userCreated: 'Имя Тестовое',
    },
    {
      fileData: null,
      id: '70344CAB-B409-4B4E-BE0B-0D66C36186AD',
      name: 'Снимок_экрана_от_2020-05-07_18-52-28.png',
      objectId: 136,
      url:
        'https://wda.bitoobit.ru/api/image/Project/136/Снимок_экрана_от_2020-05-07_18-52-28.png',
      userCreated: 'Имя Тестовое',
    },
    {
      fileData: null,
      id: '70344CAB-B409-4B4E-BE0B-0D66C36186AD',
      name: 'Снимок_экрана_от_2020-05-07_18-52-28.png',
      objectId: 136,
      url:
        'https://wda.bitoobit.ru/api/image/Project/136/Снимок_экрана_от_2020-05-07_18-52-28.png',
      userCreated: 'Имя Тестовое',
    },
  ],
}
export const filesReducer = (
  state = initialState,
  action: FILES_REDUCER_ACTIONS
): TInitialState => {
  switch (action.type) {
    case LOADING_FILE:
      return { ...state, loadingFiles: true }
    case STOP_LOADING_FILE:
      return { ...state, loadingFiles: false }
    case SET_FILES:
      return { ...state, files: action.payload, title: action.title }
    default:
      return state
  }
}
