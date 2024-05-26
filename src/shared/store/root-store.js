import {AuthStore} from "../../features";
import {EnvStore} from "../../features";
import {ErrorStore} from "../../app/error-boundary"

class RootStore {
    auth = new AuthStore();
    env = new EnvStore();
    error = new ErrorStore();
}

export {RootStore};