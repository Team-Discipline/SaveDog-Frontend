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
//     { name: 'name', label: '이름', type: 'text' },
//     { name: 'contact', label: '연락처', type: 'tel'},
//     // 다른 필요한 input들을 추가할 수 있음
//   ];
//
//   // const comboBoxes = [
//   //   { name: 'desiredAnimal', label: '희망하는 동물', options: ['강아지', '고양이'] },
//   //   { name: 'petExperience', label: '반려동물 키워본 경험', options: ['유', '무'] },
//   // ]
//   //
//   // const checkboxes = [
//   //   { name: 'concerns', label: '가장 우려하는 사항', options: ['털빠짐', '크기', '운동량', '배변훈련', '짖음(소음)', '기타'] },
//   //   { name: 'residenceType', label: '주거형태', options: ['아파트', '단독주택', '원룸~투룸', '기타'] },
//   //   { name: 'familyMembers', label: '가족 구성원', options: ['1인', '신혼', '3~4인', '5인이상', '기타'] },
//   // ];
//   //
//   // const datePickers = [
//   //   { name: 'date', label: '날짜' , date: '2023-04-01'},
//   // ]
//
//   return (
//     <div>
//       {/*필요시 밑에 추가*/}
//       {/*datePicker={datePickers} comboBox={comboBoxes} checkbox={checkboxes}*/}
//       <ReusableForm inputs={formInputs}  onSubmit={handleFormSubmit} formName={} />
//     </div>
//   );
// };
// export default Page;