import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import React from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const AcceptanceTermsCheckbox = ({ field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center gap-2">
      <FormControl>
        <Checkbox
          checked={field.value === true}
          onCheckedChange={(checked) => field.onChange(checked)}
        />
      </FormControl>
      <FormLabel className="text-xs font-normal">
        من خلال إنشاء حساب ، فإنك توافق على{" "}
        <Link
          href={"/terms-and-conditions#termsAndConditions"}
          className="text-xs hover:underline"
        >
          الشروط والأحكام
        </Link>
      </FormLabel>
      <FormMessage />
    </FormItem>
  );
};

export default AcceptanceTermsCheckbox;
