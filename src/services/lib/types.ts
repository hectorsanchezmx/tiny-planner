export interface RequestParams {
    [key: string]: string[];
}

export enum DietLabel {
    Balanced = 'balanced',
    HighProtein = 'high-protein',
    HighFiber = 'high-fiber',
    LowFat ='low-fat',
    LowCarg = 'low-carb',
    LowSodium = 'low-sodium'
}   

export enum HealthLabel {
    Vegan = 'vegan',
    Vegetarian = 'vegetarian',
    Paleo = 'paleo',
    DairyFree = 'dairy-free',
    GlutenFree = 'gluten-free',
    WheatFree = 'wheat-free',
    FatFree = 'fat-free',
    LowSugar = 'low-sugar',
    EggFree = 'egg-free',
    PeanutFree = 'peanut-free',
    TreeNutFree = 'tree-nut-free',
    SoyFree = 'soy-free',
    FishFree = 'fish-free',
    ShellfishFree = 'shellfish-free',
}

export interface Measure  {
    uri: string,
    label: string,
}

export interface Food {
    uri: string,
    label: string,
}

export interface Ingredient {
    foodId: string,
    quantity: number, //float, quantity of specified measure
    measure: Measure, //Measure
    weight: number, //float, total weight, g
    food: Food //Food
}

export interface NutrientInfo {
    uri: string,
    label: string,
    quantity: number, //float quantity of specified units
    unit: string
}

export interface Recipe {
    uri: string,
    label: string,
    image: string,
    source: string,
    url: string,
    yield: number, //integer, number of servings
    calories: number, //float, total energy, kcal
    totalWeight: number //float, total weight, g
    ingredients: Ingredient[] //Ingredient[], array of Ingredient types
    totalNutrients: NutrientInfo[],//NutrientInfo[], nutrients for entire recipe
    totalDaily: NutrientInfo[], //NutrientInfo[], % daily value for entire recipe
    dietLabels: DietLabel[], //diet labels
    healthLabels: HealthLabel[], //health labels
    ingredientLines: string[]
}