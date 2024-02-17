```ts
type Options = {
	useIframe: boolean;
	useShadowDom: boolean;
	useShadowDomV1: boolean;
};
``` 

```ts
// Lots of duplication!
type PartialOptions = {
	useIframe?: boolean;
	useShadowDom?: boolean;
	useShadowDomV1?: boolean;
};
```

```ts
// No more duplication, and the types
// stay in sync with each other.
type PartialOptions = Partial<Options>;
```
