import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    // myMeeting Function
    const myMeeting = async (element) => {
        const appID = 1298263591;
        const serverSecret = "5a744d5dea62a1bf4bb34398765911b1";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `https://sam-video-calling.vercel.app/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}
