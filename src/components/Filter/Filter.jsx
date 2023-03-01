import { FormInput } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors.js';
import { onChangeFilter } from 'redux/filtersSlice.js';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <FormInput
        type="text"
        value={filter}
        onChange={event => dispatch(onChangeFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;
