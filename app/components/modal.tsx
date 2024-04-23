"use client";

import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { cn } from "../shared/cn";
import { ModalContext } from "../providers";
import { cva, type VariantProps } from "class-variance-authority";
import { useClickOutside } from "../hooks";
import { CloseIcon } from "../assets/icons";


const ModalVariants = cva(
    "rounded-[14px] relative",
    {
        variants: {
            variant: {
                default: "bg-modal",
            },
            size: {
                sm: "md:w-[476px] w-full",
                md: "md:w-[624px] w-full",
                lg: "md:w-[1040px] w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "sm",
        },
    }
);

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ModalVariants> {
    children: ReactNode;
    closeTimeOut?: number;
}
export const Modal = ({
    children,
    variant,
    size,
    className = "",
    closeTimeOut = 0,
}: ModalContentProps) => {
    const { handleModal } = useContext(ModalContext);

    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside({
        ref: modalRef,
        handler: () => showCloseButton && handleModal()
    })

    const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

    useEffect(() => {
        if (closeTimeOut > 0) {
            const timeoutId = setTimeout(() => {
                setShowCloseButton(true);
            }, closeTimeOut * 1000);

            return () => clearTimeout(timeoutId);
        } else {
            setShowCloseButton(true);
        }
    }, [closeTimeOut]);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (showCloseButton && event.key === 'Escape') {
                handleModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showCloseButton, handleModal]);

    return (
        <div className="fixed overflow-y-auto inset-0 w-full h-full z-50 bg-black bg-opacity-50 flex items-end md:items-center justify-end md:justify-center backdrop-blur-sm">
            <div ref={modalRef} className={cn(ModalVariants({ variant, className, size }))}>
                {children}
                {showCloseButton && (<button onClick={() => handleModal()} className="absolute -top-10 md:-top-7 right-2 md:-right-9 p-2 rounded-full hover:bg-default transition-all"><CloseIcon width={10} height={10} className="text-white" /></button>)}
            </div>
        </div>
    );
};

Modal.displayName = "Modal";
