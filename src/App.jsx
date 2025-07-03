import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        {/* Name */}
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

        {/* Email */}
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

        {/* Message */}
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full px-3 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message.message}</p>}

        {/* Submit */}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
