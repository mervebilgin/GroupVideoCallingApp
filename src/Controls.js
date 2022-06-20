import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button, Icon } from "@material-ui/core";
import MicIcon from "material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Controls(props) {
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({video: true, audio: true });

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Button 
                    variant="contained" 
                    color={trackState.audio ? "primary" : "secondary"}
                    onClick={() => mute("audio")}
                >
                    {trackState.audio ? <MicIcon/> : <MicOffIcon/>}
                </Button>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained" 
                    color={trackState.video ? "primary" : "secondary"}
                    onClick={() => mute("video")}
                >
                    {trackState.video ? <VideocamIcon/> : <VideocamOffIcon/>}
                </Button>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained" 
                    color="default"
                    onClick={() => leaveChannel()}
                >
                Leave
                <ExitToAppIcon/>
                </Button>
            </Grid>
        </Grid>
    )
}
