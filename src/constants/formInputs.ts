export const loginForm = [
  { name: 'username', label: 'username', type: 'string' },
  { name: 'password', label: 'password', type: 'password' },
];

export const signupForm = [
  [
    { name: 'id', label: 'id', type: 'id' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirm password', label: 'Confirm Password', type: 'confirm password' },
    // { name: 'email', label: 'email'}
    { name: 'phone', label: 'Phone', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' },
  ],
];