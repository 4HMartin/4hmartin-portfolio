import { Project } from "../types";

export const tipsConsumptionCalculator: Project = {
  slug: "tips-consumption-calculator",
  category: "practice",
  name: {
    en: "TIPS CONSUMPTION CALCULATOR APP",
    es: "APP CALCULADORA DE PROPINAS Y CONSUMO",
  },
  developmentType: "frontend",
  shortDescription: {
    en: "This project is a simple web application built with React.js - Simulator to calculate the consumption and tips of a restaurant.",
    es: "Este proyecto es una sencilla aplicación web desarrollada con React.js - Simulador para calcular el consumo y propinas de un restaurante.",
  },
  publicUrl: "https://tips-consumption-calculator.4hmartin.com/",
  // publicPageSpeedReport: "",
  // publicSitemap: "",
  // publicFigmaWireframe: "",
  publicRepo: "https://github.com/4HMartin/Tip-Consumption-Calculator",
  mainGif: "/images/projects/tips-consumption-calculator/main_gif.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "Practical migration from a custom hook (useCart.ts) to the useReducer hook to manage complex state logic.",
      "Type-safe handling of form events and actions using TypeScript.",
      "Application of useMemo to optimize performance in real-time calculations."
    ],
    es: [
      "Migración práctica de un custom hook (useCart.ts) al hook useReducer para gestionar lógica de estado compleja.",
      "Manejo tipado de eventos de formulario y acciones utilizando TypeScript.",
      "Aplicación de useMemo para optimizar el rendimiento en cálculos en tiempo real."
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
        en: "Refactoring",
        es: "Refactorización",
      },
      value: {
        en: [
          "The project in its first version was developed using custom hook and to deepen the practice of new ways of handling the state, all the logic is migrated to the use of useReducer.",
        ],
        es: [
          "El proyecto, en su primera versión, fue desarrollado utilizando un custom hook y, para profundizar en la práctica de nuevas formas de manejo del estado, toda la lógica fue migrada al uso de useReducer.",
        ],
      },
    },
    {
      key: {
        en: "List of menu items",
        es: "Listado de items del menú",
      },
      value: {
        en: [
            "Items: List of menu items extracted from file with array of typed objects. Click on items: Allows you to add the item to the order.",
            "Click on items: Allows you to add the item to the order."
        ],
        es: [
            "Elementos: Lista de ítems del menú extraída desde un archivo con un arreglo de objetos tipados.",
            "Clic en elementos: Permite agregar el ítem a la orden.",
        ]
      },
      codeLang: "typescript",
      code: `import { MenuItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

export const Menuitem = ({item, dispatch} : MenuItemProps) => {
  return (
    <button 
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
        <p>{item.name}</p>
        <p className="font-bold">$ {item.price}</p>
    </button>
  )
}
`,
    },
    {
      key: {
        en: "Order Summary",
        es: "Registro de consumo",
      },
      value: {
        en: [
            "Selected Items: Displays the selected menu items, where users can view the unit price, the total cost based on the quantity selected, and also remove individual items.",
            "Tip Selection: A form with three options to select the tip percentage based on the subtotal amount.",
            "Total: Calculates the final amount to pay by adding the selected tip to the subtotal.",
            "'Place Order' Button: Simulates sending the order, resetting the order summary section afterward.",
        ],
        es: [
            "Items seleccionados: Se muestran los items/articulos seleccionados del menú, donde el usuario puede consultar su precio unitario así como el computo total en base a la cantidad agregado y también puede eliminar el item.",
            "Propina: Formulario con tres opciones para seleccionar el porcentaje de propina en base al subtotal a pagar.",
            "Total: Cálculo total a pagar haciendo un desglose del subtotal más la propina seleccionada.",
            "Botón 'Guardar Orden': Simula la petición de la comanda, restableciendo así el apartado de consumo.",
        ]
      },
      codeLang: "typescript",
      code: `// App.tsx
      ...
      <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {state.order.length ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ): (
            <p className='text-center text-2xl font-bold'>No hay items en el pedido</p>
          )}
        </div>
        ...`,
    },
    {
      key: {
        en: "order-reducer.ts - Actions",
        es: "order-reducer.ts - Actions",
      },
      value: {
        en: [
          "Since this project does not implement global state management, the reducer is imported into App.tsx and passed down to child components via props. The useReducer hook initializes and provides both state and dispatch functions.",
          "Example:"
        ],
        es: [
          "Dado que este proyecto no implementa un manejo de estado global, el reducer se importa en App.tsx y se pasa a los componentes hijos mediante props. El hook useReducer se encarga de inicializar y proporcionar el estado y las funciones de dispatch.",
          "Ejemplo:"
        ],
      },
      codeLang: "typescript",
      code: `export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }
     
    ...
    
    export const orderReducer = (
        state: OrderState,
        action: OrderActions
    ) => {

    {/** Añadir un item al pedido, comprobando si ya existe en el pedido y aumentando su cantidad si es así */}    
    if (action.type === 'add-item') {

        /** Evitar duplicados al añadir el mismo item incrementando su cantidad */
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let order : OrderItem[] = [];
        if(itemExists){
            order = state.order.map(orderItem =>
                orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )

        } else {
            /**
             * Casting de parámetro recibido MenuItem a OrderItem
             * Creamos una nueva variable con la copia del objeto recibido por parámetro y le añadimos la propiedad 'quantity'
             * para que el nuevo objeto 'newItem' pueda ser del type OrderItem
             */
            const newItem = {...action.payload.item, quantity: 1}
            /**
             * Spread operator para copiar los valores del state actual y añadimos el nuevo objeto
             */
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }
    {/* Evitar duplicados al eliminar un item, eliminando el item por su ID */}
    if (action.type === 'remove-item') {
    ...`
    },
    {
      key: {
        en: "useMemo - hook",
        es: "useMemo - hook",
      },
      value: {
        en: [
            "In this project, useMemo is used for efficiently calculate the total amount to pay.",
            "Example file path: OrderTotals.tsx",
            "Example:",
        ],
        es: [
            "En este proyecto, useMemo se utiliza para calcular de forma eficiente el total a pagar.",
            "Ruta de ejemplo: OrderTotals.tsx",
            "Ejemplo:",
        ]
      },
      codeLang: "typescript",
      code: `    const subtotalAmount = useMemo(() => order.reduce((subTotal, item) => subTotal + (item.price * item.quantity) , 0 ) ,[order])

    const tipAmount = useMemo(() => {return subtotalAmount * tip}, [tip, order])

    const totalAmount = useMemo(() => {return subtotalAmount + tipAmount}, [tip, order])`,
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/tips-consumption-calculator/architecture_image.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet",
    },
    screenshots: [
      {
        src: "/images/projects/tips-consumption-calculator/home_01.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface main view",
        imageFit: "contain",
        imageFormat: "desktop",
      }
    ],
  },
  otherProjects: ["security-system-comparison", "rodriguez-events-website"],
};
