import util from 'util';

export const stdOutInfo = (info: any) => console.log(util.inspect(info, false, null, true));
