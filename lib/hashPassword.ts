import bcrypt from "bcrypt";

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("비밀번호 검증 오류:", error);
    return false;
  }
}
