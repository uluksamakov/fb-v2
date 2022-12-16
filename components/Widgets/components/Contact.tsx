import type { NextPage } from "next";

type Props = {
  contact: Contact;
};

type Contact = {
  src: string;
  name: string;
};

const Contact: NextPage<Props> = ({ contact }) => {
  const { name, src } = contact;

  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <img
        className="rounded-full object-contain w-[50px] h-[50px]"
        src={src}
        alt={name}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-8 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
};

export default Contact;
