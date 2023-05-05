import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";


export default function FormUsa() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Name is required!"),
    surname: yup.string().required("Surname is required!"),
    email: yup.string().email().required("Email required!"),
    city: yup.string().required("City required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "entries"), data);
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
  };

  return (
    <div className="max-w-screen-2xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="mb-4">
          <label htmlFor="firstName" className="label">
            Name
          </label>
          <input
            type="text"
            placeholder=""
            id="firstName"
            {...register("firstName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="surname" className="label">
            Surname
          </label>
          <input
            type="text"
            placeholder=""
            id="surname"
            {...register("surname")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.surname?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            placeholder=""
            id="email"
            {...register("email")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="label">
            City
          </label>
          <input
            type="text"
            placeholder=""
            id="city"
            {...register("city")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.city?.message}</p>
        </div>

        <div className="mb-4">
          <label className="label">Cities</label>

          <div>

            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value="New York"
                {...register("visitCity")}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">New York</span>
            </label>

            
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value="Orlando"
                {...register("visitCity")}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Orlando</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="San Francisco"
                {...register("visitCity")}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">San Francisco</span>
            </label>
          </div>
          <p className="text-red-500">{errors.city?.message}</p>
        </div>

        <div className="mb-4">
          <label className="label">Yes or No?</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="Yes"
                {...register("GovAccount")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="No"
                {...register("GovAccount")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
          <p className="text-red-500">{errors.yesOrNo?.message}</p>
        </div>

        <input
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}
