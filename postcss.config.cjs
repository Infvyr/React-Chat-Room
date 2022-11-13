module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ["advanced",{"discardComments": {"removeAll": true}}]
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
