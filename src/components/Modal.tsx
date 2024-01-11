import {useEffect, useRef} from "react";

const Modal = ({setIsOpen, id, title, content, writer}: any) => {

  const closeModalHandler = () => {
    setIsOpen(false);
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }

  });
  return (
    <div
      className="z-1 fixed flex justify-center items-center bg-black bg-opacity-80 rounded-10 top-0 left-0 right-0 bottom-0">
      <div className="max-w-full ">
        <div
          className="w-80 h-3/4 z-50 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black rounded-8"
          ref={modalRef}>
          {/*<div className='bg-coz-purple-600 text-white border-none px-20 py-20 rounded-30 cursor-grab ModalBtn'>*/}
          <button
            className='absolute right-4 top-2 ExitBtn'
            onClick={closeModalHandler}>x
          </button>
          <div>모달창입니다.</div>
        </div>
      </div>
    </div>
  )
}
export default Modal;
