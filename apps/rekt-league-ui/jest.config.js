module.exports = {
  name: 'rekt-league-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rekt-league-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
