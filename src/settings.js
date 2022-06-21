import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f33190df5d6b433caa1c382dc0fc7d3c";
const token = 
    "006f33190df5d6b433caa1c382dc0fc7d3cIADBQ1n0niR8oh5+hrSwEE9hLcLdGFTn4UklQBOVDgPkpmTNKL8AAAAAEABGROOezNeyYgEAAQDJ17Ji";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
