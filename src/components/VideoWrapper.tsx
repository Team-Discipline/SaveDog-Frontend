import React, {MutableRefObject} from "react";

interface VideoPlayerProps {
  videoWrapperRef: MutableRefObject<HTMLElement | null>;
}
const VideoWrapper: React.FC<VideoPlayerProps> = ({videoWrapperRef}) => {
  return (
    <div
      className="Layout-sc-1xcs6mc-0 hzlEAx channel-page__video-player channel-page__video-player--home-carousel"
      ref={videoWrapperRef as React.MutableRefObject<HTMLDivElement>}>
      <div id='1234' className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
        <div className="ScAspectSpacer-sc-18km980-0 fCNuzu"></div>
        <div data-target="persistent-player-content"
             className="Layout-sc-1xcs6mc-0 gMJXeQ"></div>
        <div className="resize-detector">
          <div className="resize-detector">
            <div className="resize-detector__grow"
                 style={{width: '100000px', height: '100000px'}}></div>
          </div>
          <div className="resize-detector">
            <div className="resize-detector__shrink"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoWrapper;