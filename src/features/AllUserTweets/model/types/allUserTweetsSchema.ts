import {Tweet} from "entities/Tweet";

export interface AllUserTweetsSchema {
    isVisible: boolean;
    isLoading: boolean;
    tweets: Tweet[]
}
