import type { Project } from "../types";

export const veterinaryPatient: Project = {
  slug: "veterinary-patient-follow-up",
  category: "practice",
  name: {
    en: "VETERINARY PATIENT FOLLOW-UP APP",
    es: "APP SEGUIMIENTO DE PACIENTES VETERINARIOS",
  },
  developmentType: "frontend",
  shortDescription: {
    en: "Practical project in React, where the user enters their pet's details to add it to the list of patients, using a form managed by react-hook-form and global state management via zustand.",
    es: "Proyecto práctico en React, donde el usuario ingresa los datos de su mascota para agregarla a la lista de pacientes, utilizando un formulario gestionado con react-hook-form y manejo de estado global mediante zustand.",
  },
  publicUrl: "https://veterinary-patient.4hmartin.com/",
  // publicPageSpeedReport: "",
  // publicSitemap: "",
  // publicFigmaWireframe: "",
  publicRepo: "https://github.com/4HMartin/Patient-administrator",
  mainGif: "/images/projects/veterinary-patient-follow-up/main_gif_v1.gif",
  mainGifSection: "Home",
  overview: {
    en: [
        "Practical project in React, where the user enters their pet's details to add it to the list of patients, using a form managed by react-hook-form and global state management via zustand.",
        "The application allows a veterinary clinic to keep a follow-up list of patients (pets), each linked to an owner (caretaker), a registration date, a contact email, and a description of symptoms.",
        "Records can be created, edited, and deleted, and the list persists across browser sessions via localStorage.",
    ],
    es: [
        "Proyecto práctico en React, donde el usuario ingresa los datos de su mascota para agregarla a la lista de pacientes, utilizando un formulario gestionado con react-hook-form y manejo de estado global mediante zustand.",
        "La aplicación permite a una clínica veterinaria llevar un seguimiento de pacientes (mascotas), cada uno vinculado a un propietario (responsable), una fecha de registro, un correo electrónico de contacto y una descripción de los síntomas.",
        "Los registros se pueden crear, editar y eliminar, y la lista persiste entre sesiones del navegador.",
    ],
  },
  techStack: ["React", "TypeScript", "TailwindCSS", "Zustand", "RHF"],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Register a patient",
        es: "Registrar un paciente",
      },
      value: {
        en: [
          "Add a new pet to the list via a validated form (name, owner, email, registration date, symptoms).",
        ],
        es: [
          "Agrega una nueva mascota a la lista mediante un formulario validado (nombre, propietario, correo electrónico, fecha de registro, síntomas)."
        ],
      },
    },
    {
      key: {
        en: "Client-side validation",
        es: "Validación en el cliente",
      },
      value: {
        en: [
          "All fields are required, and the email field is validated against a regex pattern, with inline error messages.",
        ],
        es: [
          "Todos los campos son obligatorios, y el campo de correo electrónico se valida con una expresión regular, mostrando mensajes de error en línea."
        ],
      },
    },
    {
      key: {
        en: "Edit a patient",
        es: "Editar un paciente",
      },
      value: {
        en: [
          "Load an existing record back into the form to update its details.",
        ],
        es: [
          "Carga un registro existente de nuevo en el formulario para actualizar sus datos."
        ],
      },
    },
    {
      key: {
        en: "Delete a patient",
        es: "Eliminar un paciente",
      },
      value: {
        en: [
          "Remove a record from the list with a single click.",
        ],
        es: [
          "Elimina un registro de la lista con un solo clic."
        ],
      },
    },
    {
      key: {
        en: "Persistent state",
        es: "Estado persistente",
      },
      value: {
        en: [
          "The patient list is persisted to localStorage (via Zustand's persist middleware) so data survives page reloads.",
        ],
        es: [
          "La lista de pacientes se guarda en localStorage (mediante el middleware persist de Zustand) para que los datos se conserven al recargar la página."
        ],
      },
    },
    {
      key: {
        en: "Toast notifications",
        es: "Notificaciones toast",
      },
      value: {
        en: [
          "Success (register/update) and error (delete) actions trigger contextual toast messages.",
        ],
        es: [
          "Las acciones de éxito (registrar/actualizar) y error (eliminar) muestran mensajes toast contextuales."
        ],
      },
    },
    {
      key: {
        en: "Empty state handling",
        es: "Manejo de estado vacío",
      },
      value: {
        en: [
          "A friendly message is shown when no patients have been registered yet.",
        ],
        es: [
          "Se muestra un mensaje amigable cuando aún no se ha registrado ningún paciente."
        ],
      },
    },
    {
      key: {
        en: "Responsive layout",
        es: "Diseño responsivo",
      },
      value: {
        en: [
          "Two-column layout (form / list) on medium+ screens, single column on mobile.",
        ],
        es: [
          "Diseño de dos columnas (formulario / lista) en pantallas medianas o superiores, y de una sola columna en móviles."
        ],
      },
    },
    {
      key: {
        en: "Libraries used",
        es: "Librerías utilizadas",
      },
      value: {
        en: [
          "react-hook-form - Form state, validation, and submission handling in PatientForm.",
          "zustand - Global state management for the patient list and the active (editing) patient ID.",
          "zustand/middleware (persist) - Persists the Zustand store to localStorage under the key patient-storage.",
          "react-toastify - Toast notifications for create, update, and delete actions.",
          "uuid - Generates unique id values (uuidv4) for new patient records.",
        ],
        es: [
          "react-hook-form - Gestión del estado del formulario, validación y envío en PatientForm.",
          "zustand - Manejo de estado global para la lista de pacientes y el ID del paciente activo (en edición).",
          "zustand/middleware (persist) - Persiste el store de Zustand en localStorage bajo la clave patient-storage.",
          "react-toastify - Notificaciones toast para las acciones de crear, actualizar y eliminar.",
          "uuid - Genera valores únicos de id (uuidv4) para los nuevos registros de pacientes.",
        ],
      },
    },
    {
      key: {
        en: "React hooks used - useEffect",
        es: "Hooks de React utilizados - useEffect",
      },
      value: {
        en: [
          "In PatientForm, watches activeId to pre-fill the form fields when a patient is selected for editing.",
        ],
        es: [
          "En PatientForm, observa activeId para precargar los campos del formulario cuando se selecciona un paciente para editar."
        ],
      },
      codeLang: "typescript",
      code: `...
useEffect(() => {
  if(activeId){
      const activePatient = patients.filter(patient => patient.id === activeId)[0];
      setValue('name', activePatient.name);
      setValue('caretaker', activePatient.caretaker);
      setValue('date', activePatient.date);
      setValue('email', activePatient.email);
      setValue('symptoms', activePatient.symptoms);
  }
}, [activeId]);
...`
    },
    {
      key: {
        en: "React hooks used - useForm (from react-hook-form)",
        es: "Hooks de React utilizados - useForm (de react-hook-form)",
      },
      value: {
        en: [
          "Manages form registration (register), validation errors (formState.errors), submission (handleSubmit), field updates (setValue), and reset (reset).",
        ],
        es: [
          "Gestiona el registro de campos (register), los errores de validación (formState.errors), el envío (handleSubmit), la actualización de campos (setValue) y el reinicio (reset)."
        ],
      },
      codeLang: "typescript",
      code: `...
const { 
    register,
    setValue,
    handleSubmit,
    formState: {errors},
    reset
} = useForm<DraftPatient>();
...`
    },
    {
      key: {
        en: "usePatientStore (custom hook, from zustand)",
        es: "usePatientStore (custom hook, de zustand)",
      },
      value: {
        en: [
          "Exposes the global store's state (patients, activeId) and actions (addPatient, updatePatient, deletePatient, getPatientById) to any component that needs them.",
        ],
        es: [
          "Expone el estado del store global (patients, activeId) y sus acciones (addPatient, updatePatient, deletePatient, getPatientById) a cualquier componente que las necesite."
        ],
      },
      codeLang: "typescript",
      code: `// store.ts
import {create} from 'zustand'
import type { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid'
import { persist } from 'zustand/middleware'

/** The state and its actions must be defined within the state type */
type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

/**
 * @description Converts type DraftPatient to Patient by adding an ID
 */
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

/**
 * @description The callback of the create function can receive two functions as parameters: the 'set' function to add values
 * to the state and the 'get' function to obtain values from the state.
 * In order to visualise state data, the use of the usePatientStore must be instantiated.
 */
export const usePatientStore = create<PatientState>()(
    
    persist( (set) => ({
        patients: [],
        activeId: '',

        addPatient(data) {

            const newPatient = createPatient(data)

            /** Parameter state is a reserved keyword that refers to the state */
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },

        deletePatient(id) {
            set((state) => ({
                patients: state.patients.filter( patient => patient.id !== id)
            }))
        },

        getPatientById(id) {
            set(() => ({
                activeId: id
            }))
        },

        updatePatient(data) {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? {
                    id: state.activeId, ...data
                } : patient),
                activeId: ''
            }))
        }
    }),{
        name: 'patient-storage'
    }
))`
    },
    {
      key: {
        en: "Project structure",
        es: "Estructura del proyecto",
      },
      codeLang: "bash",
      code: `src/
├── components/
│   ├── PatientForm.tsx          # Form to add/edit a patient (react-hook-form)
│   ├── PatientList.tsx          # Renders the list of registered patients
│   ├── PatientDetails.tsx       # Single patient card with Edit/Delete actions
│   ├── PatientDetailsItem.tsx   # Label/value row used inside PatientDetails
│   └── Error.tsx                # Inline field-validation error message
├── types/
│   └── index.ts                 # Patient / DraftPatient type definitions
├── store.ts                     # Zustand store (state + actions) with persist middleware
├── App.tsx                      # Root layout (form + list + toast container)
└── main.tsx                     # Application entry point`
    },
    {
      key: {
        en: "Data model - Types",
        es: "Modelo de datos - Types",
      },
      codeLang: "typescript",
      code: `type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string
}

type DraftPatient = Omit<Patient, 'id'>`
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/veterinary-patient-follow-up/architecture_diagram_v1.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet",
    },
    screenshots: [
      {
        src: "/images/projects/veterinary-patient-follow-up/ui_03.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface - Patient created",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/veterinary-patient-follow-up/ui_01.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface main view",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/veterinary-patient-follow-up/ui_02.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface - Form validations error",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/veterinary-patient-follow-up/ui_04.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "User interface - Patient deleted",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/veterinary-patient-follow-up/ui_05.webp",
        alt: "User interface main view desktop screenshot - 4hmartin",
        title: "Zustand persist - Local storage",
        imageFit: "contain",
        imageFormat: "desktop",
      },
    ],
  },
  otherProjects: ["security-system-comparison", "rodriguez-events-website"],
};
