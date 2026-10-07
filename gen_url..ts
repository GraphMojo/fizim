import crypto from 'crypto';
import fs from 'fs';

function generateShortURL(): string{
	const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let shortURL =  Array.from({length: 5}, () => allowedChars[crypto.randomInt(allowedChars.length)]).join('');

	if(is_exist(shortURL)){
		return generateShortURL();
	}
	return shortURL;
}

function is_exist(shortURL: string): boolean{
	if(fs.existsSync(`./urls/${shortURL}.json`)){
		return true;
	}
	return false;
}

export function generateNewURL(): boolean{

	const url = generateNewURL();
	const template = `{
		"shortURL": ${url},
		"targetURL": "",
		"author": "",
		"is_retargeting_enabled": false,
		"ga_ID": ""
	}`

	try{
		fs.writeFileSync(`./urls/${url}.json`, template, 'utf-8');
		return true;
	}
	catch(e: any){
		return false;
	}
}