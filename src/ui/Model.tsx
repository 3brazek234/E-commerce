import { type FC } from "react";
import type { ModelProps } from "../Constants/interfaces";
import { IoClose } from "react-icons/io5";

const Modal: FC<ModelProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  bgColor = "bg-white",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />

  
        <div className={`
          relative z-50 w-full transform overflow-hidden rounded-lg bg-white 
          ${size === 'sm' ? 'max-w-sm mx-4' : 'max-w-md mx-4'}
          shadow-xl transition-all
        `}>
    
          <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <IoClose className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
