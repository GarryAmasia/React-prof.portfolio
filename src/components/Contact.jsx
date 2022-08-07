import React from "react";

const Contact = () => {
  return (
    <div className="bg-[black] text-[white] h-[65vh] flex justify-center  p-4">
      <form
        action="https://getform.io/f/9788c421-d475-4e22-a35f-8cddac0545ec"
        className="flex flex-col max-w-[800px] w-full pt-4 text-center"
        method="post"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-t-4 border-pink-600 text-[white]">
            contact
          </p>
          <p>Shoot me an email ;)</p>
        </div>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 m-4 rounded-md text-[black]"
        />
        <input
          type="email"
          placeholder="johnfoo@yahoo.com"
          name="email"
          className="m-4 p-2 rounded-md text-[black]"
        />
        <textarea
          name="message"
          className="m-4 rounded-md p-2 text-[black]"
          placeholder="type your message here "
          rows={10}
        ></textarea>
        <button className="text-white w-[100px] h-[40px] border-2 mx-auto my-2 rounded-md hover:bg-pink-700  hover:border-pink-700">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
