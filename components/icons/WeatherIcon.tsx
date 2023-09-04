import React from "react";
import { IIcon } from "./types";

export const WeatherIcon = ({
    width, height, color='currentColor', strokeWidth="1"}: IIcon) => {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}>
      <path d="M.32 21.06c0 .23.08.43.25.59.17.16.38.24.63.24h18.71c.24 0 .44-.08.61-.24.17-.16.25-.35.25-.59s-.08-.44-.25-.6a.822.822 0 00-.61-.25H1.2c-.25 0-.46.08-.63.25s-.25.36-.25.6zm2.62-3.14c0 .23.08.43.25.58a.8.8 0 00.6.27h18.72c.23 0 .43-.08.59-.25.16-.17.24-.37.24-.6a.84.84 0 00-.23-.59.791.791 0 00-.59-.24H3.8c-.24 0-.44.08-.6.24-.17.17-.26.36-.26.59zm.13-2.4c0 .09.05.13.16.13h1.43c.07 0 .14-.05.21-.16.24-.52.59-.94 1.06-1.27.47-.33.99-.52 1.56-.56l.54-.07c.11 0 .17-.06.17-.18l.07-.51c.11-1.08.56-1.98 1.37-2.71.81-.72 1.76-1.09 2.86-1.09 1.08 0 2.03.36 2.84 1.08.81.72 1.27 1.61 1.38 2.68l.07.58c0 .11.06.17.19.17h1.61c.64 0 1.23.17 1.76.52.53.34.92.8 1.18 1.37.07.11.13.16.2.16h1.44c.13 0 .18-.07.13-.23l-.2-.55c.76-.94 1.13-2.04 1.13-3.31 0-.71-.14-1.38-.41-2.03s-.64-1.2-1.11-1.67c-.46-.47-1.02-.84-1.67-1.12s-1.32-.4-2.04-.4c-1.54 0-2.82.56-3.82 1.68-.85-.42-1.74-.63-2.68-.63-1.4 0-2.65.44-3.74 1.32s-1.79 2-2.1 3.37c-1.78.47-2.98 1.58-3.58 3.35-.01.01-.01.04-.01.08zm1.62 8.61c0 .24.09.44.27.6.16.17.35.26.59.26h18.74c.23 0 .43-.08.6-.25.17-.17.25-.37.25-.61 0-.23-.08-.42-.25-.58a.882.882 0 00-.6-.23H5.55a.89.89 0 00-.61.23c-.17.16-.25.35-.25.58zm6.57-19.47c0 .24.08.43.23.59l.65.64c.17.18.36.27.58.27.22 0 .42-.08.6-.25.17-.17.26-.37.26-.61s-.08-.45-.25-.63l-.64-.61a.794.794 0 00-.6-.26c-.24 0-.44.08-.6.25-.15.16-.23.37-.23.61zm5.32 4.38c.67-.68 1.48-1.01 2.43-1.01.98 0 1.82.35 2.51 1.04.69.69 1.04 1.53 1.04 2.5 0 .65-.16 1.25-.49 1.8-.95-.95-2.11-1.42-3.47-1.42h-.34c-.29-1.18-.85-2.15-1.68-2.91zm1.6-5.23c0 .23.08.43.24.59.16.16.35.24.59.24.25 0 .46-.08.63-.24.17-.16.25-.35.25-.59V1.76c0-.23-.09-.43-.26-.6A.884.884 0 0019 .91c-.23 0-.43.08-.59.25-.16.17-.24.37-.24.6v2.05zm5.49 2.27c0 .22.08.43.24.6.37.36.78.36 1.23 0l1.43-1.43c.16-.18.24-.39.24-.64 0-.23-.08-.43-.24-.59a.807.807 0 00-.59-.24c-.24 0-.44.08-.6.24l-1.46 1.47c-.17.18-.25.38-.25.59zm.81 11.8c0 .24.09.44.26.6l.64.65c.16.16.36.24.58.24.21 0 .41-.08.61-.24.16-.17.24-.39.24-.64 0-.22-.08-.41-.24-.56l-.65-.66a.882.882 0 00-.6-.24c-.24 0-.44.08-.6.25-.16.16-.24.36-.24.6zm1.48-6.31c0 .24.09.44.26.6.15.17.35.25.59.25h2.05c.23 0 .43-.08.59-.25.16-.17.24-.37.24-.6 0-.24-.08-.44-.24-.6a.791.791 0 00-.59-.24h-2.05c-.24 0-.44.08-.6.25-.17.16-.25.36-.25.59z" />
    </svg>
  );
};
