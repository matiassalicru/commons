export const filters = {
  status: ['new', 'finished', 'in_process', 'on_hold'],
  dates: {
    deadline: {
      withoutDeadline: {
        from: null,
        to: null,
      },
      thisMonth: {
        from: '2021-09-01',
        to: '2021-09-30',
      },
      lastMonth: {
        from: '2021-08-14',
        to: '2021-09-14',
      },
      lastThreeMonth: {
        from: '2021-06-14',
        to: '2021-09-14',
      },
      lastSixMonth: {
        from: '2021-03-14',
        to: '2021-09-14',
      },
      lastTwelveMonth: {
        from: '2020-09-14',
        to: '2021-09-14',
      },
      today: {
        from: '2021-09-14',
        to: '2021-09-14',
      },
      nextSevenDays: {
        from: '2021-09-14',
        to: '2021-09-21',
      },
      custom: null,
    },
    creationDate: {
      thisMonth: {
        from: '2021-09-01',
        to: '2021-09-30',
      },
      lastMonth: {
        from: '2021-08-14',
        to: '2021-09-14',
      },
      lastThreeMonth: {
        from: '2021-06-14',
        to: '2021-09-14',
      },
      lastSixMonth: {
        from: '2021-03-14',
        to: '2021-09-14',
      },
      lastTwelveMonth: {
        from: '2020-09-14',
        to: '2021-09-14',
      },
      today: {
        from: '2021-09-14',
        to: '2021-09-14',
      },
      custom: null,
    },
    initialDate: {
      thisMonth: {
        from: '2021-09-01',
        to: '2021-09-30',
      },
      lastMonth: {
        from: '2021-08-14',
        to: '2021-09-14',
      },
      lastThreeMonth: {
        from: '2021-06-14',
        to: '2021-09-14',
      },
      lastSixMonth: {
        from: '2021-03-14',
        to: '2021-09-14',
      },
      lastTwelveMonth: {
        from: '2020-09-14',
        to: '2021-09-14',
      },
      today: {
        from: '2021-09-14',
        to: '2021-09-14',
      },
      nextSevenDays: {
        from: '2021-09-14',
        to: '2021-09-21',
      },
      custom: null,
    },
  },
  priority: [
    {
      id: 0,
      name: 'low',
    },
    {
      id: 1,
      name: 'normal',
    },
    {
      id: 2,
      name: 'high',
    },
    {
      id: 3,
      name: 'urgent',
    },
  ],
  sprints: [
    {
      id: 348,
      name: '1OP Sprint 2',
    },
    {
      id: 349,
      name: '1OP Sprint 3',
    },
    {
      id: 350,
      name: '1OP Sprint 4',
    },
    {
      id: 347,
      name: '1OP Sprint 1',
    },
    {
      id: 763,
      name: 'Sprint 14',
    },
    {
      id: 764,
      name: 'Sprint 15',
    },
  ],
  users: [
    {
      id: 8549,
      lastName: 'Baca',
      firstName: 'Angelica',
      remainingHours: 100,
      picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-106202108068.JPG',
      email: 'angelica@projectcor.com',
      roleId: '5',
      leaves: [
        {
          id: '40',
          userId: 8549,
          leaveTypeId: '2',
          start: '2022-08-01T14:14:00.000Z',
          end: '2022-08-17T14:14:00.000Z',
          leaveType: {
            id: '2',
            typeCode: 'UL2',
            name: 'maternity/paternity',
            __typename: 'companyLeaveTypes',
          },
          __typename: 'userLeavesSchema',
        },
      ],
    },
    {
      id: 8551,
      name: 'Carlos Molero',
    },
    {
      id: 8546,
      name: 'Daniel Guzman',
    },
    {
      id: 12022,
      name: 'Daniel apellido',
    },
    {
      id: 14045,
      name: 'DioTest 38',
    },
    {
      id: 8555,
      name: 'Dionnel Martinez',
    },
    {
      id: 8554,
      name: 'Gabriel Marin',
    },
    {
      id: 8550,
      name: 'Geraldine update Castillo',
    },
    {
      id: 14960,
      name: 'Harry AA Potter',
    },
    {
      id: 14746,
      name: 'Ivan Bercovich',
    },
    {
      id: 20432,
      name: 'JOTA CAPACIDAD TOVAR',
    },
    {
      id: 8552,
      name: 'Jose Tovar',
    },
    {
      id: 8557,
      name: 'Jose Gettas',
    },
    {
      id: 11046,
      name: 'Leandro Videla',
    },
    {
      id: 8556,
      name: 'Leonardo l',
    },
    {
      id: 8548,
      name: 'Maribal Zambrano',
    },
    {
      id: 8547,
      name: 'Matias Echazarreta',
    },
    {
      id: 8553,
      name: 'Mike m',
    },
    {
      id: 16147,
      name: 'ORADYS COLLABORADOR',
    },
    {
      id: 20431,
      name: 'ORADYS CAPACIDAD ORTEGA',
    },
    {
      id: 8545,
      name: 'Oradys Ortega Rosal',
    },
    {
      id: 8661,
      name: 'Ricardo Guzman',
    },
    {
      id: 11949,
      name: 'ahora simeparece 2',
    },
    {
      id: 13816,
      name: 'carlos m',
    },
    {
      id: 11950,
      name: 'ddd dd',
    },
    {
      id: 14281,
      name: 'epa prod',
    },
    {
      id: 18412,
      name: 'gab mar',
    },
    {
      id: 11944,
      name: 'jota jota',
    },
    {
      id: 11951,
      name: 'jota2 jota2',
    },
    {
      id: 11947,
      name: 'meparece me',
    },
    {
      id: 11948,
      name: 'no meparece',
    },
    {
      id: 13396,
      name: 'prueba prueba',
    },
    {
      id: 9369,
      name: 'test pass',
    },
    {
      id: 9474,
      name: 'test cor',
    },
    {
      id: 15391,
      name: 'user test 172 dev cor 172',
    },
    {
      id: 15469,
      name: 'user test 250 dev cor 250',
    },
    {
      id: 15288,
      name: 'user test 69 dev cor 69',
    },
    {
      id: 15226,
      name: 'user test 7 dev cor 7',
    },
    {
      id: 15292,
      name: 'user test 73 dev cor 73',
    },
    {
      id: 15227,
      name: 'user test 8 dev cor 8',
    },
    {
      id: 15304,
      name: 'user test 85 dev cor 85',
    },
    {
      id: 15305,
      name: 'user test 86 dev cor 86',
    },
    {
      id: 15228,
      name: 'user test 9 dev cor 9',
    },
    {
      id: 15309,
      name: 'user test 90 dev cor 90',
    },
    {
      id: 15310,
      name: 'user test 91 dev cor 91',
    },
    {
      id: 15311,
      name: 'user test 92 dev cor 92',
    },
    {
      id: 15312,
      name: 'user test 93 dev cor 93',
    },
    {
      id: 15313,
      name: 'user test 94 dev cor 94',
    },
    {
      id: 15314,
      name: 'user test 95 dev cor 95',
    },
    {
      id: 15315,
      name: 'user test 96 dev cor 96',
    },
    {
      id: 15316,
      name: 'user test 97 dev cor 97',
    },
    {
      id: 15317,
      name: 'user test 98 dev cor 98',
    },
    {
      id: 15318,
      name: 'user test 99 dev cor 99',
    },
  ],
  labels: [
    {
      id: 210595,
      name: ' Desarrollo web',
    },
    {
      id: 210639,
      name: 'Activación',
    },
    {
      id: 210632,
      name: 'AdWords',
    },
    {
      id: 210606,
      name: 'Administration & Finance',
    },
    {
      id: 210608,
      name: 'After Effects',
    },
    {
      id: 210611,
      name: 'Ajustes',
    },
    {
      id: 210605,
      name: 'Arte Final',
    },
    {
      id: 210623,
      name: 'Asesoramiento',
    },
    {
      id: 210593,
      name: 'BackEnd',
    },
    {
      id: 210628,
      name: 'Blog',
    },
    {
      id: 210584,
      name: 'CRO',
    },
    {
      id: 210618,
      name: 'Campaña',
    },
    {
      id: 210626,
      name: 'Capacitación',
    },
    {
      id: 210633,
      name: 'Community Management',
    },
    {
      id: 210625,
      name: 'Consultoría',
    },
    {
      id: 210621,
      name: 'Coordinación',
    },
    {
      id: 210598,
      name: 'Courier',
    },
    {
      id: 210644,
      name: 'Creatividad',
    },
    {
      id: 210614,
      name: 'Cuentas',
    },
    {
      id: 210636,
      name: 'Desarrollo de APP',
    },
    {
      id: 210653,
      name: 'Desarrollo e-Commerce',
    },
    {
      id: 210612,
      name: 'Digital',
    },
    {
      id: 210603,
      name: 'Diseño',
    },
    {
      id: 210642,
      name: 'Diseño Banners',
    },
    {
      id: 210643,
      name: 'Diseño Packaging',
    },
    {
      id: 210654,
      name: 'Diseño Web',
    },
    {
      id: 210646,
      name: 'Diseño de marca',
    },
    {
      id: 210645,
      name: 'Diseño gráfico',
    },
    {
      id: 210641,
      name: 'Diseños Vía Pública',
    },
    {
      id: 210607,
      name: 'Edición de video',
    },
    {
      id: 210629,
      name: 'Envío de Newsletter',
    },
    {
      id: 210619,
      name: 'Estrategia',
    },
    {
      id: 210602,
      name: 'FEE',
    },
    {
      id: 210587,
      name: 'Facturación',
    },
    {
      id: 210640,
      name: 'Fotografía',
    },
    {
      id: 210594,
      name: 'FrontEnd',
    },
    {
      id: 210635,
      name: 'Hosting',
    },
    {
      id: 210613,
      name: 'Implementación',
    },
    {
      id: 210600,
      name: 'Impresos',
    },
    {
      id: 210620,
      name: 'Influencers',
    },
    {
      id: 210647,
      name: 'Instalación de Plugin',
    },
    {
      id: 210597,
      name: 'Investigación de Mercado',
    },
    {
      id: 210652,
      name: 'Joomla',
    },
    {
      id: 210622,
      name: 'Licitación',
    },
    {
      id: 210634,
      name: 'Mantenimiento Software',
    },
    {
      id: 210616,
      name: 'Medios',
    },
    {
      id: 210599,
      name: 'Medios Alternos',
    },
    {
      id: 210586,
      name: 'Motion Designer',
    },
    {
      id: 210630,
      name: 'Optimización de campaña',
    },
    {
      id: 210589,
      name: 'PM',
    },
    {
      id: 210601,
      name: 'Planning',
    },
    {
      id: 210651,
      name: 'PrestaShop',
    },
    {
      id: 210638,
      name: 'Producción',
    },
    {
      id: 210615,
      name: 'Producción Audiovisual',
    },
    {
      id: 210604,
      name: 'Producción Tráfico',
    },
    {
      id: 210637,
      name: 'Programación',
    },
    {
      id: 210592,
      name: 'QA',
    },
    {
      id: 210609,
      name: 'Radio',
    },
    {
      id: 210610,
      name: 'Redacción',
    },
    {
      id: 210617,
      name: 'Relacionamiento con el Cliente',
    },
    {
      id: 231487,
      name: 'Reporte de Bug',
    },
    {
      id: 210624,
      name: 'Ronda de inversión',
    },
    {
      id: 210627,
      name: 'SEO',
    },
    {
      id: 210585,
      name: 'Salesforce Manager',
    },
    {
      id: 210650,
      name: 'Shopify',
    },
    {
      id: 210631,
      name: 'Social Ads',
    },
    {
      id: 210591,
      name: 'Soporte',
    },
    {
      id: 210596,
      name: 'Trade',
    },
    {
      id: 210588,
      name: 'UI & UX',
    },
    {
      id: 210649,
      name: 'Vtex',
    },
    {
      id: 210590,
      name: 'Webmaster',
    },
    {
      id: 210648,
      name: 'Wordpress',
    },
  ],
}

