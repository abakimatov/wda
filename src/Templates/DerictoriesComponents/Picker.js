import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'
import ruLocale from 'date-fns/locale/ru'
import enLocale from 'date-fns/locale/en-US'
import DateFnsUtils from '@date-io/date-fns'
import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
}

class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, 'LLLL', { locale: this.locale })
  }

  getDatePickerHeaderText(date) {
    return format(date, 'dd MMMM', { locale: this.locale })
  }
}

const localeUtilsMap = {
  en: DateFnsUtils,
  ru: RuLocalizedUtils,
}

const localeFormatMap = {
  en: 'MMMM d, yyyy',
  fr: 'd MMM yyyy',
  ru: 'd MMM yyyy',
}

const localeCancelLabelMap = {
  en: 'cancel',
  fr: 'annuler',
  ru: 'отмена',
}

export const DateFnsLocalization = ({ name, value, onChange }) => {
  const [locale] = useState('ru')
  return (
    <MuiPickersUtilsProvider
      utils={localeUtilsMap[locale]}
      locale={localeMap[locale]}
    >
      <DatePicker
        name={name}
        value={value}
        onChange={onChange}
        format={localeFormatMap[locale]}
        cancelLabel={localeCancelLabelMap[locale]}
      />
    </MuiPickersUtilsProvider>
  )
}
