import React, { useState, useEffect } from "react";
import { Filter } from "react-feather";
import { useDebounce } from "react-use";
import { FilterOperators, IColumnFilterBag } from "@hadmean/protozoa";
import { StyledInput } from "../../Form/Styles";
import { SEARCH_DEBOUNCE_WAIT } from "./constants";
import { IFilterProps } from "./types";
import { RenderFilterOperator } from "./_FilterOperator";
import { FilterWrapper } from "./_FilterWrapper";

export function FilterTableByIdField({
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
      IconComponent={Filter}
      label="Id"
    >
      <div style={{ display: "none" }}>
        <RenderFilterOperator
          operators={[FilterOperators.EQUAL_TO]}
          filterValue={filterValue}
          setFilter={setFilter}
        />
      </div>
      <StyledInput
        value={localValue?.value || ""}
        onChange={(e: React.BaseSyntheticEvent) => {
          setLocalValue({
            ...filterValue,
            value: e.target.value || undefined,
          });
        }}
        placeholder="Enter value"
      />
    </FilterWrapper>
  );
}
