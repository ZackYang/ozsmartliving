import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";

export function hashString(string: string) {
  const salt = genSaltSync(10)
  const hash = hashSync(string, salt)
  return hash
}

export function compareHash(string: string, hash: string) {
  return compareSync(string, hash)
}