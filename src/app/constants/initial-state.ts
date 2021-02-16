import { state } from "../interfaces/state-interface";
// import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimationFrameScheduler } from "rxjs/internal/scheduler/AnimationFrameScheduler";
export const IS_PROD = environment.production ? true : false;
export const PROD_URL = window.location.href;
export const TEST_URL = "http://localhost:3000";

export const INITIAL_STATE: state = {
    is_logging: true,
    is_logged: false,
    chat_messeges: [],
    user_search_res: [],
    user_jwt_token: "",
    site_settings: {
        terms_of_use: "",
        privacy_policy: "",
        appicon: "",
        applogo: "",
        credit_builder: false,
        is_allowed_to_chat: false,
        social_links: {
            facebooklink: "",
            instagramlink: "",
            linkedinlink: "",
            twitterlink: "",
            youtubelink: ""
        }
    },
    current_user: undefined,
    urls: {
        main: IS_PROD ? PROD_URL : TEST_URL,
        signup: IS_PROD ? PROD_URL + "signup" : TEST_URL + "/signup",
        getsettings: IS_PROD ? PROD_URL + "getsettings" : TEST_URL + "/getsettings",
        getuser: IS_PROD ? PROD_URL + "auth" : TEST_URL + "/auth",
        searchUser: IS_PROD ? PROD_URL + "searchuser" : TEST_URL + "/searchuser",
        actions: IS_PROD ? PROD_URL + "actions" : TEST_URL + "/actions",
        removeUser: IS_PROD ? PROD_URL + "removeuser" : TEST_URL + "/removeuser",
        editSettings: IS_PROD ? PROD_URL + "editsettings" : TEST_URL + "/editsettings",
        getChatRooms: IS_PROD ? PROD_URL + "getchatrooms" : TEST_URL + "/getchatrooms",
        addChatRoom: IS_PROD ? PROD_URL + "addchatroom" : TEST_URL + "/addchatroom",
        joinChatRroom: IS_PROD ? PROD_URL + "joinchatroom" : TEST_URL + "/joinchatroom",
        leaveChatRoom: IS_PROD ? PROD_URL + "leavechatroom" : TEST_URL + "/leavechatroom",

    }
}