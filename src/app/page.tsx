"use client";

import Image from "next/image";
import Button from "@/components/Button/Button";
import CustomSelect from "@/components/Select/Select";
import { useState } from "react";
import Card from "@/components/Card/Card";

export default function Home() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (value: any) => {
    setSelectedOption(value);
  };
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary bg-opacity-90'>
      <Card
        title='Sample Card Title'
        description='This is a sample card component.'
        className='bg-light-accent-primary '
      />
      <Button onClick={handleClick} variant='primary'>
        Primary Button
      </Button>
      <Button onClick={handleClick} variant='secondary'>
        Secondary Button
      </Button>
      {/* <Button onClick={handleClick} className='bg-blue-500'>
        Custom variant Button
      </Button> */}
      {/* <div>
        <CustomSelect
          options={options}
          onChange={handleChange}
          placeholder='Select an option'
          className='border-red-500 dark:accent-primary' // Example of additional Tailwind classes for customization
        />
      </div> */}
    </main>
  );
}
