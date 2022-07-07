import React from 'react';
import { mapIdAndNameToSelectData } from '../../Form/mappers';
import { FormMultiSelect } from '../../Form/FormSelect';
import { FilterWrapper } from './_FilterWrapper';
import { IFilterProps } from './types';

export const FilterTableByListSelection = (
  bag: {
      onChange: (word: string) => void;
      selections: {id: string, name: string}[];
    },
) => function FilterTableByListSelectionImpl({
  column: {
    filterValue = [],
    setFilter,
  },
}: IFilterProps<string[]>) {
  return (
    <FilterWrapper
      filterHasValue={filterValue.length > 0}
      clearFilter={setFilter}
      iconType="list"
    >
      <div style={{ minWidth: '250px' }}>
        <FormMultiSelect
          selectData={mapIdAndNameToSelectData(bag.selections)}
          values={filterValue}
          onChange={setFilter}
        />
      </div>
    </FilterWrapper>
  );
};