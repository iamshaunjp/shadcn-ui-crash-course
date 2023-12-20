import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function History() {

  const contacts = [
    {
      link: "https://www.facebook.com/",
      icon: <Facebook size={36}/>
    },
    {
      link: "https://twitter.com/",
      icon: <Twitter size={36}/>
    },
    {
      link: "https://www.instagram.com/",
      icon: <Instagram size={36}/>
    },
  ]
    return (
      <main className="flex flex-row justify-center content-start min-h-screen mb-16 p-0 md:p-10">
        {contacts.map(contact => (
          <div key={contact.link} className='flex items-center justify-center w-20 h-20 border rounded-sm shadow mx-2 md:text-2xl'>
            <a href={contact.link} target="_blank" rel="noreferrer">
              {contact.icon}
            </a>
          </div>
        ))}
      </main>
    )
  }