export const FILTERS_CONFIG = {
  tasks: {
    icon: 'tasks',
    type: 'search',
    hasSearch: false,
    isMultiple: false,
  },
  labels: {
    icon: 'tag',
    type: 'text',
    hasSearch: true,
    isMultiple: true,
  },
  sprints: {
    hasSearch: true,
    type: 'text',
    icon: 'sprint',
    isMultiple: true,
  },
  priority: {
    type: 'text',
    hasSearch: false,
    isMultiple: true,
    icon: 'exclamation-triangle',
  },
  archived: {
    type: 'text',
    hasSearch: false,
    icon: 'archive',
    isMultiple: false,
  },
  status: {
    type: 'text',
    hasSearch: false,
    isMultiple: true,
    icon: 'status-pipe',
  },
  deadline: {
    type: 'text',
    hasSearch: false,
    icon: 'calendar',
    isMultiple: false,
  },
  col: {
    hasSearch: true,
    icon: 'user',
    type: 'avatars',
    isMultiple: true,
  },
  positions: {
    hasFilter: true,
    icon: 'position-tag',
    type: 'positions',
    isMultiple: true,
  },
  initialDate: {
    type: 'text',
    hasSearch: false,
    icon: 'calendar',
    isMultiple: false,
  },
  creationDate: {
    type: 'text',
    hasSearch: false,
    icon: 'calendar',
    isMultiple: false,
  },
  pm: {
    icon: 'user',
    hasSearch: true,
    type: 'avatars',
    isMultiple: true,
  },
}

const getStatusFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            title: 'new',
            id: 'new',
            borderColor: '#0094c9',
          },
          {
            title: 'in_process',
            id: 'in_process',
            borderColor: '#faab2d',
          },
          {
            title: 'on_hold',
            id: 'on_hold',
            borderColor: '#ec2c4f',
          },
          {
            title: 'finished',
            id: 'finished',
            borderColor: '#48ce83',
          },
        ],
      })
    }, 200)
  })

const getDateFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 'thisMonth',
            title: 'thisMonth',
            value: {
              from: '2021-11-01',
              to: '2021-11-30',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'lastMonth',
            title: 'lastMonth',
            value: {
              from: '2021-10-01',
              to: '2021-10-31',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'lastThreeMonth',
            title: 'lastThreeMonth',
            value: {
              from: '2021-08-10',
              to: '2021-11-10',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'lastSixMonth',
            title: 'lastSixMonth',
            value: {
              from: '2021-05-10',
              to: '2021-11-10',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'lastTwelveMonth',
            title: 'lastTwelveMonth',
            value: {
              from: '2020-11-10',
              to: '2021-11-10',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'today',
            title: 'today',
            value: {
              from: '2021-11-10',
              to: '2021-11-10',
              __typename: 'DateRangeOutput',
            },
            type: 'date',
          },
          {
            id: 'custom',
            title: 'custom',
            value: null,
            type: 'date',
          },
        ],
      })
    }, 200)
  })

