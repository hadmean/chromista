import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import { useDebounce } from "react-use";
import { FilterOperators, IColumnFilterBag } from "@hadmean/protozoa";
import { StyledInput } from "../../Form/Styles";
import { SEARCH_DEBOUNCE_WAIT } from "./constants";
import { IFilterProps } from "./types";
import { RenderFilterOperator } from "./_FilterOperator";
import { FilterWrapper } from "./_FilterWrapper";

export function FilterTableByText({
  column: { filterValue, setFilter },
}: IFilterProps<IColumnFilterBag<string>>) {
  const [localValue, setLocalValue] = useState(filterValue);

  useEffect(() => {
    setLocalValue(filterValue);
  }, [filterValue]);

  useDebounce(
    () => {
      setFilter(localValue);
    },
    SEARCH_DEBOUNCE_WAIT,
    [localValue]
  );

  return (
    <FilterWrapper
      filterHasValue={filterValue?.value !== undefined}
      clearFilter={setFilter}
      IconComponent={Search}
      label="Search"
    >
      <RenderFilterOperator
        operators={[
          FilterOperators.CONTAINS,
          FilterOperators.EQUAL_TO,
          FilterOperators.NOT_EQUAL,
        ]}
        filterValue={filterValue}
        setFilter={setFilter}
      />
      <StyledInput
        value={localValue?.value || ""}
        onChange={(e: React.BaseSyntheticEvent) => {
          setLocalValue({
            ...filterValue,
            value: e.target.value || undefined,
          });
        }}
        placeholder="Search"
      />
    </FilterWrapper>
  );
}
