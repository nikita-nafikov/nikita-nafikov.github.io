import {images} from "../assets/image";

export const timeTableDayFirst = [
    {
        'id': '1',
        'date': {
            'from': '9:30',
            'to': '10:30'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Регистрация',
                'picture': images.ConfImg
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Регистрация',
                'picture': images.ConfImg
            }
        }
    },
    {
        'id': '2',
        'date': {
            'from': '10:30',
            'to': '10:45'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Открытие',
                'picture': images.ConfImg
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Открытие',
                'picture': images.ConfImg
            }
        }
    },

    {
        'id': '4',
        'date': {
            'from': '10:50',
            'to': '11:20'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Максим Крюков',
                'event-title': 'ИТ в Финтехе',
                'picture': images.Krukov
            },
            'secondHall': {
                'speaker-name': 'Андрей Югай',
                'event-title': 'Недооценённый ChatGPT: готовим правильно',
                'picture': images.Ugay
            }
        }
    },

    {
        'id': '5',
        'date': {
            'from': '11:20',
            'to': '11:40'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeFirst
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeFirst
            }
        }
    },

    {
        'id': '6',
        'date': {
            'from': '11:40',
            'to': '12:10'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Расул Идиятулов',
                'event-title': 'Разработчики пользовательских интерфейсов: "старая школа" vs "новая школа". Решаемые задачи, развитие, чему стоит поучиться друг у друга',
                'picture': images.Idiatulov
            },
            'secondHall': {
                'speaker-name': 'Максим Абдулхаликов',
                'event-title': 'Подход TAGES к услугам Яндекса',
                'picture': images.Abdulhalilov
            }
        }
    },

    {
        'id': '7',
        'date': {
            'from': '12:15',
            'to': '12:45'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Николай Фоминых',
                'event-title': 'Теория Оставшихся / .. или как увернуться от метеорита',
                'picture': images.Fominih
            },
            'secondHall': {
                'speaker-name': 'Никита Кононов',
                'event-title': 'Frontend в архитектурных слоях',
                'picture': images.Konanov
            }
        }
    },

    {
        'id': '8',
        'date': {
            'from': '12:45',
            'to': '13:45'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Обед',
                'picture': images.Dinner
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Обед',
                'picture': images.Dinner
            }
        }
    },

    {
        'id': '9',
        'date': {
            'from': '13:45',
            'to': '15:15'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'QA Workshop Тимур Юсупов, Максим Калабугин',
                'event-title': 'End-to-end тестирование',
                'picture': images.KalabuginUsupov
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Круглый стол',
                'picture': images.StolFirst
            }
        }
    },
    {
        'id': '10',
        'date': {
            'from': '15:15',
            'to': '15:35'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeSecond
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeSecond
            }
        }
    },

    {
        'id': '11',
        'date': {
            'from': '15:35',
            'to': '17:05'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'DevOps Workshop Игорь Любимов',
                'event-title': 'Посвящение в DevOps через практику IaC и GitOps',
                'picture': images.Lubimov

            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Круглый стол',
                'picture': images.StolSecond
            }
        }
    },

    {
        'id': '12',
        'date': {
            'from': '17:05',
            'to': '19:05'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Сбор',
                'picture': images.Sbor
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Сбор',
                'picture': images.Sbor
            }
        }
    },

    {
        'id': '13',
        'date': {
            'from': '19:05',
            'to': '00:00'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Afterparty',
                'picture': images.AfterParty
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Afterparty',
                'picture': images.AfterParty
            }
        }
    },

]

