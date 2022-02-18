import { defineConfig ,loadEnv} from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig((env)=>{
    // env 环境变量
    const viteEnv = loadEnv(env.mode, `.env.${env.mode}`);
  return {
    base: viteEnv.VITE_BASE,
     // 别名设置
     resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
      },
    },
    plugins: [
      vue(),
      WindiCSS(),
      AutoImport({
        dts: './src/auto-imports.d.ts',
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      }),
      Components({
        dts: './src/components.d.ts',
        // imports 指定组件所在位置，默认为 src/components
        dirs: ['src/components/'],
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver()]
      }),
    ]
  }
  
})
