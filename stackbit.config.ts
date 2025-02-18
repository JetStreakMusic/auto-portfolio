import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from './.stackbit/models';

const config = defineStackbitConfig({
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [
            {
              name: "Page",
              // Define the model as a page model
              type: "page",
              urlPath: "/{slug}",
              filePath: "content/pages/{slug}.md",
              fields: [{ name: "title", type: "string", required: true }]
            }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    modelExtensions: [
        { name: "page", type: "page", urlPath: "/{slug}" },
        { name: "post", type: "page", urlPath: "/blog/{slug}" }
    ],
    presetSource: {
        type: 'files',
        presetDirs: ['./.stackbit/presets']
    },
    styleObjectModelName: 'ThemeStyle'
});
export default config;
