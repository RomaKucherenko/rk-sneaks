
import {connect} from "react-redux";
import CurrentFilters from "./CurrentFilters";
import { unsetBrandFilterAction } from "../../../../Redux/filtersReducer";

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetBrandFilter:(brand) => {
            dispatch(unsetBrandFilterAction(brand))
        }
    }
}

const CurrentFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentFilters)

export default CurrentFiltersContainer