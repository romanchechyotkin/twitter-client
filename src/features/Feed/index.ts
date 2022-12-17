import { getTweets } from "./model/selectors/getTweets/getTweets";
import {feedActions, feedReducer } from "./model/slice/feedSlice";
import {Feed} from "./ui/Feed";

export {
    Feed,
    feedReducer,
    feedActions,
    getTweets
}
