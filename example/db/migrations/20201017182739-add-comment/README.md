# Migration `20201017182739-add-comment`

This migration has been generated by Nicolas Torres at 10/17/2020, 8:27:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "text" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201017181715-initial-migration..20201017182739-add-comment
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -35,4 +35,11 @@
   antiCSRFToken      String?
   publicData         String?
   privateData        String?
 }
+
+model Comment {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  text      String
+}
```