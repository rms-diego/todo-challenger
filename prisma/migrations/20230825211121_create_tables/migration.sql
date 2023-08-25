-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL,
    "hero" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isConclude" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "todosId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_todosId_fkey" FOREIGN KEY ("todosId") REFERENCES "todos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
