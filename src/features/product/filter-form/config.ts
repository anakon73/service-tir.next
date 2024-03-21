export interface Option {
  id: string
  text: string
}

export interface FilterData {
  id: string
  text: string
  options: Option[]
}

export const filterData: FilterData[] = [
  {
    id: 'truckBrand',
    text: 'Марка грузовика',
    options: [
      {
        id: 'daf',
        text: 'DAF',
      },
      {
        id: 'iveco',
        text: 'Iveco',
      },
      {
        id: 'man',
        text: 'Man',
      },
      {
        id: 'scania',
        text: 'Scania',
      },
      {
        id: 'mercedesActros',
        text: 'Mercedes Actros',
      },
      {
        id: 'volvo',
        text: 'Volvo',
      },
    ],
  },
  {
    id: 'parts',
    text: 'Запчасти',
    options: [
      { id: 'fuelSystem', text: 'Топливная система' },
      { id: 'fuelSystemParts', text: 'Запчасти ПНВТ' },
      { id: 'adblue', text: 'ADBLUE' },
      { id: 'sprayers', text: 'Распылители' },
      { id: 'coolingSystem', text: 'Система охлаждения' },
      { id: 'suspensionAndSteering', text: 'Подвеска и управление' },
      { id: 'optics', text: 'Оптика' },
      { id: 'engine', text: 'Двигатель' },
      { id: 'accessories', text: 'Аксессуары' },
      { id: 'pneumaticSystem', text: 'Пневматическая система' },
      { id: 'exhaustSystem', text: 'Выхлопная система' },
      { id: 'transmission', text: 'Трансмиссия' },
      { id: 'filterAndOils', text: 'Фильтры и масла' },
    ],
  },
  {
    id: 'condition',
    text: 'Состояние',
    options: [
      { id: 'new', text: 'Новый' },
      { id: 'used', text: 'Б\\У' },
    ],
  },
]
