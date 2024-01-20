import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfileButton from "@/components/ProfileButton";
import {Switch} from "@/components/ui/switch";
import React, {useState} from "react";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  const handleSwitchClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
  }

  return (
    <DropdownMenu onOpenChange={handleOpen}>
      <DropdownMenuTrigger>
        <ProfileButton/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {}
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
          {/*<DropdownMenuItem>*/}
          {/*  Profile*/}
          {/*  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
          {/*</DropdownMenuItem>*/}
          {/*<DropdownMenuItem>*/}
          {/*  Billing*/}
          {/*  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
          {/*</DropdownMenuItem>*/}
          {/*<DropdownMenuItem>*/}
          {/*  Settings*/}
          {/*  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>*/}
          {/*</DropdownMenuItem>*/}
          {/*<DropdownMenuSub>*/}

            <DropdownMenuItem>
              <div className="inline-flex items-center w-6 h-6 ScFigure-sc-wkgzod-0 dqNaAM tw-svg">
                <svg width="2rem" height="2rem" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                        d="M10 2c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm5.917 9a6.015 6.015 0 0 1-3.584 4.529A10 10 0 0 0 13.95 11h1.967zm0-2a6.015 6.015 0 0 0-3.584-4.529A10 10 0 0 1 13.95 9h1.967zm-3.98 0A8.002 8.002 0 0 0 10 4.708 8.002 8.002 0 0 0 8.063 9h3.874zm-3.874 2A8.002 8.002 0 0 0 10 15.292 8.002 8.002 0 0 0 11.937 11H8.063zM6.05 11a10 10 0 0 0 1.617 4.529A6.014 6.014 0 0 1 4.083 11H6.05zm0-2a10 10 0 0 1 1.617-4.529A6.014 6.014 0 0 0 4.083 9H6.05z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              {/*<DropdownMenuSubTrigger>*/}
                언어
              {/*</DropdownMenuSubTrigger>*/}
              {/*<DropdownMenuShortcut>*/}
              {/*  <div className="ScFigure-sc-wkgzod-0 dqNaAM tw-svg">*/}
              {/*    <svg width="2rem" height="2rem" viewBox="0 0 20 20">*/}
              {/*      <path d="M6.5 5.5 11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"></path>*/}
              {/*    </svg>*/}
              {/*  </div>*/}
              {/*</DropdownMenuShortcut>*/}
            </DropdownMenuItem>
          {/*</DropdownMenuSub>*/}

          <DropdownMenuItem>
            <div>
              <div
                className="flex items-center Layout-sc-1xcs6mc-0 xxjeD InjectLayout-sc-1i43xsx-0 tw-drop-down-menu-item-figure">
                <div className="ScIconLayout-sc-1q25cff-0 cLlPiH">
                  <div className="inline-flex items-center h-6 w-6 ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                    <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                         className="ScIconSVG-sc-1q25cff-1 jpczqG">
                      <g>
                        <path fill-rule="evenodd"
                              d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z"
                              clip-rule="evenodd"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            어두운 테마
            <DropdownMenuShortcut>
              <Switch onClick={handleSwitchClick}/>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/*<DropdownMenuSeparator/>*/}
        {/*<DropdownMenuGroup>*/}
        {/*<DropdownMenuItem>Team</DropdownMenuItem>*/}
        {/*<DropdownMenuSub>*/}
        {/*  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>*/}
        {/*  <DropdownMenuPortal>*/}
        {/*    <DropdownMenuSubContent>*/}
        {/*      <DropdownMenuItem>Email</DropdownMenuItem>*/}
        {/*      <DropdownMenuItem>Message</DropdownMenuItem>*/}
        {/*      <DropdownMenuSeparator/>*/}
        {/*      <DropdownMenuItem>More...</DropdownMenuItem>*/}
        {/*    </DropdownMenuSubContent>*/}
        {/*  </DropdownMenuPortal>*/}
        {/*</DropdownMenuSub>*/}
        {/*<DropdownMenuItem>*/}
        {/*  New Team*/}
        {/*  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>*/}
        {/*</DropdownMenuItem>*/}
        {/*</DropdownMenuGroup>*/}
        <DropdownMenuSeparator/>
        {/*<DropdownMenuItem>GitHub</DropdownMenuItem>*/}
        {/*<DropdownMenuItem>Support</DropdownMenuItem>*/}
        {/*<DropdownMenuItem disabled>API</DropdownMenuItem>*/}
        {/*<DropdownMenuSeparator/>*/}
        <DropdownMenuItem>
          <div className="inline-flex items-center h-6 w-6 ScIconLayout-sc-1q25cff-0 cLlPiH">
            <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
              <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
              <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                   className="ScIconSVG-sc-1q25cff-1 jpczqG">
                <g>
                  <path
                    d="M16 18h-4a2 2 0 0 1-1.964-1.622L12 14.414V16h4V4h-4v1.586l-1.964-1.964A2 2 0 0 1 12 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z"></path>
                  <path d="M7.5 6.5 9 5l5 5-5 5-1.5-1.5L10 11H2V9h8L7.5 6.5Z"></path>
                </g>
              </svg>
            </div>
          </div>
          로그인
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
