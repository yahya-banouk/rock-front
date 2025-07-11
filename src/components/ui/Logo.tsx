import { Image } from 'antd';

export default function Logo() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Image
        preview={false}
        width={120}
        src="https://rocklogo.s3.us-east-1.amazonaws.com/Screenshot%202025-06-20%20at%2015.25.00.png"
        alt="App Logo"
      />
    </div>
  );
}