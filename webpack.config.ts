import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { buildEnv, BuildPaths } from "./config/types/config";
import path from "path";

export default (env: buildEnv) => {
    const PATHS: BuildPaths = {
        html: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, 'build'),
    }

    const mode = env.mode || "development"
    const port = env.port || 3000

    const isDev = mode === "development"

    const Сonfig: webpack.Configuration = buildWebpackConfig({
        paths: PATHS,
        mode,
        isDev,
        port,
    })

    return Сonfig
}


