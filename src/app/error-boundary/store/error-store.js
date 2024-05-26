import {action, observable} from "mobx";

class ErrorStore {
    @observable errors = [];

    @action
    setError(error) {
        this.errors.push(error);
    }

    @action
    clearError(){
        this.errors = [];
    }
}

export {ErrorStore};