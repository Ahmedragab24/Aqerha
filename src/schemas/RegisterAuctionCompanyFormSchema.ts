import { z } from "zod";

export const RegisterAuctionCompanyFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
