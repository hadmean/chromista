import React from "react";
import { Filter } from "react-feather";
import { ISystemStatusForDisplay } from "../../../types";
import { FormMultiSelect } from "../../Form/FormSelect";
import { IFilterProps, IColumnFilterBag, FilterOperators } from "./types";
import { RenderFilterOperator } from "./_FilterOperator";
import { FilterWrapper } from "./_FilterWrapper";

export const FilterTableByStatus = (statuses: ISystemStatusForDisplay[]) =>
  function StatusFilterImpl({
    column: { filterValue, setFilter },
  }: IFilterProps<IColumnFilterBag<string[]>>) {
    return (
      <FilterWrapper
        filterHasValue={filterValue?.value !== undefined}
        clearFilter={setFilter}
        IconComponent={Filter}
      >
        <RenderFilterOperator
          operators={[FilterOperators.IN, FilterOperators.NOT_IN]}
          filterValue={filterValue}
          setFilter={setFilter}
        />
        <div style={{ minWidth: "250px" }}>
          <FormMultiSelect
            selectData={statuses}
            values={filterValue?.value || []}
            onChange={(value) => {
              setFilter({
                ...filterValue,
                value,
              });
            }}
          />
        </div>
      </FilterWrapper>
    );
  };
