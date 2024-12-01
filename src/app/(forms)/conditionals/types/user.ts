import { z } from "zod";
import { schema } from "../schemas/user";

export type User = z.infer<typeof schema>;
