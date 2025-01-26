import { z } from "zod";
const user = z.object({
  username: z.string(),
  password: z.string().min(10),
  birth_date: z.date(),
  age: z.number().int().positive(),
  address: z.string(),
  phone_number: z.string().min(10),
  is_married: z.boolean(),
});
try {
  const result = user.parse({
    username: "mhamed",
    password: "12456378",
    birth_date: new Date("1990-09-07"),
    age: 34,
    address: "alger",
    phone_number: "9999999999",
    is_married: false,
  });
  console.log(result);
} catch (err) {
  console.log(err);
}
/*mySchema.parse("tuna");
mySchema.parse(12);
mySchema.safeParse("tuna");
mySchema.safeParse(12);*/
