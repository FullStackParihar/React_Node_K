import React from 'react';

const ContactCard = ({ contacts }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-900 py-6">Contact List</h1>
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-96 h-[300px]"
          >
            <img
              src={contact.pic}
              alt={`${contact.name}'s avatar`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800">{contact.name}</h2>
            <p className="text-gray-600 text-sm">📞 {contact.phone}</p>
            <p className="text-gray-600 text-sm">✉️ {contact.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
