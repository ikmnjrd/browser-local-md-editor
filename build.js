require('esbuild').build({
  entryPoints: ['index.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'dist/out.js',
})

