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

const url = generateShortURL();
const template = `{
	"shortURL": "${url}",
	"targetURL": "",
	"owner_github_username": "",
	"is_retargeting_enabled": false,
	"ga_ID": ""
}`;
try {
	fs.writeFileSync(`./urls/${url}.json`, template, 'utf-8');
	console.log(`Succesfully generated urls/${url}.json. Please update with the details`)
}
catch (e) {
	console.error("Failed to create short url. Please try again.")
}