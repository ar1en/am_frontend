import {Component} from "react";
import {useStore} from "../../shared/store"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        //const {addError} = useStore().error;
    }

    componentDidCatch(error, info) {
        //this.addError(error);
    }
}