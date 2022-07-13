// import { useState } from 'react';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const loginInputId = nanoid();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter__wrapper}>
      <label className={s.filter__field} htmlFor={loginInputId} />
      Find contact by name:
      <input
        id={loginInputId}
        className={s.filter__input}
        type="text"
        value={filter}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </div>
  );
}

// const mapStateToProps = state => ({
//   filter: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
