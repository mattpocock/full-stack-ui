```ts
// Omit works on objects
type User = {
	id: number;
	name: string;
	age: number;
};

type UserWithoutId = Omit<User, 'id'>;
```

```ts
// Exclude works on unions
type Union = 'a' | 'b' | 'c' | 123 | 456;

type UnionWithoutNumbers = Exclude<Union, number>;
```
