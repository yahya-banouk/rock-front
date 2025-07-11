import { Switch } from 'antd';

export function AuthToggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
      <Switch checked={checked} onChange={onChange} />
      <span>I’m new (sign up)</span>
    </div>
  );
}
