import {
  BookDetailsFragment,
  BookProgressStatus,
  useGetBookStatisticsQuery,
  useGetParticularBookProgressLogsQuery,
  useStartReadingBookMutation,
  useUpdateBookReadingProgressMutation,
} from '@bookius/generated';
import Slider from '@mui/material/Slider';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash.debounce';
import { FC, useEffect, useMemo, useState } from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { StatDisplayComponent } from './StatDisplay';

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
      <div className="flex w-full flex-1 justify-around text-center">
        <StatDisplayComponent
          prefix="You read"
          suffix="times"
          value={completedBooks}
        />
        <StatDisplayComponent
          prefix="Read by"
          suffix="others"
          value={getBookStatisticsQueryData?.bookStatistics.readBy || 0}
        />
        <StatDisplayComponent
          prefix="Reviewed by"
          suffix="readers"
          value={getBookStatisticsQueryData?.bookStatistics.reviewedBy || 0}
        />
      </div>
      {!getParticularBookProgressLogsQueryFetching ? (
        <div className="flex items-center justify-center">
          <AnimatePresence exitBeforeEnter>
            {!latestBookProgressLog ? (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="btn btn-primary mx-auto rounded-lg px-6 py-2 text-3xl font-normal capitalize transition-transform hover:scale-105"
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
                className="flex w-60 select-none items-center space-x-4 md:w-72 lg:w-80 xl:w-96 2xl:w-[450px]"
              >
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
                <span className="rounded-md bg-base-200 px-2 pt-1 md:text-xl">
                  {readingProgress}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <LoadingIcon className="h-8 w-8 animate-spin ease-in-out" />
        </div>
      )}
    </div>
  );
};
