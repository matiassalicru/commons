export const filters = {
  status: ['nueva', 'finalizada', 'en_proceso', 'estancada', 'en_diseno', 'en_revision'],
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
      name: 'Angelica Baca',
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

export const appliedFilters = {
  status: {
    id: 'status',
    type: 'text',
    data: [
      {
        title: 'inProgress',
        value: 'en_proceso',
      },
      {
        title: 'new',
        value: 'nueva',
      },
    ],
  },
  initialDate: {
    id: 'initialDate',
    type: 'date',
    data: [
      {
        toDate: '2021-08-01',
      },
    ],
  },
  pm: {
    id: 'pm',
    type: 'avatars',
    data: [
      {
        id: 1,
        picture: null,
        remainingHours: 0,
        firstName: 'Dwigth',
        lastName: 'Schrute',
        roleId: 4,
        email: 'prueba@gmail.com',
      },
    ],
  },
}
