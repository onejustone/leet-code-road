import util from 'util';

export const stdOutInfo = (info: any) => console.log(util.inspect(info, false, null, true));
// export const flatArray = (arr: []) => arr.reduce((acc: [], cur:[]) => ([...acc, ...cur]), []);
