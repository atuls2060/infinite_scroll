import React from 'react'
import Styles from "./contact.item.module.css"

const ContactItem = ({ picture, name }) => {
  return (
    <div className={Styles.contact_item}>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default ContactItem