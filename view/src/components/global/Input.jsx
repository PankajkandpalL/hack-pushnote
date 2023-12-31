import { Input } from "@material-tailwind/react";

export function InputIcon({ label, icon, cb, userInfo }) {
  return (
    <div className="w-[100%] p-2  ">
      <Input
        label={label}
        icon={icon()}
        size={"lg"}
        onChange={(e) => cb(e)}
        name={label}
        value={userInfo[label]}
      />
    </div>
  );
}
