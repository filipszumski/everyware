import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, PropsWithChildren, SetStateAction } from "react";

type ModalProps = PropsWithChildren<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
}>;

export const Modal = ({
  open,
  setOpen,
  description,
  title,
  children,
}: ModalProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30 transition-all"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <Dialog.Panel
                className={`
                  grid grid-cols-1 gap-4 w-full m-6 rounded-lg bg-backgroundLight shadow-lg p-6
                  sm:w-10/12
                  md:w-8/12
                  lg:w-[640px]`}
              >
                <div>
                  <Dialog.Title as="h2" className="font-bold text-xl">
                    {title}
                  </Dialog.Title>
                  <Dialog.Description
                    as="p"
                    className="text-textSecondary text-md"
                  >
                    {description}
                  </Dialog.Description>
                </div>
                {children}
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
