export const templates = [
  {
    name: 'name',
    label: 'Наименование организации',
    type: 'text',
    maxLength: 150,
  },
  {
    name: 'mnemo',
    label: 'Краткое наименование организации',
    type: 'text',
    maxLength: 150,
  },
  { name: 'inn', label: 'ИНН', type: 'number', maxLength: 10 },
  { name: 'kpp', label: 'КПП', type: 'number', maxLength: 9 },
  {
    name: 'actAddress',
    label: 'Фактический адрес',
    type: 'text',
    maxLength: 150,
  },
  {
    name: 'legAddress',
    label: 'Юридический адрес',
    type: 'text',
    maxLength: 150,
  },
  { name: 'email', label: 'Почта', type: 'text', maxLength: 150 },
]
