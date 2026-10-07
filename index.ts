import Fastify from "fastify";

const app = Fastify({
	logger: true
});

app.get('/:id', function(req: any, repl: any){
	
})