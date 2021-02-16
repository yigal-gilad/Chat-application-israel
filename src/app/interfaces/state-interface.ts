import { user } from "./user";
import { settings } from "./site-settings";
import { chat_message } from "./chat-messege";

export interface state {
    is_logging: boolean,
    is_logged: boolean,
    user_jwt_token: string,
    site_settings: settings,
    current_user: user,
    chat_messeges: chat_message[],
    user_search_res: user[];
    urls: any
}