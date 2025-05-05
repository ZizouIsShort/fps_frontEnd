import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }),
});
