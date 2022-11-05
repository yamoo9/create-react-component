const fs = require('node:fs');
const { resolve } = require('node:path');
const defaultParams = require('./_defaultParams');
const getUserParams = require('./_getUserParams');
const removeCwdPath = require('./_removeCwdPath');
const { deleteTag } = require('./_tags');

let { location } = defaultParams;
let { name } = getUserParams();

if (!name) {
  console.error('[🚨 오류] --name=컴포넌트_이름 옵션 설정이 필요합니다.');
  process.exit();
}

let dirPath = resolve(`${location}/${name}`);

if (fs.existsSync(dirPath)) {
  fs.rmSync(dirPath, { recursive: true });
  console.log(
    deleteTag(`${removeCwdPath(dirPath)} 디렉토리가 삭제되었습니다.`)
  );
}