const getPositionsFilter = (page = 1) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        page,
        lastPage: 20,
        data: [
          {
            id: 1,
            name: 'Fullstack developer Sr',
            categoryName: 'Mix',
          },
          {
            id: 2,
            name: 'UX Designer',
            categoryName: 'Mix',
          },
          {
            id: 3,
            name: 'The cookie master',
            categoryName: 'Mix',
          },
          {
            id: 8,
            name: 'Frontend developer Sr',
            categoryName: 'Frontenders',
          },
          {
            id: 21,
            name: 'Frontend developer Ssr',
            categoryName: 'Frontenders',
          },
          {
            id: 4,
            name: 'Frontend developer',
            categoryName: 'Frontenders',
          },
        ],
      })
    }, 200)
  })

const getUsersFilter = (page = 1) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        page,
        lastPage: 20,
        data: [
          {
            id: 8549,
            roleId: '3',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-106202108068.JPG',
            lastName: 'Baca',
            firstName: 'Angelica',
            remainingHours: 0,
            email: 'angelica@projectcor.com',
            leaves: [
              {
                id: '40',
                userId: 8549,
                leaveTypeId: '2',
                start: '2022-08-01T14:14:00.000Z',
                end: '2022-08-17T14:14:00.000Z',
                leaveType: {
                  id: '2',
                  typeCode: 'UL2',
                  name: 'maternity/paternity',
                  __typename: 'companyLeaveTypes',
                },
                __typename: 'userLeavesSchema',
              },
            ],
          },
          {
            id: 8546,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-248213441263.jpeg',
            lastName: 'Macchi',
            firstName: 'Agustina',
            remainingHours: 0,
            email: 'agustina@projectcor.com',
          },
          {
            id: 14045,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: 'Massimini',
            firstName: 'Adriana',
            remainingHours: 100,
            email: 'adriana@mailinator.com',
          },
          {
            id: 14048,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: 'Scaraffa',
            firstName: 'Agustina',
            remainingHours: 100,
            email: 'ascaraffa@mailinator.com',
          },
          {
            id: 14049,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: 'Salicrú',
            firstName: 'Matías',
            remainingHours: 100,
            email: 'msalicru@mailinator.com',
          },
          {
            id: 14060,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: 'López',
            firstName: 'Dario',
            remainingHours: 100,
            email: 'dario@mailinator.com',
          },
          {
            id: 14061,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: 'Manrique',
            firstName: 'Estefanía',
            remainingHours: 100,
            email: 'estefania@mailinator.com',
          },
          {
            id: 14062,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: '38',
            firstName: 'DioTest',
            remainingHours: 100,
            email: 'dio38@mailinator.com',
          },
          {
            id: 14063,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: '38',
            firstName: 'DioTest',
            remainingHours: 100,
            email: 'dio38@mailinator.com',
          },
          {
            id: 14064,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: '38',
            firstName: 'DioTest',
            remainingHours: 100,
            email: 'dio38@mailinator.com',
          },
          {
            id: 14065,
            roleId: '1',
            picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
            lastName: '38',
            firstName: 'DioTest',
            remainingHours: 100,
            email: 'dio38@mailinator.com',
          },
        ],
      })
    }, 200)
  })

const getLabelsFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: '210636',
            title: 'APP Development',
          },
          {
            id: '210614',
            title: 'Accounts',
          },
          {
            id: '210639',
            title: 'Activation',
          },
          {
            id: '2106392',
            title: 'Products',
          },
          {
            id: '2106391',
            title: 'Finance',
          },
          {
            id: '2106396',
            title: 'Long name that I dont want to think',
          },
        ],
      })
    }, 200)
  })

const getSprintsFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: '456456',
            title: 'Backlog',
          },
          {
            id: '123123',
            title: 'Backlog 2',
          },
        ],
      })
    }, 200)
  })

const getPriorityFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: '3',
            title: 'urgent',
            icon: {
              name: 'exclamation-triangle',
              color: '#ed2c50',
            },
          },
          {
            id: '2',
            title: 'high',
            icon: {
              name: 'arrow-up',
              color: '#ed2c50',
            },
          },
          {
            id: '1',
            title: 'normal',
            icon: {
              name: 'arrow-right',
              color: '#faac2d',
            },
          },
          {
            id: '0',
            title: 'low',
            icon: {
              name: 'arrow-down',
              color: '#49cf83',
            },
          },
        ],
      })
    }, 200)
  })

const getArchivedFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            title: 'actives',
            id: 2,
          },
          {
            title: 'archived',
            id: 1,
          },
        ],
      })
    }, 200)
  })

const getTasksFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: null,
      })
    }, 200)
  })

const formatMock = (_, data) => data

const mockedUpFiltersApply = {
  positions: {
    id: 'positions',
    type: 'positions',
    get: getPositionsFilter,
    format: formatMock,
    data: [
      {
        id: 1,
        name: 'Fullstack developer Sr',
        categoryName: 'Mix',
      },
      {
        id: 8,
        name: 'Frontend developer Jr',
        categoryName: 'Frontenders',
      },
    ],
  },
}

const mockedUsersFiltersApply = {
  pm: {
    id: 'pm',
    type: 'user',
    get: getUsersFilter,
    format: formatMock,
    data: [
      {
        id: 8549,
        lastName: 'Baca',
        firstName: 'Angelica',
        remainingHours: 100,
        picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-106202108068.JPG',
        email: 'angelica@projectcor.com',
        roleId: '5',
        leaves: [],
      },
      {
        id: 8550,
        lastName: 'Baca',
        firstName: 'Angelica',
        remainingHours: 100,
        picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-106202108068.JPG',
        email: 'angelica@projectcor.com',
        roleId: '5',
        leaves: [],
      },
      {
        id: 8551,
        lastName: 'Baca',
        firstName: 'Angelica',
        remainingHours: 100,
        picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-106202108068.JPG',
        email: 'angelica@projectcor.com',
        roleId: '5',
        leaves: [
          {
            id: '40',
            userId: 8549,
            leaveTypeId: '1',
            start: '2022-08-01T14:14:00.000Z',
            end: '2022-08-17T14:14:00.000Z',
            leaveType: {
              id: '2',
              typeCode: 'UL2',
              name: 'vacations',
              __typename: 'companyLeaveTypes',
            },
            __typename: 'userLeavesSchema',
          },
        ],
      },
    ],
  },
}

