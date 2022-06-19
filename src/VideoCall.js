import { useState } from "react";
import { config, useClient, useMicrophoneAndCameraTracks } from "/settings.js"
import { Grid } from "@material-ui/core";

export default function VideoCall(props) {
    const { setInCall } = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
        const client = useClient();
        const { ready, tracks } = useMicrophoneAndCameraTracks();
}