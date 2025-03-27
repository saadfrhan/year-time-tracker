import { useEffect, useState } from "react";
import timePassedOfThisYear from "./lib/time-left";
import TimePassedSlider from "./components/time-passed-slider";
import Footer from "./components/footer";
import Seo from "./components/seo";

export default function App() {
  const [data, setData] = useState<
    | {
        percentage: number;
        daysLeft: number;
        hoursLeft: number;
        secondsLeft: number;
        minutesLeft: number;
      }
    | undefined
  >();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(timePassedOfThisYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { daysLeft, hoursLeft, minutesLeft, percentage, secondsLeft } = data;

  return (
    <div className="flex flex-col justify-between space-y-6">
      <Seo
        description={`Track the progress of the year ${new Date().getFullYear()}`}
        title={`${new Date().getFullYear()} Year Progress`}
      />
      <div className="flex flex-col gap-y-6 justify-center">
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
          {new Date().getFullYear()} Year Progress
        </h1>

        <TimePassedSlider percentage={percentage} />

        <div className="flex gap-2 text-2xl flex-wrap font-medium">
          {daysLeft} days, {hoursLeft} hours, {minutesLeft} minutes, and{" "}
          {secondsLeft} seconds left in this year.
        </div>
      </div>

      <Footer />
    </div>
  );
}
