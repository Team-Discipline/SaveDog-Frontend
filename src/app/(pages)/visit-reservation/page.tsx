'use client'
import React, { useState } from "react";
import ReusableForm from "@/components/Form";

const Page = () => {
  //이름
  //연락처
  //방문 희망 지점(거주지)
  //방문 희망 날짜(콤보박스)
  //희망하는 동물(콤보박스) - 강아지, 고양이
  //반려동물 키워본 경험(콤보박스) - 유무
  //가장 우려하는 사항(체크박스) - 털빠짐, 크기, 운동략, 배변훈력, 짖음(소음), 기타
  //주거형태(체크박스) - 아파트, 단독주택, 원룸~투룸, 기타,
  //가족 구성원(체크박스)- 1인, 신혼, 3~4인, 5인이상, 기타
  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log('Form submitted with data:', formData);
    // 여기서 데이터를 처리하거나 상태를 업데이트할 수 있음
  };

  const formInputs = [
    { name: 'name', label: '이름', type: 'text' },
    { name: 'contact', label: '연락처', type: 'tel'},
    { name: 'residence', label: '방문 희망 지점', type: 'text'},
    // 다른 필요한 input들을 추가할 수 있음
  ];

  const comboBoxes = [
    { name: 'desiredAnimal', label: '희망하는 동물', options: ['강아지', '고양이'] },
    { name: 'petExperience', label: '반려동물 키워본 경험', options: ['유', '무'] },
  ]

  const checkboxes = [
    { name: 'concerns', label: '가장 우려하는 사항', options: ['털빠짐', '크기', '운동량', '배변훈련', '짖음(소음)', '기타'] },
    { name: 'residenceType', label: '주거형태', options: ['아파트', '단독주택', '원룸~투룸', '기타'] },
    { name: 'familyMembers', label: '가족 구성원', options: ['1인', '신혼', '3~4인', '5인이상', '기타'] },
  ];

  const datePickers = [
    { name: 'date', label: '날짜' , date: '2023-04-01'},
  ]

  return (
    <div>
      <ReusableForm inputs={formInputs} datePicker={datePickers} comboBox={comboBoxes} checkbox={checkboxes} onSubmit={handleFormSubmit} />
    </div>
  );
};
export default Page;