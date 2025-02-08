function printName(name: string | null | undefined): void {
  if (name === undefined) {
    console.log('Hello, there!'); //Handle undefined case 
    return;
  }
  console.log(`Hello, ${name}`);
}

printName(null);
printName(undefined);
printName("Alice");