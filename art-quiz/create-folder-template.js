const fs = require('fs');
const path = require('path');

const folderName = process.argv[2];

if (!folderName) {
  throw new Error('Ошибка: укажите имя папки.');
}

const folderPath = path.join(__dirname, './src/components', folderName);

if (fs.existsSync(folderPath)) {
  console.warn(`Папка ${folderName} уже существует.`);
} else {
  fs.mkdirSync(folderPath, { recursive: true });
}

const cssFile = path.join(folderPath, `${folderName}.css`);
const tsFile = path.join(folderPath, `${folderName}.ts`);

const cssContent = `.${folderName.toLowerCase()} {
  /* Styles for ${folderName} */
}`;

fs.writeFileSync(cssFile, cssContent, { encoding: 'utf8' });

const pascalCaseName = kebabToPascal(folderName);

const tsTemplate = `
import style from './${folderName}.css'

export class ${pascalCaseName} extends Component<'div'>{
  constructor(){
    super({tag: 'div', className: style['${folderName}']})
  }
}
`.trimStart();

fs.writeFileSync(tsFile, tsTemplate, { encoding: 'utf8' });

console.log(`Папка и файлы успешно созданы: ${folderName}`);

function kebabToPascal(string) {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
