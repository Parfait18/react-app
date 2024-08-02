import { useMemo, useState } from "react";
import Input from "./forms/Input";
import Checkbox from "./forms/Checkbox";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const security = useMemo(() => {
    return checkPasswordStrength(password);
  }, [password]);

  const random = useMemo(() => {
    return Math.random();
  }, []);
  return (
    <div className="p-4 w-96">
      <p> Random value : {random}</p>
      <Input
        name={"username"}
        label={"Username"}
        placeholder={"Edit uername"}
        value={username}
        onChange={setUsername}
      />
      <Input
        name={"password"}
        label={"Password"}
        placeholder={"Edit Password"}
        value={password}
        type={showPassword ? "text" : "password"}
        onChange={setPassword}
      />
      <p className="text-gray-400 text-sm italic">
        Security : <span className="text-blue-700 text-bold">{security}</span>{" "}
      </p>
      <Checkbox
        label={"Show Password"}
        checked={showPassword}
        id={"Show Password"}
        onChange={setShowPassword}
      />
    </div>
  );
}

function checkPasswordStrength(password: string) {
  let score = 0;

  // Criteria checks
  const lengthCriteria = password.length >= 8;
  const lowercaseCriteria = /[a-z]/.test(password);
  const uppercaseCriteria = /[A-Z]/.test(password);
  const digitCriteria = /[0-9]/.test(password);
  const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Increase score based on criteria met
  if (lengthCriteria) score++;
  if (lowercaseCriteria) score++;
  if (uppercaseCriteria) score++;
  if (digitCriteria) score++;
  if (specialCharCriteria) score++;

  // Determine strength based on score
  if (score === 0) {
    return "Very Weak";
  } else if (score === 1) {
    return "Weak";
  } else if (score === 2) {
    return "Medium";
  } else if (score === 3) {
    return "Strong";
  } else if (score === 4) {
    return "Very Strong";
  } else {
    return "Extremely Strong";
  }
}

export default Login;
