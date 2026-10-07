import Fastify from "fastify";
import { readJSONFile } from "./helper/readFile.js";
import type { LinkData } from "./types/url.js";

const app = Fastify({
	logger: true
});

app.get('/:shortURL', function(req: any, repl: any){
	readJSONFile(req.params.shortURL).then((jsonData: LinkData | null) => {
		if(!jsonData){
			return 404;
		}
		if(jsonData.is_retargeting_enabled){
			
		}
	})
})