import type { Route } from "./+types";
// import { Form } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Portfolio Dev | Contact" },
//     { name: "description", content: "Custom portfolio dev development" },
//   ];
// }

// export async function action({ request }:Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const subject = formData.get('subject') as string;
//   const message = formData.get('message') as string;

//   const errors:Record<string, string> = {}; //key is string and value are string as well

//   if(!name) errors.name = 'Name is required';
//   if(!email) {
//     errors.email = 'Email is required';
//   } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
//     errors.email = 'Invalid email format';
//   }
//   if(!subject) errors.subject = 'Subject is required';
//   if(!message) errors.message = 'Message is required';

//   if(Object.keys(errors).length > 0){
//     return { errors }
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message
//   }

//   return {message: 'Form submitted successfully', data};
// }

const ContactPage = ({ actionData, }: Route.ComponentProps) => {

  return ( 

    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 ">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Contact Me
        </h2>

        <form action={import.meta.env.VITE_CONTACT_FORM} method="POST" className="space-y-6">
          <div>
            <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-300 bg-transparent">Full Name</label>
            <input id="name" type="text" name="name"
            className="w-full focus:outline-none focus:ring-1 focus:ring-blue-400
             mt-1 px-4 py-2 border border-gray-700
            rounded-lg bg-gray-900 text-gray-100" />

          </div>

          <div>
            <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-300">Email</label>
            <input id="email" type="email" name="email"
            className="w-full focus:outline-none focus:ring-1 focus:ring-blue-400
             mt-1 px-4 py-2 border border-gray-700
            rounded-lg bg-gray-900 text-gray-100" />

          </div>

          <div>
            <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-gray-300">Subject</label>
            <input id="subject" type="text" name="subject"
            className="w-full focus:outline-none focus:ring-1 focus:ring-blue-400
            mt-1 px-4 py-2 border border-gray-700
            rounded-lg bg-gray-900 text-gray-100" />

          </div>

          <div>
            <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" name="message"
            className="w-full focus:outline-none focus:ring-1 focus:ring-blue-400
            mt-1 px-4 py-2 border border-gray-700
            rounded-lg bg-gray-900 text-gray-100" />

          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
    </div>

   );
}
 
export default ContactPage;