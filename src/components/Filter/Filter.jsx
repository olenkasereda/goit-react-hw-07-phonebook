import { FormInput } from './Filter.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { contactsFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  function onChangeFilter(event) {
    dispatch(contactsFilter(event.currentTarget.value));
  }
  return (
    <label>
      Find contacts by name
      <FormInput type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
