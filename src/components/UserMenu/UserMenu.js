import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <div className={s.container}>
            <span className={s.name}>Hello, {name}!</span>
            <button
                className={s.button}
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
            >
                Log out
      </button>
        </div>
    );
}