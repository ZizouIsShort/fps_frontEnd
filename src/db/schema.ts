import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: varchar("id", { length : 255 }).primaryKey(),
    username: varchar("username", { length : 255 }).unique().notNull(),
    email: varchar("email", { length : 255 }).unique().notNull(),
    password: varchar("password", { length : 255 }).notNull(),
});
