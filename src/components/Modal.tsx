import {useEffect, useRef, useState} from "react";
import ReusableForm from "@/components/Form";
import {connectAPI} from "@/app/hooks/connectAPI";

const Modal = ({ setIsOpen, id, title, content, writer }: any) => {
  const [label, setLabel] = useState('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const loginForm = [
    { name: 'username', label: 'username', type: 'string' },
    { name: 'password', label: 'password', type: 'password' },
  ];

  const signupForm = [
    [
      { name: 'id', label: 'id', type: 'id' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'confirm password', label: 'Confirm Password', type: 'confirm password' },
      // { name: 'email', label: 'email'}
      { name: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },
    ],
  ];

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log('Form submitted with data:', formData);

    // 여기서 데이터를 처리하거나 상태를 업데이트할 수 있음
    connectAPI(formData).then(r => {
      // console.log(r);
    })
    closeModalHandler();
  };

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
  }, [setIsOpen, modalRef]);

  useEffect(() => {
    setLabel(title);
    console.log(title);
  }, [title]);

  return (
    <div
      className="z-50 fixed flex justify-center items-center bg-black bg-opacity-80 rounded-10 top-0 left-0 right-0 bottom-0">
      <div className="max-w-full ">
        <div
          className="flex flex-col p-12 z-50 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black rounded-8 block"
          style={{width: '472px', height: '379.5px'}}
          ref={modalRef}>
          {/*<div className='bg-coz-purple-600 text-white border-none px-20 py-20 rounded-30 cursor-grab ModalBtn'>*/}
          <div>
            <div className='flex flex-col mt-2'>
              <div className='inline-flex items-center justify-center'>
                <div>
                  <div className="ScFigure-sc-wkgzod-0 jqBoqC tw-svg inline-flex items-center">
                    <svg width="50" height="50" viewBox="0 0 24 28">
                      <g fillRule="evenodd">
                        <path
                          d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0 0 5v18h6v5l5-5h4l9-9V0H5zm17 13-4 4h-4l-4 4v-4H6V2h16v11z"></path>
                        <path fill="#FFF" d="m18 17 4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='ml-4 text-center'>
                  <div className="Layout-sc-1xcs6mc-0 JHhFm">
                    <h4 id="modal-root-header"
                        className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 ivranM ezNtJL tw-title">
                      {label === 'login' ? 'Xwitch에 로그인' : 'Xwitch에 가입하세요'}

                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(label === 'login' || label === 'signup') && (
            <ReusableForm
              inputs={label === 'login' ? loginForm : signupForm[currentStep - 1]}
              onSubmit={handleFormSubmit}
              submitButtonLabel={"가입 완료"}
              nextStepHandler={() => setCurrentStep(currentStep + 1)}
              previousStepHandler={() => setCurrentStep(currentStep - 1)}
              goToSignupHandler={() => setLabel('signup')}
              goToLoginHandler={() => setLabel('login')}
              currentStep={currentStep}
              formName={label}
            />
          )}
          <button
            className='absolute right-4 top-2 ExitBtn'
            onClick={closeModalHandler}>x
          </button>
        </div>

      </div>

    </div>
  )
}
export default Modal;
