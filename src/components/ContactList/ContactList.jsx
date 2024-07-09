import css from "./ContactList.module.css";

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contactListItem}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button className={css.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
