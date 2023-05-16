"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10 text-center">
      <h1>Something Went Wrong</h1>
      <button
        className="hover:text-amber-600 font-semibold"
        type="button"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
