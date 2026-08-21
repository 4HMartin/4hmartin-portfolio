import { Project } from "../types";

export const expenseManagement: Project = {
  slug: "expense-management",
  category: "practice",
  name: {
    en: "EXPENSE MANAGEMENT APP",
    es: "APP GESTOR DE GASTOS",
  },
  developmentType: "frontend",
  shortDescription: {
    en: "Expense management where we can define an initial budget using a form with validations. The main interface (using Headless UI) displays four main elements.",
    es: "Planificador de gastos donde podemos definir un presupuesto inicial mediante un formulario con validaciones, en la interfaz principal (utilizando Headless UI) se muestran cuatro elementos principales.",
  },
  publicUrl: "https://expense-management.4hmartin.com/",
  // publicPageSpeedReport: "",
  // publicSitemap: "",
  // publicFigmaWireframe: "",
  publicRepo: "https://github.com/4HMartin/Expense-control",
  mainGif: "/images/projects/expense-management/main_gif.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "Expense management where we can define an initial budget using a form with validations. The main interface (using Headless UI) displays four main elements.",
      "The first is the budget calculations (initial amount, available amount, and amount spent) with visual support (circular bar chart) and a button to restart the app, allowing you to re-enter a value for the initial budget.",
      "A selector to filter expenses by available categories.",
      "A list of the expenses entered, with information about each entry.",
      "And a button at the bottom right to open a modal window showing the form for adding a new expense to the app.",
      "A boilerplate is implemented using Context API and useReducer to manage the state globally, facilitating access to the different states through a custom hook.",
    ],
    es: [
      "Planificador de gastos donde podemos definir un presupuesto inicial mediante un formulario con validaciones, en la interfaz principal (utilizando Headless UI) se muestran cuatro elementos principales.",
      "El primero son los cálculos del presupuesto (monto inicial, disponible y gastado) con apoyo visual (gráfico de barra circular) y un botón para reiniciar la app permitiendo volver a introducir un valor para el presupuesto inicial.",
      "Un selector para poder filtrar los gastos mediante las categorias disponibles.",
      "El listado mediante tarjetas de los gastos introducidos, con la información de cada entrada.",
      "Y un botón en la parte inferior derecha para abrir un modal donde se muestra el formulario para agregar un nuevo gasto a la app.",
      "Se implementa un boilerplate mediante el uso de Context API y el uso de useReducer para gestionar el state de forma global, facilitando el acceso a los diferentes states mediante un custom hook.",
    ],
  },
  techStack: [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Headless UI",
    "RHF",
    "Zod",
    "Context API",
    "useReducer",
    "useMemo",
    "Custom Hook",
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "BudgetContext.tsx",
        es: "BudgetContext.tsx",
      },
      value: {
        en: [
          "Using Context API and useReducer results in a more efficient and scalable design.",
        ],
        es: [
          "El uso de Context API y useReducer resulta en un diseño más eficiente y escalable.",
        ],
      },
    },
    {
      key: {
        en: "budget-reducer.ts - State type",
        es: "budget-reducer.ts - State type",
      },
      code: `export type BudgetState = {
    budget: number;
    modal: boolean;
    expenses: Expense[];
    editingID: Expense['id'];
    currentCategory: Category['id']
}`,
      codeLang: "typescript",
    },
    {
      key: {
        en: "budget-reducer.ts - Actions",
        es: "budget-reducer.ts - Actions",
      },
      code: `export type BudgetActions = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense }} |
    { type: 'remove-expense', payload: { id: Expense['id'] }} |
    { type: 'get-expense-by-id', payload: { id: Expense['id'] }} |
    { type: 'update-expense', payload: { expense: Expense }} |
    { type: 'reset-app' } |
    { type: 'add-filter-category', payload: { id: Category['id'] }}`,
      codeLang: "typescript",
    },
    {
      key: {
        en: "Define your budget",
        es: "Define tu presupuesto",
      },
      value: {
        en: [
          "Numeric input to define the initial budget and enable the button.",
        ],
        es: [
          "Input de tipo numérico para definir el presupuesto inicial y habilitar el botón.",
        ],
      },
    },
    {
      key: {
        en: "BudgetTracker.tsx - Circular chart",
        es: "BudgetTracker.tsx - Gráfico circular",
      },
      value: {
        en: [
          "Using the 'react-circular-progressbar' library, a graph is rendered showing the percentage of the budget spent.",
        ],
        es: [
          "Mediante el uso de la libreria 'react-circular-progressbar' se renderiza un gráfico donde se muestra el porcentaje del presupuesto gastado.",
        ],
      },
      code: `<CircularProgressbar
    value={percentage}
    styles={buildStyles({
        pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
        trailColor: '#F5F5F5',
        textSize: '8',
        textColor: percentage === 100 ? '#DC2626' : '#3B82F6'
    })}
    text={\`\${percentage}% Spent\`}
/>`,
    },
    {
      key: {
        en: "'RESET APP' button",
        es: "Botón 'RESET APP'",
      },
      value: {
        en: [
          "As its name suggests, it resets the initial budget to 0 using 'dispatch'.",
        ],
        es: [
          "Como su nombre indica, restablece el presupuesto inicial a 0 mediante 'dispatch'.",
        ],
      },
      code: `<button
    type="button"
    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer hover:bg-pink-700 transition-colors"
    onClick={() => dispatch({type: 'reset-app'})}
>
    Reset App
</button>`,
    },
    {
      key: {
        en: "'Budget', 'Available' and 'Spent'",
        es: "'Budget', 'Available' y 'Spent'",
      },
      value: {
        en: [
          "The reusable “AmountDisplay” component displays the values calculated based on the initial budget and accumulated expenses.",
        ],
        es: [
          "Mediante el componente reutilizable 'AmountDisplay' se muestran los valores calculados en base al presupuesto inicial y los gastos acumulados.",
        ],
      },
      code: `<AmountDisplay 
    label="Budget"
    amount={state.budget}
/>`,
    },
    {
      key: {
        en: "Filter by category selector (FilterByCategory.tsx)",
        es: "Filtro mediante selector de categoria (FilterByCategory.tsx)",
      },
      value: {
        en: [
          "Select: Import the categories from the “/data/categories” file to iterate and display select options. Change event + dispatch.",
        ],
        es: [
          "Select: Importar las categorías desde fichero '/data/categories' para iterar y mostrar opciones del select. Change event + dispatch.",
        ],
      },
      code: `const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'add-filter-category', payload: { id: e.target.value }})
}`,
    },
    {
      key: {
        en: "Icon to display the modal with the form (ExpenseModal.tsx)",
        es: "Icono para mostrar el modal con el formulario (ExpenseModal.tsx)",
      },
      value: {
        en: [
          "heroicons to import the “+” icon, PlusCircleIcon. headlessui to import Dialog and Transition to handle the logic of the modal with the form.",
        ],
        es: [
          "heroicons para importar el icono '+', PlusCircleIcon. headlessui para importar Dialog y Transition para manejar la lógica del modal con el formulario.",
        ],
      },
    },
    {
      key: {
        en: "Form to add new expense (ExpenseForm.tsx)",
        es: "Formulario para agregar nuevo gasto (ExpenseForm.tsx)",
      },
      value: {
        en: [
          "Two main types of expenses are defined: “DraftExpense” without an ID and “Expense” with an ID (added from reducer once the data has been validated).",
          "Simple validation to check that all fields have been filled in and that the budget limit has not been reached.",
          "From the “state” imported via the custom hook “useBudget”, it is evaluated whether the ID of the expense to be edited “state.editingID” is defined in order to fill in the form fields with the expense to be edited or not.",
        ],
        es: [
          "Se definen dos tipos principales para los gastos, 'DraftExpense' sin ID y 'Expense' con ID (se agrega desde reducer una vez validado los datos).",
          "Validación simple para comprobar que todos los campos han sido rellenados y que el límite del presupuesto no se ha alcanzado.",
          "Desde el 'state' importado mediante el custom hook 'useBudget' se evalua si existe definido el id del gasto a editar 'state.editingID' para rellenar los campos del formulario con el gasto a editar o no.",
        ],
      },
      code: `// Add new expense or edit vía dispatch
if(state.editingID){
    dispatch({ type: 'update-expense', payload: {expense: { id: state.editingID, ...expense }} })
} else {
    dispatch({ type: 'add-expense', payload: { expense } })
}`,
    },
    {
      key: {
        en: "Datepicker field",
        es: "Campo para seleccionar fecha",
      },
      value: {
        en: ["For the date picker field, the “react-date-picker” library is used:"],
        es: ["Para el campo del selector de fecha, se utiliza la librería 'react-date-picker':"],
      },
      code: `import DatePicker from 'react-date-picker';

<DatePicker
    name="expenseDate"
    id="expenseDate"
    className="bg-slate-100 p-2"
    onChange={handleChangeDate}
    value={expense.date}
/>`,
    },
    {
      key: {
        en: "React Hooks used",
        es: "Hooks de React utilizados",
      },
      value: {
        en: [
          "In this project, useReducer is used to handle all logic related to managing expenses added via the modal form.",
          "The reducer is imported into the “BudgetContext.tsx” file to instantiate the reducer and thus allow access to the state and actions of the reducer in the global context."
        ],
        es: ["Para el campo del selector de fecha, se utiliza la librería 'react-date-picker':"],
      },
      code: `// src/reducers/budget-reducer.ts
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

export const BudgetProvider = ({children}: BudgetProviderProps) => {

    // 2. Instanciar el reducer
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    ...
    
export type BudgetActions = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense }} |
    { type: 'remove-expense', payload: { id: Expense['id'] }} |
    { type: 'get-expense-by-id', payload: { id: Expense['id'] }} |
    { type: 'update-expense', payload: { expense: Expense }} |
    { type: 'reset-app' } |
    { type: 'add-filter-category', payload: { id: Category['id'] }}
     `,
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/expense-management/architecture_diagram.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet",
    },
    screenshots: [
      {
        src: "/images/projects/expense-management/initial_step.webp",
        alt: "Define your budget desktop screenshot - 4hmartin",
        title: "Define your budget - Initial step",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/modal_form_02.webp",
        alt: "New expense date modal form desktop screenshot - 4hmartin",
        title: "New expense date picker - Modal form",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/modal_form_03.webp",
        alt: "New expense error modal form desktop screenshot - 4hmartin",
        title: "New expense form error - Modal form",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/home_01.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface main view - Modal form",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/expense_list_04.webp",
        alt: "Expense list category filter desktop screenshot - 4hmartin",
        title: "Expense list - Category select filter",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/expense_list_01.webp",
        alt: "Expense list desktop screenshot - 4hmartin",
        title: "Expense list - Unfiltered list",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/expense_list_02.webp",
        alt: "Expense list delete element desktop screenshot - 4hmartin",
        title: "Expense list - Left-drag to delete an element",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/expense_list_03.webp",
        alt: "Expense list update element desktop screenshot - 4hmartin",
        title: "Expense list - Right-drag to update an element",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/expense_list_05.webp",
        alt: "Modal update form desktop screenshot - 4hmartin",
        title: "Update an element - Modal form",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/expense-management/local_storage.webp",
        alt: "Local storage desktop screenshot - 4hmartin",
        title: "Local storage data",
        imageFit: "contain",
        imageFormat: "desktop",
      },
    ],
  },
  otherProjects: ["security-system-comparison", "rodriguez-events-website"],
};
