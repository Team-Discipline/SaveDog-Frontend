import React from "react";

const BroadCastingNotiButton:React.FC = () => {
  return (
    <button
      className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 bTXTVH fuXDrj">
      <div className="ScCoreButtonLabel-sc-s7h2b7-0 hLLag">
        <div className="Layout-sc-1xcs6mc-0 iyOCUH">
          <div className="ScCoreButtonIcon-sc-ypak37-0 evnVIg tw-core-button-icon">
            <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg"
                 data-a-selector="tw-core-button-icon">
              {/* 알림 아이콘 SVG */}
              <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M17 14v-2c-1-.5-1.75-1-2-2-.095-.38-.154-.905-.221-1.506C14.49 5.936 14.049 2 10 2 5.95 2 5.509 5.936 5.221 8.494 5.154 9.095 5.095 9.62 5 10c-.25 1-1 1.5-2 2v2h14zm-9.002 2h4-4zm4 0v.012V16zm-5.766-4h7.536a4.262 4.262 0 0 1-.708-1.515c-.129-.513-.2-1.154-.26-1.684a32.48 32.48 0 0 0-.009-.083c-.152-1.355-.314-2.606-.78-3.535-.21-.423-.447-.692-.703-.862C11.063 4.158 10.673 4 10 4s-1.063.158-1.308.32c-.256.171-.492.44-.704.863-.465.929-.627 2.18-.78 3.535L7.2 8.8c-.06.53-.131 1.171-.26 1.684-.15.603-.402 1.1-.708 1.515zm1.766 4a2.001 2.001 0 0 0 4 .012"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div data-a-target="tw-core-button-label-text"
               className="Layout-sc-1xcs6mc-0 bFxzAY" style={{fontSize: '15px', marginLeft: '0.3rem'}}>
            알림 켜기
          </div>
        </div>
      </div>
    </button>
  )
}
export default BroadCastingNotiButton;