"use client";

import { useForm, Controller } from "react-hook-form";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

type Option = {
  value: "female" | "male" | "other";
  label: "Female" | "Male" | "Other";
};

type Options = OptionsOrGroups<Option, GroupBase<Option>> | undefined;

const options: Options = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "other", label: "Other" },
];

type User = {
  gender: {
    value: "female" | "male" | "other";
    label: "Female" | "Male" | "Other";
  };
};

function ControllerForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (data: User) => console.log(JSON.stringify(data));

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="gender"
        render={({ field }) => (
          <Select className="text-black" options={options} {...field} />
        )}
        rules={{ required: "Campo obrigatório." }}
      />
      {errors.gender && (
        <p className="text-red-500 text-sm">{errors.gender.message}</p>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ControllerForm;
