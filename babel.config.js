module.exports =  {
  "presets": [
  ["@babel/preset-env", {
    "targets": {
      "node": "current",
      "browsers": ["last 2 versions"]
    },
    "useBuiltIns": "entry",
    "corejs": 3
  }]
  ],
  "plugins": [
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-class-properties"
  ]
}