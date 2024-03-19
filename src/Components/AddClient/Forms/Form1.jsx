import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useFormContext } from "../../../context/FormContext";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
});

export default function Form1() {
  // 1. Define your form.
  const { form } = useFormContext();
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fullName = form.getValues("fullName");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-50 rounded-md container mx-auto pt-4 p-2 px-7 space-y-4"
      >
        {/* First input with colspan 2 */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="fullName" className="block mb-1">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      nam={fullName}
                      id="fullName"
                      placeholder="Enter Full Name"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Rest of the inputs in two columns */}
        <div className="grid grid-cols-2 gap-8 ">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="contract"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="contract" className="block">
                    Contract
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="contract"
                      placeholder="Contract Year"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="position" className="block">
                    Position
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="position"
                      placeholder="Working position"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="salary" className="block">
                    Salary
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="salary"
                      placeholder="Asking salary"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="telephone" className="block">
                    Telephone
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="telephoneNo"
                      placeholder="Telephone Number"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthplace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="birthplace" className="block">
                    Birth Place
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="birthplace"
                      placeholder="Birth Place"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="remark" className="block">
                    Remark
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="remark"
                      placeholder="Write remark"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ... (repeat for other input fields) ... */}
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem className={`text-blue-600`}>
                  <FormLabel htmlFor="religion" className="block">
                    Religion
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-2 border-blue-200 rounded-md w-full p-2 h-7">
                        <SelectValue placeholder="Select Religion" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Muslim">Muslim</SelectItem>
                      <SelectItem value="Non-muslim">Non-muslim</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="civilStatus"
              render={({ field }) => (
                <FormItem className={`text-blue-600`}>
                  <FormLabel htmlFor="civilStatus" className="block">
                    Civil Status
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-2 border-blue-200 rounded-md w-full p-2 h-7">
                        <SelectValue placeholder="Select martial status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="Married">Married</SelectItem>
                      <SelectItem value="Divorced">Divorced</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="height" className="block">
                    Height
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="height"
                      placeholder="Enter height in CM"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="weight" className="block">
                    Weight
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="weight"
                      placeholder="Enter Weight in KG"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="education" className="block">
                    Education
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="education"
                      placeholder="Educational level"
                      className="border-2 border-blue-200 rounded-md w-full p-2 h-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ... (repeat for other input fields) ... */}
          </div>
        </div>
      </form>
    </Form>
  );
}
