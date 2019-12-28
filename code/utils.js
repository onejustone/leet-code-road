import util from 'util';
export const stdOutInfo = (info) => console.log(util.inspect(info, false, null, true));
