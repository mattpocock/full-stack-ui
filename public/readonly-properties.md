```ts
type User = {
	id: number;
	name: string;
};
```

```ts
const updateUser = (user: User) => {
	// This should error!
	user.id = 1;
};
```

```ts
type User = {
	readonly id: number;
	name: string;
};
```

```ts
const updateUser = (user: User) => {
	// Now, it errors!
	user.id = 1;
};
```
