export type Videos = {
  title: string;
  code: string;
};

export type CourseTypes = {
  title: string;
  imageUrl: string;
  horas: string;
  aulas: string;
  tipo: string;
  videos?: Array<Videos>;
};

export const Course: CourseTypes[] = [
  {
    title: "Curso de React com TypeScript Completo",
    aulas: "4 Aulas",
    horas: "1 Horas",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*vHHBwcUFUaHWXntSnqKdCA.png",
    tipo: "FRONT-END",
  },
  {
    title: "Curso de React Navite",
    aulas: "10 Aulas",
    horas: "2 Horas",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
    tipo: "MOBILE",
    videos: [
      {
        title:
          "Primeiros passos no React Native - Aula 1 | Curso React Native (aprendiz) | Onebitcode",
        code: "Y8tP1jbRYHY",
      },
      {
        title:
          "Principais Components do React Native - Aula 2 - Parte 1 | Curso React Native (aprendiz)",
        code: "_N6-kScr-Ig",
      },
      {
        title:
          "Principais Components do React Native - Aula 2 - Parte 2 | Curso React Native (aprendiz)",
        code: "u_qccnftxXQ",
      },
      {
        title:
          "Principais Components do React Native - Aula 2 - Parte 3 | Curso React Native (aprendiz) ",
        code: "8X63GfvxbE8",
      },
      {
        title:
          "Design do App OneBitHealth – Aula 3 - Parte 1 | Curso React Native (aprendiz)",
        code: "JusFvRHWDyU",
      },
      {
        title:
          "Design do App OneBitHealth – Aula 3 - Parte 2 | Curso React Native (aprendiz)",
        code: "BCulqg8qUdU",
      },
      {
        title:
          "Design do App OneBitHealth – Aula 3 - Parte 3 | Curso React Native (aprendiz)",
        code: "uLoMoPC6Ics",
      },
      {
        title:
          "Conhecendo sobre APIs React Native - Aula 4 - Parte 3 | Curso React Native (aprendiz)",
        code: "yW8lUxW6NDU",
      },
      {
        title:
          "Listas (ScrollView,ListView, FlatList,SectionList) - Aula 5 - Parte2 | Curso React Native (aprendiz)",
        code: "-xdLAgm_yts",
      },
    ],
  },
  {
    title: "Curso de Angular Com TypeScript",
    aulas: "22 Aulas",
    horas: "45 Horas",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1358/0*wuNf24urnMp7ypDp.png",
    tipo: "FRONT-END",
  },
  {
    title: "Curso de Django para Back-end",
    aulas: "23 Aulas",
    horas: "3 Horas",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/240061/django_16_1_20190227092231.png",
    tipo: "BACK-END",
  },
];
