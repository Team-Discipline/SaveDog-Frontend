export const loginForm = [
  {name: '아이디', label: '아이디', type: 'id'},
  {name: '비밀번호', label: '비밀번호', type: 'password'},
]

export const signupForm = [
  [
    {name: 'id', label: 'id', type: 'id'},
    {name: 'password', label: 'Password', type: 'password'},
  ],
  [
    {name: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'},
  ],
  [
    {name: 'confirm password', label: 'Confirm Password', type: 'confirm password'},
  ]
]