import Fastify from "fastify";
import { readJSONFile } from "./helper/readFile.js";
import type { LinkData } from "./types/url.js";
import { notFound, redirectWithRetargetting, serverError } from "./helper/templates.js";

const app = Fastify({
	logger: true
});

app.get('/:shortURL', function(req: any, repl: any){
	if(typeof req.params.shortURL != 'string' || req.params.shortURL.length < 3){
		return repl.code(500).type("text/html").send(serverError);
	}
	readJSONFile(req.params.shortURL).then((jsonData: LinkData | null) => {
		if(!jsonData || typeof jsonData != typeof {} || !jsonData.targetURL || jsonData.targetURL == ''){
			return repl.code(404).type("text/html").send(notFound);
		}
		else
		if(jsonData.is_retargeting_enabled && jsonData.ga_ID && jsonData.ga_ID !== ''){
			const response: string = redirectWithRetargetting(jsonData.ga_ID, jsonData.targetURL);
			return repl.code(200).type("text/html").send(response);
		}
		else{
			return repl.redirect(302, jsonData.targetURL);
		}
	})
})