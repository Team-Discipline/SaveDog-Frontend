// 'use client'
// import React, { useState } from "react";
// import ReusableForm from "@/components/Form";
//
// const Page = () => {
//   const handleFormSubmit = (formData: Record<string, string>) => {
//     console.log('Form submitted with data:', formData);
//     // 여기서 데이터를 처리하거나 상태를 업데이트할 수 있음
//   };
//
//   const formInputs = [
//     { name: 'name', label: 'Name' },
//     { name: 'email', label: 'Email', type: 'email' },
//     { name: 'password', label: 'Password', type: 'password'},
//     { name: 'confirm password', label: 'Confirm Password', type: 'confirm password'},
//     { name: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'},
//     // 다른 필요한 input들을 추가할 수 있음
//   ];
//
//   return (
//     <div>
//       <ReusableForm inputs={formInputs} onSubmit={handleFormSubmit} />
//     </div>
//   );
// };
// export default Page;