import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';


const CountdownTimer: React.FC<{ eventTime: Moment }> = ({ eventTime }) => {
  const [countdown, setCountdown] = useState('');
  const [isEventOngoing, setIsEventOngoing] = useState(false);
  const [isEventEnded, setIsEventEnded] = useState(false);

  useEffect(() => {
    let animateFrameId: number;

    const updateCountdown = () => {
      const now = moment();

      if (now < eventTime) {
        const remainingTime = eventTime.diff(now);
        const duration = moment.duration(remainingTime);
        const days = Math.floor(duration.asDays());
        const hours = duration.hours().toString().padStart(2, '0');
        const minutes = duration.minutes().toString().padStart(2, '0');
        const seconds = duration.seconds().toString().padStart(2, '0');

        setCountdown(
          `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`,
        );
        setIsEventOngoing(false);
      } else {
        const eventEndTime = moment(eventTime)
          .add(2, 'hours')
          .add(30, 'minutes');
        const eventDuration = moment.duration(eventEndTime.diff(now));
        const hours = eventDuration.hours().toString().padStart(2, '0');
        const minutes = eventDuration.minutes().toString().padStart(2, '0');
        const seconds = eventDuration.seconds().toString().padStart(2, '0');

        if (eventDuration.asMilliseconds() <= 0) {
          setCountdown('00 hours 00 minutes 00 seconds');
          setIsEventEnded(true);
        } else {
          setCountdown(`${hours} hours ${minutes} minutes ${seconds} seconds`);
        }
        setIsEventOngoing(true);
      }

      animateFrameId = requestAnimationFrame(updateCountdown);
    };

    updateCountdown();

    return () => {
      cancelAnimationFrame(animateFrameId);
      setCountdown('');
      setIsEventOngoing(false);
    };
  }, [eventTime]);

  return (
    <div className="w-full my-12 bg-white h-96 flex items-center">
      <div className=" relative w-full max-w-[1240px] mx-auto text-center px-4 flex items-center justify-center ">
        <div className="  h-60 bg-transparent w-full max-w-[1240px] mx-auto text-center ">
          <div className="grid grid-cols-2  grid-row-2 h-full">
            <div className="border-l-[10px] border-t-[10px] border-[#0b469c] order-1 h-[60px] w-[60px] self-start justify-self-start"></div>
            <div className="border-r-[10px] border-t-[10px] border-[#46afe0] order-2 h-[60px] w-[60px] self-start justify-self-end"></div>
            <div className="border-l-[10px]  border-b-[10px] border-[#46afe0] order-3 h-[60px] w-[60px] self-end justify-self-start"></div>
            <div className="border-r-[10px] border-b-[10px] border-[#0b469c] order-4 h-[60px] w-[60px] self-end justify-self-end "></div>
          </div>
        </div>
        <div className="absolute flex justify-center flex-col items-center gap-2 ">
          <h2 className="sm:text-2xl font-semibold">Auction Countdown Timer</h2>
          {isEventOngoing ? (
            <>
              {isEventEnded ? (
                <>
                  <p className="text-lg">Auction is over</p>
                  <p className="lg:text-6xl mb-8 sm:text-4xl text-xl font-semibold">
                    {countdown}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg">Auction is ongoing</p>
                  <p className="text-lg">Remaining time </p>
                  <p className="lg:text-6xl mb-8 sm:text-4xl text-xl font-semibold">
                    {countdown}
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="lg:text-6xl mb-8 sm:text-4xl text-xl font-semibold">
                {' '}
                {countdown}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
