import { TInitialStateForms } from "./types";

const initialState: TInitialStateForms = {
    depthDayGraph: {
            main: {selectItems: [
                {
                  name: 'workObjectId',
                  label: 'Объект работ',
                  dataName: 'workObjects'
                },
                { name: 'scenarioId', label: 'Сценарий', dataName: 'scenarios' },
              ],
              dateItems: [
                { name: 'startDate', label: 'Дата начала' },
                { name: 'endDate', label: 'Дата окончания' },
              ],}
    },
    npvActDetail: {
        main:{stringItems: [
            { name: 'operationDescription', type: 'text/multiline', label: 'Результат', maxLength: 150, required: true },
            { name: 'hours', type: 'number', label: "Кол-во часов", maxLength: 150, required: true },
            { name: 'driving', type: 'number', label: 'Проходка', maxLength: 150, required: true },
            { name: 'npvDescription', type: 'text/multiline', label: 'Описание НПВ', maxLength: 150, required: true },
            { name: 'serviceName', type: 'text/multiline', label: 'Наименование службы', maxLength: 150, required: true },
        ],
        selectItems: [
            { name: 'workKindId', label: 'Вид работ', dataName: 'workKinds' },
            { name: 'drillingRigId', label: 'Буровая установка', dataName: 'drillingRigs' },
            { name: 'workClassifierId', label: 'Классификатор БКВ', dataName: 'workClassifiers' },
            { name: 'npvCauseId', label: 'Причина НПВ', dataName: 'npvCauses' },
            { name: '"Ответственный за НПВ', label: 'Вид НПВ', dataName: 'organizations' },
        ],
        timeItems: [
            { name: "startTime", label: "Время начала",settings: { type: 'time' }},
            { name: "endTime", label: "Время окончания",settings: { type: 'time' }}
        ]}
    },
    npvAct: {
        main:{stringItems: [
            { name: 'workResult', type: 'text/multiline', label: 'Результат', maxLength: 150, required: true },
            { name: 'npvDescription', type: 'text/multiline', label: 'Описание', maxLength: 150, required: true },
        ],
        selectItems: [
            { name: 'workObjectId', label: 'Объект работ', dataName: 'workObjects' },
            { name: 'kindId', label: 'Вид НПВ', dataName: 'npvActKinds' }
        ],
        dateItems: [ 
                { name: "startDate", label: "Дата начала"},
                { name: "endDate", label: "Дата окончания"},
            ],},
            filter: {
                selectItems: [
                    { name: "workObjectId", label: "Объект работ", dataName: "workObjects" },
                ],
            }
    },
    npvActKinds: {
        main :{stringItems: [
            { name: 'name', type: 'text/multiline', label: 'Наименование', maxLength: 150, required: true },
        ],
        checkBoxItems: [
            { name: "isStandard", label: "Эталонный" }
        ]}
    },
    npvCause: {
        main:{stringItems: [
            { name: 'name', type: 'text/multiline', label: 'Наименование', maxLength: 150, required: true },
        ],
        checkBoxItems: [
            { name: "isStandard", label: "Эталонный" }
        ]}
    },
    plans: {
        filter: {
            selectItems: [
                { name: "scenarioId", label: "Сценарий", dataName: "scenarios" },
                { name: "orgId", label: "Организация", dataName: "organizations", disabled: false },
                { name: "workObjectId", label: "Объект работ", dataName: "workObjects" },
            ],
        },
        main: {
            fullWidthItems:{
                stringItems: [
                    { name: 'comment', type: 'text/multiline', label: 'Комментарий', maxLength: 300, required: true },
                ]
            },
            selectItems: [
                { name: 'workObjectId', label: 'Объект работ', dataName: 'workObjects' }, 
                /* { name: "orgId", label: "Организация", dataName: "organizations" }, */
                { name: 'scenarioId', label: 'Сценарий', dataName: 'scenarios' }
            ],
        },
        detail: {
            timeItems: [
                { name: "startDate", label: "Дата начала", settings: { type: 'datetime', popperPlacement: 'right' }},
                { name: "endDate", label: "Дата окончания", settings: { type: 'datetime', popperPlacement: 'right' }},
            ],
            stringItems: [
                { name: 'operationMode', type: 'number', label: 'Режим работы', nonNegative: true, maxLength: 150, required: true },
                { name: 'driving', type: 'number', label: 'Проходка', maxLength: 150, required: true }
            ],
            selectItems: [
                { name: "drillingRigId", label: "Буровая установка", dataName: "drillingRigs" }, 
                { name: "workKindId", label: "Вид работ", dataName: "workKinds" },
            ],
            selectExFlags: [
                { name: "exFlag", label: "Тип исполнителя", dataName: "exflags" }, 
            ],
            selectExFlagsItems: [
                { name: "executorId", label: "Исполнитель", dataName: "exFlagsItems" }
            ]
        } 
    },
    scenarios: { 
        main: {
            stringItems: [
                { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true }
            ]
        }
    },
    /* organization: {
        main:{stringItems: [
            { name: "phone", type: "phone", label: "Телефон", maxLength: 150, required: true},
            { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
            { name: 'mnemo', type: 'text', label: 'Краткое наименование', maxLength: 150, required: true },
            { name: 'kpp', type: 'number', label: 'КПП', maxLength: 9, required: true },
            { name: 'inn', type: 'number', label: 'ИНН', maxLength: 10, required: true },
            { name: 'legAddress', type: 'text', label: 'Юридический адрес', maxLength: 150, required: true },
            { name: 'actAddress', type: 'text', label: 'Фактический адрес', maxLength: 150, required: true },
            { name: 'email', type: 'text', label: 'Почта', maxLength: 150, required: true },
        ],
        selectItems: [ 
            { name: "respUserId", label: "Пользователь", dataName: "users_data" },
        ],}
    }, */
    project: {
        main:{stringItems: [
            { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
        ]}
    },
    user: {
        main:{stringItems: [
            { name: "phone", type: "phone", label: "Телефон", maxLength: 150, required: true },
            { name: 'login', type: 'text', label: 'Логин', maxLength: 150, required: true },
            { name: 'name', type: 'text', label: 'Имя', maxLength: 150, required: true },
            { name: 'email', type: 'text', label: 'Почта', maxLength: 150, required: true },
        ],
        selectItems: [
            { name: "roleId", label: "Роль", dataName: "roles" },
        ],}
    },
    /* workClassifier: {
        main:{stringItems: [
            { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
        ],
        selectItems: [
            { name: "typeId", label: "Тип БКВ", dataName: "bkv_types_data" },
        ]}
    }, */
    /* workKind: {
        main:{stringItems: [
            { name: "name", type: "text", label: "Наименование", maxLength: 150, required: true }
        ],
        selectItems: [
            { name: "entryTypeId", label: "Тип документа", dataName: "entryTypes" }
        ],
        checkBoxItems: [
            { name: "isModel", label: "Эталонный" }
        ]}
    }, */
    workObject: {
        main: {
            selectItems: [
                { name: "projectId", label: "Проект", dataName: "projects" },
                { name: "depositId", label: "Месторождение", dataName: "deposits" },
            ],
            stringItems: [
                { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
                { name: 'drillingMethod', type: 'text', label: 'Способ бурения', maxLength: 50, required: true },
                { name: 'designedDepth', type: 'number', label: 'Проектная глубина', maxLength: 15, required: true },
            ]
        },
        executor: {
            stringItems: [
                { name: "serviceKind", type: "text", label: "Вид сервиса", maxLength: 150, required: true }
            ],
            selectItems: [
                { name: "orgId", label: "Подрядчик", dataName: "organizations" }
            ]
        },
        hole: {
            stringItems: [
                { name: "diameter", type: "number", label: "Диаметр", maxLength: 15, required: true },
                { name: "depth", type: "number", label: "Глубина", maxLength: 15, required: true },
            ] 
        }
    },
    dayliReport: {
        main: {
            selectItems: [
                { name: "customerId", label: "Заказчик", dataName: "organizations" },
                { name: "workObjectId", label: "Объект работ", dataName: "workObjects" },
                { name: "kindId", label: "Вид рапорта", dataName: "dayliReportKinds" },
                { name: "typeId", label: "Тип рапорта", dataName: "dayliReportTypes" },
            ],
            dateItems: [
                { name: 'docDate', label: 'Дата' },
              ]
        }, 
        additionally: {
            stringItems:{
                //@ts-ignore
                group1: [
                    { name: "email", type: "text", label: "E-mail", maxLength: 150, required: true },
                    { name: "phone", type: "phone", label: "Телефон", maxLength: 150, required: true },
                ],
                //@ts-ignore
                group2: [
                    { name: "windSpeed", type: "number", label: "Скорость ветра, м/с", maxLength: 150, required: true },
                    { name: "precipitation", type: "number", label: "Осадки, мм", maxLength: 150, required: true },
                    { name: "t12", type: "number", label: "Температура воздуха на 12:00", maxLength: 2, required: true },
                    { name: "t24", type: "number", label: "Температура воздуха на 24:00", maxLength: 2, required: true },
                ]
            },
            fullWidthItems: { 
                stringItems:[
                    { name: "drillMasterComment", type: 'text', label: "Комментарий Бурового мастера", maxLength: 150, required: true, },
                    { name: "supervisor1", type: 'text', label: "Супервайзер 1", maxLength: 150, required: true, },
                    { name: "supervisor2", type: 'text', label: "Супервайзер 2", maxLength: 150, required: true, },
                    { name: 'comment', type: 'text', label: 'Комментарий', maxLength: 150, required: true },
                ]
            }
        },
        filter: {
            selectItems: [
                { name: "customerId", label: "Заказчик", dataName: "organizations" }, 
                { name: "workObjectId", label: "Объект работ", dataName: "workObjects" },
                { name: 'workKindId', label: 'Этап работ', dataName: 'workStages'}
            ],
        },
        techOperations: {
            stringItems:[
                { name: "chiselEngComment", type: 'text', label: "Комментарий инженера по долотам", maxLength: 150, required: true, },
                { name: "mortarEngComment", type: 'text', label: "Комментарий инженера по растворам", maxLength: 150, required: true, },
                { name: "supervisorComment", type: 'text', label: "Комментарий Супервайзера", maxLength: 150, required: true, },
                { name: "drillMasterComment", type: 'text', label: "Комментарий Бурового мастера", maxLength: 150, required: true, },
                { name: "supervisor1", type: 'text', label: "Супервайзер 1", maxLength: 150, required: true, },
                { name: "supervisor2", type: 'text', label: "Супервайзер 2", maxLength: 150, required: true, },
                { name: "drillMaster", type: 'text', label: "Буровой мастер", maxLength: 150, required: true, },
                { name: "mortarEng", type: 'text', label: "Инженер по растворам", maxLength: 150, required: true, },
                { name: "chiselEng", type: 'text', label: "Инженер по долотам", maxLength: 150, required: true, },
                { name: "techEng", type: 'text', label: "Инженер-технолог", maxLength: 150, required: true, },
                { name: "dayPlan", type: 'number', label: "План работ на сутки", nonNegative: true, maxLength: 150, required: true, },
            ],
            additionally: {
                fullWidthItems: {
                    stringItems:[
                        //TODO БУРОВОЙ МАСТЕР
                        { name: "drillMaster", type: 'text', label: "Буровой мастер", maxLength: 150, required: true, },
                        { name: "dayPlan", type: 'number', label: "План работ на сутки", nonNegative: true, maxLength: 150, required: true, },
                        { name: "techEng", type: 'text', label: "Инженер-технолог", maxLength: 150, required: true, },
                    ]
                }
            }
        },
    },
    dayliReportDetails: {
        techOperations: {
            stringItems: [
                { name: 'driving', type: 'number', label: 'Проходка', maxLength: 150, required: true },
                { name: 'npvDescription', type: 'text', label: 'Описание НПВ', maxLength: 150, required: true },
                { name: 'serviceName', type: 'text', label: 'Наименование службы', maxLength: 150, required: true },
                { name: 'operDescription', type: 'text', label: 'Описание операции', maxLength: 150, required: true },
            ],
            selectItems: [
                { name: "workKindId", label: "Вид работ", dataName: "workKinds" },
                { name: "classifierId", label: "Классификация по БКВ", dataName: "workClassifiers" },
                { name: "npvResponsibleId", label: "Ответственный за НПВ", dataName: "organizations" },
                { name: "drillingRigId", label: "Буровая установка", dataName: "drillingRigs" }
            ],
            timeItems: [
                { name: "startTime", label: "Время начала", settings: { type: 'time' }},
                { name: "endTime", label: "Время окончания", settings: { type: 'time' }}
            ]
        },
        knbk: {
            stringItems: [
                { name: "tripNumber", type: 'text', label: "№ рейса", maxLength: 150, required: true },
                { name: "knbkElement", type: 'text', label: "Элемент КНБК", maxLength: 150, required: true },
                { name: "externalD", type: 'text', label: "Ø нар, мм", maxLength: 150, required: true },
                { name: "internalD", type: 'text', label: "Ø вн, мм", maxLength: 150, required: true },
                { name: "quantity", type: 'text', label: "Кол-во (шт)", maxLength: 150, required: true },
                { name: "length", type: 'text', label: "Длина (м)", maxLength: 150, required: true },
                { name: "totalLength", type: 'text', label: "Σ, м", maxLength: 150, required: true },
                { name: "mass", type: 'text', label: "Масса (кг)", maxLength: 150, required: true },
                { name: "totalMass", type: 'text', label: "Σ, кг", maxLength: 150, required: true },
            ],
        },
        chisel: {
            stringItems: [
                { name: "tripNumber", type: "number", label: "№ рейса", maxLength: 15, required: true },
                { name: "externalD", type: "number", label: "Ø, мм", maxLength: 15, required: true },
                { name: "chiselModel", type: "text", label: "Модель", maxLength: 100, required: true },
                { name: "iadcCode", type: "text", label: "Код по IADC", maxLength: 100, required: true },
                { name: "chiselNumber", type: "number", label: "№ долота", maxLength: 15, required: true },
                { name: "turns", type: "number", label: "Об/мин", maxLength: 15, required: true },
                { name: "load", type: "number", label: "Нагрузка, тонн", maxLength: 15, required: true },
                { name: "feed", type: "number", label: "Q, л/сек", maxLength: 15, required: true },
                { name: "startInterval", type: "number", label: "Интервал  бурения от, м", maxLength: 15, required: true },
                { name: "endInterval", type: "number", label: "Интервал бурения до, м", maxLength: 15, required: true },
                { name: "pressure", type: "number", label: "P, Атм", maxLength: 15, required: true },
                { name: "drillingTime", type: "number", label: "Время бур сут, ч", maxLength: 15, required: true },
                { name: "mechSpeed", type: "number", label: "Vмех, м/час", maxLength: 15, required: true },
                { name: "workCode", type: "text", label: "Отработка по коду", maxLength: 100, required: true },
                { name: "note", type: "text", label: "Примечание", maxLength: 300, required: true },
            ],
            additionally: {
                fullWidthItems: {
                    stringItems:[
                        { name: "chiselEngComment", type: 'text', label: "Комментарий инженера по долотам", maxLength: 150, required: true, },
                        { name: "chiselEng", type: 'text', label: "Инженер по долотам", maxLength: 150, required: true, },
                    ]
                }
            }
        },
        drillMortar: {
            stringItems: [
                { name: "y", type: "text", label: "Y, г/см3", maxLength: 50, required: true },
                { name: "t", type: "text", label: "Т, сек", maxLength: 50, required: true },
                { name: "f", type: "text", label: "Ф, см3/30 мин", maxLength: 50, required: true },
                { name: "crust", type: "text", label: "Корка, мм", maxLength: 50, required: true },
                { name: "ph", type: "text", label: "рН", maxLength: 50, required: true },
                { name: "sns", type: "text", label: "СНС, дПа", maxLength: 50, required: true },
                { name: "dns", type: "text", label: "ДНС, дПа", maxLength: 50, required: true },
                { name: "viscocity", type: "text", label: "Пл. вязкость, мПа*с", maxLength: 50, required: true },
                { name: "ktk", type: "text", label: "КТК", maxLength: 50, required: true },
                { name: "sand", type: "text", label: "Песок, %", maxLength: 50, required: true },
                { name: "solidPhase", type: "text", label: "Твердая фаза, %", maxLength: 50, required: true },
                { name: "mvt", type: "text", label: "МВТ", maxLength: 50, required: true },
                { name: "filtrateDensity", type: "text", label: "Плотность фильтрата", maxLength: 50, required: true },
                { name: "chl", type: "text", label: "Cl", maxLength: 50, required: true },
                { name: "cal", type: "text", label: "Ca", maxLength: 50, required: true },
                { name: "es", type: "text", label: "Э/С", maxLength: 50, required: true },
                { name: "note", type: "text", label: "Примечание", maxLength: 300, required: true },
            ],
            timeItems: [
                { name: "measureTime", label: "Время замера", settings: { type: 'time' }},
            ],
            additionally: {
                fullWidthItems: {
                    stringItems:[
                        //TODO БУРОВОЙ МАСТЕР
                        { name: "mortarEng", type: 'text', label: "Инженер по буровому раствору", maxLength: 150, required: true, },
                        { name: "mortarEngComment", type: 'text', label: "Комментарий инженер по буровому раствору", maxLength: 150, required: true, },
                    ]
                }
            }
        },
        drillMortarVolume: {
            stringItems: [
                { name: "gage1", type: "number", label: "Мерник-1", maxLength: 15, required: true },
                { name: "gage2", type: "number", label: "Мерник-2", maxLength: 15, required: true },
                { name: "gage3", type: "number", label: "Мерник-3", maxLength: 15, required: true },
                { name: "gage4", type: "number", label: "Мерник-4", maxLength: 15, required: true },
                { name: "gage5", type: "number", label: "Мерник-5", maxLength: 15, required: true },
                { name: "bpr", type: "number", label: "БПР", maxLength: 15, required: true },
                { name: "bde", type: "number", label: "БДЕ", maxLength: 15, required: true },
                { name: "ca", type: "number", label: "ЦА", maxLength: 15, required: true },
                { name: "inHole", type: "number", label: "В скважине", maxLength: 15, required: true },
                { name: "csgo", type: "number", label: "ЦСГО", maxLength: 15, required: true },
                { name: "popping", type: "number", label: "Долив", maxLength: 15, required: true },
                { name: "onSurface", type: "number", label: "На поверхности", maxLength: 15, required: true },
                { name: "total", type: "number", label: "Итого", maxLength: 15, required: true },
            ],
            timeItems: [
                { name: "measureTime", label: "Время замера", settings: { type: 'time' }}, 
            ]
        },
        drillMortarLoss: {
            stringItems: [
                { name: "complication", type: "number", label: "Осложн", maxLength: 15, required: true },
                { name: "recess", type: "number", label: "Углубл", maxLength: 15, required: true },
                { name: "spo", type: "number", label: "СПО", maxLength: 15, required: true },
                { name: "cleaning", type: "number", label: "Очистка", maxLength: 15, required: true },
                { name: "other", type: "number", label: "Прочее", maxLength: 15, required: true },
                { name: "filtration", type: "number", label: "Фильтрация", maxLength: 15, required: true },
                { name: "dump", type: "number", label: "Сброс", maxLength: 15, required: true },
            ],
            timeItems: [
                { name: "measureTime", label: "Время замера", settings: { type: 'time' }},
            ]
        },
        drillCleanSystem: {
            stringItems: [
                { name: "orderNum", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "workHours", type: "number", label: "Время работы за сут.", maxLength: 15, required: true },
                { name: "status", type: "text", label: "Статус", maxLength: 50, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
            checkBoxItems: [
                { name: "state", label: "Состояние" }
            ]
        },
        drillPumpWork: {
            stringItems: [
                { name: "orderNum", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "sleeveD", type: "number", label: "Ø, втулок", maxLength: 15, required: true },
                { name: "moveCount", type: "number", label: "Ходы", maxLength: 15, required: true },
                { name: "feed", type: "number", label: "Q, л/сек", maxLength: 15, required: true },
                { name: "pressure", type: "number", label: "Р, Атм", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
        },
        drillBreakdownInstrument: {
            stringItems: [
                { name: "orderNum", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "startQuantity", type: "number", label: "Кол-во (на начало)", maxLength: 15, required: true },
                { name: "incomeQuantity", type: "number", label: "Кол-во (приход)", maxLength: 15, required: true },
                { name: "expenditureQuantity", type: "number", label: "Кол-во (расход)", maxLength: 15, required: true },
                { name: "endQuantity", type: "number", label: "Кол-во (остаток)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
            checkBoxItems: [
                { name: "hasPassport", label: "Паспорт" }
            ]
        },
        drilllMaterialConsumption: {
            stringItems: [
                { name: "orderNum", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "startQuantity", type: "number", label: "Кол-во (на начало)", maxLength: 15, required: true },
                { name: "incomeQuantity", type: "number", label: "Кол-во (приход)", maxLength: 15, required: true },
                { name: "expenditureQuantity", type: "number", label: "Кол-во (расход)", maxLength: 15, required: true },
                { name: "endQuantity", type: "number", label: "Кол-во (остаток)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
                { name: "unitId", label: "Единица измерения", dataName: "units" },
            ],
        },
        drillMortarPrep: {
            stringItems: [
                { name: "gage1", type: "number", label: "Мерник-1", maxLength: 15, required: true },
                { name: "gage2", type: "number", label: "Мерник-2", maxLength: 15, required: true },
                { name: "gage3", type: "number", label: "Мерник-3", maxLength: 15, required: true },
                { name: "gage4", type: "number", label: "Мерник-4", maxLength: 15, required: true },
                { name: "gage5", type: "number", label: "Мерник-5", maxLength: 15, required: true },
                { name: "bpr", type: "number", label: "БПР", maxLength: 15, required: true },
                { name: "bde", type: "number", label: "БДЕ", maxLength: 15, required: true },
                { name: "ca", type: "number", label: "ЦА", maxLength: 15, required: true },
                { name: "inHole", type: "number", label: "В скважине", maxLength: 15, required: true },
                { name: "csgo", type: "number", label: "ЦСГО", maxLength: 15, required: true },
                { name: "popping", type: "number", label: "Долив", maxLength: 15, required: true },
                { name: "onSurface", type: "number", label: "На поверхности", maxLength: 15, required: true },
                { name: "total", type: "number", label: "Итого", maxLength: 15, required: true },
            ],
            timeItems: [
                { name: "measureTime", label: "Время замера",settings: { type: 'time' }},
            ]
        },
        drillDiselConsumption: {
            stringItems: [
                { name: "orderNum", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "consumer", type: "text", label: "Потребитель", maxLength: 15, required: true },
                { name: "quantity", type: "number", label: "Кол-во", maxLength: 15, required: true },
                { name: "total", type: "number", label: "Всего (с нач. работ)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
                { name: "unitId", label: "Единица измерения", dataName: "units" },
            ],
        },
        drillChiselDrillHead: {
            stringItems: [
                { name: "factoryNumber", type: "text", label: "Зав. № долота", maxLength: 50, required: true },
                { name: "startQuantity", type: "number", label: "Кол-во (на начало)", maxLength: 15, required: true },
                { name: "incomeQuantity", type: "number", label: "Кол-во (приход)", maxLength: 15, required: true },
                { name: "expenditureQuantity", type: "number", label: "Кол-во (расход)", maxLength: 15, required: true },
                { name: "endQuantity", type: "number", label: "Кол-во (остаток)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
        },
        drillTechGear: {
            stringItems: [
                { name: "startQuantity", type: "number", label: "Кол-во (на начало)", maxLength: 15, required: true },
                { name: "incomeQuantity", type: "number", label: "Кол-во (приход)", maxLength: 15, required: true },
                { name: "expenditureQuantity", type: "number", label: "Кол-во (расход)", maxLength: 15, required: true },
                { name: "endQuantity", type: "number", label: "Кол-во (остаток)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
                { name: "unitId", label: "Единица измерения", dataName: "units" },
            ],
        },
        drillCasingNkt: {
            stringItems: [
                { name: "orderNumber", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "externalD", type: "number", label: "Ø нар", maxLength: 15, required: true },
                { name: "wallThickness", type: "number", label: "Тст", maxLength: 15, required: true },
                { name: "firmnessGroup", type: "text", label: "Гр. прочности", maxLength: 30, required: true },
                { name: "threadType", type: "text", label: "Тип резьбового соединения", maxLength: 50, required: true },
                { name: "startQuantityP", type: "number", label: "Кол-во на начало (шт.)", maxLength: 15, required: true },
                { name: "startQuantityM", type: "number", label: "Кол-во  на начало (м)", maxLength: 15, required: true },
                { name: "incomeQuantityP", type: "number", label: "Кол-во приход (шт.)", maxLength: 15, required: true },
                { name: "incomeQuantityM", type: "number", label: "Кол-во приход (м)", maxLength: 15, required: true },
                { name: "expendQuantityP", type: "number", label: "Кол-во расход (шт.)", maxLength: 15, required: true },
                { name: "expendQuantityM", type: "number", label: "Кол-во расход (м)", maxLength: 15, required: true },
                { name: "defectP", type: "number", label: "Брак (шт.)", maxLength: 15, required: true },
                { name: "defectM", type: "number", label: "Брак (м)", maxLength: 15, required: true },
                { name: "defectNote", type: "text", label: "Брак (примечание)", maxLength: 150, required: true },
                { name: "endQuantityP", type: "number", label: "Кол-во остаток (шт.)", maxLength: 15, required: true },
                { name: "endQuantityM", type: "number", label: "Кол-во остаток (м)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
        },
        drillInstrumentKnbkElements: {
            stringItems: [
                { name: "orderNumber", type: "number", label: "№ п/п", maxLength: 15, required: true },
                { name: "externalD", type: "number", label: "Øвн.", maxLength: 15, required: true },
                { name: "internalD", type: "number", label: "Øвн.", maxLength: 15, required: true },
                { name: "firmnessGroup", type: "text", label: "Гр. пр. /м. стали", maxLength: 300, required: true },
                { name: "startQP", type: "number", label: "Кол-во на начало (шт.)", maxLength: 15, required: true },
                { name: "startQM", type: "number", label: "Кол-во на начало (м)", maxLength: 15, required: true },
                { name: "startQT", type: "number", label: "Кол-во на начало (тн)", maxLength: 15, required: true },
                { name: "incomeQP", type: "number", label: "Кол-во приход (шт.)", maxLength: 15, required: true },
                { name: "incomeQM", type: "number", label: "Кол-во приход (м)", maxLength: 15, required: true },
                { name: "incomeQT", type: "number", label: "Кол-во приход (тн)", maxLength: 15, required: true },
                { name: "expendQP", type: "number", label: "Кол-во расход (шт.)", maxLength: 15, required: true },
                { name: "expendQM", type: "number", label: "Кол-во расход (м)", maxLength: 15, required: true },
                { name: "expendQT", type: "number", label: "Кол-во расход (тн)", maxLength: 15, required: true },
                { name: "endQP", type: "number", label: "Кол-во на конец (шт.)", maxLength: 15, required: true },
                { name: "endQM", type: "number", label: "Кол-во на конец (м)", maxLength: 15, required: true },
                { name: "endQT", type: "number", label: "Кол-во на конец (тн)", maxLength: 15, required: true },
                { name: "runningTime", type: "number", label: "Наработка (часов)", maxLength: 15, required: true },
                { name: "runningTimeStart", type: "number", label: "Наработка (часов) с начала работ", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
            dateItems: [
                { name: "defectoscopyDate", label: "Дата дефектоскопии" },
            ]
        },
        drillTechEquipment: {
            stringItems: [
                { name: "startQ", type: "number", label: "Кол-во (на начало)", maxLength: 15, required: true },
                { name: "incomeQ", type: "number", label: "Кол-во (приход)", maxLength: 15, required: true },
                { name: "expendQ", type: "number", label: "Кол-во (расход)", maxLength: 15, required: true },
                { name: "endQ", type: "number", label: "Кол-во (остаток)", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
            checkBoxItems: [
                { name: "hasPassport", label: "Паспорт" }
            ]
        },
        drillWorkLine: {
            stringItems: [
                { name: "diameter", type: "number", label: "Диаметр, мм", maxLength: 15, required: true },
                { name: "coilLength", type: "number", label: "Длина в бухте, м", maxLength: 15, required: true },
                { name: "tooling", type: "text", label: "Оснастка", maxLength: 30, required: true },
                { name: "overwindOperating", type: "number", label: "Перетяжка, при наработке (м)", maxLength: 15, required: true },
                { name: "overwindLength", type: "number", label: "Перетяжка, м", maxLength: 15, required: true },
                { name: "runningTimeSensor", type: "number", label: "Наработка за рейс, датчик", maxLength: 15, required: true },
                { name: "runningTmeEstim", type: "number", label: "Наработка за рейс, расчет", maxLength: 15, required: true },
                { name: "runningTimeSensorTotal", type: "number", label: "Наработка за рейс, Σ датчик", maxLength: 15, required: true },
                { name: "runningTimeEstimTotal", type: "number", label: "Остаток в бухте", maxLength: 15, required: true },
            ],
            dateItems: [
                { name: "installDate", label: "Дата установки" },
                { name: "overwindDate", label: "Перетяжка, дата" },
            ]
        },
        dieselWork: {
            stringItems: [
                { name: "factoryNumber", type: "text", label: "Зав. №", maxLength: 50, required: true },
                { name: "run", type: "number", label: "Наработка (маш./час)", maxLength: 15, required: true },
                { name: "monthRun", type: "number", label: "Наработка (маш./час)  месяц", maxLength: 15, required: true },
                { name: "totalRun", type: "number", label: "Наработка (маш./час) с начала работ", maxLength: 15, required: true },
                { name: "state", type: "text", label: "Состояние", maxLength: 50, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
        },
        staff: {
            stringItems: [
                { name: "position", type: "text", label: "Должность", maxLength: 150, required: true },
                { name: "name", type: "text", label: "Ф   ИО", maxLength: 150, required: true },
                { name: "hours", type: "number", label: "Кол-во часов", maxLength: 15, required: true },
            ],
            selectItems: [
                { name: "orgId", label: "Организация-работодатель", dataName: "organizations" },
            ],
        },
        specialMachineWork: {
            stringItems: [
                { name: "stateNumber", type: "text", label: "Гос. Номер", maxLength: 50, required: true },
                { name: "driverName", type: "text", label: "Водитель", maxLength: 50, required: true },
                { name: "work", type: "number", label: "Работа, час", maxLength: 15, required: true },
                { name: "duty", type: "number", label: "Дежурство, час", maxLength: 15, required: true },
                { name: "repair", type: "number", label: "Ремонт, час", maxLength: 15, required: true },
                { name: "sediment", type: "number", label: "Отстой, час", maxLength: 15, required: true },
                { name: "note", type: "text", label: "Примечание", maxLength: 150, required: true },
                { name: "description", type: "text", label: "Описание выполняемых работ", maxLength: 150, required: true },
            ],
            selectItems: [
                { name: "nomId", label: "Номенклатура", dataName: "nomenclature" },
            ],
        }
    },
    /* drillingRig: {
        main:{stringItems: [
            { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
        ],}
    }, */
    deposit: {
        main:{stringItems: [
            { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
        ]}
    },
    /* contract: {
        main: {
            stringItems: [
                { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
            ],
            selectItems: [
                {name: "executorId", label: "Подрядчик", dataName: "organizations" },
            ],
        },
        filter:{
            selectItems: [
                {name: "customerId", label: "Заказчик", dataName: "organizations" },
                {name: "projectId", label: "Проект", dataName: "projects" },
                {name: "depositId", label: "Месторождение", dataName: "deposits" },
            ]
        }
    }, */
    contractDetails: {
        selectItems: [
            { name: "workKindId", label: "Вид работ", dataName: "workKinds" },
            { name: "workObjectId", label: "Объект работ", dataName: "workObjects" },
        ],
        dateItems: [
            { name: "startDate", label: "Дата начала"},
            { name: "endDate", label: "Дата окончания"},
        ],
    },
    /* unit: {
        main: {
            stringItems: [
                { name: 'name', type: 'text', label: 'Наименование', maxLength: 150, required: true },
                { name: 'code', type: 'text', label: 'Код', maxLength: 150, required: true },
            ],
        }
    }, */
    nomenclature: {
        main: {
            stringItems: [
                { name: "name", type: "text", label: "Наименование", maxLength: 150, required: true },
                { name: "mnemo", type: "text", label: "Сокращённое наименование", maxLength: 150, required: true },
                { name: "code", type: "text", label: "Код", maxLength: 150, required: true },
            ],
            selectItems: [
                { name: "unitId", label: "Единица измерения", dataName: "units_data" },
                { name: "typeId", label: "Тип", dataName: "nomenclature_types" },
            ]
        }
    },
    nomenclatureTypes: {
        main: {
            stringItems: [
                { name: "name", type: "text", label: "Наименование", maxLength: 150, required: true },
                { name: "mnemo", type: "text", label: "Сокращённое наименование", maxLength: 150, required: true },
            ]
        }
    },
    mortarTypes: {
        main: {
            stringItems: [
                { name: "name", type: "text", label: "Наименование", maxLength: 150, required: true },
                { name: "code", type: "text", label: "Код", maxLength: 150, required: true },
            ]
        }
    }
}

export const formsReducer = (state = initialState, action: any) : TInitialStateForms => {
    switch(action.type){
        default: return state;
    }
}