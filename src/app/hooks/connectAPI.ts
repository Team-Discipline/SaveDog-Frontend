export async function connectAPI(props: Record<string, string>) {
  try {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: props.username,
        password: props.password
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Login successful:', data);
      // 로그인 성공 처리
    } else {
      // 서버 에러 처리
      console.error('Login failed:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

