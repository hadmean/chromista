import React from "react";
import { BaseSkeleton } from "../Base";

export interface IProps {
  count: number;
}

export function ListSkeleton({ count }: IProps) {
  return (
    <>
      {Array.from({ length: count }, (_, k) => k + 1).map((key) => (
        <BaseSkeleton key={key} height="44px" bottom={2} />
      ))}
    </>
  );
}
