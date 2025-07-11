import { Radio } from 'antd';

type Role = 'talent' | 'recruiter';

export function RoleSelector({
  value,
  onChange,
}: {
  value: Role;
  onChange: (val: Role) => void;
}) {
  return (
    <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
      <Radio.Button value="talent">Talent</Radio.Button>
      <Radio.Button value="recruiter">Recruiter</Radio.Button>
    </Radio.Group>
  );
}
