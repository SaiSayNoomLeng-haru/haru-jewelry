import { createServer, Model} from "miragejs/server";

createServer({
    models: {
        catalogue: Model,
        blogPosts: Model,
        reviews: Model,
        teams: Model,
    },

    seeds(server){
        server.create('')
    }
})