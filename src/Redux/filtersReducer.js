import {deleteItemFromArray} from "../utils/deleteItemFromArray";

const SET_GENDER = `filter/SET_GENDER`
const UNSET_GENDER = `filter/UNSET_GENDER`

const SET_BRAND = `filter/SET_BRAND`
const UNSET_BRAND = `filter/UNSET_BRAND`

const SET_COST = `filter/SET_COST`
const UNSET_COST = `filter/UNSET_COST`

const SET_TYPE = `filter/SET_TYPE`
const UNSET_TYPE = `filter/UNSET_TYPE`

const SET_SIZES = `filter/SET_SIZES`
const UNSET_SIZES = `filter/UNSET_SIZES`

let initialState = {
    gender: null,//string
    brands: [],//array
    cost: {
        from: null,
        to: null
    },
    types: [],//array
    sizes: [], //array
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENDER:
            return {
                ...state,
                gender: action.gender
            }
        case UNSET_GENDER:
            return {
                ...state,
                gender: null
            }

        case SET_BRAND:
            return {
                ...state,
                brands: [...state.brands, action.brand]
            }
        case UNSET_BRAND:
            return {
                ...state,
                brands: deleteItemFromArray([...state.brands], action.brand)
            }

        case SET_TYPE:
            return {
                ...state,
                types: [...state.types, action.typeValue]
            }
        case UNSET_TYPE:
            return {
                ...state,
                types: deleteItemFromArray([...state.types], action.typeValue)
            }

        case SET_COST:
            return {
                ...state,
                cost: {to: action.to, from:action.from}
            }
        case UNSET_COST:
            return {
                ...state,
                cost: {to: null, from:null}
            }
        default:
            return state
    }
}

export const setGenderFilterAction = (gender) => ({type: SET_GENDER, gender})
export const unsetGenderFilterAction = () => ({type: UNSET_GENDER})

export const setBrandFilterAction = (brand) => ({type: SET_BRAND, brand})
export const unsetBrandFilterAction = (brand) => ({type: UNSET_BRAND, brand})

export const setTypeFilterAction = (typeValue) => ({type: SET_TYPE, typeValue})
export const unsetTypeFilterAction = (typeValue) => ({type: UNSET_TYPE, typeValue})

export const setCostFilterAction = (to, from) => ({type: SET_TYPE, to, from})
export const unsetCostFilterAction = () => ({type: UNSET_TYPE})





export default filtersReducer