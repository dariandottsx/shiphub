"use client";

export default function Hi() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Hey Rishi! 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to my Next.js application.
        </p>
      </main>
    </div>
  );
}
