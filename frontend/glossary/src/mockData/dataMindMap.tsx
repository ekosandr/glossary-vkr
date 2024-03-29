// data.js

export const termsData = {
  "Web-приложение":
    "клиент-серверное приложение, в котором клиент взаимодействует с веб-сервером при помощи браузера. Логика веб-приложения распределена между сервером и клиентом, хранение данных осуществляется, преимущественно, на сервере, обмен информацией происходит по сети.",
  Архитектура:
    "совокупность программных и аппаратных средств, составляющая информационную систему организации и включающая, в частности, базы данных и промежуточное программное обеспечение ",
  "Шаблон проектирования или паттерн":
    "повторяемая архитектурная конструкция, представляющая собой решение проблемы проектирования в рамках некоторого часто возникающего контекста ",
  "Язык программирования":
    "формальный язык, содержащий набор инструкций, которые производят различные виды выходных данных. Языки программирования используются в компьютерном программировании для реализации алгоритмов",
  "Back-end ":
    "программно-аппаратная часть сервиса. Это набор средств, с помощью которых происходит реализация логики веб-сайта. Это то, что скрыто от наших глаз, т. е. происходит вне компьютера и браузера ",
  Frontend:
    "презентационная часть информационной или программной системы, её пользовательский интерфейс и связанные с ним компоненты; применяется в соотношении с базисной частью системы, её внутренней реализацией, называемой в этом случае бэкендом",
  Ajax: "асинхронный JavaScript и XML подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером",
  SSR: "это метод отрисовки веб-страницы на сервере, а не в браузере. Чтобы пользователь не смотрел на пустую страницу, ожидая, пока загрузится веб-приложение, файлы JavaScript или CSS, сервер отдаёт ему сгенерированный HTML. Пользователь получает страницу и просматривает её, пока основное приложение загружается и запускается",
  CSR: "При клиентском рендеринге (CSR) сервер отображает только базовый HTML-контейнер страницы. Логика, выборка данных, шаблоны и маршрутизация, необходимые для отображения контента на странице, обрабатываются кодом JavaScript, который выполняется в браузере/клиенте. CSR стал популярным как метод создания одностраничных приложений. Это помогло стереть разницу между веб-сайтами и установленными приложениями",
  SPA: "это реализация веб-приложения, которая загружает только один веб-документ, а затем обновляет содержимое тела этого единственного документа с помощью API-интерфейсов JavaScript, таких как Fetch, когда необходимо отобразить другой контент",
  React:
    "Библиотека для веб- и собственных пользовательских интерфейсов. React позволяет создавать пользовательские интерфейсы из отдельных частей, называемых компонентами",
  "Next.js":
    "фреймворк на основе React, позволяет создавать полнофункциональные веб-приложения за счет расширения новейших функций React и интеграции мощных инструментов JavaScript на основе Rust для максимально быстрой сборки",
  SSG: "если страница использует статическую генерацию, HTML-код страницы генерируется во время сборки . Это означает, что в рабочей среде HTML-код страницы генерируется при запуске билда. Этот HTML-код затем будет повторно использоваться при каждом запросе. Он может быть кэширован CDN",
  SEO: "это технология раскрутки сайта в поисковой выдаче с целью получения трафика. В основе работы лежит знание алгоритмов ранжирования ресурсов в выдаче и улучшение критериев сайта с целью выведения его в топ результатов поиска по требуемым ключевым фразам",
  "Node.js":
    "это среда выполнения кода JavaScript вне браузера, которая позволяет писать серверный код для веб-страниц и веб-приложений, а также для программ командной строки. Node. js — не отдельный язык программирования, а платформа для использования JavaScript на стороне сервера",
};

export const mindmap = {
  initialNodes: [
    {
      id: "Web-приложение",
      data: {
        label: "Web-приложение",
      },
      position: { x: 250, y: -200 },
    },
    {
      id: "Архитектура",
      data: {
        label: "Архитектура",
      },
      position: { x: 300, y: -100 },
    },
    {
      id: "Шаблон проектирования или паттерн",
      data: {
        label: "Шаблон проектирования или паттерн",
      },
      position: { x: 300, y: 0 },
    },
    {
      id: "Язык программирования",
      data: {
        label: "Язык программирования",
      },
      position: { x: -50, y: -100 },
    },
    {
      id: "Backend",
      data: {
        label: "Backend",
      },
      position: { x: 100, y: 0 },
    },
    {
      id: "Frontend",
      data: {
        label: "Frontend",
      },
      position: { x: 500, y: -100 },
    },
    {
      id: "Ajax",
      data: {
        label: "Ajax",
      },
      position: { x: 1080, y: 100 },
    },
    {
      id: "SSR",
      data: {
        label: "SSR",
      },
      position: { x: 880, y: 200 },
    },
    {
      id: "CSR",
      data: {
        label: "CSR",
      },
      position: { x: 300, y: 200 },
    },
    {
      id: "SPA",
      data: {
        label: "SPA",
      },
      position: { x: 480, y: 200 },
    },
    {
      id: "React",
      data: {
        label: "React",
      },
      position: { x: 480, y: 100 },
    },
    {
      id: "Next.js",
      data: {
        label: "Next.js",
      },
      position: { x: 680, y: 100 },
    },
    {
      id: "SEO",
      data: {
        label: "SEO",
      },
      position: { x: 880, y: 100 },
    },
    {
      id: "SSG",
      data: {
        label: "SSG",
      },
      position: { x: 680, y: 200 },
    },
    {
      id: "Node.js",
      data: {
        label: "Node.js",
      },
      position: { x: 100, y: 100 },
    },
  ],
  initialEdges: [
    {
      id: "Web-приложение",
      source: "Web-приложение",
      target: "Архитектура",
    },
    {
      id: "Архитектура",
      source: "Архитектура",
      target: "Шаблон проектирования или паттерн",
    },
    {
      id: "Web-приложение2",
      source: "Web-приложение",
      target: "Язык программирования",
    },
    { id: "Web-приложение3", source: "Web-приложение", target: "Backend" },
    { id: "Web-приложение4", source: "Web-приложение", target: "Frontend" },

    { id: "Frontend1", source: "Frontend", target: "React" },
    { id: "Frontend2", source: "Frontend", target: "Next.js" },
    { id: "Frontend3", source: "Frontend", target: "Ajax" },
    { id: "Frontend4", source: "Frontend", target: "SEO" },

    { id: "Next.js1", source: "Next.js", target: "SSR" },
    { id: "Next.js2", source: "Next.js", target: "SSG" },
    { id: "React2", source: "React", target: "CSR" },
    { id: "React3", source: "React", target: "SPA" },

    { id: "Backend", source: "Backend", target: "Node.js" },
  ],
};
