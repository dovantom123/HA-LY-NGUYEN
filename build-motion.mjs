import {build} from 'esbuild';
await build({entryPoints:['src/animate-v2.jsx'],bundle:true,minify:true,format:'iife',target:['es2020'],outfile:'assets/animate-v2.js',define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