export const timeTableDaySecond = [
    {
        'id': '1',
        'date': {
            'from': '10:00',
            'to': '10:30'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Антон Леонов, Айдар Насибуллин',
                'event-title': 'История внедрения Open Telemetry',
                'picture': images.LeonovNasibullin
            },
            'secondHall': {
                'speaker-name': 'Ильнур Фаткуллин',
                'event-title': 'Vault: ключ к безопасному управлению секретами',
                'picture': images.Fatktililn
            }
        }
    },
    {
        'id': '2',
        'date': {
            'from': '10:35',
            'to': '11:05'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Антон Леухин',
                'event-title': 'Как построить дизайн-систему',
                'picture': images.Leuhin
            },
            'secondHall': {
                'speaker-name': 'Тимур Юсупов',
                'event-title': 'Project-task jumping. Как все успеть с помощь помидоров и двух минут',
                'picture': images.Usupov
            }
        }
    },
    {
        'id': '3',
        'date': {
            'from': '11:05',
            'to': '11:25'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeFirst
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeFirst
            }
        }
    },
    {
        'id': '4',
        'date': {
            'from': '11:25',
            'to': '11:55'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Петр Лаптев',
                'event-title': 'Сниппеты для тестирования',
                'picture': images.Laptaev
            },
            'secondHall': {
                'speaker-name': 'Александр Хван',
                'event-title': 'Как не давать пустых обещаний себе, команде и заказчику?',
                'picture': images.Khvan
            }
        }
    },
    {
        'id': '5',
        'date': {
            'from': '12:00',
            'to': '12:30'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Игорь Морозов',
                'event-title': 'Обеспечение надежности и наблюдаемости в современных распределенных системах',
                'picture': images.Morozov
            },
            'secondHall': {
                'speaker-name': 'Игорь Прокофьев',
                'event-title': 'Как мы в Kafka пришли?',
                'picture': images.Prokofiev
            }
        }
    },
    {
        'id': '6',
        'date': {
            'from': '12:30',
            'to': '13:30'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Обед',
                'picture': images.Dinner
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Обед',
                'picture': images.Dinner
            }
        }
    },
    {
        'id': '7',
        'date': {
            'from': '13:30',
            'to': '15:00'
        },
        'events': {
            'firstHall': {
                'speaker-name': 'Данил Мишин',
                'event-title': 'Platformeco Workshop',
                'picture': images.Mishin
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Круглый стол',
                'picture': images.StolSecond
            }
        }
    },
    {
        'id': '8',
        'date': {
            'from': '15:00',
            'to': '15:20'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeSecond
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Кофебрейк',
                'picture': images.CoffeSecond
            }
        }
    },
    {
        'id': '9',
        'date': {
            'from': '15:20',
            'to': '16:50'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Круглый стол',
                'picture': images.StolFirst
            },
            'secondHall': {
                'speaker-name': 'Дамир Даутов',
                'event-title': 'Flutter Workshop. Делаем визитную карточку на Flutter с использованием шейдеров',
                'picture': images.Dautov
            }
        }
    },
    {
        'id': '10',
        'date': {
            'from': '16:50',
            'to': '17:05'
        },
        'events': {
            'firstHall': {
                'speaker-name': '',
                'event-title': 'Закрытие конференции',
                'picture': images.ConfImg
            },
            'secondHall': {
                'speaker-name': '',
                'event-title': 'Закрытие конференции',
                'picture': images.ConfImg
            }
        }
    },
]



















// setInterval()


// export const a = {
//     get b  () {
//         return
//     }
// }

// export const timeTableDayFirst:ITimeTable[] = [
//     {
//         'id': '5',
//         'date': {
//             'from': '18:58',
//             'to': '18:59'
//         },
//         'events': {
//             'firstHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             },
//             'secondHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             }
//         }
//     },
//
//     {
//         'id': '6',
//         'date': {
//             'from': '19:01',
//             'to': '19:05'
//         },
//         'events': {
//             'firstHall': {
//                 'speaker-name': 'Расул Идиятулов',
//                 'event-title': 'Разработчики пользовательских интерфейсов: "старая школа" vs "новая школа". Решаемые задачи, развитие, чему стоит поучиться друг у друга',
//                 'picture': images.Idiatulov
//             },
//             'secondHall': {
//                 'speaker-name': 'Максим Абдулхаликов',
//                 'event-title': 'Подход TAGES к услугам Яндекса',
//                 'picture': images.Abdulhalilov
//             }
//         }
//     },
//     {
//         'id': '5',
//         'date': {
//             'from': '19:00',
//             'to': '19:09'
//         },
//         'events': {
//             'firstHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             },
//             'secondHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             }
//         }
//     },
//     {
//         'id': '5',
//         'date': {
//             'from': '19:03',
//             'to': '19:10'
//         },
//         'events': {
//             'firstHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             },
//             'secondHall': {
//                 'speaker-name': '',
//                 'event-title': 'Кофебрейк',
//                 'picture': images.CoffeFirst
//             }
//         }
//     },
// ]