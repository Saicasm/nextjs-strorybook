"use client";

import Button from "@/components/Button/Button";
import { useState } from "react";
import Card from "@/components/Card/Card";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme("dark");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary  dark:bg-dark-bg-primary bg-opacity-90 text-light-text-primary dark:text-dark-text-primary">
      <Card
        title="Sample Card Title"
        description="This is a sample card component."
        imageUrl="https://as2.ftcdn.net/v2/jpg/05/08/37/21/1000_F_508372195_H9K3KIdsqlVMDgPd0ENTa8TUXuq9L9jF.jpg"
        className="bg-light-accent-primary  dark:bg-dark-accent-primary"
      />
      <Button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        variant="primary"
      >
        Primary Button
      </Button>
      <Button onClick={handleClick} variant="secondary">
        Secondary Button
      </Button>
    </main>
  );
}
