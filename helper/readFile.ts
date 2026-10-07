import fs from 'fs';
import type { URL } from '../types/url.d.ts';

const files = fs.promises;

async function readJSONFile(file: string): Promise<URL|null>{

	try{
		const data = await files.readFile(`./urls/${file}.json`, 'utf-8');
		const jsonData = JSON.parse(data) as URL;
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