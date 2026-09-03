import type { Project } from "../types";

export const cocktailRecipes: Project = {
    slug: "cocktail-recipes",
    category: "practice",
    name: {
        en: "COCKTAIL RECIPES",
        es: "RECETAS DE CÓCTELES",
    },
    developmentType: "frontend",
    shortDescription: {
        en: "A React + TypeScript practice project for browsing cocktail recipes via TheCocktailDB API, saving favorites, and generating original drink recipes with AI.",
        es: "Un proyecto práctico con React y TypeScript para consultar recetas de cócteles a través de la API de TheCocktailDB, guardar favoritos y generar recetas originales de bebidas con IA.",
    },
    publicUrl: "https://cocktail-recipes.4hmartin.com/",
    // publicPageSpeedReport: "",
    // publicSitemap: "",
    // publicFigmaWireframe: "",
    publicRepo: "https://github.com/4HMartin/cocktail-recipes",
    mainGif: "/images/projects/cocktail-recipes/main_gif_v1.gif",
    mainGifSection: "Home",
    overview: {
        en: [
            "A full-featured React application for discovering, generating, and saving cocktail recipes, built as a practice project to demonstrate modern frontend architecture patterns.",
        ],
        es: [
            "Una aplicación React completa para descubrir, generar y guardar recetas de cócteles, construida como un proyecto de práctica para demostrar patrones de arquitectura frontend modernos.",
        ],
    },
    techStack: ["OpenRouter AI", "Zustand", "React Router DOM", "Zod", "TypeScript", "Headless UI", "React", "TailwindCSS"],
    keyFeaturesUser: [
        {
            key: {
                en: "Search & browse",
                es: "Buscar & explorar"
            },
            value: {
                en: ["Filter cocktails by category and ingredient/name using TheCocktailDB public API."],
                es: ["Filtra los cócteles por categoría e ingrediente o nombre utilizando la API pública de TheCocktailDB."]
            },
        },
        {
            key: {
                en: "Recipe detail modal",
                es: "Modal detalle de la receta"
            },
            value: {
                en: ["View ingredients, measures, and instructions for a selected drink."],
                es: ["Consulta los ingredientes, las medidas y las instrucciones de la bebida seleccionada."]
            },
        },
        {
            key: {
                en: "Favorites",
                es: "Favoritos"
            },
            value: {
                en: ["Add/remove drinks from a favorites list, persisted to localStorage."],
                es: ["Añadir o eliminar bebidas de una lista de favoritos, que se guarda en localStorage."]
            },
        },
        {
            key: {
                en: "AI recipe generation",
                es: "Generación de receta con IA"
            },
            value: {
                en: ["Describe a drink in natural language and get a streamed, markdown-formatted recipe from an LLM via OpenRouter."],
                es: ["Describe una bebida en lenguaje natural y obtén una receta en formato Markdown en tiempo real desde un modelo de lenguaje (LLM) a través de OpenRouter."]
            },
        },
        {
            key: {
                en: "Toast notifications",
                es: "Notificaciones tipo Toast"
            },
            value: {
                en: ["Lightweight feedback for validation errors and favorite actions."],
                es: ["Mensajes breves sobre los errores de validación y las acciones favoritas."]
            },
        },
    ],
    keyFeaturesAdmin: [
        {
            key: {
                en: "Project Structure",
                es: "Estructura del proyecto"
            },
            codeLang: "bash",
            code: `
src/
├── components/          # Reusable UI components
│   ├── DrinkCard.tsx
│   ├── Header.tsx        # Nav + home search form
│   ├── Modal.tsx          # Recipe detail modal (Headless UI Dialog)
│   └── Notification.tsx   # Toast notification
├── layouts/
│   └── Layout.tsx         # App shell: Header, <Outlet/>, Modal, Notification
├── views/                # Route-level pages
│   ├── Index.tsx           # Search results grid
│   ├── Favorites.tsx        # Saved favorites grid
│   └── GenerateAI.tsx        # AI recipe generator
├── stores/               # Zustand slices, combined in useAppStore.ts
│   ├── useAppStore.ts       # Combines all slices with devtools middleware
│   ├── recipeSlice.ts        # Categories, search results, selected recipe, modal state
│   ├── favoritesSlice.ts      # Favorites list + localStorage persistence
│   ├── notificationSlice.ts    # Toast state
│   └── aiSlice.ts               # AI generation state (streaming)
├── services/             # External API calls
│   ├── RecipeService.ts     # TheCocktailDB requests + Zod parsing
│   └── AIService.ts          # OpenRouter streamText call
├── lib/
│   ├── axios.ts             # Axios instance (TheCocktailDB base URL)
│   └── ai.ts                 # OpenRouter provider instance
├── utils/
│   └── recipes-schema.ts    # Zod schemas for all API responses
├── types/
│   └── index.ts              # Types inferred from Zod schemas
├── router.tsx             # BrowserRouter + lazy-loaded routes
├── main.tsx                # App entry point
└── index.css               # Tailwind import + custom keyframes`
        },
        {
            key: {
                en: "State Management",
                es: "Gestión del State",
            },
            value: {
                en: [
                    "The app uses **Zustand's slice pattern**: each domain of state lives in its own **StateCreator**, and all slices are combined into a single store in **src/stores/useAppStore.ts**, wrapped with the **devtools** middleware for Redux DevTools support.",
                    "◇ **recipeSlice** - categories, search results, selected recipe, modal visibility.",
                    "◇ **favoritesSlice** - favorites array; reads/writes **localStorage** under the **favorites** key; depends on notificationSlice for toast feedback (cross-slice access via **get/set/api** functions).",
                    "◇ **notificationSlice** - transient toast state with an auto-hide timeout.",
                    "◇ **aiSlice** - holds the streamed AI response string and an **isGenerating** flag.",
                ],
                es: [
                    "La aplicación utiliza el **patrón de 'slices' de Zustand**: cada dominio de estado se aloja en su propio **StateCreator**, y todos los 'slices' se combinan en un único store en **src/stores/useAppStore.ts**, envuelto con el middleware **devtools** para que sea compatible con Redux DevTools.",
                    "◇ **recipeSlice** - categorías, resultados de búsqueda, receta seleccionada, visibilidad de la ventana modal.",
                    "◇ **favoritesSlice** - array de favoritos; lee y escribe en **localStorage** bajo la clave **'favorites'**; depende de 'notificationSlice' para la retroalimentación mediante notificaciones emergentes (acceso entre slice mediante las funciones **get**/**set**/**api**).",
                    "◇ **notificationSlice** - Estado temporal con un tiempo de espera para el ocultamiento automático.",
                    "◇ **aiSlice** - contiene la cadena de respuesta de la IA (stream) y un indicador **'isGenerating'**.",
                ],
            },
            codeLang: 'typescript',
            code: `// src/stores/useAppStore.ts
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {type RecipesSliceTypes, createRecipeSlice} from "./recipeSlice.ts";
import {type FavoritesSliceType, createFavoritesSlice} from "./favoritesSlice.ts";
import {type NotificationSliceType, createNotificationSlice} from "./notificationSlice.ts";
import {type AISlice, createAISlice} from "./aiSlice.ts";

/**
 * @description Multiple stores using Slice Pattern.
 * '...a' contains a copy of the default functions to manipulate the state 'set(), get(), api()'.
 */
export const useAppStore = create<RecipesSliceTypes & FavoritesSliceType & NotificationSliceType & AISlice>()(
    devtools((...a) => ({
        ...createRecipeSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationSlice(...a),
        ...createAISlice(...a),
    }))
);`
        },
        {
            key: {
                en: "State Management - recipeSlice.ts",
                es: "Gestión del State - recipeSlice.ts",
            },
            value: {
                en: [
                    "Categories, search results, selected recipe, modal visibility.",
                ],
                es: [
                    "Categorías, resultados de búsqueda, receta seleccionada, visibilidad de la ventana modal."
                ],
            },
            codeLang: 'typescript',
            code: `// src/stores/recipeSlice.ts
import type { StateCreator } from "zustand"
import {getCategories, getRecipeById, getRecipes} from "../services/RecipeService.ts";
import type {Categories, Drink, Drinks, SearchFilters, Recipe} from "../types";

"export type RecipesSliceTypes = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean

    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<boolean>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<RecipesSliceTypes> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
      drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({
            categories: categories,
        })
    },
    searchRecipes: async (searchFilters) => {
        let success = false;
        const drinks = await getRecipes(searchFilters);
        set({
            drinks: drinks
        })
        if(drinks !== undefined) success = true;
        return success
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id);
        set({
            selectedRecipe: selectedRecipe,
            modal: true
        })
    },
    closeModal: () => set({
        modal: false,
        selectedRecipe: {} as Recipe,
    })
})`
        },
        {
            key: {
                en: "Data Fetching & Validation",
                es: "Obtención y validación de datos",
            },
            value: {
                en: [
                    "All responses from TheCocktailDB are parsed through **Zod schemas** (src/utils/**recipes-schema.ts**) via **safeParse**, and the corresponding TypeScript types are inferred from those schemas (src/types/index.ts) rather than hand-written — schema and type stay in sync by construction.",
                ],
                es: [
                    "Todas las respuestas de TheCocktailDB se analizan mediante los **esquemas de Zod** (src/utils/**recipes-schema.ts**) a través de **safeParse**, y los tipos de TypeScript correspondientes se deducen a partir de dichos esquemas (src/types/index.ts) en lugar de escribirse manualmente; de este modo, el esquema y los tipos se mantienen sincronizados por diseño."
                ],
            },
            codeLang: 'typescript',
            code: `// src/utils/recipes-schema.ts
import {z} from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFiltersSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})
export const DrinksApiResponseSchema = z.object({
    drinks: z.array(DrinkAPIResponse),
})

...`
        },
        {
            key: {
                en: "AI Recipe Generation",
                es: "Generación de receta con IA",
            },
            value: {
                en: [
                    "src/views/**GenerateAI.tsx** submits a free-text prompt (e.g. 'A drink made with vodka and mango') to **generateRecipe** in **aiSlice**, which calls **AIService.generateRecipe**:",
                    "The response is consumed as an async text stream and appended to **aiSlice.recipe** chunk by chunk, then rendered with **react-markdown** + **remark-gfm** (GitHub-flavored markdown: tables, strikethrough, task lists, etc.).",
                    "**Model note:** Uses a free-tier model from OpenRouter (minimax/minimax-m2.7:free)."
                ],
                es: [
                    "El archivo src/views/GenerateAI.tsx envía una indicación de texto libre (por ejemplo, «Una bebida elaborada con vodka y mango») a la función generateRecipe de aiSlice, que a su vez llama a AIService.generateRecipe:",
                    "La respuesta se procesa como un flujo de texto asíncrono y se añade a `aiSlice.recipe` fragmento a fragmento, para luego representarse con `react-markdown` + `remark-gfm` (Markdown al estilo de GitHub: tablas, texto tachado, listas de tareas, etc.).",
                    "Nota sobre el modelo: Utiliza un modelo de plan gratuito de OpenRouter (minimax/minimax-m2.7:free)."
                ]
            },
            codeLang: "typescript",
            code: `// src/services/AIService.ts
import { streamText } from "ai";
import { openRouter } from "../lib/ai";

// List of available free models: https://openrouter.ai/models?variant=free&output_modalities=text&order=latency-low-to-high
// AI SDK VERCEL - System Prompts: https://ai-sdk.dev/docs/foundations/prompts#system-prompts
// AI SDK VERCEL - Temperature settings: https://ai-sdk.dev/docs/ai-sdk-core/prompt-engineering#temperature-settings

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openRouter('minimax/minimax-m2.7:free'),
            prompt,
            instructions: 'You are a professional bartender with over 50 years experience...',
            temperature: 0
        })

        return result.textStream
    }
}`
        },
        {
            key: {
                en: "Data model - Types",
                es: "Modelo de datos - Types",
            },
            codeLang: "typescript",
            code: `// src/types/index.ts
import {
    CategoriesAPIResponseSchema,
    SearchFiltersSchema,
    DrinksApiResponseSchema,
    DrinkAPIResponse,
    RecipeAPIResponseSchema
} from "../utils/recipes-schema.ts";
import {z} from "zod";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFiltersSchema>;
export type Drinks = z.infer<typeof DrinksApiResponseSchema>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;`
        },
    ],
    images: {
        architectureImage: {
            src: "/images/projects/cocktail-recipes/architecture_diagram_v1.webp",
            alt: "Project architecture diagram - 4hmartin",
            title: "Project architecture diagram",
            imageFit: "contain",
            imageFormat: "tablet",
        },
        screenshots: [
            {
                src: "/images/projects/cocktail-recipes/home_01.webp",
                alt: "User interface main view desktop screenshot - 4hmartin",
                title: "User interface - Home View",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/search_result_01.webp",
                alt: "User interface main view with search results - 4hmartin",
                title: "User interface - Home View with search results",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/modal_open_01.webp",
                alt: "Modal open with selected recipe info - 4hmartin",
                title: "Modal open with selected recipe info",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/favorites_grid.webp",
                alt: "User interface - favorites view - 4hmartin",
                title: "Favorites view with recipes grid",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/generate_using_ai_01.webp",
                alt: "Generate recipe using AI view - 4hmartin",
                title: "Generate recipe using AI view",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/ai_recipe_01.webp",
                alt: "Generate recipe using AI example - 4hmartin",
                title: "Generate recipe using AI example",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/ai_recipe_02.webp",
                alt: "Generate recipe using AI example - 4hmartin",
                title: "Generate recipe using AI example",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/ai_recipe_guardrails.webp",
                alt: "Generate recipe using AI example - 4hmartin",
                title: "Generate recipe using AI - Guardrails example",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/cocktail-recipes/localstorage.webp",
                alt: "Localstorage data example - 4hmartin",
                title: "Localstorage data example",
                imageFit: "contain",
                imageFormat: "desktop",
            },
        ],
    },
    otherProjects: [
        "security-system-comparison",
        "rodriguez-events-website",
        "massagearte-landing-page"
    ],
};
