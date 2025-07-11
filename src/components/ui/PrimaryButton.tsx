import { Button } from 'antd';

export function PrimaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <Button type="primary" size="large" block onClick={onClick}>
      {text}
    </Button>
  );
}