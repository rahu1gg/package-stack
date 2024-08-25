// export package functions

import type { GreetUser } from './types';

export function greetUser({ name }: GreetUser): string {
  const greeting = `Hello ${name}!`;
  console.log(greeting);

  return greeting;
}
