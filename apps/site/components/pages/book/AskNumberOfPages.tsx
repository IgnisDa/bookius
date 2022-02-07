import { Icon } from '@bookius/ui';
import { Popover, Transition } from '@headlessui/react';
import { FC, Fragment, useState } from 'react';
import { BsCheck as CheckIcon } from 'react-icons/bs';

type AskNumberOfPagesComponentProps = {
  executesStartReadingBookMutation: (numPages: number) => Promise<void>;
};

export const AskNumberOfPagesComponent: FC<AskNumberOfPagesComponentProps> = ({
  executesStartReadingBookMutation,
}) => {
  const [numPages, setNumPages] = useState(300);

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel focus={true}>
        {({ close }) => (
          <form
            className="absolute top-full right-0 z-10 mt-3 flex transform items-center space-x-4 rounded-lg rounded-tr-none bg-gray-800  px-3 py-2"
            onSubmit={async (e) => {
              e.preventDefault();
              await executesStartReadingBookMutation(numPages);
              close();
            }}
          >
            <div className="flex-none text-cream-white">Pages</div>:
            <div className="flex-1">
              <input
                className="no-arrows input-bordered input-ghost input input-sm w-16 font-sans text-primary-content"
                type="number"
                value={numPages}
                onChange={(event) => {
                  const val = parseInt(event.target.value);
                  if (val === NaN) setNumPages(0);
                  else setNumPages(val);
                }}
              />
            </div>
            <button>
              <Icon label="Check">
                <CheckIcon className="h-8 w-8 fill-current text-green-500" />
              </Icon>
            </button>
          </form>
        )}
      </Popover.Panel>
    </Transition>
  );
};
