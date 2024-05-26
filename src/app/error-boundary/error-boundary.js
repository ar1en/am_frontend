import {Component} from "react";
import {useStore} from "../../shared/store"

class ErrorBoundaryBase extends Component {
    componentDidCatch(error, info) {
        this.props.addError(error);
    }
}

const ErrorBoundary = (props) => {
    const {addError} = useStore().error;
    return <ErrorBoundaryBase {...props} addError={addError}/>
};