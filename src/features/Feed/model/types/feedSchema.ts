import {Tweet} from "entities/Tweet";

export interface FeedSchema {
    tweets: Tweet[],
    loading: boolean,
    error?: string;
}
