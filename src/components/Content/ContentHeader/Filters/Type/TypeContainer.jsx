import {connect} from "react-redux";
import Type from "./Type";
import {setTypeFilterAction, unsetTypeFilterAction} from "../../../../../Redux/filtersReducer";

const mapStateToProps = state => {
    return {
        selectedTypes: state.filters.types
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetTypeFilter:(type) => {
            dispatch(unsetTypeFilterAction(type))
        },
        setTypeFilter:(type) => {
            dispatch(setTypeFilterAction(type))
        }
    }
}

const TypeContainer = connect(mapStateToProps, mapDispatchToProps)(Type)

export default TypeContainer