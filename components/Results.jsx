import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 max-w-6xl mx-auto">
      {results.map((result) => {
        return (
          <div>
            <Card result={result} />
          </div>
        );
      })}
    </div>
  );
}
