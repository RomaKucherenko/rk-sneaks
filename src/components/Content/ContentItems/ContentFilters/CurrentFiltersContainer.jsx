import {connect} from "react-redux";
import CurrentFilters from "./CurrentFilters";
import {unsetBrandFilterAction, unsetGenderFilterAction, unsetTypeFilterAction} from "../../../../Redux/filtersReducer";

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
        unsetGenderFilter:() => {
            dispatch(unsetGenderFilterAction())
        },
        unsetTypeFilter:() => {
            dispatch(unsetTypeFilterAction())
        }
    }
}

const CurrentFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentFilters)

export default CurrentFiltersContainer