export const MAPPED_FILTERS = {
  tasks: {
    id: 'tasks',
    title: 'Tareas',
    get: getTasksFilter,
    format: formatMock,
  },
  status: {
    id: 'status',
    title: 'Estado',
    get: getStatusFilter,
    format: formatMock,
  },
  creationDate: {
    id: 'creationDate',
    title: 'Fecha de creación',
    get: getDateFilter,
    format: formatMock,
  },
  initialDate: {
    id: 'initialDate',
    title: 'Fecha inicial',
    get: getDateFilter,
    format: formatMock,
  },
  deadline: {
    id: 'deadline',
    title: 'Deadline',
    get: getDateFilter,
    format: formatMock,
  },
  pm: {
    id: 'pm',
    title: 'Project Manager',
    get: getUsersFilter,
    format: formatMock,
  },
  col: {
    id: 'col',
    title: 'Colaboradores',
    get: getUsersFilter,
    format: formatMock,
  },
  positions: {
    id: 'positions',
    title: 'Posiciones',
    get: getPositionsFilter,
    format: formatMock,
  },
  labels: {
    id: 'labels',
    title: 'Etiquetas',
    get: getLabelsFilter,
    format: formatMock,
  },
  sprints: {
    id: 'sprints',
    title: 'Sprints',
    get: getSprintsFilter,
    format: formatMock,
  },
  priority: {
    id: 'priority',
    title: 'Prioridad',
    get: getPriorityFilter,
    format: formatMock,
  },
  archived: {
    id: 'archived',
    title: 'Activas/Archivadas',
    get: getArchivedFilter,
    format: formatMock,
  },
}

export const appliedFilters = {
  status: {
    id: 'status',
    type: 'text',
    get: getStatusFilter,
    format: formatMock,
    data: [
      {
        id: 'in_process',
        title: 'in_process',
      },
      {
        id: 'new',
        title: 'new',
      },
    ],
  },
  tasks: {
    id: 'tasks',
    type: 'text',
    get: getStatusFilter,
    format: formatMock,
    data: [
      {
        id: 'task',
        title: 'tarea 1',
      },
    ],
  },
  ...mockedUsersFiltersApply,
  ...mockedUpFiltersApply,
  // initialDate: {
  //   id: 'initialDate',
  //   type: 'date',
  //   get: getDateFilter,
  //   format: formatMock,
  //   data: [
  //     {
  //       toDate: '2021-08-01',
  //     },
  //   ],
  // },
  // pm: {
  //   id: 'pm',
  //   type: 'user',
  //   get: getUsersFilter,
  //   format: formatMock,
  //   data: [
  //     {
  //       id: 14049,
  //       roleId: '1',
  //       picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
  //       lastName: '38',
  //       firstName: 'DioTest',
  //       remainingHours: 100,
  //       email: 'dio38@mailinator.com',
  //     },
  //     {
  //       id: 14060,
  //       roleId: '1',
  //       picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
  //       lastName: '38',
  //       firstName: 'DioTest',
  //       remainingHours: 100,
  //       email: 'dio38@mailinator.com',
  //     },
  //     {
  //       id: 14060,
  //       roleId: '1',
  //       picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
  //       lastName: '38',
  //       firstName: 'DioTest',
  //       remainingHours: 100,
  //       email: 'dio38@mailinator.com',
  //     },
  //     {
  //       id: 14060,
  //       roleId: '1',
  //       picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
  //       lastName: '38',
  //       firstName: 'DioTest',
  //       remainingHours: 100,
  //       email: 'dio38@mailinator.com',
  //     },
  //     {
  //       id: 14060,
  //       roleId: '1',
  //       picture: 'null/development/Upload/ProfilePictures/50x50/c-2336-315129941928.jpg',
  //       lastName: '38',
  //       firstName: 'DioTest',
  //       remainingHours: 100,
  //       email: 'dio38@mailinator.com',
  //     },
  //   ],
  // },
}

export const getCategoriesFilter = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          {
            title: 'Automation',
            id: 'automation',
          },
          {
            title: 'Communication',
            id: 'communication',
          },
          {
            title: 'Development',
            id: 'development',
          },
          {
            title: 'ERP',
            id: 'ERP',
          },
          {
            title: 'Finance',
            id: 'finance',
          },
          {
            title: 'Files & Documents',
            id: 'files-and-documents',
          },
          {
            title: 'Management',
            id: 'management',
          },
        ],
      })
    }, 200)
  })

export const SIMPLE_FILTERS = {
  id: 'categories',
  title: 'Categories',
  get: getCategoriesFilter,
  format: formatMock,
}

export const SIMPLE_CONFIG = {
  categories: {
    icon: 'archive',
    type: 'text',
    hasSearch: false,
    isMultiple: false,
  },
}

export const SIMPLE_APPLIED = {
  categories: {
    id: 'categories',
    type: 'text',
    get: getCategoriesFilter,
    format: formatMock,
    data: [
      {
        title: 'Finance',
        id: 'finance',
      },
    ],
  },
}
