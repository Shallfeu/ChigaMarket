export function generateAuthError(message: string) {
  switch (message) {
    case "EMAIL_NOT_FOUND":
      return "This email doesn't exist";

    case "INVALID_PASSWORD":
      return "Invalid password";

    case "EMAIL_EXISTS":
      return "User with this email already exists";

    case "INVALID_DATA":
      return "Invalid email or password";

    default:
      return "Too many attempts, try it later";
  }
}
