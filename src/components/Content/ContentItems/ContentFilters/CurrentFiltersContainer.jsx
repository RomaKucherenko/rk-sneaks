import {connect} from "react-redux";
import CurrentFilters from "./CurrentFilters";
import {
    unsetBrandFilterAction,
    unsetCostFilterAction,
    unsetGenderFilterAction, unsetSizeFilterAction,
    unsetTypeFilterAction
} from "../../../../Redux/filtersReducer";

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetBrandFilter:(brand) => {
            dispatch(unsetBrandFilterAction(brand))
        },
        unsetTypeFilter:(type) => {
            dispatch(unsetTypeFilterAction(type))
        },
        unsetGenderFilter:() => {
            dispatch(unsetGenderFilterAction())
        },

        unsetCostFilter:() => {
            dispatch(unsetCostFilterAction())
        },
        unsetSizeFilter:(size) => {
            dispatch(unsetSizeFilterAction(size))
        }

    }
}

const CurrentFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentFilters)

export default CurrentFiltersContainer