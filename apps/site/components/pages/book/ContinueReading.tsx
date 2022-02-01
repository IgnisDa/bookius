import {
  BookDetailsFragment,
  BookProgressStatus,
  useGetBookStatisticsQuery,
  useGetParticularBookProgressLogsQuery,
  useStartReadingBookMutation,
  useUpdateBookReadingProgressMutation,
} from '@bookius/generated';
import * as Slider from '@radix-ui/react-slider';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { FC, useEffect, useMemo, useState } from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import { toast } from 'react-toastify';

type ContinueReadingComponentProps = { book: BookDetailsFragment };

export const ContinueReadingComponent: FC<ContinueReadingComponentProps> = ({
  book,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);

  const [, executesStartReadingBookMutation] = useStartReadingBookMutation();
  const [, executeUpdateBookReadingProgressMutation] =
    useUpdateBookReadingProgressMutation();

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

  const [{ data: getBookStatisticsQueryData }] = useGetBookStatisticsQuery({
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
      <div className="flex justify-around flex-1 w-full text-center">
        <div>
          <span className="block text-lg md:text-2xl">You read</span>
          <span className="block mt-2 text-lg font-semibold md:text-6xl text-accent">
            {completedBooks}
          </span>
          <span className="block text-lg md:text-2xl">times</span>
        </div>
        <div>
          <span className="block text-lg md:text-2xl">Read by</span>
          <span className="block mt-2 text-lg font-semibold md:text-6xl text-accent">
            {getBookStatisticsQueryData?.bookStatistics.readBy || 0}
          </span>
          <span className="block text-lg md:text-2xl">others</span>
        </div>
        <div>
          <span className="block text-lg md:text-2xl">Reviewed by</span>
          <span className="block mt-2 text-lg font-semibold md:text-6xl text-accent">
            {getBookStatisticsQueryData?.bookStatistics.reviewedBy || 0}
          </span>
          <span className="block text-lg md:text-2xl">readers</span>
        </div>
      </div>
      {!getParticularBookProgressLogsQueryFetching ? (
        <div className="flex items-center justify-center">
          <AnimatePresence exitBeforeEnter>
            {!latestBookProgressLog ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-6 py-2 mx-auto text-3xl font-normal capitalize transition-transform rounded-lg btn btn-primary hover:scale-105"
                onClick={async () => {
                  await executesStartReadingBookMutation({
                    input: { bookId: book.id, numPages: 300 },
                  });
                  executeGetParticularBookProgressLogsQuery();
                }}
              >
                {completedBooks === 0 ? 'Start Reading' : 'Read again'}
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4"
              >
                <Slider.Root
                  defaultValue={[latestBookProgressLog.percentage]}
                  onValueChange={(value) => {
                    const progress = value.at(0)!;
                    setReadingProgress(progress);
                    handleUpdateReadingProgress(
                      progress,
                      latestBookProgressLog.id
                    );
                  }}
                  max={100}
                  min={0}
                  step={1}
                  aria-label="progress"
                  className="relative flex items-center h-5 select-none w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[450px]"
                >
                  <Slider.Track className="relative flex-1 h-1.5 bg-purple-300 rounded-full">
                    <Slider.Range className="absolute block h-full bg-purple-700 rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-5 h-5 bg-white border-gray-600 rounded-full focus:border-2" />
                </Slider.Root>
                <span className="px-2 pt-1 rounded-md md:text-xl bg-base-200">
                  {readingProgress}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <LoadingIcon className="w-8 h-8 ease-in-out animate-spin" />
        </div>
      )}
    </div>
  );
};
