import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import s from './ContactsView.module.css';


export default function ContactsView() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    return (
        <div className={s.container}>
            <h1 className={s.title}>
                {' '}
                {/* <span>
                    <PhoneIcon color="primary" style={{ fontSize: 50 }} />
                </span>{' '} */}
        Phonebook
      </h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}