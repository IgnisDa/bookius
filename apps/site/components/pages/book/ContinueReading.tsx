import {
  BookDetailsFragment,
  BookProgressStatus,
  useAddBookToShelfMutation,
  useCreateUserShelfMutation,
  useGetBookStatisticsQuery,
  useGetParticularBookProgressLogsQuery,
  useGetUserShelvesQuery,
  useRemoveBookFromShelfMutation,
  useStartReadingBookMutation,
  useUpdateBookReadingProgressMutation,
} from '@bookius/generated';
import { Icon } from '@bookius/ui';
import { Popover } from '@headlessui/react';
import Slider from '@mui/material/Slider';
import { CheckCircledIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { Root as ToggleRoot } from '@radix-ui/react-toggle';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import truncate from 'lodash.truncate';
import { FC, useEffect, useMemo, useState } from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { AskNumberOfPagesComponent } from './AskNumberOfPages';
import { StatDisplayComponent } from './StatDisplay';

const variants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const MotionPopoverButton = motion(Popover.Button);
const MotionMinusIcon = motion(MinusIcon);
const MotionPlusIcon = motion(PlusIcon);

type ContinueReadingComponentProps = { book: BookDetailsFragment };

export const ContinueReadingComponent: FC<ContinueReadingComponentProps> = ({
  book,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [newShelfName, setNewShelfName] = useState('');

  const [, executesStartReadingBookMutation] = useStartReadingBookMutation();
  const [, executeUpdateBookReadingProgressMutation] =
    useUpdateBookReadingProgressMutation();
  const [, executeAddBookToShelfMutation] = useAddBookToShelfMutation();
  const [, executeRemoveBookFromShelfMutation] =
    useRemoveBookFromShelfMutation();
  const [, executeCreateUserShelfMutation] = useCreateUserShelfMutation();

  const [
    {
      data: getParticularBookProgressLogsQueryData,
      fetching: getParticularBookProgressLogsQueryFetching,
    },
    executeGetParticularBookProgressLogsQuery,
  ] = useGetParticularBookProgressLogsQuery({
    variables: { bookId: book.id },
    requestPolicy: 'network-only',
  });

  const [
    { data: getUserShelvesQueryData, fetching: getUserShelvesQueryFetching },
    executeGetUserShelvesQuery,
  ] = useGetUserShelvesQuery({
    variables: { take: 9 },
  });

  const [{ data: getBookStatisticsQueryData }, executeGetBookStatisticsQuery] =
    useGetBookStatisticsQuery({
      variables: { bookId: book.id },
    });

  const completedBooks =
    getParticularBookProgressLogsQueryData?.userParticularBookProgressLogs.filter(
      (e) => e.status === BookProgressStatus.Completed
    ).length || 0;

  const latestBookProgressLog =
    getParticularBookProgressLogsQueryData?.userParticularBookProgressLogs
      .filter((e) => e.status !== BookProgressStatus.Completed)
      .at(0);

  useEffect(
    () => setReadingProgress(latestBookProgressLog?.percentage!),
    [latestBookProgressLog]
  );

  const updateReadingProgress = async (progress: number, id: number) => {
    const { data } = await executeUpdateBookReadingProgressMutation({
      input: { id: id, percentage: progress },
    });
    if (progress === 100) executeGetParticularBookProgressLogsQuery();
    if (!data?.updateBookProgressLog)
      toast.error(
        'There was a problem updating your progress, please reload and try again'
      );
    else toast.success(`Reading progress updated to ${progress}%`);
  };

  const handleUpdateReadingProgress = useMemo(
    () => debounce(updateReadingProgress, 1500),
    []
  );

  useEffect(() => () => handleUpdateReadingProgress.cancel(), []);

  return (
    <div className="w-full space-y-4 sm:space-y-6 md:space-y-10">
      <div className="flex w-full flex-1 justify-around text-center">
        <StatDisplayComponent
          prefix="You read"
          value={completedBooks}
          suffix="times"
        />
        <StatDisplayComponent
          prefix="Read by"
          value={getBookStatisticsQueryData?.bookStatistics.readBy || 0}
          suffix="others"
        />
        <StatDisplayComponent
          prefix="Added to"
          value={getBookStatisticsQueryData?.bookStatistics.addedToShelves || 0}
          suffix="shelves"
        />
      </div>
      {!getParticularBookProgressLogsQueryFetching ? (
        <div className="flex items-center justify-center">
          <AnimatePresence exitBeforeEnter>
            {!latestBookProgressLog ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Overlay
                      className={clsx(
                        open ? 'fixed inset-0 opacity-30' : 'opacity-0',
                        'bg-black'
                      )}
                    />
                    <MotionPopoverButton
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="btn btn-primary mx-auto rounded-lg px-6 py-2 text-3xl font-normal capitalize transition-transform hover:scale-105"
                    >
                      {completedBooks === 0 ? 'Start Reading' : 'Read again'}
                    </MotionPopoverButton>
                    <AskNumberOfPagesComponent
                      executesStartReadingBookMutation={async (
                        numPages: number
                      ) => {
                        await executesStartReadingBookMutation({
                          input: { bookId: book.id, numPages: numPages },
                        });
                        executeGetParticularBookProgressLogsQuery();
                      }}
                    />
                  </>
                )}
              </Popover>
            ) : (
              <motion.div className="flex w-60 select-none items-center space-x-4 md:w-72 lg:w-80 xl:w-96 2xl:w-[450px]">
                <Slider
                  key={'slider'}
                  aria-label="Always visible"
                  defaultValue={latestBookProgressLog.percentage}
                  onChange={(_, value) => {
                    const progress = value as number;
                    setReadingProgress(progress);
                    handleUpdateReadingProgress(
                      progress,
                      latestBookProgressLog.id
                    );
                  }}
                />
                <span className="rounded-md bg-base-200 px-2 pt-1 text-cream-white md:text-xl">
                  {readingProgress}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Icon label="Loading progress logs">
            <LoadingIcon className="h-9 w-9 animate-spin ease-in-out" />
          </Icon>
        </div>
      )}
      {!getUserShelvesQueryFetching ? (
        <div className="space-y-8">
          <div className="text-center font-heading text-3xl underline decoration-wavy">
            Add to shelves
          </div>
          <div className="grid grid-cols-2 gap-y-5 text-center md:grid-cols-3">
            {getUserShelvesQueryData?.getUserShelves.map((shelf) => {
              const isBookInShelf =
                shelf.booksInThisShelf
                  .flatMap((bits) => bits.book.id) // booksInThisShelf
                  .findIndex((b) => b === book.id) !== -1; // technically this should be a unique array
              return (
                <ToggleRoot
                  key={shelf.id}
                  defaultPressed={isBookInShelf}
                  className="flex items-center space-x-4"
                  onPressedChange={async (pressed) => {
                    const input = { bookId: book.id, shelfId: shelf.id };
                    if (pressed) await executeAddBookToShelfMutation({ input });
                    else await executeRemoveBookFromShelfMutation({ input });
                    executeGetUserShelvesQuery({
                      requestPolicy: 'network-only',
                    });
                    executeGetBookStatisticsQuery({
                      networkPolicy: 'network-only',
                    });
                  }}
                >
                  <AnimatePresence exitBeforeEnter>
                    {isBookInShelf ? (
                      <MotionMinusIcon
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="h-6 w-6 rounded-lg border-2 border-gray-600 bg-base-300 fill-current text-red-500 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
                      />
                    ) : (
                      <MotionPlusIcon
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="h-6 w-6 rounded-lg border-2 border-gray-600 bg-base-300 fill-current text-green-500 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
                      />
                    )}
                  </AnimatePresence>
                  <span className="text-lg">
                    {truncate(shelf.name, { length: 15 })}
                  </span>
                </ToggleRoot>
              );
            })}
          </div>
          <form
            className="items-center justify-center space-y-2 md:flex md:space-x-4 md:space-y-0"
            onSubmit={async (e) => {
              e.preventDefault();
              const { data } = await executeCreateUserShelfMutation({
                input: { name: newShelfName },
              });
              if (data?.createUserShelf.__typename === 'ShelfDto') {
                executeGetUserShelvesQuery({ requestPolicy: 'network-only' });
                executeGetBookStatisticsQuery({
                  networkPolicy: 'network-only',
                });
                setNewShelfName('');
              } else toast.error('There was an error creating the shelf');
            }}
          >
            <div className="text-gray-300">Add new shelf:</div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                required
                value={newShelfName}
                className="input input-sm"
                onChange={(val) => setNewShelfName(val.target.value)}
              />
              <button>
                <Icon label="Create shelf">
                  <CheckCircledIcon className="h-8 w-8 text-lime-500" />
                </Icon>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Icon label="Loading shelves">
            <LoadingIcon className="h-9 w-9 animate-spin" />
          </Icon>
        </div>
      )}
    </div>
  );
};
