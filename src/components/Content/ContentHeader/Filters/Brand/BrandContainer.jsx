
import {setBrandFilterAction, unsetBrandFilterAction} from "../../../../../Redux/filtersReducer";
import {connect} from "react-redux";
import Brand from "./Brand";

const mapStateToProps = state => {
    return {
        selectedBrands: state.filters.brands
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetBrandFilter:(brand) => {
            dispatch(unsetBrandFilterAction(brand))
        },
        setBrandFilter:(brand) => {
            dispatch(setBrandFilterAction(brand))
        }
    }
}

const BrandContainer = connect(mapStateToProps, mapDispatchToProps)(Brand)

export default BrandContainer