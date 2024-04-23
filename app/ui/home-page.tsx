"use client";

import { useContext } from "react";
import { ModalContext } from "../providers";
import { AdvertisingModal, DefaultModal } from "../widgets/modals";

export const HomePage = () => {
    const { handleModal } = useContext(ModalContext);

    return (
        <div className="space-y-4">
            <div>
                <h1>Default Modal Window</h1>
                <button className="px-4 rounded-xl font-normal text-sm h-10 bg-default hover:bg-opacity-90 transition-all" onClick={() =>
                    handleModal({
                        children: <DefaultModal />,
                        variant: "default",
                        size: "sm",
                    })
                }>
                    Open Default Modal Window
                </button>
            </div>
            <div>
                <h1>Advertising Modal Window</h1>
                <button className="px-4 rounded-xl font-normal text-sm h-10 bg-default hover:bg-opacity-90 transition-all" onClick={() =>
                    handleModal({
                        children: <AdvertisingModal />,
                        variant: "default",
                        size: "md",
                        closeTimeOut: 5,
                    })
                }>
                    Open Advertising Modal Window
                </button>
            </div>
        </div>
    )
}