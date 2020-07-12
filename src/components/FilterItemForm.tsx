import React from 'react';
import { DebounceInput } from 'react-debounce-input';

interface ComponentStateProps {
  queryHandler: any;
}

type AppState = ComponentStateProps;

const FilterItemForm = ({ queryHandler }: AppState) => {
  const textInputRef: any = React.useRef(null);

  const onchangeHandler = (e: any) => {
    queryHandler(e.target.value);
  };

  return (
    <div>
      <form className="flex items-center h-8">
        <div className="border-b-2 w-full text-xl">
          <DebounceInput
            minLength={1}
            debounceTimeout={500}
            className="w-full"
            name="newItem"
            type="text"
            placeholder="    search item"
            onChange={onchangeHandler}
            ref={textInputRef}
          ></DebounceInput>
        </div>
      </form>
    </div>
  );
};

export default FilterItemForm;
