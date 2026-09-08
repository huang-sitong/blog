// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://huang-sitong.github.io',
    // 仓库改名为 blog 后，GitHub Pages 项目站点的访问路径为 /blog/
    base: '/blog/'
});
