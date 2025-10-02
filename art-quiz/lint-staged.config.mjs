/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.css': ['stylelint --fix', 'prettier --write --ignore-unknown'],
  '*.ts': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '!(*.css|*.ts)': ['prettier --write --ignore-unknown'],
};
