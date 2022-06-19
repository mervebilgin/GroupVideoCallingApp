import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f33190df5d6b433caa1c382dc0fc7d3c";
const token = 
    "006f33190df5d6b433caa1c382dc0fc7d3cIADNP29+T6WdWQhlwtMnHMvTdggFjsT5N+JJHcxE0+PcVWTNKL8AAAAAEAAz+rZWeMWuYgEAAQB3xa5i";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
