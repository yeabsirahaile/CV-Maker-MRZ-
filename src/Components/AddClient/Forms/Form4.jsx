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
import { useFormContext } from "../../../context/FormContext";

export default function Form4() {
  // 1. Define your form.
  const {form} = useFormContext();

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
        className="bg-blue-50 rounded-md container mx-auto pt-1 p-2 px-7 space-y-1"
      >
        {/* Rest of the inputs in two columns */}
        <div>
          <div className="space-y-1">
            <FormField
              control={form.control}
              name="numberofyears"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="numberofyears" className="block">
                    Number of Years
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="numberofyears"
                      placeholder="Number of Expirenced year"
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
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="country" className="block">
                    Country
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="country"
                      placeholder="Country Worked Before"
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
      </form>
    </Form>
  );
}
