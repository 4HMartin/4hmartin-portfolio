import { Project } from "../types";

export const calorieTracker: Project = {
 slug: "calorie-tracker",
  category: "practice",
  name: {
    en: "CALORIE TRACKER APP",
    es: "APP CONTADOR DE CALORIAS",
  },
  developmentType: "frontend",
  shortDescription: {
    en: "This project is a simple web application built with React.js that allows users to track their calorie intake and expenditure throughout the day.",
    es: "Este proyecto es una sencilla aplicación web desarrollada con React.js que permite a los usuarios llevar un control de las calorías que ingieren y queman a lo largo del día.",
  },
  publicUrl: "https://calorie-tracker.4hmartin.com/",
  // publicPageSpeedReport: "",
  // publicSitemap: "",
  // publicFigmaWireframe: "",
  publicRepo: "https://github.com/4HMartin/Calorie-Tracker-React",
  mainGif: "/images/projects/calorie-tracker/main_gif.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "This project is a simple web application built with React.js that allows users to track their calorie intake and expenditure throughout the day.",
      "Through a main form, users can register different activities, whether they are meals or exercises, and view a summary of their calorie balance."
    ],
    es: [
      "Este proyecto es una sencilla aplicación web desarrollada con React.js que permite a los usuarios controlar su ingesta y gasto calórico a lo largo del día.",
      "Mediante un formulario principal, los usuarios pueden registrar diferentes actividades, ya sean comidas o ejercicios, y consultar un resumen de su balance calórico."
    ],
  },
  techStack: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "useReducer",
    "useMemo",
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Form to register activities with the following fields",
        es: "Formulario para registrar actividades con los siguientes campos",
      },
      value: {
        en: [
          "Category: Dropdown to select between Meal or Exercise.",
          "Activity: Text field to describe the specific meal or exercise.",
          "Calories: Numeric field to enter the corresponding calories (positive or negative depending on the category).",
        ],
        es: [
          "Categoría: Menú desplegable para seleccionar entre 'Comida' o 'Ejercicio'.",
          "Actividad: Campo de texto para describir la comida o el ejercicio concreto.",
          "Calorías: Campo numérico para introducir las calorías correspondientes (positivas o negativas, según la categoría)."
        ],
      },
    },
    {
      key: {
        en: "Calorie summary banner that displays",
        es: "Banner con un resumen de calorías que muestra",
      },
      value: {
        en: [
          "Calories Consumed: Total calories ingested through meals.",
          "Calories Burned: Total calories burned through exercises.",
          "Difference: Balance between calories consumed and burned, allowing users to see if there is a calorie deficit."
        ],
        es: [
          "Calorías Consumidas: Total de calorías ingeridas a través de las comidas.",
          "Calorías Quemadas: Total de calorías quemadas a través de ejercicios.",
          "Diferencia: Balance entre calorías consumidas y quemadas, permitiendo a los usuarios ver si existe un déficit calórico."
        ],
      },
    },
    {
      key: {
        en: "Dynamic list of activities:",
        es: "Lista dinámica de las actividades:",
      },
      value: {
        en: [
          "Each activity is displayed as a card with its information.",
          "Activities can be edited, loading the information into the form for modification.",
          "Activities can be deleted.",
          "The calorie summary updates automatically after changes, thanks to efficient state management."
        ],
        es: [
          "Cada actividad se muestra como una tarjeta con su información.",
          "Las actividades se pueden editar, cargando la información en el formulario para su modificación.",
          "Las actividades se pueden eliminar.",
          "El resumen de calorías se actualiza automáticamente después de los cambios, gracias a la gestión eficiente del estado."
        ],
      },
    },
    {
      key: {
        en: "Data persistence",
        es: "Persistencia de datos",
      },
      value: {
        en: [
          "Data persistence using Local Storage, ensuring information is not lost when the page is reloaded.",
        ],
        es: [
          "Persistencia de datos mediante el almacenamiento local, lo que garantiza que la información no se pierda al recargar la página.",
        ],
      },
    },
    {
      key: {
        en: "Libraries",
        es: "Librerías",
      },
      value: {
        en: [
          "uuid: Generate unique identifiers. npm i uuid npm i --save-dev @types/uuid import { v4 as uuidv4 } from 'uuid'",
          "heroicons: Icons from hero icons. npm i @heroicons/react"
        ],
        es: [
          "uuid: Generación de identificadores únicos. npm i uuid npm i --save-dev @types/uuid import { v4 as uuidv4 } from 'uuid'",
          "heroicons: Iconos de hero icons. npm i @heroicons/react",
        ],
      },
    },
    {
      key: {
        en: "activity-reducer.ts - Actions",
        es: "activity-reducer.ts - Actions",
      },
      value: {
        en: [
          "Since this project does not implement global state management, the reducer is imported into App.tsx and passed down to child components via props. The useReducer hook initializes and provides the state and dispatch functions.",
          "Example:",
          "The logic for saving a new activity from the form is handled inside the reducer, specifically in the save-activity action.",
        ],
        es: [
          "Dado que este proyecto no implementa gestión de estado global, el reducer se importa en App.tsx y se pasa a los componentes secundarios a través de props. El hook useReducer inicializa y proporciona las funciones de estado y dispatch.",
          "Ejemplo:",
          "La lógica para guardar una nueva actividad desde el formulario se maneja dentro del reducer, específicamente en la acción save-activity."
        ],
      },
      codeLang: "typescript",
      code: `export type ActivityActions =
  | { type: 'save-activity', payload: { newActivity: Activity } }   // Create or update an activity
  | { type: 'set-activeId', payload: { id: Activity['id'] } }      // Set active activity for editing
  | { type: 'delete-activity', payload: { id: Activity['id'] } }   // Delete an activity
  | { type: 'restart-app' }                                        // Reset the app`
    },
    {
      key: {
        en: "useMemo - hook",
        es: "useMemo - hook",
      },
      value: {
        en: [
          "useMemo is a performance optimization hook that memoizes the result of an expensive calculation. The memoized value is recomputed only when one of its dependencies changes.",
          "In this project, useMemo is used to efficiently calculate calorie-related statistics based on the list of activities.",
          "Example:",
        ],
        es: [
          "useMemo es un hook de optimización de rendimiento que memoriza el resultado de un cálculo costoso. El valor memorizado se recalcula solo cuando una de sus dependencias cambia.",
          "En este proyecto, useMemo se utiliza para calcular eficientemente estadísticas relacionadas con calorías basadas en la lista de actividades.",
          "Ejemplo:"
        ],
      },
      codeLang: "typescript",
      code: `// Total calories consumed (meals)
const caloriesConsumed = useMemo(() =>
  activities.reduce((total, activity) =>
    activity.category === 1 ? total + activity.calories : total, 0),
  [activities]
);

// Total calories burned (exercises)
const caloriesBurned = useMemo(() =>
  activities.reduce((total, activity) =>
    activity.category === 2 ? total + activity.calories : total, 0),
  [activities]
);

// Net calorie difference
const netCalories = useMemo(() =>
  caloriesConsumed - caloriesBurned,
  [activities]
);`
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/calorie-tracker/architecture_diagram.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet",
    },
    screenshots: [
      {
        src: "/images/projects/calorie-tracker/home_01.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface main view",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/calorie-tracker/elements_list.webp",
        alt: "Elements list desktop screenshot - 4hmartin",
        title: "List of elements created",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/calorie-tracker/local_storage.webp",
        alt: "Localstorage data - 4hmartin",
        title: "Localstorage data",
        imageFit: "contain",
        imageFormat: "desktop",
      },
    ],
  },
  otherProjects: ["security-system-comparison", "rodriguez-events-website"],
};
