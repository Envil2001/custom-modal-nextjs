"use client";

import { useContext } from "react";
import { ModalContext } from "../providers";
import { AdvertisingModal, DefaultModal } from "../widgets/modals";
import SyntaxHighlighter from "react-syntax-highlighter";
import atelierCaveDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";

export const HomePage = () => {
    const { handleModal } = useContext(ModalContext);

    return (
        <div className="grid grid-cols-2 gap-6">
            <div>
                <h1>Default Modal Window</h1>
                <button className="mb-4 px-4 rounded-xl font-normal text-sm h-10 bg-default hover:bg-opacity-90 transition-all" onClick={() =>
                    handleModal({
                        children: <DefaultModal />,
                        variant: "default",
                        size: "sm",
                    })
                }>
                    Open Default Modal Window
                </button>

                <SyntaxHighlighter className="rounded-xl" language="react" style={atelierCaveDark}>
                    {`
export const HomePage = () => {
const { handleModal } = useContext(ModalContext);
  return (
    <button onClick={() =>
        handleModal({
            children: <DefaultModal />,
            variant: "default",
            size: "sm",
        })
    }>
        Open Default Modal Window
    </button>
  );
}
        `}
                </SyntaxHighlighter>
            </div>
            <div>
                <h1>Advertising Modal Window</h1>
                <button className="mb-4 px-4 rounded-xl font-normal text-sm h-10 bg-default hover:bg-opacity-90 transition-all" onClick={() =>
                    handleModal({
                        children: <AdvertisingModal />,
                        variant: "default",
                        size: "md",
                        closeTimeOut: 5,
                    })
                }>
                    Open Advertising Modal Window
                </button>

                <SyntaxHighlighter className="rounded-xl" language="react" style={atelierCaveDark}>
                    {`
export const HomePage = () => {
const { handleModal } = useContext(ModalContext);
  return (
    <button onClick={() =>
        handleModal({
            children: <AdvertisingModal />,
            variant: "default",
            size: "md",
            closeTimeOut: 5,
        })
    }>
    Open Advertising Modal Window
    </button>
  );
}
        `}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}