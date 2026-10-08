import { cp } from 'node:fs/promises';

await cp("src/urls", "dist/urls", {
	recursive: true
})