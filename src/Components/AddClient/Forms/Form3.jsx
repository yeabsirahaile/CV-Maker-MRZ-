import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Form3() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationality: "",
      passportno: "",
      dateofissue: "",
      dateofexpiry: "",
      birthdate: "",
      age: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-blue-50 rounded-md container mx-auto pt-4 p-2 px-7 space-y-4"
      >
        {/* Rest of the inputs in two columns */}
        <div className="grid grid-cols-2 gap-8 ">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="nationality" className="block">
                    Nationality
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="nationality"
                      placeholder="Enter Nationality"
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
              name="passportno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="passportno" className="block">
                    Passport Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="passportno"
                      placeholder="Enter Passport Number"
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
              name="dateofissue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="dateofissue" className="block">
                    Date of Issue
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="dateofissue"
                      placeholder="Enter Data of issue"
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
              name="dateofexpiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="dateofexpiry" className="block">
                    Date of Expiry
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="dateofexpiry"
                      placeholder="Enter date of expiry"
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
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="birthdate" className="block">
                    Birth Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="birthdate"
                      placeholder="Enter Birth date"
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
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="age" className="block">
                    Age
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="age"
                      placeholder="Enter Age"
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
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
