```ts
// First, declare a User type
type User = {
	id: number;
	name: string;
	email: string;
};
```

```ts
// Next, remove 'id' from
// User using Omit
type WithoutId = Omit<User, 'id'>;
```

```ts
// Results in this type:
type WithoutId = {
	name: string;
	email: string;
};
```
