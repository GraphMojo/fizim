import { readFile } from 'node:fs/promises';
import type { LinkData } from '../types/url.d.ts';


export async function readJSONFile(file: string): Promise<LinkData|null>{

	try{
		const data = await readFile(`./urls/${file}.json`, 'utf-8');
		const jsonData = JSON.parse(data) as LinkData;
		return jsonData;
	}
	catch(e: any){
		if(e.code && e.code === 'ENOENT'){
			return null;
		}
	}
	finally{
		return null;
	}
}