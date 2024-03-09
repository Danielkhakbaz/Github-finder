"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="font-bold text-4xl">An error occured!</p>
      <div className="mockup-code w-min">
        <pre data-prefix="~">
          <code>{error.message}</code>
        </pre>
      </div>
      <button className="btn btn-error" onClick={reset}>
        <span>Try Again</span>
      </button>
    </div>
  );
};

export default Error;
